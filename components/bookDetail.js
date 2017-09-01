import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class BookDetail extends React.Component {
    
    render(){
        return (
            <View>
                <Text>{this.props.author}</Text>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}


export default BookDetail;