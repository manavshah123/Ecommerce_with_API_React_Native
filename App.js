/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView,ScrollView,StyleSheet,Text,View,} from 'react-native';
import Apidata from "./apidata";
import Welcomepage from "./welcomepage";
import Baner from "./baner";

const App = () => {


  return (
    <SafeAreaView style={{backgroundColor :"#fff"}}>
      <ScrollView>
        <View>
          <Welcomepage />
          <Baner/>
          <Apidata/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
