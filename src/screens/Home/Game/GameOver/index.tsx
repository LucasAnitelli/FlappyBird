import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import GAMEOVER from '../../../../assets/images/game-over.png';
import { styles } from './styles';

interface RestartProps {
  handleOnRestartGame: () => void;
  score: number;
}

const GameOver: React.FC<RestartProps> = (props) => {
  const { handleOnRestartGame, score }= props;

  return (
    <View style={styles.container}>
      <Image source={GAMEOVER} style={styles.logo} />
      <View style={styles.containerModal}>
          <Text style={styles.score}>SCORE</Text>
          <Text style={styles.numberScore}>{score}</Text>
      </View>
      <TouchableOpacity onPress={handleOnRestartGame} style={styles.touchContainer} activeOpacity={0.6}>
        <View style={styles.containerOk}>
          <Text style={styles.textOk}>OK</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default GameOver;