import { View, Image } from 'react-native'
import React from 'react'
import Baner from "./final.png";

export default function baner() {
  return (
    <View>
      <Image source={Baner} style={{width: "100%", height: 210}}/>
    </View>
  )
}