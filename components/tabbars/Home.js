import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,TouchableHighlight} from 'react-native';
//轮播图组件
import Swiper from 'react-native-swiper';
//导入路由跳转组件
import { Actions } from 'react-native-router-flux'; 
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            lunbotu:[]
        }
        this.getlunbo();
    }
    // componentWillMount(){
    //     this.getlunbo();
    // }
    static getDerivedStateFromProps(nextProps, prevState) {
        return null;
    }
    
    render(){
        return <View style={{backgroundColor:'#fff',flex:1}}>
             {/* 轮播图组件 */}
            <View style={{height:220}}>
                <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} loop={true}>

                    {this.state.lunbotu.map((item,i)=>{
                        return  <View key={i}>
                            <Image source={{uri:item.img}} style={{width:'100%',height:'100%'}}></Image>
                       </View>
                    })}



                </Swiper>
            </View>
            {/* 六宫格 */}
             <View style={{flexDirection:'row',flexWrap:'wrap'}}>  
                    <View style={styles.box}>
                        <Image source={require('../../images/menu1.png')} style={{width:60,height:60}}></Image>
                        <Text>新闻资讯</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../../images/menu2.png')} style={{width:60,height:60}}></Image>
                        <Text>图片分享</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../../images/menu3.png')} style={{width:60,height:60}}></Image>
                        <Text>商品购买</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../../images/menu4.png')} style={{width:60,height:60}}></Image>
                        <Text>留言反馈</Text>
                    </View>
                    
                    <TouchableHighlight onPress={this.goMovieList} style={styles.box} underlayColor="#fff">
                        <View >
                            <Image source={require('../../images/menu5.png')} style={{width:60,height:60}}></Image>
                            <Text>热映电影</Text>
                        </View>
                    </TouchableHighlight>

                    <View style={styles.box}>
                        <Image source={require('../../images/menu6.png')} style={{width:60,height:60}}></Image>
                        <Text>联系我们</Text>
                    </View>
            </View> 
             
        </View>
    }
    getlunbo=()=>{
        fetch('http://www.liulongbin.top:3005/api/getlunbo')
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    lunbotu:data.message
                })
            })
    }
    goMovieList=()=>{
        //跳到指定的坑
        Actions.movielist()
        // console.warn('22');

    }
}

const styles=StyleSheet.create({
    box:{
        width:'33.3%',
        marginTop:25,
        alignItems:'center'
    }
})
