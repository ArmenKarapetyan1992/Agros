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
            <ScrollView>
                
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
    }
})

export default ProductDescription 