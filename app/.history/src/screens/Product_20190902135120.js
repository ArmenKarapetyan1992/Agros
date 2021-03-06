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
          <Icon name={this.state.changeStyle ? "th-large" : "th-list"} size={FontSize.biggestFontSize} color={Colors.green} action={() => this.setState({ changeStyle: !this.state.changeStyle })} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={ this.state.changeStyle ? styles.containerSize : styles.containerSize2 }>
            <TouchableOpacity style={styles.productBox}>
              <Image
                style={styles.images}
                source={require('../assets/product.jpg')} />
              <View style={styles.starBox}>
                <Text style={styles.title}>
                  Semillas de Pasto Cosecha 2019
                            </Text>
                <View style={styles.stars}>
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
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productBox}>
              <Image
                style={styles.images}
                source={require('../assets/product.jpg')} />
              <View style={styles.starBox}>
                <Text style={styles.title}>
                  Semillas de Pasto Cosecha 2019
                            </Text>
                <View style={styles.stars}>
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
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productBox}>
              <Image
                style={styles.images}
                source={require('../assets/product.jpg')} />
              <View style={styles.starBox}>
                <Text style={styles.title}>
                  Semillas de Pasto Cosecha 2019
                            </Text>
                <View style={styles.stars}>
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
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productBox}>
              <Image
                style={styles.images}
                source={require('../assets/product.jpg')} />
              <View style={styles.starBox}>
                <Text style={styles.title}>
                  Semillas de Pasto Cosecha 2019
                            </Text>
                <View style={styles.stars}>
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
              </View>
            </TouchableOpacity>




          </View>
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.lightGrey
  },
  searchBarBlock: {
    width: '90%',
    marginHorizontal: "5%",
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: Colors.darkGrey,
    borderBottomWidth: 0.5,
  },
  searchInput: {
    width: "80%",
    paddingLeft: 15,
    color: Colors.darkGrey,
    fontSize: FontSize.mediumFontSize

  },
  viewList: {
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.84,
    elevation: 5,
  },
  scroll: {
    width: "100%",
    height: "100%",
    marginTop: 20,

  },
  containerSize: {
    width: "90%",
    height: '100%',
    marginHorizontal: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  containerSize2: {
    width: "90%",
    height: '100%',
    marginHorizontal: "5%",
  },
  productBox: {
    width: "49%",
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.84,
    elevation: 5,
    marginBottom: "3%",
    display: "flex",
  },
  productBox2: {
    width: "49%",
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.84,
    elevation: 5,
    marginBottom: "3%",
    display: "flex",
  },


  images: {
    width: "100%",
    height: 182,
  },
  title: {
    fontSize: FontSize.mediumFontSize,
    color: Colors.green,
    marginVertical: 15
  },
  starBox: {
    width: "90%",
    marginHorizontal: "5%",
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.darkGrey,
    paddingBottom: 15,
    marginBottom: 15
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  }
})

export default Product 