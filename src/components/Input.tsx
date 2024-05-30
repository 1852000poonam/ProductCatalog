// TextInput.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput as RNTextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {heightPixel, widthPixel} from '../contant/responsive';
import {ConstNumber} from '../contant/number';
import {GlobalStyleValues} from '../contant/globalstyles';
import {FONT_NAMES, FONT_WEIGHT} from '../contant/font';
import {COLORS} from '../contant/colors';
import {TEXT} from '../contant/constantText';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  secureTextEntry,
  style,
  error,
  source,
  ...props
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  return (
    <View style={[styles.container, style]}>
      {label && (
        <View style={styles.imageContainer}>
          <Image source={source} style={styles.image} />
          <Text style={styles.label}>{label}</Text>
        </View>
      )}

      <View style={styles.inputContainer}>
        <RNTextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={isSecure}
          style={[styles.input, error && styles.errorInput]}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
            <Text style={styles.show}>{TEXT.SHOW}</Text>
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  style: PropTypes.object,
  error: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  placeholder: '',
  keyboardType: 'default',
  secureTextEntry: false,
  style: {},
  error: '',
};

const styles = StyleSheet.create({
  container: {
    marginBottom: heightPixel(ConstNumber.VALUE_15),
  },
  label: {
    fontSize: ConstNumber.VALUE_16,
    color: COLORS.GREY,
    marginLeft: widthPixel(ConstNumber.VALUE_3),
    fontFamily: FONT_NAMES.RALEWAY_SEMIBOLD,
  },
  icon: {
    marginRight: widthPixel(ConstNumber.VALUE_5),
  },
  inputContainer: {
    flexDirection: GlobalStyleValues.ROW,
    alignItems: GlobalStyleValues.CENTER,
    borderBottomWidth: widthPixel(ConstNumber.VALUE_2),
    borderColor: COLORS.GRAY2,
  },
  input: {
    flex: ConstNumber.VALUE_1,
    height: heightPixel(ConstNumber.VALUE_40),
    borderColor: COLORS.CCC,
    paddingHorizontal: widthPixel(ConstNumber.VALUE_10),
    fontSize: ConstNumber.VALUE_17,
    fontWeight: FONT_WEIGHT.SIX_HUNDRED,
    fontFamily: FONT_NAMES.RALEWAY_SEMIBOLD,
  },
  eyeIcon: {
    padding: ConstNumber.VALUE_10,
  },
  errorInput: {
    borderColor: COLORS.GRAY2,
  },
  errorText: {
    color: COLORS.RED,
    marginTop: heightPixel(ConstNumber.VALUE_5),
    fontSize: ConstNumber.VALUE_14,
    fontFamily: FONT_NAMES.RALEWAY_MEDIUM
  },
  imageContainer: {
    flexDirection: GlobalStyleValues.ROW,
    alignItems: GlobalStyleValues.CENTER,
  },
  image: {
    height: widthPixel(ConstNumber.VALUE_24),
    width: widthPixel(ConstNumber.VALUE_24),
  },
  show: {
    fontWeight: FONT_WEIGHT.SIX_HUNDRED,
    fontSize: ConstNumber.VALUE_15,
    color: COLORS.PURPLE,
    fontFamily: FONT_NAMES.RALEWAY_SEMIBOLD,
  },
});

export default Input;
