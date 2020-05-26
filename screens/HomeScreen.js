import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>





          <Image
            source={
              __DEV__
                ? require('../assets/images/favicon.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />

          <Image
            source={
              __DEV__
                ? require('../assets/images/icon.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>











        <View style={styles.getStartedContainer}>
                                                                                  <DevelopmentModeNotice />

          <Text style={styles.getStartedText}>Do you love ducks?</Text>

          <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>Press here for image of duck</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            Sike, no duck for you!
          </Text>


        </View>







        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Ok, heres the picture of Duck!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>






      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>navigation/BottomTabNavigator.js</MonoText>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}                //Interesting
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {             //functions used differently to create links
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {                  //functions used differently to create links
  WebBrowser.openBrowserAsync(
    'https://hitchhikers.fandom.com/wiki/Rubber_duck'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39ff14',       //Color of screen
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {                 //Space above image
    paddingTop: 0,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,                //Space above image
    marginBottom: 20,             //Space below image
  },
  welcomeImage: {
    width: 100,                   //width of picture?
    height: 80,                   //Height of picture
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',            //Color of background box
    borderRadius: 30,                                //
    paddingHorizontal: 4,                            //Width of box
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
                                    tabBarInfoContainer: {        //creates and formats tab bar at bottom
                                      position: 'absolute',
                                      bottom: 25,
                                      left: 0,
                                      right: 0,
                                      ...Platform.select({
                                        ios: {
                                          shadowColor: 'black',
                                          shadowOffset: { width: 0, height: -3 },
                                          shadowOpacity: 0.1,
                                          shadowRadius: 3,
                                        },
                                        android: {
                                          elevation: 20,
                                        },
                                      }),
                                      alignItems: 'center',
                                      backgroundColor: '#fbfbfb',
                                      paddingVertical: 20,
                                    },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 20 ,                //Space above first link
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
