import React from 'react'

import Icon from 'react-native-vector-icons/Ionicons'

export const PlayButton = ({size, color}) => 
  <Icon name="play-outline" size={size} color={color} />

export const MuteButton = ({size, color}) => 
  <Icon name="pause-outline" size={size} color={color} />