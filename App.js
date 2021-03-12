import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Video } from 'expo-av';

import { PlayButton, MuteButton } from './icons'
import theme from './theme'

export default function App() {

  const [refVideo, setRefVideo] = React.useState()
  const [isMuted, setIsMuted] = React.useState(true)

  const renderButtonPlay = () => (
    <Pressable 
      style={styles.button}
      onPress={() => setIsMuted(false)}>
        <Text style={styles.textButton}>Play</Text>
        <PlayButton size={33} color={theme.colors.white} />
    </Pressable>
  )

  const renderButtonMute = () => (
    <Pressable 
      style={styles.button}
      onPress={() => setIsMuted(true)}>
      <Text style={styles.textButton}>Desligar</Text>
      <MuteButton size={33} color={theme.colors.white} />
    </Pressable>
  )

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Video
        source={{ uri: 'https://sc1s.cdn.upx.com:8250/;stream/1' }}
        ref={ref => setRefVideo(ref)}
        onLoad={() => setIsMuted(false)}
        rate={1.0}
        volume={1.0}
        isMuted={isMuted}
        resizeMode="cover"
        shouldPlay
        isLooping
      />
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>{isMuted ? 'Desligado' : 'Ao vivo'}</Text>
      </View>
      <View
        style={styles.buttonsContainer}>
        {
          isMuted 
          ? renderButtonPlay()
          : renderButtonMute()
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blueBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
  },  
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8, 
    height: 70, 
    width: 300,
    backgroundColor: 'red',
    borderRadius: 30,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
    marginRight: 30,
  },
  statusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  statusText: {
    color: 'white',
    fontSize: 70,
  },
});
