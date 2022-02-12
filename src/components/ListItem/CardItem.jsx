import { View, Text } from 'react-native';
import React from 'react';
import { Card } from 'react-native-elements';

const CardItem = ({ title, data }) => {
  return (
    <View>
      <Card>
        <Card.Title>{title}</Card.Title>
        <Text>{data}</Text>
      </Card>
    </View>
  );
};

export default CardItem;
