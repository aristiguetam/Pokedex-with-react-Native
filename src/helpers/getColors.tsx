import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {});
  let primary;
  //   let secundary;

  switch (colors.platform) {
    case 'android':
      // android colors properties
      primary = colors.dominant || 'grey';
      //   secundary = colors.average;
      return [primary];

    case 'ios':
      // iOS colors properties
      primary = colors.background || 'grey';
      //   secundary = colors.secondary;
      return [primary];
    default:
      throw new Error('Unexpected platform key');
  }
};
