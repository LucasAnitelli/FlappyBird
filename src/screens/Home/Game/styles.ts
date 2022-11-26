import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  engineContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  pointNumber: {
    color: '#fff',
    textAlign: 'center', 
    fontSize: 40, 
    fontWeight: 'bold', 
    margin: 20,
    zIndex: 2
  }
})