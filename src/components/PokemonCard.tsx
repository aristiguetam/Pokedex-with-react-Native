import {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RooStackParams} from '../navigator/NavigatorStack';

import ImageColors from 'react-native-image-colors';

import {FadeInImage} from './FadeInImage';
import {useGetPokemonColors} from '../hooks/useGetPokemonColors';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {
  const {navigate} = useNavigation<StackNavigationProp<RooStackParams>>();

  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  // const {bgColor, getPokemonColors} = useGetPokemonColors(pokemon.picture);

  // fuera del custom hooks

  const getPokemonColors = async () => {
    const colors = await ImageColors.getColors(pokemon.picture, {
      fallback: 'grey',
    });

    if (!isMounted.current) return;

    if (colors.platform === 'android') setBgColor(colors.muted || 'grey');

    if (colors.platform === 'ios') setBgColor(colors.background);
  };

  useEffect(() => {
    getPokemonColors();
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigate('PokemonScreen', {
          simplePokemon: pokemon,
          color: bgColor,
        })
      }>
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}>
        {/* Name Pokemon and ID */}
        <View>
          <Text style={{...styles.name}}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>
        <View style={{...styles.pokebolaContainer}}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebola}
          />
        </View>

        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    // backgroundColor: 'grey',
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebolaContainer: {
    // backgroundColor: 'blue',
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    opacity: 0.5,
    overflow: 'hidden',
  },

  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -25,
    bottom: -25,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },
});
