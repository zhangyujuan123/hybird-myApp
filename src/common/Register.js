import React, { Component } from 'react'
import {View,Text,StyleSheet,Button,TextInput,TouchableOpacity,Image, AsyncStorage,ActivityIndicator, ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native';
import {myFetch} from '../utils/index';

export default class Register extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            isloading:false,
            pwd2:''
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
    pwdhandle2=(text)=>{
        this.setState({
            pwd2:text
        })
    }
    login=()=>{
        // myFetch.get('/topics',{limit:4,user:'ssss'}).then(res=>console.log(res))
        

        //根据返回状态进行判断，正确时跳转首页
        // if(res){

        // }
        if(this.state.username==""){
            ToastAndroid.show('用户名不能为空',100);
        }
        else if(this.state.pwd==""){
            ToastAndroid.show('密码不能为空',100);
        }
        else if(this.state.pwd!=this.state.pwd2){
            ToastAndroid.show('两次密码输入不一致',100);
        }else{
            this.setState({isloading:true})
            myFetch.post('/register',{username:this.state.username,pwd:this.state.pwd}).then(res=>{
                AsyncStorage.setItem('userNew',JSON.stringify(res.data))
                    .then(()=>{
                        this.setState({isloading:false})
                        Actions.login();
                    })
            })
        }
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
                    <View style={{flexDirection:'row',width:'80%',overflow:'hidden',marginRight:10,alignItems:'center',paddingLeft:20,borderBottomColor:'#ccc',borderBottomWidth:1}}>
                        <Icon name='lock' color='red'/>
                        <TextInput placeholder='确认密码' onChangeText={this.pwdhandle2} secureTextEntry={true}/>
                    </View>
                <TouchableOpacity style={{width:'60%',height:40,marginRight:10,alignItems:'center',backgroundColor:'red',justifyContent:'center',marginTop:30,borderRadius:15}} onPress={this.login}><Text>注册</Text></TouchableOpacity>
                <TouchableOpacity style={{width:'60%',height:40,marginRight:10,alignItems:'center',backgroundColor:'red',justifyContent:'center',marginTop:30,borderRadius:15}} onPress={()=>Actions.pop()}><Text>回到登录</Text></TouchableOpacity>
                </View>
                {
                    this.state.isloading? <View style={{flex:1,justifyContent:'center',alignItems:'center',zIndex:1000,backgroundColor:'#D3D3D3',width:'100%',position:'absolute',top:0,height:'100%',opacity:0.6}}><ActivityIndicator color='red' size='large'/><Text>正在注册中</Text></View>:null
                }
            </View>
        )
    }
}
