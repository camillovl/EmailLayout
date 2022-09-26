import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style = {styles.header}>
      <View style = {styles.conjunto}>
          <Image style={styles.userimg} source = {require('C:/Users/camil/Documents/Dispositivos moveis/Unidade1/EmailLayout/IntegrantesUra/Camillo.jpg')}></Image>
          <View style={styles.textoseicone}>
          <Text> Nome </Text>
          <Text> Titulo </Text>
          <Text> Assunto </Text>
          <View style = {styles.icones}>
          <FontAwesome5 name = "star" size = {14} color = "gray" />
          </View>
          </View>        
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: 'red',
  },
  header:{
    height: 80,
    backgroundColor: 'pink'
  },
  conjunto:{
    height:90,
    padding:10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  userimg: {
    height: 60,
    width: 60,
    borderRadius: 25,
  },
  textoseicone: {
    marginLeft: 5,
    justifyContent: 'space-between',
  },

  
});
