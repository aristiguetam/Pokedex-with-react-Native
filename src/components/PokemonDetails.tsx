import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      style={{...StyleSheet.absoluteFillObject}}
      showsVerticalScrollIndicator={false}>
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

      {/* abilities */}
      <View style={{...styles.container}}>
        <Text style={{...styles.title}}> Habilidades base</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      {/* Moves */}
      <View style={{...styles.container}}>
        <Text style={{...styles.title}}> Movimientos base</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>
      {/* Stats */}
      <View style={{...styles.container}}>
        <Text style={{...styles.title}}> Stats</Text>
        <View>
          {pokemon.stats.map((stat, i) => (
            <View key={stat.stat.name + i} style={{flexDirection: 'row'}}>
              <Text
                style={{
                  ...styles.regularText,
                  marginRight: 10,
                  width: 150,
                }}>
                {stat.stat.name}
              </Text>
              <Text style={{...styles.regularText, fontWeight: 'bold'}}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>

        {/* Sprites Final */}

        <View style={{alignItems: 'center', marginBottom: 20}}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={{...styles.basicSprites}}
          />
        </View>
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
