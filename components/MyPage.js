import React, { Component } from 'react'
import { View ,Text,Image, FlatList, ScrollView,StatusBar, Button, TouchableOpacity,AsyncStorage} from 'react-native'
import { Icon } from '@ant-design/react-native'
import ImagePicker from 'react-native-image-picker';
import {Actions} from 'react-native-router-flux';


const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};
const data1=[
    
    {
        img:'setting',
        text:'账户管理'
    },
     {
        img:'environment',
        text:'收货地址'
    },
    {
        img:'solution',
        text:'我的信息'
    },
    {
        img:'profile',
        text:'我的订单'
    },
    {
        img:'qrcode',
        text:'我的二维码'
    },
    {
        img:'hdd',
        text:'我的积分'
    },
    {
        img:'star',
        text:'我的收藏'
    }

]
const data2=[
    {
        img:'tool',
        text:'居家维修保养'
    }
    ,
    {
        img:'car',
        text:'出行接送'
    }
    ,
    {
        img:'user',
        text:'我的受赠人'
    }
    ,
    {
        img:'printer',
        text:'我的住宿优惠'
    }
    ,
    {
        img:'flag',
        text:'我的活动'
    }
    ,
    {
        img:'form',
        text:'我的发布'
    }
]

export default class MyPage extends Component {
    constructor(){
        super();
        this.state={
            imageUrl:''
        }
    }
    async componentDidMount(){
        await AsyncStorage.getItem('imageUrl')
        .then((res) => {
            this.setState({
                imageUrl:JSON.parse(res)
            })
        })
        console.log('11111');
    }
    componentDidUpdate(){
        AsyncStorage.getItem('imageUrl')
        .then((res) => {
            this.setState({
                imageUrl:JSON.parse(res)
            })
        })
    }
    takephoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
                if (response.didCancel) {
                  return;
                } else if (response.error) {
                  console.log('Error:', response.error);
                } else if (response.customButton) {
                  console.log('custom:', response.customButton);
                } else {
                  const source = { uri: response.uri };
                  this.setState({
                    imageUrl: source
                  });
                  AsyncStorage.setItem('imageUrl',JSON.stringify(source),()=>{console.log('store success')});
                }
              });
    }
    render() {
        return (
            <View>
                <StatusBar backgroundColor='red' />
                <ScrollView>
                <View style={{alignItems:'center',padding:25,height:250,backgroundColor:'#f23030'}}>
                    <TouchableOpacity onPress={()=>{this.takephoto()}}><Image source={this.state.imageUrl} style={{width:120,height:120,borderRadius:60}}/></TouchableOpacity>
                    <Text style={{color:'#ffffff',marginTop:10,fontSize:20}}>BINNU BHILLON</Text>
                </View>
                <View>
                    <View style={{height:85,backgroundColor:'#ffffff',flexDirection:'row',paddingLeft:20,paddingTop:35,marginBottom:1}}>
                        <Image source={require('../images/my_03.png')} style={{width:24,height:30}}/>
                        <Text style={{fontSize:18,marginLeft:18}}>我的个人中心</Text>
                    </View>
                    <FlatList style={{height:305,backgroundColor:'#ffffff',paddingTop:10}} numColumns={3} data={data1} renderItem={({item})=>(
                        <View style={{alignItems:'center',width:'33%',paddingTop:20}}>
                            <Icon name={item.img} size='lg'/>
                            <Text style={{marginTop:10,fontSize:17}}>{item.text}</Text>
                        </View>
                    )}/>
                </View>
                <View>
                    <View style={{height:60,paddingLeft:20,alignItems:'center',flexDirection:'row',marginTop:5,marginBottom:1,backgroundColor:'#ffffff'}}>
                        <Icon name='tag' size='lg'/>
                        <Text style={{fontSize:18,marginLeft:18}}>E族活动</Text>
                    </View>
                    <FlatList numColumns={3} data={data2} style={{backgroundColor:'#ffffff',height:220,paddingTop:10}} renderItem={({item})=>{
                        if(item.text=='我的发布'){
                            return <TouchableOpacity style={{alignItems:'center',width:'33%',paddingTop:20}} onPress={()=>Actions.put()}>
                                    <Icon name={item.img} size='lg'/>
                                    <Text style={{marginTop:10,fontSize:17}}>{item.text}</Text>
                                </TouchableOpacity>
                        }else{
                            return <TouchableOpacity style={{alignItems:'center',width:'33%',paddingTop:20}} >
                                    <Icon name={item.img} size='lg'/>
                                    <Text style={{marginTop:10,fontSize:17}}>{item.text}</Text>
                                </TouchableOpacity>
                        }
                    }}/>
                </View>
                <View style={{marginTop:30,alignItems:'center'}}><Text style={{color:'#767676',fontSize:13}}>BINNU DHILION | 退出</Text></View>
           </ScrollView> 
           </View>
            
        )
    }
}
