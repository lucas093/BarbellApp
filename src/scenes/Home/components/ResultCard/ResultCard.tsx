import {Card, Text, Title} from 'react-native-paper';
import React, {FC, memo, useCallback, useEffect, useRef, useState} from 'react';
import styles from './ResultCard.styles';
import {Animated, View} from 'react-native';
import {calculate, plurify} from './ResultCard.utils';
import Barbell from './components/Barbell';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  style?: any;
  weight?: string;
  barWeight?: string;
  open?: boolean;
  result?: number[];
}

const ResultCard: FC<Props> = ({result, barWeight, weight, style, open}) => {
  const openingAnim = useRef(new Animated.Value(0)).current;
  const [plates, setPlates] = useState<number[]>([]);

  useEffect(() => {
    setPlates(
      (result || []).reduce((stack, value) => {
        stack[`${value}`] = (stack[`${value}`] || 0) + 1;

        return stack;
      }, []),
    );
  }, [result]);

  useEffect(() => {
    if (open) {
      Animated.timing(openingAnim, {
        useNativeDriver: false,
        duration: 500,
        toValue: 1,
      }).start();
    } else {
      Animated.timing(openingAnim, {
        useNativeDriver: false,
        duration: 500,
        toValue: 0,
      }).start();
    }
  }, [open]);

  const heightAnim = openingAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const getSideWeightTotal = useCallback(() => {
    return (result || []).reduce((previousValue, currentValue) => currentValue + previousValue, 0);
  }, [result]);

  const missingWeight = parseFloat(weight || '0') - (parseFloat(barWeight || '0') + getSideWeightTotal() * 2);

  return (
    <Animated.View
      style={[
        style,
        styles.root,
        {
          opacity: openingAnim,
          maxHeight: heightAnim,
        },
      ]}>
      <Title style={styles.title}>PLATES CALCULATED</Title>
      <Text style={styles.textLight}>
        You can make
        <Text style={styles.textBold}> {weight} kg </Text>
        from
        <Text style={styles.textBold}>
          {' '}
          {result?.length || 0} {plurify('plate', result?.length)}{' '}
        </Text>
        each side plus the bar weight of
        <Text style={styles.textBold}>{' ' + barWeight} kg</Text>
      </Text>

      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.barbellCanvas}>
            <Barbell plates={result || []} />
          </View>

          <View style={styles.textualResult}>
            <Text style={{fontWeight: 'bold'}}>{getSideWeightTotal()}kg / side</Text>
            {Object.keys(plates || [])
              .sort((a, b) => parseInt(b) - parseInt(a))
              .map(weight => (
                <Text key={weight}>{`${plates[weight]} * ${weight}kg`}</Text>
              ))}

            {missingWeight > 0 && (
              <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <Icon size={15} name="close" color="#F00" />
                <Text style={styles.error}>{missingWeight.toFixed(2)}kg</Text>
              </View>
            )}
          </View>
        </Card.Content>
      </Card>
    </Animated.View>
  );
};

export default memo(ResultCard, (prevProps, nextProps) => prevProps.result === nextProps.result);
