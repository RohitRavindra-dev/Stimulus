import React from 'react';
import {Button, View, Text, TouchableOpacity} from 'react-native';
import {REFRESH} from '../../assets/constants/AppConstants';
import {refreshButtonStyles as rbs} from './styles';

type refreshButtonStyles = {
    refreshHandler : ()=>any
}

export const RefreshButton = ({refreshHandler}:refreshButtonStyles) => {
  return (
    <TouchableOpacity style={rbs.buttonCntr} onPress={refreshHandler}>
      <View style={rbs.button}>
        <Text style={rbs.buttonText}>{REFRESH.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};
