
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon, Input } from 'react-native-elements';



export default class User extends React.Component {
  render(){
    const { route,navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center',flex:1,
    justifyContent: 'center',}}>
            <Text>Author:</Text>
            <Text>Lê Sơn Trường</Text>
            <Text>Trần Sơn Tùng</Text>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('front')}>
                <Icon style = {{}} name="home" size={25} color="grey"
                />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.c4} onPress={()=>null}>
                <Icon style = {{}} name="person" size={25} color="#ff5928"
                />
            </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
    footer: {
        height:60,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection:'row',
        elevation:3,
      },
      c4: { 
        padding:10,
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
      },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
