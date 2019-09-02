import { Dimensions, Platform } from 'react-native';
import Device from 'react-native-device-detection';

// FontSizes for phone and tablet

export const FontSize = {
  smallestFontSize: Device.isPhone ? 12 : 16,
  smallFontSize: Device.isPhone ? 14 : 20,
  standardFontSize: Device.isPhone ? 16 : 24,
  mediumFontSize: Device.isPhone ? 18 : 26,
  bigFontSize: Device.isPhone ? 20 : 26,
  biggestFontSize: Device.isPhone ? 24 : 53,
  iconsSmallFontSize: Device.isPhone ? 16 : 24,
  iconsFontSize: Device.isPhone ? 20 : 30,
  iconsNormalFontSize: Device.isPhone ? 25 : 40,
  iconsMiddleFontSize: Device.isPhone ? 40 : 60,
  iconsBigFontSize: Device.isPhone ? 60 : 90
};
