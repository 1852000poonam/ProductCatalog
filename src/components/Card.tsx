import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {heightPixel, widthPixel} from '../contant/responsive';
import {ConstNumber} from '../contant/number';
import {FONT_NAMES, FONT_WEIGHT} from '../contant/font';
import {GlobalStyleValues} from '../contant/globalstyles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from '../contant/colors';
import {TEXT} from '../contant/constantText';

const Card = props => {
  console.log(props.listSource, 'props.listSource');
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={{uri: props?.listSource}} />

      <Text numberOfLines={ConstNumber.VALUE_3} style={styles.title}>
        {props?.title}
      </Text>
      <Text style={styles.raiting}>
        {TEXT.RATING} {props?.description}
      </Text>
      <Text style={styles.price}>${props?.price}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  mainContainer: {
    height: heightPixel(ConstNumber.VALUE_270),
    width: widthPixel(ConstNumber.VALUE_336),
    backgroundColor: COLORS.WHITE,
    marginHorizontal: widthPixel(ConstNumber.VALUE_10),
    padding: ConstNumber.VALUE_20,
    justifyContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
    borderRadius: ConstNumber.VALUE_20,
    shadowColor: COLORS.BLACK,
    shadowOpacity: ConstNumber.VALUE_02,
    marginTop: heightPixel(ConstNumber.VALUE_40),
  },
  image: {
    height: heightPixel(ConstNumber.VALUE_98),
    width: widthPixel(ConstNumber.VALUE_103),
  },
  title: {
    fontWeight: FONT_WEIGHT.SIX_HUNDRED,
    fontSize: ConstNumber.VALUE_22,
    color: COLORS.BLACK,
    fontFamily: FONT_NAMES.RALEWAY_BOLD,
  },
  raiting: {
    fontWeight: FONT_WEIGHT.SIX_HUNDRED,
    fontSize: ConstNumber.VALUE_16,
    color: COLORS.GREY,
    padding: ConstNumber.VALUE_5,
    fontFamily: FONT_NAMES.RALEWAY_BOLD,
  },
  price: {
    fontWeight: FONT_WEIGHT.SEVEN_HUNDRED,
    fontSize: ConstNumber.VALUE_17,
    color: COLORS.PURPLE,
    fontFamily: FONT_NAMES.RALEWAY_BOLD,
  },
});
