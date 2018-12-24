import { StackNavigator } from 'react-navigation'
import HomeScreen from "../container/HomeScreen";
import CategoryNewsList from "../container/HomeScreen/categoryNewsList";
import NewsContent from "../container/CountriesSceen/newsContent";
import CountriesSceen from "../container/CountriesSceen";
import  NewsList  from "../container/CountriesSceen/newsList";
import SourcesScreen from "../container/SourcesScreen";
import TopHeader from '../components/topHeader';
import SourceDetails from '../container/SourcesScreen/sourceDetails';

export const HomeNavigation = StackNavigator({
    TopList : {
        screen : HomeScreen
    },
    CategoryNewsList : {
        screen : CategoryNewsList,
        // screen: NewsContent
    },
    CategoryContent : {
        screen :NewsContent
    }
},{
    navigationOptions : {
        header:TopHeader,
    }
    
})

export const CountriesScreen = StackNavigator ({
    TopList : {
        screen : CountriesSceen
    },
    NewsList : {
        screen : NewsList,
    },
    NewsContent : {
        screen :NewsContent
    }
},{
    navigationOptions : {
    header:TopHeader,
    }
    
})

export const SourcesNavigation = StackNavigator ({
    TopList : {
        screen : SourcesScreen
    },
    SourceDetails : {
        screen : SourceDetails,
    },
},{
    navigationOptions : {
    header:TopHeader,
    }
    
})