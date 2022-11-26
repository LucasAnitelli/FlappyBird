import Matter from 'matter-js';
import React from 'react';
import { Image } from 'react-native';
import BIRD from '../../assets/images/bird.png';
import { styles } from './styles';

export interface FloorProps extends ColorProps {
  body: Matter.Body,
}

interface FunctionProps extends ColorProps {
  world: Matter.World;
  pos: PositionProps;
  size: SizeProps;
}

interface ColorProps {
  color: string;
}

interface PositionProps {
  x: number;
  y: number;
}


interface SizeProps {
  width: number;
  height: number;
}


const Floor: React.FC<FloorProps> = (props) => {
  const { body, color } = props;

  const widthBody = body.bounds.max.x - body.bounds.min.x
  const heightBody = body.bounds.max.y - body.bounds.min.y

  const xBody = body.position.x - widthBody /2
  const yBody = body.position.y - heightBody /2

  return(
    <Image 
      source={BIRD}
      style={styles({xBody, yBody, widthBody, heightBody, color }).floor}
    />
  );
}

export default ({ world, color, pos, size }: FunctionProps) => {
  const initialFloor = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: 'Floor', isStatic: true }
  )

  Matter.World.add(world, [initialFloor]);

  return {
      body: initialFloor,
      color,
      pos,
      renderer: <Floor body={initialFloor} color={color}/>
  }
}