import React, { useCallback, useRef, useState } from 'react';
import Start from './Start';
import { GameEngine } from 'react-native-game-engine';
import entities from '../../../entities';
import { styles } from './styles';
import Physics from '../../../utils/Physics';
import GameOver from './GameOver';
import { Text } from 'react-native';

interface EventProps {
  type: TypeProps;
}

enum TypeProps {
  game_over = 'game_over',
  new_point ='new_point',
}

const Game = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [startGame, setStartGame] = useState(true);
  const [currentPoints, setCurrentPoints] = useState(0);
  const gameEngineRef = useRef(null);

  const handleOnStartGame = () => {
    setCurrentPoints(0);
    setIsRunning(true);
    setStartGame(false);
    gameEngineRef.current?.swap(entities());
  };

  const handleOnRestartGame = () => {
    setStartGame(true);
    setIsGameOver(false);
  };

  const gameOver = useCallback(() => {
    gameEngineRef.current?.stop();
    setIsGameOver(true);
    setIsRunning(false);
  }, []);

  const newPoint = useCallback(() => {
    setCurrentPoints(prevState => prevState + 1);
  }, []);

  const onEvent = useCallback((event: EventProps) => {
    const eventLiteral = {
      game_over: gameOver,
      new_point: newPoint,
      default: () => { },
    }
 
    return (eventLiteral[event.type] || eventLiteral.default)();
  }, []);

  return (
    <>
      {isGameOver 
        ? <GameOver handleOnRestartGame={handleOnRestartGame} score={currentPoints} />
        : null
      }
        {isRunning 
          ? <>
              <Text style={styles.pointNumber}>{currentPoints}</Text>
              <GameEngine
                  ref={gameEngineRef}
                  running={isRunning}
                  entities={entities()}
                  style={styles.engineContainer}
                  systems={[Physics]}
                  onEvent={onEvent}
                >
              </GameEngine>
            </>
            : null
        }
        {startGame 
        ? <Start handleOnStartGame={handleOnStartGame} />
          : null
        }
    </>
  )
}

export default Game;