import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Colors from "../constants/Colors";
import { FontSize } from "../constants/Fonts";
import Strings from "../constants/Strings";
import RoundButton from "../components/elements/RoundButton";
import Icon from "../components/elements/Icon";
import { Window } from "../constants/Dimensions";



class Product extends Component {
    render() {
        return (
            <View>
                <View style={styles.searchBarBlock}>
                    <View style={styles.searchBar}>
                        <TouchableOpacity >
                            <Icon name="search" size={FontSize.bigFontSize} color={Colors.darkGrey} />
                        </TouchableOpacity>
                        <TextInput style={styles.searchInput} placeholder={Strings.Search} placeholderTextColor={Colors.darkGrey} />
                    </View>
                    <TouchableOpacity style={styles.viewList}>
                        <Icon name="th-large" size={FontSize.biggestFontSize} color={Colors.green} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



export default Product 