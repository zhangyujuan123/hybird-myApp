import React, { Component } from 'react'
import {View,Text, TextInput,Dimensions,StyleSheet, ScrollView, Image,FlatList, Button, TouchableOpacity,StatusBar} from 'react-native'
import { Grid, Icon } from '@ant-design/react-native';

const {width,scale,height}=Dimensions.get('window');
const list=[
    {
        img:require('../../images/cir_03.png'),
        text:'居家维修保养'
    },
    {
        img:require('../../images/cir_06.png'),
        text:'住宿优惠'
    },
    {
        img:require('../../images/cir_08.png'),
        text:'出行接送'
    },
    {
        img:require('../../images/cir_10.png'),
        text:'E族活动'
    }
]



const s=width/640;
var timer;
export default class Home extends Component {
    constructor(){
        super();
        this.state={
            page:0
        }
    }
    componentDidMount(){
        this.scrollTime();
        console.log(height);
    }
    scrollTime=()=>{
        var scrollView = this.refs.scrollView;
        timer=setInterval(() => {
            var activepage=0;
            if(this.state.page+1>2){
                activepage=0;
            }else{
                activepage=this.state.page+1;
            }
            this.setState({
                page: activepage
            },()=>{
                var offSetX = activepage * width;
                scrollView.scrollResponderScrollTo({x: offSetX, y: 0, animated: true});
            });
        },2000);
        
    }
    scroll=(s)=>{
        var offSetX = s.nativeEvent.contentOffset.x;
        var page = Math.floor((offSetX / width));
        this.setState({
            page:page
        });
    }
    begin=()=>{
        clearInterval(timer);
    }
    end=()=>{
        this.scrollTime();
    }
    componentWillMount(){
        clearInterval(timer);
    }
    render() {
        return (
            <View>
                <StatusBar backgroundColor='red' />
                <ScrollView>
                <View style={styles.top}>
                    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#fbb8b8',borderRadius:20,width:515*s}}>
                        <Icon name='search' style={{marginLeft:20}} size='lg' color='#ffffff'/>
                        <TextInput placeholder='请输入您要的关键字' placeholderTextColor='#ffffff'/>
                    </View>
                    <Icon name='shopping-cart' color='#ffffff' size='lg'/>
                </View>
                <View>
                    <ScrollView ref="scrollView"
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}                  
                        onMomentumScrollEnd={(scrollView)=>this.scroll(scrollView)}
                        onScrollBeginDrag={this.begin.bind(this)}
                        onScrollEndDrag={this.begin.bind(this)}>
                        <View style={styles.img}><Image  source={require('../../images/ban_02.png')} style={{width:'100%',height:'100%'}}/></View>
                        <View style={styles.img}><Image  source={require('../../images/ban_02.png')} style={{width:'100%',height:'100%'}}/></View>
                        <View style={styles.img}><Image  source={require('../../images/ban_02.png')} style={{width:'100%',height:'100%'}}/></View>
                    </ScrollView>
                    <View style={styles.circle}>
                        {
                            [0,1,2].map((item)=>{
                                var style =item== this.state.page ? {color: 'orange'} : {color: 'white'};
                                return <Text key={item} style={[{fontSize:40,margin:5}, style]}>&bull;</Text>;
                            })
                        }
                    </View>
                </View>
                <FlatList data={list} renderItem={({item})=>(
                    <View style={styles.list}>
                        <Image source={item.img} style={{marginRight:20,width:70,height:70}}/>
                        <Text style={{fontSize:18,color:'#333333'}}>{item.text}</Text>
                    </View>
                )}/>
                <View style={{alignItems:'center',marginTop:25}}>
                    <View style={styles.btn1}><Text style={{color:'#ffffff',fontSize:18}}>发布需求</Text></View>
                    <Text style={{marginTop:30,color:'#767676',fontSize:13}}>@E族之家 版权所有</Text>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    top:{
        flexDirection:'row',
        paddingLeft:20,
        backgroundColor:'red',
        height:77*s,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        alignItems:'center',
        justifyContent:'space-around'
    },
    img:{
        flexGrow:1,
        width:width,
        justifyContent:'center',
        alignItems:'center',
        height:250*s
    },
    circle:{
        width: width,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        justifyContent:'center'
    },
    list:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:6,
        height:90,
        backgroundColor:'#ffffff',
        paddingLeft:20
    },
    btn1:{
        alignItems:'center',
        justifyContent:'center',
        height:55,
        width:530*s,
        borderRadius:7,
        backgroundColor:'red'
    }
});
