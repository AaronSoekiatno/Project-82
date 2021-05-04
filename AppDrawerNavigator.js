import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import customSideBarMenu  from './customSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import {AppTabNavigator} from './AppTabNavigator';
import MyBarters from '../screens/MyBarters';

export const AppDrawerNavigator = createDrawerNavigator({
        Home : {
      screen : AppTabNavigator
      },
      Setting:{
        screen:SettingScreen
      },
      Barters:{
          screen:MyBarters
      }
    },
    {
      contentComponent: customSideBarMenu
    },
    {
      initialRouteName : 'Home'
    })