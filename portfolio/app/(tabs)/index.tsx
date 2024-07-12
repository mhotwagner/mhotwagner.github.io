import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import TerminalView from "@/components/TerminalView";


export default function Home() {
  const [fontsLoaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <TerminalView title="Who is Michaael Hotwagner?">
          <Text style={styles.text}>
            I'm Michael Hotwagner, a full stack software engineer with over a decade of experience designing, developing, and implementing functional and elegant solutions to interesting problems. With expertise spanning the stack, from infrastructure through the backend up to the frontend, I have a proven ability to work with clients from design through development and implementation to efficiently deliver excellent products. Explore my projects, experience, and skills to see how I can help bring your next big idea to life.
          </Text>
        </TerminalView>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // backgroundColor: '#1d1f21',
  },
  text: {
    color: '#66ff66',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Courier New',
  },
});