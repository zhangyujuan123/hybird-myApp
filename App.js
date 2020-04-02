
import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity,
  ToastAndroid,
  AsyncStorage,
  Modal,
  BackHandler
} from 'react-native';
import {Router,Scene,Tabs} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen'
import Home from './src/home/Home';
import Good from './src/goods/Good';
import Login from './src/common/Login'
import MyPage from './src/userinfor/MyPage';
import { Grid, Icon } from '@ant-design/react-native';
import MyPut from './src/userinfor/MyPut';
import SwiperPage from './src/common/SwiperPage';
import Register from './src/common/Register';
import {Actions} from 'react-native-router-flux';




const App= () => {
  let [isLogin,setLogin]=useState(false);
  let [isInstall,setInstall]=useState(true);
  let now=0;
  let init=()=>{
    AsyncStorage.getItem('isInstall')
     .then(res=>{
       if(res){
         setInstall(false);
       }
     })
    AsyncStorage.getItem('user')
      .then(res=>{
        let user=JSON.parse(res)
        if(!user){
          SplashScreen.hide();
        }
        if(user&&user.token){
          setLogin(true);
          SplashScreen.hide();
        }
        console.log(res)
      })
  }
  useEffect(() => {
    init();
  }, [])
  let afterInstall=()=>{
    console.log('after install');
    setInstall(false);
  }
  if(isInstall){
    return <View style={{flex:1}}><SwiperPage afterInstall={afterInstall}/></View>
  }

  return (
        <Router backAndroidHandler={()=>{
          console.log('name='+Actions.currentScene);
          if(Actions.currentScene != '_home'&&Actions.currentScene != 'login'&&Actions.currentScene != '_login'){
            if(Actions.currentScene == '_good'||Actions.currentScene == '_my'){
              Actions.home();
              return true;
            }
            Actions.pop();
            return true;
          }else{
            if(new Date().getTime()-now<2000){
              BackHandler.exitApp();
            }else{
              ToastAndroid.show('确定要退出吗',100);
              now = new Date().getTime();
              return true;
            }
          }
        }}>
          <Modal key='modal' hideNavBar>
          <Scene key='root'>
              <Tabs key='tabbar'
              hideNavBar
              activeTintColor='red'
              inactiveTintColor='#666666'
              tabBarStyle={{backgroundColor:'#ffffff'}}
              >
                <Scene key='home' title='首页' hideNavBar={true} component={Home} 
                   icon={({focused})=><Icon color={focused?'red':'#666666'} name='home'/>}/>
                <Scene key='good' title='商品分类' hideNavBar={true} component={Good} icon={({focused})=><Icon color={focused?'red':'#666666'} name='appstore'/>}/>
                {/* <Scene key='shop' title='购物车' hideNavBar={true} component={Shop} icon={({focused})=><Icon color={focused?'red':'#666666'} name='shop'/>}/> */}
                <Scene key='my' title='个人中心' hideNavBar={true} icon={({focused})=><Icon color={focused?'red':'#666666'} name='user'/>}>
                  <Scene key='mypage' component={MyPage}/>
                </Scene>
              </Tabs>
              <Scene key='put' component={MyPut} title='我的发布' titleStyle={{textAlign:'center',flex:1,color:'#ffffff'}} renderRightButton={<Icon name='ellipsis' color='#ffffff' size='lg' style={{marginRight:20}}/>} navigationBarStyle={{backgroundColor:'#f23030',color:'#ffffff'}} navBarButtonColor='#ffffff' />
          </Scene>
          <Scene key='login' initial={!isLogin} component={Login}/>
          <Scene key='register' component={Register}/>
          </Modal>
        </Router>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
