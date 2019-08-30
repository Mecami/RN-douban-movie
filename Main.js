import React,{Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import {Router,Stack,Scene} from 'react-native-router-flux';
//导入需要用到的组件
import MyApp from './MyApp.js';
import MovieList from './components/movie/MovieList.js';
import MovieDetail from './components/movie/MovieDetail.js';
export default class Main extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return (<Router> 
            {/* 一个Router下有多个Stack,而Stack里有有多个Scene。这个root中放的是可能要显示的组件 */}
            <Stack key="root">
                {/* 默认第一个scene是第一个被显示的，注意Scene里的key不能有大写！！！！ */}
                <Scene key="app" component={MyApp} title="app组件" hideNavBar={true}></Scene>
                <Scene key="movielist" component={MovieList} title="首页" ></Scene>
                <Scene key="moviedetail" component={MovieDetail} title="电影列表" ></Scene>

            </Stack>
        </Router>)
    }
}

const styles = StyleSheet.create({

})
