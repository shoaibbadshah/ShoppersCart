import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import {colors, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';

export default function SignInWelcomeScreen() {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          Discover Grocery Shops
        </Text>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          in your Area
        </Text>
      </View>

      {/* another view */}

      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
});
