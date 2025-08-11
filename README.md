# 1 X Bet Sort Trivia

A mobile sports trivia application built with React Native and Expo, featuring interactive quizzes and Guinness World Records.

## 🎯 Features

### Core Features
- **Sports Trivia Quizzes**: Test your knowledge across multiple sports categories
- **Guinness World Records**: Explore amazing sports world records with shareable flashcards
- **Timer-based Questions**: 15-second timer for each question
- **Score Tracking**: Track your performance with detailed scoring
- **Multiple Categories**: Football, Basketball, Olympics, Women in Sports, and more

### Categories
- ⚽ Football (Soccer)
- 🏀 Basketball
- 🏅 Olympics
- 👩‍💪 Women in Sports
- 📚 Guinness Records
- 🤸 Extreme / Weird Sports
- 🎲 Random Mix

### Game Mechanics
- **Scoring System**: 10 points per correct answer
- **Streak Bonuses**: Bonus points for consecutive correct answers
- **Visual Feedback**: Green/red indicators for correct/incorrect answers
- **Explanations**: Learn from detailed explanations after each question

## 🛠️ Technology Stack

- **Framework**: React Native
- **SDK**: Expo SDK 53
- **Navigation**: React Navigation v6
- **State Management**: React Context API
- **UI Components**: Custom components with LinearGradient
- **Sharing**: Expo Sharing API

## 📱 Screens

1. **Category Selection**: Choose from different sports categories
2. **Quiz Screen**: Interactive questions with timer and visual feedback
3. **Results Screen**: Score summary with performance messages
4. **Guinness Records**: Swipeable flashcards with sharing functionality

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 1XBetSortTrivia
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on device/simulator**
   ```bash
   # For iOS
   npm run ios
   
   # For Android
   npm run android
   
   # For web
   npm run web
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── context/            # React Context for state management
├── data/               # Static data (questions, records, categories)
├── screens/            # Main application screens
├── types/              # TypeScript type definitions
└── utils/              # Utility functions and helpers
```

## 🎨 Design System

- **Color Scheme**: Dark theme with vibrant accent colors
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth transitions and visual feedback
- **Icons**: Emoji-based icons for categories

## 🔧 Configuration

### App Configuration
- Dark mode enabled by default
- Portrait orientation only
- Optimized for mobile devices

### Data Structure
The app uses static JSON data for MVP, with plans to integrate Firebase or Supabase for dynamic content.

## 🚀 Future Features

- [ ] Daily trivia push notifications
- [ ] Multiplayer quiz battles
- [ ] Custom quiz creation
- [ ] Weekly challenges & leaderboards
- [ ] User profiles with statistics
- [ ] Achievement system
- [ ] Social sharing integration
- [ ] Offline mode support

## 📊 Performance

- Optimized for smooth 60fps animations
- Efficient state management with Context API
- Minimal bundle size with tree shaking
- Fast app startup with Expo

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository.

---

**Built with ❤️ using React Native and Expo** 