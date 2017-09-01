import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

class BookDetail extends React.Component {
    
    render(){
        return (
            <TouchableHighlight onPress={()=>{console.log('click');}}>
                <View style={styles.container}>
                    <Image style={styles.img} source={{uri: this.props.book_image}} resizeMode='contain'/>
                    <View style={styles.description}>
                        <Text style={styles.author}>{this.props.author}</Text>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        height:110,
        borderBottomWidth: 2,
        borderColor: '#ddd',
        flexDirection: 'row'
    },
    img:{
        height: 90,
        width: 80
    },
    description:{
        paddingRight: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'

    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    author:{
        fontSize: 15
    }
})

export default BookDetail;