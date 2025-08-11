import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { GameState, Question, QuizResult } from '../types';

interface GameContextType {
  state: GameState;
  startGame: (category: string) => void;
  answerQuestion: (isCorrect: boolean) => void;
  nextQuestion: () => void;
  endGame: () => QuizResult;
  resetGame: () => void;
  retryGame: () => void;
  updateTimeRemaining: (time: number) => void;
}

const initialState: GameState = {
  currentQuestion: 0,
  score: 0,
  streak: 0,
  timeRemaining: 15,
  isGameActive: false,
  selectedCategory: null,
};

type GameAction =
  | { type: 'START_GAME'; payload: string }
  | { type: 'ANSWER_QUESTION'; payload: boolean }
  | { type: 'NEXT_QUESTION' }
  | { type: 'END_GAME' }
  | { type: 'RESET_GAME' }
  | { type: 'UPDATE_TIME'; payload: number };

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...initialState,
        isGameActive: true,
        selectedCategory: action.payload,
        timeRemaining: 15,
      };
    case 'ANSWER_QUESTION':
      const isCorrect = action.payload;
      const newScore = isCorrect ? state.score + 10 : state.score;
      const newStreak = isCorrect ? state.streak + 1 : 0;
      return {
        ...state,
        score: newScore,
        streak: newStreak,
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        timeRemaining: 15,
      };
    case 'END_GAME':
      return {
        ...state,
        isGameActive: false,
      };
    case 'RESET_GAME':
      return initialState;
    case 'UPDATE_TIME':
      return {
        ...state,
        timeRemaining: action.payload,
      };
    default:
      return state;
  }
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const startGame = (category: string) => {
    dispatch({ type: 'START_GAME', payload: category });
  };

  const answerQuestion = (isCorrect: boolean) => {
    dispatch({ type: 'ANSWER_QUESTION', payload: isCorrect });
  };

  const nextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const endGame = (): QuizResult => {
    dispatch({ type: 'END_GAME' });
    return {
      score: state.score,
      totalQuestions: 10,
      category: state.selectedCategory || 'Unknown',
      timeSpent: 0, // TODO: Implement time tracking
      date: new Date(),
    };
  };

  const resetGame = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  const retryGame = () => {
    const currentCategory = state.selectedCategory;
    dispatch({ type: 'RESET_GAME' });
    if (currentCategory) {
      dispatch({ type: 'START_GAME', payload: currentCategory });
    }
  };

  const updateTimeRemaining = (time: number) => {
    dispatch({ type: 'UPDATE_TIME', payload: time });
  };

  const value: GameContextType = {
    state,
    startGame,
    answerQuestion,
    nextQuestion,
    endGame,
    resetGame,
    retryGame,
    updateTimeRemaining,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}; 