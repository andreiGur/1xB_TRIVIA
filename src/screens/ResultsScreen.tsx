import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { useGame } from '../context/GameContext';
import { getPerformanceMessage } from '../utils/gameUtils';
import { RootStackParamList } from '../../App';

type ResultsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Results'>;

interface ResultsScreenProps {
  navigation: ResultsScreenNavigationProp;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ navigation }) => {
  const { state, retryGame } = useGame();

  const handleRetry = () => {
    retryGame();
    navigation.navigate('Quiz');
  };

  const handleNewCategory = () => {
    retryGame();
    navigation.navigate('Category');
  };

  const score = state.score;
  const totalQuestions = 10;
  const percentage = (score / (totalQuestions * 10)) * 100;
  const performanceMessage = getPerformanceMessage(score, totalQuestions);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1a1a1a', '#2d2d2d']}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          {/* Score Display */}
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreTitle}>Quiz Complete!</Text>
            <View style={styles.scoreCircle}>
              <Text style={styles.scoreNumber}>{score}</Text>
              <Text style={styles.scoreTotal}>/ {totalQuestions * 10}</Text>
            </View>
            <Text style={styles.percentage}>{percentage.toFixed(0)}%</Text>
          </View>

          {/* Performance Message */}
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{performanceMessage}</Text>
          </View>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Category</Text>
              <Text style={styles.statValue}>{state.selectedCategory}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Best Streak</Text>
              <Text style={styles.statValue}>{state.streak}</Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.retryButton]}
              onPress={handleRetry}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#FF9800', '#F57C00']}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>Retry</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.newCategoryButton]}
              onPress={handleNewCategory}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#4CAF50', '#388E3C']}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>New Category</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
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
  header: {
    padding: 20,
    flexDirection: 'row',
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
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    justifyContent: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  scoreTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  scoreCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 4,
    borderColor: '#4CAF50',
  },
  scoreNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  scoreTotal: {
    fontSize: 18,
    color: '#cccccc',
  },
  percentage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  messageContainer: {
    backgroundColor: '#333333',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
  },
  messageText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: '#cccccc',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  retryButton: {
    marginBottom: 12,
  },
  newCategoryButton: {
    marginBottom: 12,
  },
  buttonGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default ResultsScreen; 