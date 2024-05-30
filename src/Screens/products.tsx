import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import axios from 'axios';
import Search from '../components/Search';
import {IMAGES} from '../components/Images';
import Card from '../components/Card';
import {ConstNumber} from '../contant/number';
import {heightPixel, widthPixel} from '../contant/responsive';
import {FONT_NAMES, FONT_WEIGHT} from '../contant/font';
import {COLORS} from '../contant/colors';
import {TEXT} from '../contant/constantText';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredProducts(filtered);
  }, [products, searchText]);

  const renderItem = ({item}) => {
    console.log(item?.image);
    return (
      <Card
        title={item.title}
        price={item.price}
        description={item?.rating?.rate}
        listSource={item.image}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.search}>
          <Search
            placeholder={TEXT.SEARCH}
            filtersource={IMAGES.VECTOR}
            search={IMAGES.SEARCH}
            onChangeText={setSearchText}
            value={searchText}
          />
        </View>
        <Text style={styles.orderText}>{TEXT.ORDER}</Text>
        <Text style={styles.collectStore}>{TEXT.COLLECT}</Text>
        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          style={styles.list}
        />
      </View>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  mainContainer: {
    flex: ConstNumber.VALUE_1,
    backgroundColor: COLORS.BORDER,
  },
  subContainer: {
    marginHorizontal: widthPixel(ConstNumber.VALUE_20),
  },
  search: {
    marginTop: heightPixel(ConstNumber.VALUE_60),
  },
  orderText: {
    marginTop: heightPixel(ConstNumber.VALUE_50),
    fontSize: ConstNumber.VALUE_34,
    fontWeight: FONT_WEIGHT.SEVEN_HUNDRED,
    fontFamily: FONT_NAMES.RALEWAY_BOLD,
  },
  collectStore: {
    fontSize: ConstNumber.VALUE_34,
    fontWeight: FONT_WEIGHT.SEVEN_HUNDRED,
    fontFamily: FONT_NAMES.RALEWAY_BOLD,
  },
  list: {
    marginTop: heightPixel(ConstNumber.VALUE_40),
    marginBottom: heightPixel(ConstNumber.VALUE_280),
  },
});
