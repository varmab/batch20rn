import React, {Component} from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class Welcome extends Component{
    render(){
        return(
            <View style={styles.welcomeView}>
                <Text style={styles.welcomeText}>Welcome to {this.props.name}</Text>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    welcomeView:{
        
    },
    welcomeText:{
        fontSize:40,
        color:"white",
        fontWeight:"bold"
    }
})


export default Welcome;