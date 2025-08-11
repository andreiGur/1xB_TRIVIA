import { Question } from '../types';

export const questions: Question[] = [
  // Football (Soccer) Questions
  {
    id: '1',
    question: 'Who holds the record for most goals scored in a single World Cup tournament?',
    options: ['Pele', 'Just Fontaine', 'Ronaldo', 'Miroslav Klose'],
    correctAnswer: 'Just Fontaine',
    category: 'Football',
    explanation: 'Just Fontaine scored 13 goals in the 1958 World Cup'
  },
  {
    id: '2',
    question: 'Which country has won the most FIFA World Cup titles?',
    options: ['Germany', 'Argentina', 'Brazil', 'Italy'],
    correctAnswer: 'Brazil',
    category: 'Football',
    explanation: 'Brazil has won 5 World Cup titles (1958, 1962, 1970, 1994, 2002)'
  },
  {
    id: '3',
    question: 'Who is the all-time top scorer in international football?',
    options: ['Cristiano Ronaldo', 'Lionel Messi', 'Pele', 'Ali Daei'],
    correctAnswer: 'Cristiano Ronaldo',
    category: 'Football',
    explanation: 'Cristiano Ronaldo holds the record with over 120 international goals'
  },

  // Basketball Questions
  {
    id: '4',
    question: 'Who holds the Guinness record for the highest vertical dunk?',
    options: ['Zion Williamson', 'Kadour Ziani', 'Michael Jordan', 'Keenan Perry'],
    correctAnswer: 'Kadour Ziani',
    category: 'Basketball',
    explanation: 'Kadour Ziani achieved a 60-inch vertical jump'
  },
  {
    id: '5',
    question: 'Which NBA player has won the most championship rings?',
    options: ['Michael Jordan', 'Bill Russell', 'Kareem Abdul-Jabbar', 'LeBron James'],
    correctAnswer: 'Bill Russell',
    category: 'Basketball',
    explanation: 'Bill Russell won 11 NBA championships with the Boston Celtics'
  },
  {
    id: '6',
    question: 'Who holds the record for most points scored in a single NBA game?',
    options: ['Kobe Bryant', 'Wilt Chamberlain', 'Michael Jordan', 'LeBron James'],
    correctAnswer: 'Wilt Chamberlain',
    category: 'Basketball',
    explanation: 'Wilt Chamberlain scored 100 points in a game against the Knicks in 1962'
  },

  // Olympics Questions
  {
    id: '7',
    question: 'Who is the most decorated Olympian of all time?',
    options: ['Michael Phelps', 'Usain Bolt', 'Larisa Latynina', 'Carl Lewis'],
    correctAnswer: 'Michael Phelps',
    category: 'Olympics',
    explanation: 'Michael Phelps won 28 Olympic medals (23 gold, 3 silver, 2 bronze)'
  },
  {
    id: '8',
    question: 'Which country has hosted the most Olympic Games?',
    options: ['United States', 'France', 'Germany', 'United Kingdom'],
    correctAnswer: 'United States',
    category: 'Olympics',
    explanation: 'The United States has hosted 8 Olympic Games (4 Summer, 4 Winter)'
  },
  {
    id: '9',
    question: 'What is the fastest 100m sprint time ever recorded at the Olympics?',
    options: ['9.58 seconds', '9.69 seconds', '9.63 seconds', '9.81 seconds'],
    correctAnswer: '9.63 seconds',
    category: 'Olympics',
    explanation: 'Usain Bolt ran 9.63 seconds at the 2012 London Olympics'
  },

  // Women in Sports Questions
  {
    id: '10',
    question: 'Who is considered the greatest female tennis player of all time?',
    options: ['Serena Williams', 'Steffi Graf', 'Martina Navratilova', 'Margaret Court'],
    correctAnswer: 'Serena Williams',
    category: 'Women in Sports',
    explanation: 'Serena Williams has won 23 Grand Slam singles titles'
  },
  {
    id: '11',
    question: 'Which female athlete holds the world record for the 100m sprint?',
    options: ['Florence Griffith-Joyner', 'Marion Jones', 'Shelly-Ann Fraser-Pryce', 'Elaine Thompson'],
    correctAnswer: 'Florence Griffith-Joyner',
    category: 'Women in Sports',
    explanation: 'Florence Griffith-Joyner set the record of 10.49 seconds in 1988'
  },
  {
    id: '12',
    question: 'Who was the first woman to run a marathon in under 2:20?',
    options: ['Paula Radcliffe', 'Mary Decker', 'Joan Benoit', 'Grete Waitz'],
    correctAnswer: 'Paula Radcliffe',
    category: 'Women in Sports',
    explanation: 'Paula Radcliffe ran 2:17:18 in the 2002 London Marathon'
  },

  // Guinness World Records Questions
  {
    id: '13',
    question: 'What is the fastest speed ever recorded on a bicycle?',
    options: ['183.9 mph', '167.0 mph', '152.2 mph', '200.4 mph'],
    correctAnswer: '183.9 mph',
    category: 'Guinness Records',
    explanation: 'Denise Mueller-Korenek achieved this speed in 2018'
  },
  {
    id: '14',
    question: 'What is the longest tennis match ever played?',
    options: ['11 hours 5 minutes', '8 hours 11 minutes', '6 hours 33 minutes', '10 hours 15 minutes'],
    correctAnswer: '11 hours 5 minutes',
    category: 'Guinness Records',
    explanation: 'John Isner vs Nicolas Mahut at Wimbledon 2010'
  },
  {
    id: '15',
    question: 'What is the highest basketball shot ever made?',
    options: ['150 feet', '200 feet', '250 feet', '300 feet'],
    correctAnswer: '200 feet',
    category: 'Guinness Records',
    explanation: 'This record was set by a professional basketball player'
  },

  // Extreme/Weird Sports Questions
  {
    id: '16',
    question: 'What is the world record for the longest distance traveled on a pogo stick?',
    options: ['23.11 miles', '15.5 miles', '30.2 miles', '18.7 miles'],
    correctAnswer: '23.11 miles',
    category: 'Extreme Sports',
    explanation: 'This record was set in 2004'
  },
  {
    id: '17',
    question: 'What is the fastest speed achieved while riding a unicycle?',
    options: ['18.75 mph', '22.5 mph', '25.1 mph', '30.2 mph'],
    correctAnswer: '18.75 mph',
    category: 'Extreme Sports',
    explanation: 'This record was set over 100 meters'
  },
  {
    id: '18',
    question: 'What is the world record for the longest time spent juggling?',
    options: ['12 hours 5 minutes', '8 hours 45 minutes', '15 hours 30 minutes', '10 hours 12 minutes'],
    correctAnswer: '12 hours 5 minutes',
    category: 'Extreme Sports',
    explanation: 'This record was set by a professional juggler'
  }
]; 