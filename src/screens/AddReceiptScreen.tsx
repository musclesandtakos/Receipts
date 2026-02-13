import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddReceiptScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Add Receipt Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddReceiptScreen;
