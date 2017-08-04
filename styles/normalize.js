/*
PixelRatio.get() === 1
mdpi Android devices (160 dpi)
PixelRatio.get() === 1.5
hdpi Android devices (240 dpi)
PixelRatio.get() === 2
iPhone 4, 4S
iPhone 5, 5c, 5s
iPhone 6
xhdpi Android devices (320 dpi)
PixelRatio.get() === 3
iPhone 6 plus
xxhdpi Android devices (480 dpi)
PixelRatio.get() === 3.5
Nexus 6
*/

import React from 'react';
import { PixelRatio } from 'react-native';
const {width, height} = require('Dimensions').get('window');
let pixelRatio = PixelRatio.get();

export const normalize = (size) => {
  switch (true) {
    case (pixelRatio < 1.4):
        return size * 0.8;
        break;
    case (pixelRatio < 2.4):
        return size * 1.15;
        break;
    case (pixelRatio < 3.4):
        return size * 1.35;
        break;
    default:
        return size * 1.5;
  }
};

export const normalizeFont = (size) => {
  if (pixelRatio < 1.4) {
    return Math.sqrt((height * height) + (width * width)) * (size / 175);
  }
  return Math.sqrt((height * height) + ( width * width)) * (size / 100);
};