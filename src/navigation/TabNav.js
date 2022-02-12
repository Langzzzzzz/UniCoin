import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MarketScreen from "../screens/MarketScreen"
import NewsScreen from "../screens/NewsScreen"
import PortofolioScreen from "../screens/PortofolioScreen"
import SearchScreen from "../screens/SearchScreen"
import SettingScreen from "../screens/SettingScreen"
import { AntDesign } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const TabNav = ({colorTheme}) => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                if (route.name === 'Market') {
                    return <AntDesign name="areachart" size={size} color={color} />;
                } else if (route.name === 'Portofolio') {
                    return <AntDesign name="staro" size={size} color={color} />;
                } else if (route.name === 'Search') {
                    return <AntDesign name="search1" size={size} color={color} />;
                } else if (route.name === 'News') {
                    return <AntDesign name="info" size={size} color={color} />;
                } else if (route.name === 'Setting') {
                    return <AntDesign name="setting" size={size} color={color} />;
                }
                },
                tabBarActiveTintColor: '#80BF3D',
        })}>
            <Tab.Screen
                name="Market"
                component={MarketScreen}
                options={{headerShown:false}}
            />
            <Tab.Screen
                name="Portofolio"
                component={PortofolioScreen}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
            />
            <Tab.Screen
                name="News"
                component={NewsScreen}
            />
            <Tab.Screen
                name="Setting"
                component={SettingScreen}
            />
        </Tab.Navigator>
    )
}

export default TabNav