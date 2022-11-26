import Matter from 'matter-js';
import React from 'react';
import { Image } from 'react-native';
import BIRD from '../../assets/images/bird.png';
import { styles } from './styles';

export interface BirdProps {
  body: Matter.Body,
}

interface FunctionProps {
  world: Matter.World;
  pos: PositionProps;
  size: SizeProps;
}

interface PositionProps {
  x: number;
  y: number;
}


interface SizeProps {
  width: number;
  height: number;
}

const Bird: React.FC<BirdProps> = (props) => {
  const { body } = props;

  const widthBody = body.bounds.max.x - body.bounds.min.x
  const heightBody = body.bounds.max.y - body.bounds.min.y

  const xBody = body.position.x - widthBody /2
  const yBody = body.position.y - heightBody /2

  return(
    <Image 
      source={BIRD}
      style={styles({xBody, yBody, widthBody, heightBody}).bird}
    />
  );
}

export default ({ world, pos, size }: FunctionProps) => {
  const initialBird = Matter.Bodies.rectangle(
      pos.x,
      pos.y,
      size.width,
      size.height,
      { label: 'Bird' }
  )
  Matter.World.add(world, [initialBird])

  return {
      body: initialBird,
      pos,
      renderer: <Bird body={initialBird} />
  }
}