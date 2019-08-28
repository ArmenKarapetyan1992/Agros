import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import { FontSize } from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import Icon from '../elements/Icon';

class HeaderComponent extends Component {
  
    openNotifications = () => {
      alert('Notifications opened');
    }

    openDrawerScreen = () => {
      this.props.navigation.openDrawer();
    }

    render(){
        return(
          <View style={styles.container}>
            { this.props.title ? <Text style={styles.titleStyle}>{this.props.title}</Text> : null }
            <View style={styles.iconsContainer} >
              <Icon
                  action={this.openNotifications}
                  name='bell'
                  size={FontSize.iconsNormalFontSize}
                  color={Colors.white}
                  style={styles.iconStyle}
                  solid
              />

              <Icon
                  action={this.openDrawerScreen}
                  name='bars'
                  size={FontSize.iconsNormalFontSize}
                  color={Colors.white}
                  style={styles.iconStyle}
                  solid
              />
            </View>
          </View>
        )
    }
}

export default withNavigation(HeaderComponent);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    position: 'relative',
    paddingLeft: '2%',
    paddingRight: '2%'
  },
  titleStyle: {
    color: Colors.white,
    fontSize: FontSize.mediumFontSize,
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center'
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 'auto',
    height: '100%'
  },
  iconStyle: {
    marginLeft: '1%',
    marginRight: '2%'
  }
});
