import React, { Component } from 'react'
import { RefreshControl , FlatList, View} from 'react-native'
import { Container, Content, Text, Image } from 'native-base';
import TopHeader from '../../components/Header';
import SectionText from '../../components/sectionText';
import  FlatListComponent  from '../../components/FlatList'
import { connect } from 'react-redux'
import { fetchTopNewsByCountry } from '../../actions/TopNews'
import Countries from '../../assets/Countries'
import Categories from '../../assets/Categories'
import RowItem from '../../components/rowItem';
import IconList from '../../components/iconList';
import { NewsList } from './NewsList';
// import { url } from 'inspector';


export class TopHeadlinesNavigation extends Component {
    

    render() {
    return (
        <Content>
            <TopHeader
                leftIconName={"bars"}
                title={"Top Headlines"}
                onLeftClick={() => {this.props.navigation.openDrawer()}}
                />
            <SectionText text={"Countries"} />
            <FlatListComponent             
                rootData ={Countries}
                renderItem = {({item,index}) =>  <RowItem  onClick={() => {this.props.navigation.navigate("NewsList",{country : item})}}  name={item.Name.toUpperCase()} code={item.Code}  /> }
                keyExtractor = {({item,index}) => item.source.name}
                showsHorizontalScrollIndicator={false}
                horizontal ={true}
                style ={{marginHorizontal:15}}
            />

            <SectionText text={"Categories"} />
            
            {/* <View  style={{ flex:1,flexDirection:"row",height:400,alignContent:"stretch" ,flexWrap:"wrap",borderWidth:1,borderColor:"#000" }} >
                {Categories.map((item,index) =>  <IconList  iconName={item.Name} iconImg={item.iconImage} code={item.value}/> )}
            </View>     */}
            
            <FlatListComponent             
                rootData ={Categories}
                renderItem = {({item,index}) => 
                        <IconList onClick={()=> {this.props.navigation.navigate("NewsList",{category:item})} }  iconName={item.Name.toUpperCase()} iconImg={item.iconImage} code={item.value}/>
                    }
                // keyExtractor = {({item,index}) => item.source.name}
                showsHorizontalScrollIndicator={false}
                horizontal ={true}
                style ={{marginHorizontal:15}}
                refreshControl = {
                        <RefreshControl 
                        refreshing={this.refreshing}  
                        onRefresh={this._loadData}
                    />
                }
                onEndReached={() => {this._moreData} }
                onEndReachedThreshold = {0}
                
            />
        </Content>
    )
  }
}

// const mapStateToProps = (state) => {
//     const  topNews = state
//     return { topNews }
// }

// export default connect(mapStateToProps)(TopHeadlinesNavigation)

export default TopHeadlinesNavigation
