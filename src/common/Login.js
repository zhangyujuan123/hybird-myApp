import React, { Component } from 'react'
import {View,Text,StyleSheet,Button,TextInput,TouchableOpacity,Image, AsyncStorage,ActivityIndicator,ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native';
import {myFetch} from '../utils/index';


export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle=(text)=>{
        this.setState({
            username:text
        })
    }
    pwdhandle=(text)=>{
        this.setState({
            pwd:text
        })
    }
    login=()=>{
        if(this.state.username==''){
            ToastAndroid.show('用户名不能为空',100);
            return true;
        }
        if(this.state.pwd==''){
            ToastAndroid.show('密码不能为空',100);
            return true;
        }
        this.setState({isloading:true})
        myFetch.post('/login',{username:this.state.username,pwd:this.state.pwd}).then(res=>{
            AsyncStorage.setItem('user',JSON.stringify(res.data))
                .then(()=>{
                    this.setState({isloading:false})
                    Actions.home();
                })
        })
    }
    render() {
        return (
            <View style={{justifyContent:'center',flex:1}}>
                <View style={{alignItems:'center'}}>
                    <View style={{flexDirection:'row',width:'80%',overflow:'hidden',marginRight:10,alignItems:'center',paddingLeft:20,borderBottomColor:'#ccc',borderBottomWidth:1}}>
                        <Icon name='user' color='red'/>
                        <TextInput placeholder='用户名' onChangeText={this.userhandle}/>
                    </View>
                    <View style={{flexDirection:'row',width:'80%',overflow:'hidden',marginRight:10,alignItems:'center',paddingLeft:20,borderBottomColor:'#ccc',borderBottomWidth:1}}>
                        <Icon name='lock' color='red'/>
                        <TextInput placeholder='密码' onChangeText={this.pwdhandle} secureTextEntry={true}/>
                    </View>
                <TouchableOpacity style={{width:'60%',height:40,marginRight:10,alignItems:'center',backgroundColor:'red',justifyContent:'center',marginTop:30,borderRadius:15}} onPress={this.login}><Text>登录</Text></TouchableOpacity>
                <TouchableOpacity style={{width:'60%',height:40,marginRight:10,alignItems:'center',backgroundColor:'red',justifyContent:'center',marginTop:30,borderRadius:15}} onPress={()=>Actions.register()}><Text>去注册</Text></TouchableOpacity>
                </View>
                {
                    this.state.isloading? <View style={{flex:1,justifyContent:'center',alignItems:'center',zIndex:1000,backgroundColor:'#D3D3D3',width:'100%',position:'absolute',top:0,height:'100%',opacity:0.6}}><ActivityIndicator color='red' size='large'/><Text>正在登录中</Text></View>:null
                }
            </View>
        )
    }
}
