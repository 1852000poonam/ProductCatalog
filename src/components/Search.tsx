import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {GlobalStyleValues} from '../contant/globalstyles';
import {heightPixel, widthPixel} from '../contant/responsive';
import {ConstNumber} from '../contant/number';
import {FONT_NAMES, FONT_WEIGHT} from '../contant/font';
import {COLORS} from '../contant/colors';
import { TEXT } from '../contant/constantText';

const Search = props => {
  return (
    <View style={styles.mainContainer}>
      <Image source={props?.filtersource} />
      <View style={styles.imageContainer}>
        <Image source={props?.search} />
        <TextInput
          placeholder={TEXT.SEARCH}
          style={styles.input}
          onChangeText={props?.onChangeText}
          value={props?.value}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: GlobalStyleValues.ROW,
    justifyContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
  },
  imageContainer: {
    borderWidth: widthPixel(ConstNumber.VALUE_1),
    borderRadius: ConstNumber.VALUE_50,
    height: heightPixel(ConstNumber.VALUE_60),
    flexDirection: GlobalStyleValues.ROW,
    marginHorizontal: widthPixel(ConstNumber.VALUE_30),
    width: widthPixel(ConstNumber.VALUE_267),
    alignItems: GlobalStyleValues.CENTER,
    paddingHorizontal: widthPixel(ConstNumber.VALUE_20),
    borderColor: COLORS.GRAY2,
  },
  input: {
    marginLeft: widthPixel(ConstNumber.VALUE_10),
    fontWeight: FONT_WEIGHT.SIX_HUNDRED,
    fontSize: ConstNumber.VALUE_17,
    color: COLORS.GREY,
    fontFamily: FONT_NAMES.RALEWAY_MEDIUM,
  },
});
