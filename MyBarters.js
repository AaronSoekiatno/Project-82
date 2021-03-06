import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';

export default class MyBarters extends React.Component {
    constructor(){
        super();
        this.state={
            username: '',
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            docId:'',
            allBarters:[],
        } 
    }

    keyExtractor = (item,index) => index.toString()
    getAllBarters(){
        db.collection('MyBarters').get().then(snapshot =>{
            snapshot.forEach(doc=>{
                var data = doc.data();
                this.setState({
                username  : username,
                firstName : data.first_name,
                lastName  : data.last_name,
                address   : data.address,
                contact   : data.contact,
                docId     : doc.id
                })
            })
        })
    }

    renderItem=({item,i})=>{
        return (
            <ListItem
            key={i}
            title={item.itemName}
            subtitle={item.description}
            titleStyle={{color:'black',fontWeight:'bold'}}
            rightElement={
                <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{this.props.navigation.navigate('UserDetailsScreen',{"details":item})}}
                >
                    <Text style={{color:'white'}}>Exchange</Text>
                </TouchableOpacity>
            }
            />
        )
    }
    render(){
        return (
                <View style={styles.container}>
                <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.allBarters}
                renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn:{
        width:100,
        height:100,
        borderRadius:50,
        alignItems: 'center',
        marginTop:10,
        backgroundColor: 'orange',
    },
  });