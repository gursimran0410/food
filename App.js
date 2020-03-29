import {createStackNavigator, createAppContainer} from 'react-navigation'
import SearchScreen from './src/screens/searchScreen'
const navigator = createStackNavigator({
  Search: SearchScreen
},{
  intialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
})

export default createAppContainer(navigator)