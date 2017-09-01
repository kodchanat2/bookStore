import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    }

    _renderRow(rowData){
      return( <View>
                    <Text>{this.props.author}</Text>
                    <Text>{this.props.title}</Text>
                </View>
      );
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource} renderRow={this._renderRow}/>
        );
    }
}

export default BookList;