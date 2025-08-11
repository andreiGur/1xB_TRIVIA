import { Question, Category } from '../types';
import { questions } from '../data/questions';
import { categories } from '../data/categories';

export const getQuestionsByCategory = (categoryId: string): Question[] => {
  if (categoryId === 'random-mix') {
    // Return random questions from all categories
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, 10);
    
    // Shuffle options for each question
    return selectedQuestions.map(question => ({
      ...question,
      options: shuffleArray(question.options)
    }));
  }

  const categoryMap: { [key: string]: string } = {
    'football': 'Football',
    'basketball': 'Basketball',
    'olympics': 'Olympics',
    'women-sports': 'Women in Sports',
    'guinness-records': 'Guinness Records',
    'extreme-sports': 'Extreme Sports',
  };

  const categoryName = categoryMap[categoryId];
  if (!categoryName) return [];

  const filteredQuestions = questions
    .filter(q => q.category === categoryName)
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);
  
  // Shuffle options for each question
  return filteredQuestions.map(question => ({
    ...question,
    options: shuffleArray(question.options)
  }));
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id);
};

export const getAllCategories = (): Category[] => {
  return categories;
};

export const getPerformanceMessage = (score: number, totalQuestions: number): string => {
  const percentage = (score / (totalQuestions * 10)) * 100;
  
  if (percentage >= 90) return "🏆 Amazing! You're a sports genius!";
  if (percentage >= 80) return "🎯 Excellent! You really know your sports!";
  if (percentage >= 70) return "👍 Great job! You have solid sports knowledge!";
  if (percentage >= 60) return "😊 Good effort! Keep learning!";
  if (percentage >= 50) return "🤔 Not bad! Room for improvement!";
  return "📚 Keep studying! Practice makes perfect!";
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}; 