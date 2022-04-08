import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import MarketScreen from "../screens/MarketScreen"
import SettingScreen from "../screens/SettingScreen"
import NewsScreen from "../screens/NewsScreen"
import PortofolioScreen from "../screens/PortofolioScreen"
import SearchScreen from "../screens/SearchScreen"

import LoginDetailScreen from "../screens/detail_screens/LoginDetailScreen"
import SignupDetailScreen from "../screens/detail_screens/SignupDetailScreen"
import NewsDetailScreen from "../screens/detail_screens/NewsDetailScreen"
import SearchDetailScreen from "../screens/detail_screens/SearchDetailScreen"
import PortofolioDetailScreen from "../screens/detail_screens/PortofolioDetailScreen"
import CoinDetailScreen from "../screens/detail_screens/CoinDetailScreen"

import { AntDesign } from '@expo/vector-icons';

const ProtofolioStack = createStackNavigator();

const PortofolioStackNavigator = () => {
    return (
        <ProtofolioStack.Navigator >
            <ProtofolioStack.Screen name="PortofolioStack" component={PortofolioScreen} options={{ headerShown: false }} />
            <ProtofolioStack.Screen name="LoginDetail" component={LoginDetailScreen} options={{ headerShown: false }} />
            <ProtofolioStack.Screen name="SignupDetail" component={SignupDetailScreen} options={{ headerShown: false }} />
            <ProtofolioStack.Screen name="PortofolioDetail" component={PortofolioDetailScreen} options={{ headerShown: false }} />
            <ProtofolioStack.Screen name="CoinDetail" component={CoinDetailScreen} options={{ headerShown: false }} />
            <MarketStack.Screen name="WatchDetail" component={SearchDetailScreen} options={{ headerShown: false }}  />
        </ProtofolioStack.Navigator>
    );
};

const SearchStack = createStackNavigator();

const SearchStackNavigator = () => {
    return (
        <SearchStack.Navigator >
            <SearchStack.Screen name="SearchStack" component={SearchScreen} options={{ headerShown: false }}/>
            <SearchStack.Screen name="SearchDetail" component={SearchDetailScreen} options={{ headerShown: false }} />
        </SearchStack.Navigator>
    );
};

const NewsStack = createStackNavigator();

const NewsStackNavigator = () => {
    return (
        <NewsStack.Navigator >
            <NewsStack.Screen name="NewsStack" component={NewsScreen}  options={{ headerShown: false }} />
            <NewsStack.Screen name="NewsDetail" component={NewsDetailScreen} options={{ headerShown: false }}  />
        </NewsStack.Navigator>
    );
};

const MarketStack = createStackNavigator();

const MarketStackNavigator = () => {
    return (
        <MarketStack.Navigator >
            <MarketStack.Screen name="MarketStack" component={MarketScreen}  options={{ headerShown: false }} />
            <MarketStack.Screen name="MarketDetail" component={SearchDetailScreen} options={{ headerShown: false }}  />
        </MarketStack.Navigator>
    );
};

const Tab = createBottomTabNavigator();

const TabNav = ({ colorTheme }) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Market') {
                        return <AntDesign name="areachart" size={size} color={color} />;
                    } else if (route.name === 'Portofolio') {
                        return <AntDesign name="staro" size={size} color={color} />;
                    } else if (route.name === 'Search') {
                        return <AntDesign name="search1" size={size} color={color} />;
                    } else if (route.name === 'News') {
                        return <AntDesign name="info" size={size} color={color} />;
                    } 
                    // else if (route.name === 'Setting') {
                    //     return <AntDesign name="setting" size={size} color={color} />;
                    // }
                },
                tabBarActiveTintColor: '#80BF3D',
            })}>
            <Tab.Screen
                name="Market"
                component={MarketStackNavigator}
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getTabBarVisibility(route),
                    },
                    headerShown: false,
                })}
            />
            <Tab.Screen
                name="Portofolio"
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getTabBarVisibility(route),
                    },
                    headerShown: false,
                })}
                component={PortofolioStackNavigator}
            />
            <Tab.Screen
                name="Search"
                component={SearchStackNavigator}
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getTabBarVisibility(route),
                    },
                    headerShown: false,
                })}
            />
            <Tab.Screen
                name="News"
                component={NewsStackNavigator}
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getTabBarVisibility(route),
                    },
                    headerShown: false,
                })}
            />
            {/* <Tab.Screen
                name="Setting"
                component={SettingScreen}
            /> */}
        </Tab.Navigator>
    )
}

const getTabBarVisibility = route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    if (routeName == 'LoginDetail') {
        return 'none';
    } else if (routeName == 'SignupDetail') {
        return 'none';
    } else if (routeName == 'NewsDetail') {
        return 'none';
    } else if (routeName == 'SearchDetail') {
        return 'none';
    } else if (routeName == 'WatchDetail') {
        return 'none';
    }
    return 'flex';
};

export default TabNav