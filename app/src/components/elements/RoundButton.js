import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Device from 'react-native-device-detection';

const MIN_HEIGHT = Device.isPhone ? 44 : 55;
const MIN_WIDTH = Device.isPhone ? 150 : 300;
const MAX_WIDTH = Device.isPhone ? "100%" : '100%';
const DELTA = Device.isPhone ? 25 : 35;
const DEFAULT_SIZE = Device.isPhone ? 16 : 24;
const DEFAULT_FONTNAME = 'Helvetica';
const DEFAULT_WHITE = '#ffffff';
const DEFAULT_BLACK = '#000000';

// RoundButton class
export default class RoundButton extends React.Component {
  constructor(props){
    super(props);
  }
  // Object for text style in button
   textStyle = () => {
    return({
      color: this.props.textColor,
      fontSize: this.props.textSize,
      textAlign: 'center',
      fontFamily: this.props.fontFamily,
      paddingLeft: 10,
      paddingRight: 10,
    });
  }

// Object for button style
  roundButtonStyle = () => {
    let minHeight_ = (this.props.textSize + DELTA < MIN_HEIGHT) ? MIN_HEIGHT : this.props.textSize + DELTA
    let btnHeight = this.props.height === undefined ? minHeight_ : this.props.height
    let btnWidth = this.props.width === undefined ? MIN_WIDTH : this.props.width
    if (this.props.autoHeight) {
      btnHeight = undefined
    }
    return ({
        borderRadius: btnWidth/2,
        borderWidth: 1,
        borderColor: this.props.borderColor,
        backgroundColor: this.props.backgroundColor,
        height: btnHeight,
        minHeight: MIN_HEIGHT,
        width: btnWidth,
        maxWidth: MAX_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
      });
  }

  render() {
    return(
        <TouchableOpacity
         style={[this.roundButtonStyle(), this.props.style]}
          onPress={()=>this.props.action()}
        >
          <Text style={this.textStyle()}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
    )
  }
}





// Define default values for props this component

RoundButton.defaultProps = {
  backgroundColor: DEFAULT_WHITE,
  borderColor: DEFAULT_BLACK,
  textColor: DEFAULT_BLACK,
  textSize: DEFAULT_SIZE,
  fontFamily: DEFAULT_FONTNAME,
  shadowColor: DEFAULT_BLACK
};
