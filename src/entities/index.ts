import Matter from 'matter-js';
import { Dimensions } from 'react-native';
import Bird from '../components/Bird';
import Floor from '../components/Floor';
import Obstacle from '../components/Obstacle';
import { getPipeSizePosPair } from '../utils/Random';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default () => {
  let engine = Matter.Engine.create({ enableSleeping: false });

  let world = engine.world;

  engine.gravity.y = 0.4;

  const pipeSizePosA = getPipeSizePosPair();
  const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.9);

  const BirdProp = {
    world,
    pos: { x: 50, y: 300 },
    size: { height: 40, width: 40 }
  }

  const ObstacleTop1Prop = {
    world,
    label: 'ObstacleTop1',
    color: 'green',
    pos: { x: pipeSizePosA.pipeTop.pos.x, y: pipeSizePosA.pipeTop.pos.y },
    size: { height: pipeSizePosA.pipeTop.size.height, width:  pipeSizePosA.pipeTop.size.width },
    isTop: true,
  }

  const ObstacleBottom1Prop = {
    world,
    label: 'ObstacleBottom1',
    color: 'green',
    pos: { x: pipeSizePosA.pipeTop.pos.x, y: pipeSizePosA.pipeTop.pos.y },
    size: { height: pipeSizePosA.pipeTop.size.height, width:  pipeSizePosA.pipeTop.size.width }
  }

  const ObstacleTop2Prop = {
    world,
    label: 'ObstacleTop2',
    color: 'orange',
    pos: { x: pipeSizePosB.pipeTop.pos.x, y: pipeSizePosB.pipeTop.pos.y },
    size: { height: pipeSizePosB.pipeTop.size.height, width:  pipeSizePosB.pipeTop.size.width },
    isTop: true,
  }

  const ObstacleBottom2Prop = {
    world,
    label: 'ObstacleBottom2',
    color: 'orange',
    pos: { x: pipeSizePosB.pipeTop.pos.x, y: pipeSizePosB.pipeTop.pos.y },
    size: { height: pipeSizePosB.pipeTop.size.height, width:  pipeSizePosB.pipeTop.size.width }
  }

  const FloorProp = {
    world,
    color: 'green',
    pos: { x: windowWidth / 2, y: windowHeight },
    size: { height: 50, width: windowWidth }
  }
  
  return {
    physics: { engine, world },

    Bird: Bird(BirdProp),

    ObstacleTop1: Obstacle(ObstacleTop1Prop),
    ObstacleBottom1: Obstacle(ObstacleBottom1Prop),

    ObstacleTop2: Obstacle(ObstacleTop2Prop),
    ObstacleBottom2: Obstacle(ObstacleBottom2Prop),

    Floor: Floor(FloorProp)
  }
}