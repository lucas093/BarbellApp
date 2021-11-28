import {Pressable, View} from 'react-native';
import {Caption, Text} from 'react-native-paper';
import CollapseIcon from '../CollapseIcon';
import Collapsible from 'react-native-collapsible';
import SubTitle from '../../../../../../components/SubTItle';
import TextInput from '../../../../../../components/TextInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GradientButton from '../../../../../../components/GradientButton';
import React, {FC, useState} from 'react';
import styles from './PlatesConfigView.styles';
import NewPlateDialog from '../NewPlateDialog';
import PlateDialog from '../PlateDialog';

interface Props {
  isCollapsed?: boolean;
  onPress: () => void;
}

const PlatesConfigView: FC<Props> = ({isCollapsed, onPress}) => {
  const [isNewPlateDialogOpen, setIsNewPlateDialogOpen] = useState(false);
  const [plateToEdit, setPlateToEdit] = useState<string>();
  const [barWeight, setBarWeight] = useState('20');
  const [plates, setPlates] = useState({
    '20': 2,
    '10': 2,
    '5': 4,
    '2.5': 2,
    '1.25': 2,
  });

  const handleAddPlates = (plate: string) => {
    setPlates({...plates, [plate]: 2});
  };

  const handleChangePlates = (plate: string, qty: number) => {
    if (qty === 0) {
      const newPlates = {...plates};
      delete newPlates[plate];
      setPlates(newPlates);
    } else {
      setPlates({...plates, [plate]: qty});
    }
  };

  return (
    <>
      <View style={styles.root}>
        <Pressable onPress={onPress} style={styles.profileSummary}>
          <View>
            <Text style={styles.grey}>Bar weight</Text>
            <Text style={styles.lighterGrey}>20kg</Text>
          </View>

          <View>
            <Text style={styles.grey}>Plates</Text>
            <Text style={styles.lighterGrey}>20kg - 10kg - 5...</Text>
          </View>

          <CollapseIcon isCollapsed={isCollapsed} />
        </Pressable>

        <Collapsible collapsed={isCollapsed}>
          <View style={styles.platesContainer}>
            <SubTitle>Available plates</SubTitle>
            <Caption>Customize the plates you have available at your gym (optional)</Caption>

            <SubTitle style={styles.subTitle}>Bar weight</SubTitle>
            <TextInput placeholder="--kg" keyboardType="numeric" value={barWeight} onChangeText={setBarWeight} dense />

            <SubTitle style={styles.subTitle}>Plates</SubTitle>

            {Object.keys(plates).map(plate => (
              <Pressable
                key={plate}
                onPress={() => setPlateToEdit(plate)}
                style={({pressed}) => [{backgroundColor: pressed ? '#00000005' : 'transparent'}, styles.plateRow]}>
                <View>
                  <SubTitle>{`${plate}kg`}</SubTitle>
                  <Text>{`${plates[plate]} plates`}</Text>
                </View>

                <Icon size={16} name="square-edit-outline" color="#000000FF" />
              </Pressable>
            ))}

            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <GradientButton innerStyle={styles.addButtonInner} onPress={() => setIsNewPlateDialogOpen(true)}>
                <Text style={{color: 'white'}}>Add plates</Text>
              </GradientButton>
            </View>
          </View>
        </Collapsible>
      </View>

      <NewPlateDialog
        onClose={() => setIsNewPlateDialogOpen(false)}
        onValidate={handleAddPlates}
        open={isNewPlateDialogOpen}
      />

      <PlateDialog
        onValidate={handleChangePlates}
        plateKilo={plateToEdit}
        defaultQuantity={plateToEdit && plateToEdit in plates && plates[plateToEdit]}
        open={!!plateToEdit}
        onClose={() => setPlateToEdit(undefined)}
      />
    </>
  );
};

export default PlatesConfigView;
