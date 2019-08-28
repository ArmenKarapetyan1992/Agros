import React, { PureComponent } from 'react';
import { View, Text,TextInput } from 'react-native';
import Device from 'react-native-device-detection';

const M_HEIGHT = Device.isPhone ? 40 : 50;
const M_WIDTH = Device.isPhone ? 150 : 300;
const DELTA = Device.isPhone ? 20 : 30;
const DEFAULT_SIZE = Device.isPhone ? 14 : 22;
const DEFAULT_WHITE = '#ffffff'
const DEFAULT_BLACK = '#000000'
const DEFAULT_GRAY = '#666666'
const DEFAULT_ICON_SIZE = Device.isPhone ? 20 : 24 ;


// create a component
class DefaultInput extends PureComponent {
    constructor(props){
        super(props);
    }

    inputStyle = () => {
        let w = this.props.width === undefined ? M_WIDTH : this.props.width*0.8
        return {
            marginLeft: '5%',
            paddingLeft: '2%',
            paddingRight: '0%',
            paddingTop:0,
            paddingBottom:0,
            maxWidth: w,
            width: w,
            alignContent: 'center',
            fontFamily: this.props.fontFamily,
            fontSize: this.props.textSize
        }
    }

    // Object for container style
    containerStyle = () => {
      let minHeight_ = (this.props.textSize + DELTA < M_HEIGHT) ? M_HEIGHT : this.props.textSize + DELTA
      let containerHeight = this.props.height === undefined ? minHeight_ : this.props.height

        return{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: 5,
            borderWidth: 1,
            backgroundColor: this.props.backgroundColor,
            height: containerHeight,
            minHeight: M_HEIGHT,
            width: this.props.width,
            minWidth: M_WIDTH,
            borderColor: this.props.tintColor,
            marginBottom: this.props.marginBottom || DELTA,
            overflow: 'hidden'
        }
    }

    render() {
        return (
            <View style={[this.containerStyle(), this.props.style]}>
              <TextInput
                placeholder={this.props.placeholder || ''}
                placeholderTextColor={this.props.placeholderTextColor}
                underlineColorAndroid={'transparent'}
                secureTextEntry={this.props.secureTextEntry}
                maxLength={this.props.maxLength}
                autoCorrect={false}
                style={this.inputStyle()}
                // onChangeText={ (text) => this.props.catchInputValue(text)}
                onFocus={this.props.onFocus}
                value={this.props.value}
                multiline={this.props.isMultiline || false}
                numberOfLines={this.props.numberOfLines || 1}
              />
            </View>
        );
    }
}




// Define default values for props this component

DefaultInput.defaultProps = {
    backgroundColor: DEFAULT_WHITE,
    tintColor: DEFAULT_GRAY,
    textColor: DEFAULT_BLACK,
    textSize: DEFAULT_SIZE,
    placeholderTextColor: DEFAULT_GRAY,
    secureTextEntry: false,
    maxLength: 50
};



//make this component available to the app
export default DefaultInput;
