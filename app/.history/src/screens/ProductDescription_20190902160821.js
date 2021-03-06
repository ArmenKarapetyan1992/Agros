import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Colors from "../constants/Colors";
import { FontSize } from "../constants/Fonts";
import Strings from "../constants/Strings";
import Icon from "../components/elements/Icon";




class ProductDescription extends Component {
  constructor (props){
    super(props);
    this.state = {
      changeStyle: true
    }
  }
  render() {
    return (
        <View style={styles.container} >
            <ScrollView style={styles.scroll}>
                <View style={styles.containerSize}>
                    <View style={styles.block1}>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container : {
        width  : "100%",
        height : "100%",
        backgroundColor : Colors.white
    },
    scroll : {
        width  : "100%",
        height : "100%",
    }, 
    containerSize : {
        width  : "90%",
        marginHorizontal: "5%"
    },
    block1 : {
        width  : "100%",
        backgroundColor : "red",
        height : 500,
        
    }
})

export default ProductDescription 