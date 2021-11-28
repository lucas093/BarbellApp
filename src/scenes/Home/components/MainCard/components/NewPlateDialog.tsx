import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {Button, Caption, Dialog, Paragraph, Portal, RadioButton, Text} from 'react-native-paper';
import TextInput from '../../../../../components/TextInput';

interface Props {
  open: boolean;
  onClose: () => void;
  onValidate: (plate: string) => void;
}

const NewPlateDialog: FC<Props> = ({onValidate, open, onClose}) => {
  const [kilo, setKilo] = useState('10');

  const handleValidate = () => {
    onValidate(kilo);
    onClose();
  };

  return (
    <Portal>
      <Dialog visible={open} onDismiss={onClose}>
        <Dialog.Title style={{marginBottom: 0}}>Add new plate</Dialog.Title>

        <Dialog.Content>
          <Caption>Plate weight in KG</Caption>
          <TextInput value={kilo} keyboardType="numeric" onChangeText={setKilo} dense />
        </Dialog.Content>

        <Dialog.Actions>
          <Button onPress={onClose}>Cancel</Button>
          <Button onPress={handleValidate}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default NewPlateDialog;
