// screens/HomeScreen.tsx

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigator';
import TextButton from "../../../core/components/TextButton"
import { TextInput } from 'react-native-gesture-handler';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [inputText, setInputText] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <TextInput
      style={{
        height:40,
        borderColor: 'gray',
        borderWidth:1,
        width: 200,
        marginBottom: 20,
        paddingHorizontal:10
      }}
      placeholder='Enter text'
      value={inputText}
      onChangeText={setInputText}>
      </TextInput>
    
      <TextButton onPress={()=>console.log(inputText)}></TextButton>
    </View>
  );
};
