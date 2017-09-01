import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class DetailPage extends React.Component {
    
    render(){
        return (
            <View>
                <Text> {this.props.title}</Text>
                <Text> {this.props.author}</Text>
            </View>
        );
    }
}

export default DetailPage;