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
        <View>
            <Text>sdfdsfdfdf</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default ProductDescription 