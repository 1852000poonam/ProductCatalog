import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Input from '../components/Input';
import ButtonCommon from '../components/Button';
import {IMAGES} from '../components/Images';
import {useNavigation} from '@react-navigation/native';
import {GlobalStyleValues} from '../contant/globalstyles';
import {ConstNumber, PercentageConstants} from '../contant/number';
import {FONT_NAMES, FONT_WEIGHT} from '../contant/font';
import {heightPixel} from '../contant/responsive';
import {COLORS} from '../contant/colors';
import {TEXT} from '../contant/constantText';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const emailRegex = /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, TEXT.INVALID_EMAIL)
    .required(TEXT.EMAIL_REQUIRED),
  password: Yup.string()
    .min(ConstNumber.VALUE_8, TEXT.MIN_PASSWORD)
    .max(ConstNumber.VALUE_20, TEXT.MAX_PASSWORD)
    .required(TEXT.PASSWORD_REQUIRED),
});

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.semicircle} source={IMAGES.SEMICIRCLE_IMAGE} />
      <Text style={styles.welcomeText}>{TEXT.WELCOME}</Text>
      <View style={styles.loginContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.loginText}>{TEXT.LOGIN}</Text>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={values => {
              navigation.navigate(TEXT.PRODUCT);
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.formContainer}>
                <Input
                  label={TEXT.EMAIL}
                  value={values.email}
                  source={IMAGES.EMAIL}
                  onChangeText={handleChange(TEXT.email)}
                  onBlur={handleBlur(TEXT.email)}
                  placeholder={TEXT.EMAIL}
                  secureTextEntry={false}
                  error={errors.email && touched.email ? errors.email : ''}
                />
                <Input
                  label={TEXT.PASSWORD}
                  value={values.password}
                  source={IMAGES.PASSWORD}
                  onChangeText={handleChange(TEXT.password)}
                  onBlur={handleBlur(TEXT.password)}
                  placeholder={TEXT.PASSWORD}
                  secureTextEntry={true}
                  error={
                    errors.password && touched.password ? errors.password : ''
                  }
                />
                <Text style={styles.forgotPassText}>{TEXT.FORGOT}</Text>
                <View style={styles.buttonContainer}>
                  <ButtonCommon
                    text={TEXT.LOGIN}
                    color={COLORS.WHITE}
                    backgroundColor={COLORS.PURPLE}
                    onPress={handleSubmit}
                    marginTop={heightPixel(ConstNumber.VALUE_80)}
                  />
                  <Text style={styles.createAccountText}>{TEXT.ACCOUNT}</Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: ConstNumber.VALUE_1,
    backgroundColor: COLORS.PURPLE,
    justifyContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
  },
  semicircle: {
    position: GlobalStyleValues.ABSOLUTE,
    top: ConstNumber.VALUE_0,
    right: ConstNumber.VALUE_30,
  },
  welcomeText: {
    fontWeight: FONT_WEIGHT.EIGHT_HUNDRED,
    fontSize: ConstNumber.VALUE_65,
    color: COLORS.WHITE,
    marginTop: heightPixel(ConstNumber.VALUE_70),
    fontFamily: FONT_NAMES.RALEWAY_BOLD,
  },
  loginContainer: {
    height: PercentageConstants.PERCENT_70,
    width: PercentageConstants.PERCENT_100,
    backgroundColor: COLORS.WHITE,
    borderRadius: ConstNumber.VALUE_10,
    top: ConstNumber.VALUE_50,
  },
  innerContainer: {
    margin: ConstNumber.VALUE_30,
  },
  loginText: {
    fontWeight: FONT_WEIGHT.SEVEN_HUNDRED,
    fontSize: ConstNumber.VALUE_18,
    color: COLORS.BLACK,
    fontFamily: FONT_NAMES.RALEWAY_BOLD,
  },
  formContainer: {
    margin: ConstNumber.VALUE_20,
  },
  forgotPassText: {
    fontWeight: FONT_WEIGHT.SIX_HUNDRED,
    fontSize: ConstNumber.VALUE_15,
    color: COLORS.PURPLE,
    fontFamily: FONT_NAMES.RALEWAY_SEMIBOLD,
  },
  buttonContainer: {
    alignSelf: GlobalStyleValues.CENTER,
  },
  createAccountText: {
    alignSelf: GlobalStyleValues.CENTER,
    fontWeight: FONT_WEIGHT.SIX_HUNDRED,
    fontSize: ConstNumber.VALUE_17,
    color: COLORS.PURPLE,
    marginTop: heightPixel(ConstNumber.VALUE_20),
    fontFamily: FONT_NAMES.RALEWAY_SEMIBOLD,
  },
});
