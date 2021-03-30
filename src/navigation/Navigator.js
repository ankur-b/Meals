import {Platform} from 'react-native';
import Colors from '../constants/Colors';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CatagoriesScreen from '../Screens/CatagoriesScreen';
import MealsScreen from '../Screens/MealsScreen';
import DetailsScreen from '../Screens/DetailsScreen';
const MealsNavigator = createStackNavigator(
  {
    Catagories: {
      screen: CatagoriesScreen,
      navigationOptions: {
        headerTitle: 'Categories',
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? Colors.primaryColor : 'white',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      },
    },
    Meals: {
      screen: MealsScreen,
    },
    MealDetails: DetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.primaryColor : 'white',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  },
);
export default createAppContainer(MealsNavigator);
