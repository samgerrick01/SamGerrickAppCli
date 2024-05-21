import {View, Text} from 'react-native';
import React from 'react';

const Entry = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 36,
          fontWeight: 'bold',
          color: 'red',
        }}>
        Entry Screen
      </Text>
    </View>
  );
};

export default Entry;
