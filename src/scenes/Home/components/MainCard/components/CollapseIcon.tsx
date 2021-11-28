import Icon from 'react-native-vector-icons/FontAwesome';
import {Animated, View} from 'react-native';
import React, {FC, useEffect, useRef} from 'react';

type Props = React.ComponentProps<typeof View> & {
  isCollapsed?: boolean;
};

const CollapseIcon: FC<Props> = ({isCollapsed, style}) => {
  const rotateAnim = useRef(new Animated.Value(isCollapsed ? 0 : 1)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isCollapsed ? 0 : 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [isCollapsed]);

  const rotateDegree = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

  return (
    <Animated.View style={[style, {transform: [{rotate: rotateDegree}], paddingHorizontal: 8}]}>
      <Icon size={13} name="chevron-down" color="#00000033" />
    </Animated.View>
  );
};

export default CollapseIcon;
