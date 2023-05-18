import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MovieScreen from './pages/MovieScreen';
import TvScreens from './pages/TvScreens';
import SearchScreen from './pages/SearchScreen';
import ProfileScreen from './pages/ProfileScreen';
import { Feather } from '@expo/vector-icons';
import HomeStack from './stacks/HomeStack';

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Movie"
          // component={MovieScreen}
          component={HomeStack}
          options={{
            tabBarIcon: ({color, size}) => (
                <Feather name="film" color={color} size={size - 4} />
            )
          }}
        />
        <Tab.Screen 
          name="Tv"
          component={TvScreens}
        />
        <Tab.Screen 
          name="Search"
          component={SearchScreen}
        />
        <Tab.Screen 
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
};

export default App;