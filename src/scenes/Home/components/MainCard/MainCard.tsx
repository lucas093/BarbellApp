import {Card} from 'react-native-paper';
import {View} from 'react-native';
import GradientButton from '../../../../components/GradientButton';
import React, {FC, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextInput from '../../../../components/TextInput';
import styles from './MainCard.styles';
import PlatesConfigView from './components/PlatesConfigView';

interface Props {
  style?: any;
  onCalulate: () => void;
  onChangeWeight: (weight: string) => void;
  weight: string;
}

const MainCard: FC<Props> = ({style, weight, onChangeWeight, onCalulate}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Card style={[style, styles.root]}>
      <Card.Title
        titleNumberOfLines={3}
        subtitleNumberOfLines={2}
        title="Calculate the plates you need to load on your barbell"
        subtitle="Enter the lift you want to perform"
      />

      <Card.Content>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.weightInput}
            keyboardType="numeric"
            placeholder="Total lift (kg)"
            onChangeText={text => onChangeWeight(text)}
            value={`${weight || ''}`}
            dense
          />

          <GradientButton innerStyle={styles.calculateButtonInner} onPress={onCalulate}>
            <Icon size={15} name="calculator" color="#FFF" />
          </GradientButton>
        </View>

        <PlatesConfigView isCollapsed={isCollapsed} onPress={() => setIsCollapsed(!isCollapsed)} />
      </Card.Content>
    </Card>
  );
};

export default MainCard;
