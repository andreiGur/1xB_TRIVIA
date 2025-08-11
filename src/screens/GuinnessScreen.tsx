import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Sharing from 'expo-sharing';
import { guinnessRecords } from '../data/guinnessRecords';
import { GuinnessRecord } from '../types';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';

const { width: screenWidth } = Dimensions.get('window');

type GuinnessScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Guinness'>;

interface GuinnessScreenProps {
  navigation: GuinnessScreenNavigationProp;
}

const GuinnessScreen: React.FC<GuinnessScreenProps> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShare = async (record: GuinnessRecord) => {
    const message = `🏆 Guinness World Record: ${record.title}\n\n${record.description}\n\nShared from 1 X Bet Sort Trivia App`;
    
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(message);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % guinnessRecords.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + guinnessRecords.length) % guinnessRecords.length);
  };

  const currentRecord = guinnessRecords[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1a1a1a', '#2d2d2d']}
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
            <Text style={styles.title}>Guinness World Records</Text>
            <Text style={styles.subtitle}>
              {currentIndex + 1} of {guinnessRecords.length}
            </Text>
          </View>
        </View>

        {/* Card */}
        <View style={styles.cardContainer}>
          <LinearGradient
            colors={['#9C27B0', '#673AB7']}
            style={styles.card}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardIcon}>🏆</Text>
              <Text style={styles.cardCategory}>{currentRecord.category}</Text>
            </View>
            
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{currentRecord.title}</Text>
              <Text style={styles.cardDescription}>{currentRecord.description}</Text>
            </View>

            <View style={styles.cardFooter}>
              <TouchableOpacity
                style={styles.shareButton}
                onPress={() => handleShare(currentRecord)}
              >
                <Text style={styles.shareButtonText}>📤 Share</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        {/* Navigation */}
        <View style={styles.navigation}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={handlePrevious}
            disabled={currentIndex === 0}
          >
            <Text style={styles.navButtonText}>← Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={handleNext}
          >
            <Text style={styles.navButtonText}>Next →</Text>
          </TouchableOpacity>
        </View>

        {/* Dots Indicator */}
        <View style={styles.dotsContainer}>
          {guinnessRecords.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex && styles.activeDot,
              ]}
            />
          ))}
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
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#cccccc',
  },
  cardContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    justifyContent: 'center',
  },
  card: {
    borderRadius: 20,
    padding: 24,
    minHeight: 300,
    justifyContent: 'space-between',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  cardCategory: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.8,
    fontWeight: '500',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 24,
    textAlign: 'center',
  },
  cardFooter: {
    marginTop: 20,
    alignItems: 'center',
  },
  shareButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  shareButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingBottom: 20,
  },
  navButton: {
    backgroundColor: '#333333',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  navButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#666666',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#9C27B0',
  },
});

export default GuinnessScreen; 