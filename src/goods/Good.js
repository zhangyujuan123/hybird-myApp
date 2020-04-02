
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Good= () => {
  return (
    <>
      <StatusBar backgroundColor='red' />
      <SafeAreaView style={{backgroundColor:'#ffffff'}}>
        <ScrollView>
          <View style={{flexDirection:'row',justifyContent:'center',height:49,marginTop:10}}>
            <View style={{flexDirection:'row',width:'80%',backgroundColor:'#eeeeee',paddingLeft:12,alignItems:'center',justifyContent:'space-between',borderRadius:3}}>
              <TextInput placeholder='请输入商品名称' placeholderTextColor='#9f9f9f'/>
              <Image source={require('../../images/1.png')} style={{marginRight:'6%'}}/>
            </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',flexWrap:'wrap',marginLeft:'5%',marginRight:'5%'}}>
            <View style={styles.box1}>
              <Text style={{color:'#f23030'}}>综合</Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.text1}>销量</Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.text1}>新品</Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.text1}>价格</Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.text1}>信用</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap',padding:10,backgroundColor:'#f4f4f4'}}>
            <View style={styles.box2}>
                <View style={{alignItems:'center'}}>
                <Image source={require('../../images/2_07.png')} style={{width:100,height:120,marginTop:40}}/>
                </View>
                <Text style={{marginTop:45,marginLeft:'5%',marginRight:'5%',color:'#666666'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                <Text style={{marginLeft:'5%',color:'#f23030',marginTop:'4%'}}>36.00</Text>
            </View>
            <View style={styles.box2}>
                <View style={{alignItems:'center'}}>
                <Image source={require('../../images/1_09.png')} style={{width:130,height:130,marginTop:40}}/>
                </View>
                <Text style={{marginTop:35,marginLeft:'5%',marginRight:'5%',color:'#666666'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                <Text style={{marginLeft:'5%',color:'#f23030',marginTop:'4%'}}>36.00</Text>
            </View>
            <View style={styles.box2}>
                <View style={{alignItems:'center'}}>
                <Image source={require('../../images/2_07.png')} style={{width:100,height:120,marginTop:40}}/>
                </View>
                <Text style={{marginTop:45,marginLeft:'5%',marginRight:'5%',color:'#666666'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                <Text style={{marginLeft:'5%',color:'#f23030',marginTop:'4%'}}>36.00</Text>
            </View>
            <View style={styles.box2}>
                <View style={{alignItems:'center'}}>
                <Image source={require('../../images/1_09.png')} style={{width:130,height:130,marginTop:40}}/>
                </View>
                <Text style={{marginTop:35,marginLeft:'5%',marginRight:'5%',color:'#666666'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                <Text style={{marginLeft:'5%',color:'#f23030',marginTop:'4%'}}>36.00</Text>
            </View>
            <View style={styles.box2}>
                <View style={{alignItems:'center'}}>
                <Image source={require('../../images/2_07.png')} style={{width:100,height:120,marginTop:40}}/>
                </View>
                <Text style={{marginTop:45,marginLeft:'5%',marginRight:'5%',color:'#666666'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                <Text style={{marginLeft:'5%',color:'#f23030',marginTop:'4%'}}>36.00</Text>
            </View>
            <View style={styles.box2}>
                <View style={{alignItems:'center'}}>
                <Image source={require('../../images/1_09.png')} style={{width:130,height:130,marginTop:40}}/>
                </View>
                <Text style={{marginTop:35,marginLeft:'5%',marginRight:'5%',color:'#666666'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                <Text style={{marginLeft:'5%',color:'#f23030',marginTop:'4%'}}>36.00</Text>
            </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  box1:{
    width:'20%',
    height:60,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center'
  },
  text1:{
    color:'#333333'
  },
  box2:{
    width:'48.5%',
    height:285,
    backgroundColor:'#ffffff',
    marginBottom:10
  }
});

export default Good;
