import {Animated, Dimensions, ScrollView, View} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './Home.styles';
import {Title} from 'react-native-paper';
import MainCard from './components/MainCard';
import ResultCard from './components/ResultCard';
import {calculate} from './components/ResultCard/ResultCard.utils';

const Home = ({}) => {
  const [result, setResult] = useState<number[]>();
  const [barWeight, setBarWeight] = useState('20');
  const [weight, setWeight] = useState('');

  const heightAnim = useRef(new Animated.Value(0)).current;

  const handleCalculate = () => {
    let plates = calculate(
      [25, 20, 15, 15, 10, 5, 2.5, 1.25, 1.25, 0.5, 0.25],
      parseFloat(barWeight),
      parseFloat(weight),
    );
    setResult(plates);

    Animated.timing(heightAnim, {
      useNativeDriver: false,
      toValue: 1,
      duration: 800,
    }).start();
  };

  const backgroundHeight = heightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['25%', '90%'],
  });

  return (
    <View style={{flexDirection: 'column'}}>
      <Animated.View style={[styles.background, {height: backgroundHeight}]} />

      <ScrollView style={styles.root} contentInsetAdjustmentBehavior="automatic">
        <Title style={styles.appName} numberOfLines={2}>
          Plate Barbell Racking Calculator
        </Title>

        <ResultCard open={!!result} weight={weight} barWeight={barWeight} result={result} />

        <MainCard style={styles.mainCard} onCalulate={handleCalculate} weight={weight} onChangeWeight={setWeight} />
      </ScrollView>
    </View>
  );
};

export default Home;
