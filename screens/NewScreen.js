import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function NewScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Image
        source={
          __DEV__
            ? require('../assets/images/Chicken.png')
            : require('../assets/images/robot-prod.png')
        }
        style={styles.welcomeImage}
      />

      <OptionButton
        icon="md-school"
        label="History of Chicken:"
        onPress={() => WebBrowser.openBrowserAsync('https://en.wikipedia.org/wiki/Chicken')}

      />


      <OptionButton
        icon="md-compass"
        label="History of Guinea Pig"
        onPress={() => WebBrowser.openBrowserAsync('https://en.wikipedia.org/wiki/Guinea_pig')}
      />

      <OptionButton
        icon="ios-chatboxes"
        label="History of Piggies"
        onPress={() => WebBrowser.openBrowserAsync('https://en.wikipedia.org/wiki/Domestic_pig')}
        isLastOption
      />
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39ff14',
  },
  contentContainer: {
    paddingTop: 100,
  },
  optionIconContainer: {
    marginRight: 10,
  },
  option: {
    backgroundColor: '#FFB6C1',
    paddingHorizontal: 100,
    paddingVertical: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  welcomeImage: {
    width: 300,                   //width of picture?
    height: 300,                   //Height of picture
    resizeMode: 'contain',
    marginTop: -150,
    marginLeft: 40,
  },
});
