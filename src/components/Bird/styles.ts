import { StyleSheet } from "react-native";

interface BirdPropsStyle {
  xBody: number;
  yBody: number;
  widthBody: number;
  heightBody: number;
}

export const styles = ({xBody, yBody, widthBody, heightBody}: BirdPropsStyle) => StyleSheet.create({
  bird: {
    position: 'absolute',
    resizeMode: 'contain',
    left: xBody,
    top: yBody,
    width: widthBody,
    height: heightBody
  }
})