import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 220,
    height: 60
  },
  playButton: {
    marginTop: 32,
    width: 120,
    height: 74
  },
  containerModal: {
    width: '70%' ,
    height: '20%',
    backgroundColor: '#ddd893',
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  score: {
    color: '#e7825d',
    fontSize: 16,
    paddingRight: 16,
    paddingTop: 12,
    fontFamily: 'PressStart2P-Regular'
  },
  numberScore: {
    color: '#fff',
    fontSize: 28,
    paddingRight: 16,
    fontFamily: 'PressStart2P-Regular'
  },
  touchContainer: {
    marginTop: 32,
    width: '34%' ,
    height: '6%',
    backgroundColor: '#ffff',
    borderColor: '#57360d',
    borderWidth: 3,
  },
  containerOk: {
    flex: 1,
    margin: 4,
    backgroundColor: '#e08443',
  },
  textOk: {
    color: '#fff',
    fontSize: 18,
    marginTop: 8,
    fontFamily: 'PressStart2P-Regular',
    textAlign: 'center',
  },
});