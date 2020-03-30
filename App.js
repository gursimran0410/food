import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screens/searchScreen'
import ResultsShowScreen from './src/screens/resultsShowScreen'
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    intialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
)

export default createAppContainer(navigator)