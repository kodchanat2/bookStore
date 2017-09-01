import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import BookDetail from './bookDetail';

const data = [
    { title: "SEEING RED", author: "Sandra Brown", book_image: "https://s1.nyt.com/du/books/images/9781455572106.jpg"},
    { title: "THE STORE", author: "James Patterson and Richard DiLallo", book_image: "https://s1.nyt.com/du/books/images/9780316395540.jpg"},
    { title: "CAMINO ISLAND", author: "John Grisham", book_image: "https://s1.nyt.com/du/books/images/9780385543057.jpg"}
  ];

class BookList extends React.Component {
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>(r1 !== r2) })
        this.state = {dataSource: ds.cloneWithRows(data)};
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