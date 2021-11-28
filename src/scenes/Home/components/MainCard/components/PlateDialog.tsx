import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import {Button, Dialog, Paragraph, Portal, RadioButton, Text} from 'react-native-paper';

interface Props {
  open: boolean;
  plateKilo?: string;
  defaultQuantity?: number;
  onClose: () => void;
  onValidate: (plate: string, qty: number) => void;
}

const PlateDialog: FC<Props> = ({onValidate, defaultQuantity, plateKilo, open, onClose}) => {
  const [quantity, setQuantity] = useState(`${defaultQuantity || 0}`);

  useEffect(() => {
    setQuantity(`${defaultQuantity || 0}`);
  }, [defaultQuantity]);

  const handleRemove = () => {
    onValidate(plateKilo!, 0);
    onClose();
  };

  const handleValidate = () => {
    onValidate(plateKilo!, parseInt(quantity));
    onClose();
  };

  return (
    <Portal>
      <Dialog visible={open} onDismiss={onClose}>
        <Dialog.Title>{`${plateKilo}kg Plates`}</Dialog.Title>

        <Dialog.Content>
          <RadioButton.Group onValueChange={newValue => setQuantity(newValue)} value={quantity}>
            <View style={{flexDirection: 'column'}}>
              {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20].map(number => (
                <RadioButton.Item
                  key={number}
                  label={`${number}`}
                  labelStyle={{textAlign: 'left'}}
                  style={{paddingLeft: 0, paddingTop: 0, paddingBottom: 0}}
                  position="leading"
                  value={`${number}`}
                />
              ))}
            </View>
          </RadioButton.Group>
        </Dialog.Content>

        <Dialog.Actions style={{justifyContent: 'space-between'}}>
          <Button onPress={handleRemove}>Delete</Button>

          <View style={{flexDirection: 'row'}}>
            <Button onPress={onClose}>Cancel</Button>
            <Button onPress={handleValidate}>OK</Button>
          </View>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default PlateDialog;
