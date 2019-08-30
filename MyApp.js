import React,{Component} from 'react';
import { View,Text,Image,Button,StyleSheet} from 'react-native';
//导入tabbar组件
import TabNavigator from 'react-native-tab-navigator';
//导入tabbar对应的组件
import Home from './components/tabbars/Home.js';
import Search from './components/tabbars/Search.js';
import Cart from './components/tabbars/Cart.js';
import Profile from './components/tabbars/Profile.js';
//导入icon组件
import Icon from 'react-native-vector-icons/FontAwesome';


// import console = require('console');
export default class MyApp extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedTab:'home'
        }
    }
    render(){
        return (
        <View style={styles.container}>
           
            {/* tabbar组件 */}
           <TabNavigator>
                <TabNavigator.Item 
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    renderIcon={() => <Icon name="home" size={25} color="#ccc" />}
                    renderSelectedIcon={() => <Icon name="home" size={25} color="#29ADED" />}
                   
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Home></Home>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'search'}
                    title="搜索"
                    renderIcon={() => <Icon name="search" size={25} color="#ccc" />}
                    renderSelectedIcon={() => <Icon name="search" size={25} color="#29ADED" />}
                    // renderBadge={() => <CustomBadgeView />}
                    onPress={() => this.setState({ selectedTab: 'search' })}>
                    <Search></Search>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'cart'}
                    title="购物车"
                    renderIcon={() => <Icon name="shopping-cart" size={25} color="#ccc" />}
                    renderSelectedIcon={() => <Icon name="shopping-cart" size={25} color="#29ADED" />}
                    // renderBadge={() => <CustomBadgeView />}
                     badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'cart' })}>
                    <Cart></Cart>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="我的"
                    renderIcon={() => <Icon name="user-circle-o" size={25} color="#ccc" />}
                    renderSelectedIcon={() => <Icon name="user-circle-o" size={25} color="#29ADED" />}
                    // renderBadge={() => <CustomBadgeView />}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    <Profile></Profile>
                </TabNavigator.Item>

            </TabNavigator>
        </View>
        )
    }
    
}

const styles=StyleSheet.create({
    container:{
        flex:1
         
    }
   
})