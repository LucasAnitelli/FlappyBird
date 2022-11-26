import { StyleSheet } from "react-native";

interface BirdPropsStyle {
  xBody: number;
  yBody: number;
  widthBody: number;
  heightBody: number;
  color: string;
}

export const styles = ({xBody, yBody, widthBody, heightBody, color}: BirdPropsStyle) => StyleSheet.create({
  floor: {
    position: 'absolute',
    left: xBody,
    top: yBody,
    width: widthBody,
    height: heightBody,
    backgroundColor: color,
  }
})