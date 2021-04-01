import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import ProfileItems from "../components/pofileItem"

export default function Profile() {

  return (
    <View style={{flex: 1}}>
      <Image 
      style = {{height: 200}}
        source = {{ uri : require("../assets/profile.jpg")}}
      />
      <ProfileItems name="Username" value="Riyhana Ahmadi"/>
      <ProfileItems name="Gmail" value="riyhanaahmadi123@gmail.com"/>
      <ProfileItems name="office" value="Expert Official Organization"/>
      <ProfileItems name="Mobile" value="+93774647842"/>
      <ProfileItems name="Address" value="Mazar-e-sharif"/>

    </View>
  );
}

const styles = StyleSheet.create({

})
