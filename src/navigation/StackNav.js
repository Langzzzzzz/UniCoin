import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NewsScreen from "../screens/NewsScreen"
import PortofolioScreen from "../screens/PortofolioScreen"
import SearchScreen from "../screens/SearchScreen"

import LoginDetailScreen from "../screens/detail_screens/LoginDetailScreen"
import SignupDetailScreen from "../screens/detail_screens/SignupDetailScreen"
import NewsDetailScreen from "../screens/detail_screens/NewsDetailScreen"
import SearchDetailScreen from "../screens/detail_screens/SearchDetailScreen"
import PortofolioDetailScreen from "../screens/detail_screens/PortofolioDetailScreen"

const ProtofolioStack = createStackNavigator();

const PortofolioStackNavigator = () => {
  return (
    <ProtofolioStack.Navigator >
      <ProtofolioStack.Screen name="PortofolioStack" component={PortofolioScreen} options={{headerShown:false}} />
      <ProtofolioStack.Screen name="LoginDetail" component={LoginDetailScreen} />
      <ProtofolioStack.Screen name="SignupDetail" component={SignupDetailScreen} options={{headerShown:false}} />
      <ProtofolioStack.Screen name="PortofolioDetail" component={PortofolioDetailScreen} options={{headerShown:false}} />
    </ProtofolioStack.Navigator>
  );
};

const SearchStack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator >
      <SearchStack.Screen name="SearchStack" component={SearchScreen} />
      <SearchStack.Screen name="SearchDetail" component={SearchDetailScreen} />
    </SearchStack.Navigator>
  );
};

const NewsStack = createStackNavigator();

const NewsStackNavigator = () => {
    return (
      <NewsStack.Navigator >
        <NewsStack.Screen name="NewsStack" component={NewsScreen} />
        <NewsStack.Screen name="NewsDetail" component={NewsDetailScreen} />
      </NewsStack.Navigator>
    );
};

export { PortofolioStackNavigator, SearchStackNavigator, NewsStackNavigator };