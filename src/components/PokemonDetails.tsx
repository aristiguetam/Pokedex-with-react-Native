import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView style={{...StyleSheet.absoluteFillObject}}>
      {/* Types pokemon */}
      <View style={{...styles.container, marginTop: 370}}>
        <Text style={{...styles.title}}> Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>

        {/* weight */}
        <Text style={{...styles.title}}> Peso</Text>
        <Text style={{...styles.regularText}}> {pokemon.weight}kg</Text>
      </View>

      {/* Sprites */}
      <View style={{...styles.container}}>
        <Text style={{...styles.title}}> Sprites</Text>
      </View>

      <ScrollView
        // style={{}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={{...styles.basicSprites}}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={{...styles.basicSprites}}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={{...styles.basicSprites}}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={{...styles.basicSprites}}
        />
      </ScrollView>
      {/* Habilidades */}
      <View style={{...styles.container}}>
        <Text style={{...styles.title}}> Types</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  regularText: {
    fontSize: 19,
    color: 'black',
  },
  basicSprites: {
    width: 100,
    height: 100,
  },
});
