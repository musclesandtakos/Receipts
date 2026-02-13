import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// ReceiptCard component for displaying individual receipt items in lists
const ReceiptCard = () => {
  return (
    <View style={styles.container}>
      <Text>Receipt Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ReceiptCard;
