import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { useGame } from '../context/GameContext';
import { getAllCategories } from '../utils/gameUtils';
import { Category } from '../types';
import { RootStackParamList } from '../../App';

type CategoryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Category'>;

interface CategoryScreenProps {
  navigation: CategoryScreenNavigationProp;
}

const CategoryScreen: React.FC<CategoryScreenProps> = ({ navigation }) => {
  const { startGame } = useGame();
  const categories = getAllCategories();

  const handleCategoryPress = (category: Category) => {
    startGame(category.id);
    navigation.navigate('Quiz');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1a1a1a', '#2d2d2d']}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>1 X Trivia Sport </Text>
            <Text style={styles.subtitle}>Choose a Sports Category</Text>
          </View>
        </View>

        <ScrollView style={styles.categoriesContainer} showsVerticalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryCard}
              onPress={() => handleCategoryPress(category)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={[category.color, `${category.color}80`]}
                style={styles.categoryGradient}
              >
                <View style={styles.categoryContent}>
                  <Text style={styles.categoryIcon}>{category.icon}</Text>
                  <View style={styles.categoryText}>
                    <Text style={styles.categoryName}>{category.name}</Text>
                    <Text style={styles.categoryDescription}>
                      {category.description}
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
          
          {/* Guinness Records Button */}
          <TouchableOpacity
            style={styles.guinnessButton}
            onPress={() => navigation.navigate('Guinness')}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#9C27B0', '#673AB7']}
              style={styles.guinnessGradient}
            >
              <View style={styles.categoryContent}>
                <Text style={styles.categoryIcon}>🏆</Text>
                <View style={styles.categoryText}>
                  <Text style={styles.categoryName}>Guinness Records</Text>
                  <Text style={styles.categoryDescription}>
                    Explore amazing sports world records
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
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
    paddingTop: 40,
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#cccccc',
    textAlign: 'center',
  },
  categoriesContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  categoryCard: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  categoryGradient: {
    padding: 20,
  },
  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 40,
    marginRight: 16,
  },
  categoryText: {
    flex: 1,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.9,
  },
  guinnessButton: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  guinnessGradient: {
    padding: 20,
  },
});

export default CategoryScreen; 