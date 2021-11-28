import React, {FC, useEffect, useRef} from 'react';
import {Text, Animated, Easing, StyleSheet, View} from 'react-native';
import {getPlateStyle} from '../ResultCard.utils';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    backgroundColor: '#636B61',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weight: {
    color: 'white',
    fontSize: 10,
  },
});

interface Props {
  style?: any;
  weight?: number;
  delay: number;
}

const Plate: FC<Props> = ({delay, weight, style}) => {
  let plateStyle = getPlateStyle(weight);
  const moveAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(moveAnim, {
      useNativeDriver: true,
      easing: Easing.elastic(0.4), //Easing.out(Easing.ease),
      delay: 100 + delay,
      toValue: 0,
      duration: 1000,
    }).start();
  }, []);

  const translateX = moveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 500],
  });

  return (
    <Animated.View style={[styles.root, style, plateStyle, {transform: [{translateX}]}]}>
      <Text style={styles.weight}>{weight}</Text>
    </Animated.View>
  );
};

export default Plate;
