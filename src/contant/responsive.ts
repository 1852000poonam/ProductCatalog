import {ConstNumber} from '../contant/number';
import {Dimensions, PixelRatio, Platform} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / ConstNumber.VALUE_414;
const heightBaseScale = SCREEN_HEIGHT / ConstNumber.VALUE_896;

export const normalize = (size: number, based = 'width'): number => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const widthPixel = (size: number): number => normalize(size, 'width');

export const heightPixel = (size: number): number => normalize(size, 'height');

export const fontPixel = (size: number): number => heightPixel(size);

export const normalizeFont = (size: number) => {
  const newSize = size * widthBaseScale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
