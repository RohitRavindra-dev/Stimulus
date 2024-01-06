import React from 'react';
import {ScrollView, View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {AppCard} from '../../../components/app-cards/AppCard';


const AppScreens = [
  {
    name: 'ColorNames',
    cardName: 'Color Names',
    backgroundImage: require('../../../assets/images/Colorsbackground.png'),
  },
  {
    name: 'CountUp',
    cardName: 'Count up',
    backgroundImage: require('../../../assets/images/numbers.png'),
  },
  {
    name: 'NumberMemory',
    cardName: 'Numbers Memory',
    backgroundImage: require('../../../assets/images/NumbersImage.jpg')
  }
];

export const HomeScreen = ({navigation}: any) => {
  return (
    <ScrollView style={{paddingVertical: 12}}>
      <StatusBar backgroundColor={"#420015"} />
      <View style={{paddingHorizontal: 12}}>
      {AppScreens.map((screen, index) => (
        <TouchableOpacity
          style={{
            paddingBottom: 16,
          }}
          onPress={() => {
            navigation.navigate(screen.name);
          }}
          key={index}>
          <AppCard
            cardBackground={screen.backgroundImage}
            cardName={screen.cardName}
          />
        </TouchableOpacity>
      ))}
      </View>
    </ScrollView>
  );
};
