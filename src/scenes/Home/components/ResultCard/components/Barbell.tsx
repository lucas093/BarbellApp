import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getPlateSpacingStyle} from '../ResultCard.utils';
import Plate from './Plate';

const PLATE_START = 75;
const styles = StyleSheet.create({
  root: {
    position: 'relative',
    height: '100%',
  },
  bar: {
    position: 'absolute',
    top: '50%',
    marginTop: -(15 / 2),
    width: '100%',
    height: 15,
    borderRadius: 2,
    backgroundColor: '#C4C4C4',
  },
  start: {
    position: 'absolute',
    top: '50%',
    marginTop: -(60 / 2),
    left: PLATE_START,
    width: 15,
    height: 60,
    borderRadius: 2,
    backgroundColor: '#C4C4C4',
  },
});

interface Props {
  plates: number[];
}

const Barbell: FC<Props> = ({plates}) => {
  if (plates.length > 10) {
    return <Text>Can't display more than 10 plates</Text>;
  }

  return (
    <View style={styles.root}>
      <View style={styles.bar} />
      <View style={styles.start} />

      {plates.map((plateWeight, index) => {
        let spacingStyle = getPlateSpacingStyle(plates, PLATE_START, index);
        return <Plate key={`${plateWeight}-${index}`} delay={index * 200} weight={plateWeight} style={spacingStyle} />;
      })}
    </View>
  );
};

export default Barbell;
