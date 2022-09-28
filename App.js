import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Main() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.searchbar}>
      </View>
      <View style={styles.emails}>
        <Image style={styles.userimg} source={require('C:/Users/camil/Documents/Dispositivos moveis/Unidade1/EmailLayout/IntegrantesUra/Camillo.jpg')}></Image>
        
        <View style={{flex:1}}>
          <View style={styles.EmailEsquerda}>
            <View style={styles.textos}>
              <Text> Nome </Text>
              <Text> Titulo </Text>
            </View>
            <View style={{paddingRight:8}}>
              <Text>2:08PM</Text>
            </View>
          </View>
          <View style={styles.EmailDireita}>
              <Text> Assunto </Text>
              <FontAwesome5 name="star" size={14} color="gray" />
          </View>        
        </View>

      </View>
      <View style={styles.emails}>
        <Image style={styles.userimg} source={require('C:/Users/camil/Documents/Dispositivos moveis/Unidade1/EmailLayout/IntegrantesUra/Camillo.jpg')}></Image>
        
        <View style={{flex:1}}> 
          <View style={styles.EmailCima}>
            <View style={styles.textos}>
              <Text> Nome </Text>
              <Text> Titulo </Text>
            </View>
            <View style={{paddingRight:8}}>
              <Text>2:08PM</Text>
            </View>
          </View>
          <View style={styles.EmailBaixo}>
              <Text
              > Assunto </Text>
              <FontAwesome5 name="star" size={18} color="gray" />
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
  },
  searchbar: {
    height: 70,
    backgroundColor: 'pink',
  },
  emails: {
    flexDirection: "row",
    paddingBottom:16,
    borderBottomColor: "#ccc",
    borderBottomWidth:1,
    marginBottom:8
  },
  EmailCima:{
    //backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent:"space-between"
  },
  userimg: {
    height: 60,
    width: 60,
    borderRadius: 30,
    margin:4
  },
  textos: {
    justifyContent: 'space-between',
  },
  EmailBaixo: {
    // height: 90,
    // width: 90,
    //backgroundColor: 'yellow',
    flexDirection:"row",
    justifyContent:"space-between",
    paddingRight:8
  }

});
