import React from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import LOGO from '../../../../assets/images/logo.png';
import PLAY from '../../../../assets/images/play.png';
import { styles } from './styles';

interface StartProps {
  handleOnStartGame: () => void;
}

const Start: React.FC<StartProps> = (props) => {
  const { handleOnStartGame } = props;

  return (
    <View style={styles.container}>
      <Image source={LOGO} style={styles.logo} />
      <TouchableWithoutFeedback onPress={handleOnStartGame}>
        <Image source={PLAY} style={styles.playButton} />
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Start;