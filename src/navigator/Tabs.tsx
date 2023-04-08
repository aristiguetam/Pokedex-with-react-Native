import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorStack} from './NavigatorStack';
import {SearchScreen} from '../screens/SearchScreen';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 0 : 60,
        },
      }}>
      <Tab.Screen
        name="NavigatorStack"
        component={NavigatorStack}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({color}) => (
            <Icon name="list-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon name="search-outline" color={color} size={20} />
          ),
        }}
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
};
