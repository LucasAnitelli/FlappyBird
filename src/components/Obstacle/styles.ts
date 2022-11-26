import { StyleSheet } from "react-native";

interface ObstaclePropsStyle {
  xBody: number;
  yBody: number;
  widthBody: number;
  heightBody: number;
}

export const styles = ({xBody, yBody, widthBody, heightBody}: ObstaclePropsStyle) => StyleSheet.create({
  obstacle: {
    position: 'absolute',
    resizeMode: 'cover',
    left: xBody,
    top: yBody,
    width: widthBody,
    height: heightBody
  }
})