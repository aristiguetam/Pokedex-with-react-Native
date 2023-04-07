import {useRef, useState} from 'react';
import ImageColors from 'react-native-image-colors';

export const useGetPokemonColors = (uri: string) => {
  const [bgColor, setBgColor] = useState('grey');

  const getPokemonColors = async () => {
    const colors = await ImageColors.getColors(uri, {
      fallback: 'grey',
    });

    if (colors.platform === 'android') setBgColor(colors.muted || 'grey');

    if (colors.platform === 'ios') setBgColor(colors.background || 'grey');
  };
  return {
    getPokemonColors,
    bgColor,
    // isMounted,
  };
};
