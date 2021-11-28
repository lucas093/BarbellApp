import styles from '../scenes/Home/Home.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import React, {FC} from 'react';
import {Button} from 'react-native-paper';
import {Pressable, View} from 'react-native';

type Props = React.ComponentProps<typeof Pressable> & {
  style?: any;
  innerStyle?: any;
};

const GradientButton: FC<Props> = ({children, onPress, innerStyle, style}) => {
  return (
    <Pressable style={({pressed}) => [{opacity: pressed ? 0.5 : 1}, style]} onPress={onPress}>
      <LinearGradient
        style={{...innerStyle, borderRadius: 5, flex: 1}}
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        colors={['#1DC8E6', '#1CE8B8']}>
        {children}
      </LinearGradient>
    </Pressable>
  );
};

export default GradientButton;
