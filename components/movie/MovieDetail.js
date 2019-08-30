import React,{Component} from 'react';
import {View,Text,Image,ActivityIndicator,ScrollView} from 'react-native';
export default class Cart extends Component{
    constructor(props){
        super(props);
        this.state={
            movieInfo:{},
            isLoading:true
        }
        this.getMovieDetail(props.id);
    }
    render(){
        
        return <View>
             {this.renderMovieDetail()}
        </View>
    }
    getMovieDetail=(id)=>{
        fetch('https://douban.uieee.com/v2/movie/subject/'+id)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                movieInfo:data,
                isLoading:false
            })
        })
    }
    renderMovieDetail=()=>{
        if(this.state.isLoading){
            <ActivityIndicator size="large"></ActivityIndicator>
        }else{
            //  解决豆瓣图片出现403问题，网络图片还要设置大小
            const _u=this.state.movieInfo.images.large.split('https://')[1];
            const url='https://images.weserv.nl/?url='+_u;
            return <ScrollView>
                <View style={{padding:10}}>
                <Text style={{fontWeight:'900',fontSize:24,textAlign:'center',marginBottom:16}}>{this.state.movieInfo.title}</Text>
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:url}} style={{width:200,height:280}}></Image>

                </View>
                <Text style={{lineHeight:22,marginTop:10}}>
                    &emsp;&emsp;{this.state.movieInfo.summary}</Text>
            </View>
            </ScrollView>
        }
    }
}