import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Colors from "../constants/Colors";
import { FontSize } from "../constants/Fonts";
import Strings from "../constants/Strings";
import RoundButton from "../components/elements/RoundButton";
import Icon from "../components/elements/Icon";
import { Window } from "../constants/Dimensions";


class Categories extends Component {
    constructor(props) {
        super(props)
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
                    <TouchableOpacity style={styles.viewList} >
                        <Icon name={this.state.changeStyle ? "th-large" : "th-list"} size={FontSize.biggestFontSize} color={Colors.green} action={() => this.setState({ changeStyle: !this.state.changeStyle })} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scroll}>
                    <View style={this.state.changeStyle ? styles.containerSize : styles.containerSize2}>
                        <TouchableOpacity style={this.state.changeStyle ? styles.categoriesBox : styles.categoriesBox2} onPress={() => Actions.Product()}>
                            <View style={ this.state.changeStyle ? styles.categoriesImg : styles.categoriesImg2 }>
                                <Image
                                    source={require('../assets/cat1.png')}
                                />
                            </View>
                            <View style={this.state.changeStyle ? null : styles.textbox}>
                                <Text style={styles.productName}> {Strings.Won} </Text>
                                <Text>  {"33 " + Strings.products} </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.changeStyle ? styles.categoriesBox : styles.categoriesBox2} onPress={() => Actions.Product()}>
                            <View style={ this.state.changeStyle ? styles.categoriesImg : styles.categoriesImg2 }>
                                <Image
                                    source={require('../assets/cat2.png')}
                                />
                            </View>
                            <View style={this.state.changeStyle ? null : styles.textbox}>
                                <Text style={styles.productName}> {Strings.Grain} </Text>
                                <Text>  {"20 " + Strings.products} </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.changeStyle ? styles.categoriesBox : styles.categoriesBox2} onPress={() => Actions.Product()}>
                            <View style={ this.state.changeStyle ? styles.categoriesImg : styles.categoriesImg2 }>
                                <Image
                                    source={require('../assets/cat3.png')}
                                />
                            </View>
                            <View style={this.state.changeStyle ? null : styles.textbox}>
                                <Text style={styles.productName}> {Strings.Seeds} </Text>
                                <Text>  {"45 " + Strings.products} </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.changeStyle ? styles.categoriesBox : styles.categoriesBox2} onPress={() => Actions.Product()}>
                            <View style={ this.state.changeStyle ? styles.categoriesImg : styles.categoriesImg2 }>
                                <Image
                                    source={require('../assets/cat4.png')}
                                />
                            </View>
                            <View style={this.state.changeStyle ? null : styles.textbox}>
                                <Text style={styles.productName}> {Strings.Byproducts} </Text>
                                <Text>  {"12 " + Strings.products} </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.changeStyle ? styles.categoriesBox : styles.categoriesBox2} onPress={() => Actions.Product()}>
                            <View style={ this.state.changeStyle ? styles.categoriesImg : styles.categoriesImg2 }>
                                <Image
                                    source={require('../assets/cat5.png')}
                                />
                            </View>
                            <View style={this.state.changeStyle ? null : styles.textbox}>
                                <Text style={styles.productName}> {Strings.Machinery} </Text>
                                <Text>  {"16 " + Strings.products} </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.changeStyle ? styles.categoriesBox : styles.categoriesBox2} onPress={() => Actions.Product()}>
                            <View style={ this.state.changeStyle ? styles.categoriesImg : styles.categoriesImg2 }>
                                <Image
                                    source={require('../assets/cat6.png')}
                                />
                            </View>
                            <View style={this.state.changeStyle ? null : styles.textbox}>
                                <Text style={styles.productName}> {Strings.products} </Text>
                                <Text>  {"32 " + Strings.products} </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.changeStyle ? styles.categoriesBox : styles.categoriesBox2} onPress={() => Actions.Product()}>
                            <View style={ this.state.changeStyle ? styles.categoriesImg : styles.categoriesImg2 }>
                                <Image
                                    source={require('../assets/cat7.png')}
                                />
                            </View>
                            <View style={this.state.changeStyle ? null : styles.textbox}>
                                <Text style={styles.productName}> {Strings.Properties} </Text>
                                <Text>  {"72 " + Strings.products} </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.changeStyle ? styles.categoriesBox : styles.categoriesBox2} onPress={() => Actions.Product()}>
                            <View style={ this.state.changeStyle ? styles.categoriesImg : styles.categoriesImg2 }>
                                <Image
                                    source={require('../assets/cat8.png')}
                                />
                            </View>
                            <View style={this.state.changeStyle ? null : styles.textbox}>
                                <Text style={styles.productName}> {Strings.SpareParts} </Text>
                                <Text>  {"11 " + Strings.products} </Text>
                            </View>
                        </TouchableOpacity>


                    </View>
                </ScrollView>

            </View>
        )
    }
}


export default Categories