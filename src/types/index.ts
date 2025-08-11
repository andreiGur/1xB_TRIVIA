export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  category: string;
  explanation?: string;
}

export interface GuinnessRecord {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  category: string;
  timeSpent: number;
  date: Date;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface GameState {
  currentQuestion: number;
  score: number;
  streak: number;
  timeRemaining: number;
  isGameActive: boolean;
  selectedCategory: string | null;
} 