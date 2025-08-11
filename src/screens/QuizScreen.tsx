import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { useGame } from '../context/GameContext';
import { getQuestionsByCategory } from '../utils/gameUtils';
import { Question } from '../types';
import { RootStackParamList } from '../../App';

type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;

interface QuizScreenProps {
  navigation: QuizScreenNavigationProp;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ navigation }) => {
  const { state, answerQuestion, nextQuestion, endGame } = useGame();
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    if (state.selectedCategory) {
      const questions = getQuestionsByCategory(state.selectedCategory);
      setCurrentQuestions(questions);
    }
  }, [state.selectedCategory]);

  useEffect(() => {
    if (state.isGameActive && !isAnswered) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setTimeout(() => {
              handleTimeUp();
            }, 0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [state.isGameActive, isAnswered]);

  const handleTimeUp = () => {
    setIsAnswered(true);
    setTimeout(() => {
      answerQuestion(false);
      handleNextQuestion();
    }, 3000);
  };

  const handleAnswerPress = (answer: string) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    const currentQuestion = currentQuestions[state.currentQuestion];
    const isCorrect = answer === currentQuestion.correctAnswer;
    
    setTimeout(() => {
      answerQuestion(isCorrect);
      handleNextQuestion();
    }, 3000);
  };

  const handleNextQuestion = () => {
    if (state.currentQuestion >= 9) {
      // Game finished - navigate immediately
      endGame();
      navigation.navigate('Results');
    } else {
      nextQuestion();
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimeLeft(15);
    }
  };

  if (currentQuestions.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Loading questions...</Text>
      </SafeAreaView>
    );
  }

  if (state.currentQuestion >= currentQuestions.length) {
    // Game finished - navigate to results
    setTimeout(() => {
      endGame();
      navigation.navigate('Results');
    }, 100);
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Game Complete!</Text>
      </SafeAreaView>
    );
  }

  const currentQuestion = currentQuestions[state.currentQuestion];
  const shuffledOptions = currentQuestion.options;

  const getCategoryColors = (category: string | null): [string, string] => {
    switch (category) {
      case 'football':
        return ['#4CAF50', '#2E7D32'];
      case 'basketball':
        return ['#FF9800', '#F57C00'];
      case 'olympics':
        return ['#2196F3', '#1976D2'];
      case 'women-sports':
        return ['#E91E63', '#C2185B'];
      case 'guinness-records':
        return ['#9C27B0', '#7B1FA2'];
      case 'extreme-sports':
        return ['#FF5722', '#D84315'];
      case 'random-mix':
        return ['#607D8B', '#455A64'];
      default:
        return ['#1a1a1a', '#2d2d2d'];
    }
  };

  const gradientColors = getCategoryColors(state.selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={gradientColors}
        style={styles.gradient}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.questionNumber}>
              Question {state.currentQuestion + 1}/10
            </Text>
            <Text style={styles.score}>Score: {state.score}</Text>
          </View>
          <View style={styles.timerContainer}>
            <Text style={[styles.timer, timeLeft <= 5 && styles.timerWarning]}>
              {timeLeft}s
            </Text>
          </View>
        </View>

        {/* Question */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
        </View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {shuffledOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswer === option && styles.selectedOption,
                isAnswered && option === currentQuestion.correctAnswer && styles.correctOption,
                isAnswered && selectedAnswer === option && option !== currentQuestion.correctAnswer && styles.incorrectOption,
              ]}
              onPress={() => handleAnswerPress(option)}
              disabled={isAnswered}
            >
              <Text style={[
                styles.optionText,
                selectedAnswer === option && styles.selectedOptionText,
                isAnswered && option === currentQuestion.correctAnswer && styles.correctOptionText,
                isAnswered && selectedAnswer === option && option !== currentQuestion.correctAnswer && styles.incorrectOptionText,
              ]}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Explanation */}
        {isAnswered && currentQuestion.explanation && (
          <View style={styles.explanationContainer}>
            <Text style={styles.explanationTitle}>💡 Explanation:</Text>
            <Text style={styles.explanationText}>{currentQuestion.explanation}</Text>
          </View>
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  loadingText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  header: {
    padding: 20,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  headerCenter: {
    alignItems: 'center',
  },
  questionNumber: {
    fontSize: 16,
    color: '#cccccc',
  },
  score: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  timerContainer: {
    backgroundColor: '#333333',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  timer: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  timerWarning: {
    color: '#FF5722',
  },
  questionContainer: {
    padding: 20,
    paddingTop: 40,
    flex: 1,
  },
  questionText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 28,
    fontWeight: '500',
  },
  optionsContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  optionButton: {
    backgroundColor: '#333333',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedOption: {
    borderColor: '#2196F3',
  },
  correctOption: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  incorrectOption: {
    backgroundColor: '#F44336',
    borderColor: '#F44336',
  },
  optionText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
  selectedOptionText: {
    fontWeight: 'bold',
  },
  correctOptionText: {
    fontWeight: 'bold',
  },
  incorrectOptionText: {
    fontWeight: 'bold',
  },
  explanationContainer: {
    margin: 20,
    padding: 16,
    backgroundColor: '#333333',
    borderRadius: 12,
  },
  explanationTitle: {
    fontSize: 16,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  explanationText: {
    fontSize: 14,
    color: '#cccccc',
    lineHeight: 20,
  },
});

export default QuizScreen; 