import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from 'react-native-paper';
import cart from "./cart.png";


export default function apidata() {
    const [apiData, setapiData] = useState([]);
    const apiURL 
    = 'https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0';

    useEffect(() => {
        axios.get(apiURL) .then((data) =>{
            setapiData(data.data);
            console.log('first', data);
        });
     }, []);

  return (
    <View>
      <ScrollView>
        {apiData?.store_items?.map(item => {
          return (
            <View>
              <Text style={styles.catName}>
                || {item.category && item.category.name} ||
              </Text>
              <View style={styles.productItemContainer}>
                {item?.items?.map(productItem => {
                  return (
                    <View style={styles.productItem}>
                      <Image
                        style={{height: 150, width: '100%'}}
                        source={{uri: productItem?.image_url}}
                      />
                      <Text onPress={()=> alert('Product name '+ JSON.stringify(productItem.name)+
                                                ' || product price '+ JSON.stringify(productItem.discounted_price)+
                                                ' || product id '+ JSON.stringify(productItem.id))}
                        style={styles.productname}
                        numberOfLines={1}>
                        {productItem?.name}
                      </Text>
                      <View style={styles.priceWrap}>
                      <Text style={styles.oprice}>
                          {productItem?.discounted_price} INR
                        </Text>
                        <Text style={styles.dprice}>
                          {productItem?.price} INR
                        </Text>
                        
                      </View>

                      <Button style={styles.buttoncss} icon={cart} mode="contained" onPress={() => alert('Your '+ JSON.stringify(productItem.name) + 'added to cart successfully')}>
                          Add                 
                        </Button>

                    </View>
                  
                  
                  );
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    productItemContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    productItem: {
      width: '44%',
      padding: "3%",
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 10,
      marginHorizontal: "3%",
      marginVertical: "3%",
    },
    catName: {
      color: '#000',
      padding: 15,
      fontSize: 25,
      fontWeight: 'bold',
    },
    priceWrap: {
      flexDirection: 'row',
      marginBottom: 10,
      alignItems: "center"
    },
    dprice: {
      marginLeft: 10,
      textDecorationLine: 'line-through',
      marginRight: 10,
      color : "#808080"
    },
    oprice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: "#000"
    },
    productname:{
        fontSize: 21, 
        marginBottom: 10, 
        color: '#000',
        fontWeight: '350',
        marginTop: 20
    },
    buttoncss:{
        color: '#fff',
        backgroundColor: '#000',
        paddingVertical: 3,
        borderRadius: 10 ,
        padding: 5,
        textAlign: 'center',
    },
  });