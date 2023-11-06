import React, { Component } from "react";
import { Camera } from "expo-camera"
import { Text, StyleSheet, View } from "react-native";
import { StyleSheet } from "react-native/types";
import { View } from "react-native/types"


class MyCamara extends Component{
    constructor (props) {
        super(props);
        this.state = {permisos: false, photo: ""}
    }

    componentDidMount(){
        Camera.requestCameraPermissionsAsync()
        .then ( res => {
                if (res,granted === true ){
                    this.setState ({
                        permisos: true
                    })
                }
            })
        .catch(e => console.log(e))
    }

    render(){
        return(
            <>
                {this,state.permisos ?
                <View>
                    <Camera/>
                </View>
                :
                <Text> No me diste permisos de la camara</Text>
                }
            </>
        )
    }
}