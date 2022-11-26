import { ImageBackground } from 'react-native';

import BACKGROUND from '../../assets/images/background.png';
import Game from './Game';
import { styles } from './styles';

const Home = () => {
  return (
    <ImageBackground source={BACKGROUND} style={styles.container}>
      <Game />
    </ImageBackground>
  );
}

export default Home;