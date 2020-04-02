import React, { Component } from 'react'
import { Text, View,Image,Style, StyleSheet, AsyncStorage,TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper';

export default class SwiperPage extends Component {
    start=()=>{
        AsyncStorage.setItem('isInstall','true',()=>{
           this.props.afterInstall();
        });
    };
    render() {
        return (
            <View style={{flex:1}}>
                <Swiper style={styles.wrapper} showsButtons={false}>
                    <View style={styles.slide1}>
                        <Image style={styles.img} source={require('../../assets/slide3.png')}/>
                    </View>
                    <View style={styles.slide1}>
                        <Image style={styles.img} source={require('../../assets/slide2.png')}/>
                    </View>
                    <View style={styles.slide1}>
                        <Image style={styles.img} source={require('../../assets/slide1.png')}/>
                        <TouchableOpacity onPress={this.start} style={styles.start}><Text style={{color:'red'}}>开始体验</Text></TouchableOpacity>
                    </View>
                </Swiper>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    img:{
        width:'100%',
        height:'100%'
    },
    slide1:{
        flex:1,
        alignItems:'center',
        height:'100%'
    },
    start:{

        bottom:150,
        width:120,
        height:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        textAlignVertical:'center',
        borderColor:'red',
        borderWidth:1
    }
})