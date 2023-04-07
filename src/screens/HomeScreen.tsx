import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {PokemonCard} from '../components/PokemonCard';
import {styles} from '../theme/appTheme';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {simplePokemonList, isLoading, loadPokemons} = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <View
        style={{
          ...styles.globalMargin,
          alignItems: 'center',
        }}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}>
              Pokedex
            </Text>
          }
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          //Infinte scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={25} color="grey" />
          }
        />
      </View>
    </>
  );
};
