import React,{Component} from 'react';
import {View,Text,ActivityIndicator,FlatList,Image,TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
 
export default class MovieList extends Component{
    constructor(props){
        super(props);
        this.state={
            movieList:[],
            nowPage:1,
            pageSize:15,
            totalPage:0,
            isLoading:true
        }
        //组件加载的时候发送请求获取数据
        this.getMovieList();
    }
    render(){
        return <View>
             {this.renderList()}
        </View>
    }
    getMovieList=()=>{
        const start=this.state.pageSize*(this.state.nowPage-1);
        const url=`https://douban.uieee.com/v2/movie/in_theaters?start=${start}&count=${this.state.pageSize}`;
        fetch(url)
            .then(res=>res.json())
            .then(data=>{
                 
                 this.setState({
                     isLoading:false,
                     movieList:this.state.movieList.concat(data.subjects),
                     totalPage:Math.ceil(data.total/this.state.pageSize)
                 })
            })
    }
    renderList=()=>{
        if(this.state.isLoading){
            return <ActivityIndicator size="large"></ActivityIndicator>
        }else{
            // return <Text>{this.state.movieList.length}</Text>
            return <FlatList
            data={this.state.movieList}
            keyExtractor={(item,i)=>i}
            renderItem={({item})=>this.renderItem(item)}
            ItemSeparatorComponent={this.itemSeparator}
            onEndReachedThreshold={0.5}
            onEndReached={this.getNextPage}
             />
        }
    }
    renderItem=(item)=>{
         //解决豆瓣图片出现403问题，网络图片还要设置大小
        const _u=item.images.small.split('https://')[1];
        const url='https://images.weserv.nl/?url='+_u;

        return <TouchableHighlight onPress={()=>{Actions.moviedetail({id:item.id})}}>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={{uri:url}} style={{width:100,height:140}}></Image>
              <View style={{justifyContent:'space-evenly',marginLeft:15}}>
                <Text>电影名称：{item.title}</Text>
                <Text>电影类型：{item.genres.join(',')}</Text>
                <Text>电影年份：{item.year}</Text>
                <Text>豆瓣评分：{item.rating.average}</Text>
                
              </View>
            
        </View>
        </TouchableHighlight>
    }
    itemSeparator=()=>{
        return <View style={{borderTopColor:'#ccc',borderTopWidth:1,margin:10}}></View>
    }
    getNextPage=()=>{
        if((this.state.nowPage+1)>this.state.totalPage){
            return
        }
        this.setState({
            nowPage:this.state.nowPage+1
        },function(){
            this.getMovieList();
        })
    }
    
}
