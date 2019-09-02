import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Colors from "../constants/Colors";
import { FontSize } from "../constants/Fonts";
import Strings from "../constants/Strings";
import Icon from "../components/elements/Icon";




class Product extends Component {
  constructor (props){
    super(props);
    this.state = {
      changeStyle: true
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBarBlock}>
          <View style={styles.searchBar}>
            <TouchableOpacity >
              <Icon name="search" size={FontSize.bigFontSize} color={Colors.darkGrey} />
            </TouchableOpacity>
            <TextInput style={styles.searchInput} placeholder={Strings.Search} placeholderTextColor={Colors.darkGrey} />
          </View>
          <TouchableOpacity style={styles.viewList}>
          <Icon name={this.state.changeStyle ? "th-list" : "th-large"} size={FontSize.biggestFontSize} color={Colors.green} action={() => this.setState({ changeStyle: !this.state.changeStyle })} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={ this.state.changeStyle ? styles.containerSize : styles.containerSize2 }>
            <TouchableOpacity style={ this.state.changeStyle ? styles.productBox : styles.productBox2 }>
              <Image
                style={this.state.changeStyle ? styles.images : styles.images2}
                source={require('../assets/product.jpg')} />
              <View style={ this.state.changeStyle ? styles.starBox : styles.starBox2 }>
                <Text style={styles.title}>
                  Semillas de Pasto Cosecha 2019
                            </Text>
                <View style={this.state.changeStyle ? styles.stars : styles.stars2}>
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Text> (0) </Text>
                </View>
                {this.state.changeStyle ? null : <Text style={styles.forSalePigs}>FOR SALE PIGS 8.50 Bs live kilo Weight average: Between 60 to 70 Kgs. Zone: Between Cotoca and Pailas. Contact: Fernando Kin 78006099</Text>}
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={ this.state.changeStyle ? styles.productBox : styles.productBox2 }>
              <Image
                style={this.state.changeStyle ? styles.images : styles.images2}
                source={require('../assets/product.jpg')} />
              <View style={ this.state.changeStyle ? styles.starBox : styles.starBox2 }>
                <Text style={styles.title}>
                  Semillas de Pasto Cosecha 2019
                            </Text>
                <View style={this.state.changeStyle ? styles.stars : styles.stars2}>
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Text> (0) </Text>
                </View>
                {this.state.changeStyle ? null : <Text style={styles.forSalePigs}>FOR SALE PIGS 8.50 Bs live kilo Weight average: Between 60 to 70 Kgs. Zone: Between Cotoca and Pailas. Contact: Fernando Kin 78006099</Text>}
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={ this.state.changeStyle ? styles.productBox : styles.productBox2 }>
              <Image
                style={this.state.changeStyle ? styles.images : styles.images2}
                source={require('../assets/product.jpg')} />
              <View style={ this.state.changeStyle ? styles.starBox : styles.starBox2 }>
                <Text style={styles.title}>
                  Semillas de Pasto Cosecha 2019
                            </Text>
                <View style={this.state.changeStyle ? styles.stars : styles.stars2}>
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Text> (0) </Text>
                </View>
                {this.state.changeStyle ? null : <Text style={styles.forSalePigs}>FOR SALE PIGS 8.50 Bs live kilo Weight average: Between 60 to 70 Kgs. Zone: Between Cotoca and Pailas. Contact: Fernando Kin 78006099</Text>}
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={ this.state.changeStyle ? styles.productBox : styles.productBox2 }>
              <Image
                style={this.state.changeStyle ? styles.images : styles.images2}
                source={require('../assets/product.jpg')} />
              <View style={ this.state.changeStyle ? styles.starBox : styles.starBox2 }>
                <Text style={styles.title}>
                  Semillas de Pasto Cosecha 2019
                            </Text>
                <View style={this.state.changeStyle ? styles.stars : styles.stars2}>
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Icon
                    name="star"
                    size={FontSize.iconsSmallFontSize}
                    color={Colors.darkGrey}
                  />
                  <Text> (0) </Text>
                </View>
                {this.state.changeStyle ? null : <Text style={styles.forSalePigs}>FOR SALE PIGS 8.50 Bs live kilo Weight average: Between 60 to 70 Kgs. Zone: Between Cotoca and Pailas. Contact: Fernando Kin 78006099</Text>}
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default Product 