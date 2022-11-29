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
    pos: { x: 120, y: 400 },
    size: { height: 40, width: 40 }
  }

  const ObstacleTop1Prop = {
    world,
    label: 'ObstacleTop1',
    color: 'green',
    pos: { x: pipeSizePosA.pipeTop.pos.x, y: pipeSizePosA.pipeTop.pos.y },
    size: { width:  pipeSizePosA.pipeTop.size.width, height: pipeSizePosA.pipeTop.size.height },
    isTop: true,
  }

  const ObstacleBottom1Prop = {
    world,
    label: 'ObstacleBottom1',
    color: 'green',
    pos: { x: pipeSizePosA.pipeBottom.pos.x, y: pipeSizePosA.pipeBottom.pos.y },
    size: { width:  pipeSizePosA.pipeBottom.size.width, height: pipeSizePosA.pipeBottom.size.height },
    isTop: false,
  }

  const ObstacleTop2Prop = {
    world,
    label: 'ObstacleTop2',
    color: 'green',
    pos: { x: pipeSizePosB.pipeTop.pos.x, y: pipeSizePosB.pipeTop.pos.y },
    size: { width:  pipeSizePosB.pipeTop.size.width, height: pipeSizePosB.pipeTop.size.height },
    isTop: true,
  }

  const ObstacleBottom2Prop = {
    world,
    label: 'ObstacleBottom2',
    color: 'green',
    pos: { x: pipeSizePosB.pipeBottom.pos.x, y: pipeSizePosB.pipeBottom.pos.y },
    size: { width:  pipeSizePosB.pipeBottom.size.width, height: pipeSizePosB.pipeBottom.size.height },
    isTop: false,
  }

  const FloorProp = {
    world,
    color: '#E1D694',
    pos: { x: windowWidth / 2, y: windowHeight - 17 },
    size: { height: 51 + 20, width: windowWidth }
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