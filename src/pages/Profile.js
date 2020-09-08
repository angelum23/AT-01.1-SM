import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



export function Profile() {
    return (
        <View style={styles.container}>

            <Image
                style={{width: 150, height: 150,borderRadius: 400/ 2 ,alignItems: 'center',}}
                source={require('../../assets/maromba.jpg')}>
            </Image>
            <Text style={{ fontSize: 20,fontWeight: 'bold'}}>{"\n"}Ângelo José da Rosa</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold'}}>17 anos</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold'}}>Curso Técnico de Informática {"\n"} </Text>


            <View style={[styles.views, styles.ident1]}>
            <Text style={{ fontSize: 20,fontWeight: 'bold'}}>Futuro pentester </Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold' }}> {"\n"} Honorificos: </Text>
            <Text style={{ fontSize: 15 }}> Brabo da CEMAQ {"\n"} Maior hacker da minha casa </Text>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DEDEDE',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column",
      paddingTop: 40,
    },
    views: {
      width: 300,
      height: 170,
      margin: 15,
      borderRadius: 6,
      alignItems: "center",
    },

    ident1: {
      backgroundColor:'#FAFAFA',
      shadowColor: '#DEDEDE',
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      shadowOffset: {width: 0, height: 2},
      elevation: 2,
      paddingTop: 60,
      width: 300,
      height: 250

    }, 
    });