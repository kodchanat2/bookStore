import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import BookDetail from './bookDetail';

const data = [];

class BookList extends React.Component {
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>(r1 !== r2) })
        this.state = {dataSource: ds.cloneWithRows(data)};
        
    }
    componentWillMount = () =>{
        fetch('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?response-format=json&api-key=73b19491b83909c7e07016f4bb4644f9:2:60667290')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({dataSource: this.state.dataSource.cloneWithRows(res.results.books)});
        })
    }

    _renderRow(rowData){
        return <BookDetail {...rowData}/>;
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource} renderRow={this._renderRow}/>
        );
    }
}

export default BookList;