import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../components/Images';
import ButtonCommon from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {ConstNumber} from '../contant/number';
import {GlobalStyleValues} from '../contant/globalstyles';
import {FONT_NAMES, FONT_WEIGHT} from '../contant/font';
import {heightPixel} from '../contant/responsive';
import {COLORS} from '../contant/colors';
import {TEXT} from '../contant/constantText';

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.displayText}>{TEXT.FIND_GADGET}</Text>
        <Image source={IMAGES.SPLASH_SCREEN} />
        <View style={styles.button}>
          <ButtonCommon
            text={TEXT.GET_STARTED}
            color={COLORS.PURPLE}
            backgroundColor={COLORS.WHITE}
            marginTop={heightPixel(ConstNumber.VALUE_30)}
            onPress={() => navigation.navigate(TEXT.LOGIN)}
          />
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: ConstNumber.VALUE_1,
    backgroundColor: COLORS.PURPLE,
    justifyContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
  },
  displayText: {
    fontWeight: FONT_WEIGHT.EIGHT_HUNDRED,
    fontSize: ConstNumber.VALUE_65,
    color: COLORS.WHITE,
    textAlign: GlobalStyleValues.CENTER,
    marginTop: heightPixel(ConstNumber.VALUE_70),
    fontFamily: FONT_NAMES.RALEWAY_BOLD,
  },
  button: {
    alignSelf: GlobalStyleValues.CENTER,
  },
});
