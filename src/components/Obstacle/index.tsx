import Matter from 'matter-js';
import React from 'react';
import { Image } from 'react-native';
import PIPE_GREEN from '../../assets/images/pipe-green.png';
import PIPE_GREEN_INVERTED from '../../assets/images/pipe-green-inverted.png';
import PIPE_ORANGE from '../../assets/images/pipe-orange.png';
import PIPE_ORANGE_INVERTED from '../../assets/images/pipe-orange-inverted.png';
import { styles } from './styles';

export interface ObstacleProps extends RendererProps {
  body: Matter.Body;
}

interface FunctionProps extends RendererProps {
  world: Matter.World;
  label: string;
  color: string;
  pos: PositionProps;
  size: SizeProps;
}

interface RendererProps {
  color: string;
  isTop?: boolean;
}

interface PositionProps {
  x: number;
  y: number;
}


interface SizeProps {
  width: number;
  height: number;
}


const Obstacle: React.FC<ObstacleProps> = (props) => {
  const { body, color, isTop } = props;

  const widthBody = body.bounds.max.x - body.bounds.min.x
  const heightBody = body.bounds.max.y - body.bounds.min.y

  const xBody = body.position.x - widthBody / 2
  const yBody = body.position.y - heightBody / 2

  return(
    <Image 
      source={color === 'green' 
        ? !isTop ? PIPE_GREEN : PIPE_GREEN_INVERTED 
        : !isTop ? PIPE_ORANGE : PIPE_ORANGE_INVERTED
      }
      style={styles({xBody, yBody, widthBody, heightBody}).obstacle}
    />
  );
}

export default ({ world, label, color, pos, size, isTop = false }: FunctionProps) => {
  const initialObstacle = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: label, isStatic: true }
  )

  Matter.World.add(world, [initialObstacle]);

  return {
      body: initialObstacle,
      color,
      pos,
      isTop,
      renderer: <Obstacle body={initialObstacle} color={color} isTop={isTop} />
  }
}