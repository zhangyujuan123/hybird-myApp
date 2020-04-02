import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, ScrollView, ToastAndroid,StyleSheet } from 'react-native'


export default class MyPut extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            page:1
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=15&page='+this.state.page)
        .then(res => res.json())
        .then(res => {
                this.setState({data:res.data})
            }
        )
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.page!=this.state.page){
            fetch('https://cnodejs.org/api/v1/topics?limit=15&page='+this.state.page)
            .then(res => res.json())
            .then(res => {
                    this.setState({data:res.data})
                }
            )
        }
    }
    upPage=()=>{
        if(this.state.page==1){
            ToastAndroid.show('已到头了',100)
        }else{
            var num=this.state.page-1;
            this.setState({
                page:num
            })
        }
    }
    nextPage=()=>{
        var num=this.state.page+1;
        this.setState({
            page:num
        })
    }
    render() {
        return (
            <View style={{backgroundColor:'#fff'}}>
                <ScrollView>
                <View>
                {
                    this.state.data.map((item,idx)=>{
                        
                        var time=item.create_at.split('T');
                        
                        if(item.title.length>15){
                            var tit=item.title.substring(0,15);
                            item.title=tit+'...';
                        }
                        item.msg=Math.random();
                        if(item.msg>0.5){
                            return (<View style={{flexDirection:'row',paddingTop:20,paddingLeft:15}}>
                                <Text style={{width:'60%'}}>{item.title}</Text>
                                <Text style={{width:'25%'}}>{time[0]}</Text>
                                <Text style={{width:'33%'}}>已回复</Text>
                            </View>)
                        }
                        else{
                            return (<View style={{flexDirection:'row',paddingTop:20,paddingLeft:15}}>
                                <Text style={{width:'60%'}}>{item.title}</Text>
                                <Text style={{width:'25%'}}>{time[0]}</Text>
                                <Text style={{color:'red',width:'33%'}}>待回复</Text>
                            </View>)
                        }
                    })
                }
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:50,alignItems:'center'}}>
                   <TouchableOpacity onPress={this.upPage} style={styles.page}><Text style={{color:'#ffffff'}}>上一页</Text></TouchableOpacity>
                   <Text>第{this.state.page}页</Text>
                   <TouchableOpacity onPress={this.nextPage} style={styles.page}><Text style={{color:'#ffffff'}}>下一页</Text></TouchableOpacity> 
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page:{
        backgroundColor:'red',
        padding:10,
        borderRadius:30,
        width:120,
        justifyContent:'center',
        paddingLeft:38
    }
})