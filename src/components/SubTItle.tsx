import {Title} from 'react-native-paper';
import React, {FC} from 'react';

type TitleProps = React.ComponentProps<typeof Title>;

type Props = TitleProps & {};

const SubTitle: FC<Props> = ({style, ...props}) => {
  return <Title style={[{fontSize: 16, marginVertical: 0, lineHeight: 15}, style]} {...props} />;
};

export default SubTitle;
