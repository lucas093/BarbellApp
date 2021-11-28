import {TextInput as TextInputPaper} from 'react-native-paper';
import {FC} from 'react';
import React from 'react';
import {StyleSheet} from 'react-native';

type TextInputProps = React.ComponentProps<typeof TextInputPaper>;

type Props = TextInputProps & {};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'transparent',
    marginTop: -6,
  },
});

const TextInput: FC<Props> = ({style, ...props}) => {
  return (
    <TextInputPaper
      style={[styles.root, style]}
      mode="outlined"
      outlineColor="#00000033"
      placeholderTextColor="#00000033"
      {...props}
    />
  );
};

export default TextInput;
