import React, { Component } from 'react'
import { Text, View } from 'react-native'
import FlatListComponent from '../../components/flatlist'
import NewsCard from '../../components/newsCard'
import { Spinner } from 'native-base';

export class CategoryNewsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageSize: 20,
            page: 1,
            category: this.props.category
        }
    }

    componentDidMount = () => {
        this.newsData()
    }

    newsData = () => {
        this.props.renderList(this.state.category, this.state.page, this.state.pageSize)
    }

    moreData = () => {
        this.setState({
            page: this.state.page + 1,
        }, () => this.newsData())
    }

    render() {
        const { categoryData, } = this.props
        return (
            <View>
                {(this.props.refreshing) ?
                    <Spinner />
                    :
                    <FlatListComponent
                        rootData={categoryData}
                        renderItem={({ item }) => <NewsCard article={item} onClick={() => this.props.navigation(item)} />}
                        showsHorizontalScrollIndicator={true}
                        horizontal={false}
                        keyExtractor={(item, index) => index.toString()}
                        ending={() => this.moreData()}
                        onEndReachedThreshold={0}
                    />}
            </View>
        )
    }
}

export default CategoryNewsList