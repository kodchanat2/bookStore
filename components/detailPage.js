import React from 'react';
import { StyleSheet, Text, View, Image, Button, Linking, ScrollView } from 'react-native';

class DetailPage extends React.Component {
    
    render(){
        return (
            <ScrollView style={styles.container}>
                <View style={styles.upSide}>
                    <Image style={styles.img} source={{uri: this.props.book_image}} resizeMode='contain'/>
                    <View style={styles.rightSide}>
                        <Text style={styles.rank}>#{this.props.rank}</Text>
                        <Text style={styles.underRank}>Bestsellers of the week</Text>
                        <Text style={styles.buy}>Buy now!</Text>
                        <View style={styles.buyBlock}>
                            <Button color="#C02333" onPress={()=> Linking.openURL(this.props.buy_links[0].url)} title={this.props.buy_links[0].name}/>
                            <Button color="#365c93" onPress={()=> Linking.openURL(this.props.buy_links[1].url)} title={this.props.buy_links[1].name}/>
                            <Button color="#c45500" onPress={()=> Linking.openURL(this.props.buy_links[2].url)} title={this.props.buy_links[2].name}/>
                        </View>
                    </View>
                </View>
                <View style={styles.downSide}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.author}> {this.props.contributor}</Text>
                    <Text style={styles.description}>{this.props.description}</Text>
                    <Text style={styles.type}>publisher: <Text style={styles.hilight}> {this.props.publisher}</Text></Text>
                    <Text style={styles.type}>Author: <Text style={styles.hilight}> {this.props.author}</Text></Text>
                    <Text style={styles.type}>isbn10: <Text style={styles.type}> {this.props.primary_isbn10}</Text></Text>
                    <Text style={styles.type}>isbn13: <Text style={styles.type}> {this.props.primary_isbn13}</Text></Text>
                    
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    upSide:{
        padding:5,
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderColor: '#eee'
    },
    rightSide:{
        flex:1,
        padding: 5,
        alignItems: 'flex-end'
    },
    downSide:{
        flex:1,
        padding: 10
    },

    img:{
        height: 350,
        width: 230
    },
    rank:{
        fontSize: 85,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    underRank:{
        fontSize: 14,
        fontStyle: 'italic'
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold'
    },
    author:{
        fontSize: 17,
        fontStyle: 'italic'
    },
    hilight:{
        fontSize: 17,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    type:{
        fontSize: 17,
        fontStyle: 'italic',
    },
    description:{
        fontSize: 18,
        marginTop: 20,
        marginBottom: 20,
    },
    buy:{
        marginTop: 20,
        fontSize: 26,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    buyBlock:{
        height: 160,
        // flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default DetailPage;