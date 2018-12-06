import React, { Component } from 'react'
import FlatListComponent from '../../components/FlatList';

// import { SIGPIPE } from 'constants';


export class GeneralNews extends Component {
    render() {
        return (
            <View>
               
            </View>
        )
    }


}
const mapStateToProps = (state) => {
    return {
        topNews: state.TopHeadline,
        // category : state.category,
        // navigation : this.props.navigation        
    }   
}

export default connect(mapStateToProps)(GeneralNews)


const styles = StyleSheet.create({
    categoryText : {
         backgroundColor:"blue" ,color:"white",borderRadius:20,paddingHorizontal:10,marginHorizontal:10
    }
})