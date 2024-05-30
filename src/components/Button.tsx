import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {heightPixel, widthPixel} from '../contant/responsive';
import {ConstNumber} from '../contant/number';
import {GlobalStyleValues} from '../contant/globalstyles';
import {FONT_NAMES, FONT_WEIGHT} from '../contant/font';
import {COLORS} from '../contant/colors';

const ButtonCommon = props => {
  return (
    <TouchableOpacity
      onPress={props?.onPress}
      style={[
        styles.button,
        {backgroundColor: props?.backgroundColor},
        {marginTop: props?.marginTop},
      ]}>
      <Text style={[styles.buttonText, {color: props?.color}]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCommon;

const styles = StyleSheet.create({
  button: {
    width: widthPixel(ConstNumber.VALUE_314),
    height: heightPixel(ConstNumber.VALUE_70),
    justifyContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
    backgroundColor: COLORS.PURPLE,
    borderRadius: ConstNumber.VALUE_10,
  },
  buttonText: {
    fontWeight: FONT_WEIGHT.SEVEN_HUNDRED,
    fontSize: ConstNumber.VALUE_18,
    fontFamily:FONT_NAMES.RALEWAY_BOLD
  },
});
