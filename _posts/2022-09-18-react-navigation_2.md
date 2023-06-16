---
layout: post
title:  "react-navigation 6.x 使用指南 (2)"
author: "Haoru"
comments: true
date: 2022-09-18
tags: React-Native
excerpt_separator: <!--more-->
# sticky: true
# hidden: true
---
react-navigation 6.x版本的安装、传参、navigator的使用等介绍（part2）。
<!--more-->

目前react-navigation的官方文档已经更新到了`6.x`版本，在[官方文档](https://reactnavigation.org/docs/getting-started/)中对于其基本的使用方法也有所介绍，但是对于一些比较复杂的使用场景，或者传参等细节问题并没有给出详细的解决方案。

在这篇文章中，我将介绍`Native Stack Navigator`的使用以及`Drawer Navigation`的使用。

## Native Stack Navigator 
### 基本用法
如果不想显示任何导航栏，`stack navigator`无疑是个最好的选择，这是最基本的页面导航，它维护了一个栈结构，进入一个页面相当于在栈里压入了一个页面，返回操作相当于在栈中弹出一个页面。在[官方文档](https://reactnavigation.org/docs/native-stack-navigator/)给出了基本的用法：

```js
import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
```
这里`createNativeStackNavigator`创建了一个`stack`,在不同的页面之间，点击`Button`触发`navigation.navigate`导航到特定名字的页面，或者触发`navigation.goBack`返回上一级页面，如果我们使用的是真机的话，后退手势也可以返回上一级页面。实现的效果如下：

<img src="/assets/my_pics/stack%2000_00_00-00_00_30.gif" alt="show" />

同样，这里默认还是会显示header的，如果我们不想显示header的话，也可以在`Stack.Navigator`里面添加`headerShown: false`属性，原则上第一个页面是打开的默认页面，我们也可以使用`initialRouteName`指定默认页面，如下所示：
```js
<Stack.Navigator 
    initialRouteName="Notifications"{% raw %}
    screenOptions={{headerShown: false}}{% endraw %}
    >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Notifications" component={NotificationsScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
</Stack.Navigator>
```
### 进阶：不同navigator之间的嵌套
如果我们希望做一个购物网站，浏览页底部显示tab导航栏，详情页面等一些页面不显示底部的tab导航栏，那我们可以将tab导航栏包裹后作为一个`stack.screen`，而其他不需要显示底部tab导航栏的也作为同级的`stack.screen`，示例如下：

```js
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Route = createNativeStackNavigator();

export function TabWrapper() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="首页"
        component={HomeScreenWrapper}
        options={{headerShown: false}}
      />
      .....
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Route.Navigator
          initialRouteName="Welcome"
          screenOptions={{headerShown: false}}>
          <Route.Screen name="Detail" component={DetailScreen} />
          ......
          <Route.Screen
            name="TabWrapper"
            component={TabWrapper}
            options={{headerShown: false}}
          />
        </Route.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
```

## Drawer Navigation
### 基本用法
`Drawer Navigation`实现了一个左侧的可收起导航栏，基本使用方法可见[官方文档](https://reactnavigation.org/docs/drawer-based-navigation)
```js
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
```
在`Drawer Navigator`中也可以用触发`navigation.navigate`导航到特定名字的页面，或者触发`navigation.goBack`返回上一级页面,或者使用真机回退手势实现页面的回退；和`Tab Navigator`一样，同样也可以将`Drawer Navigator`嵌套到`Stack Navigator`。样例的效果如下：

<img src="/assets/my_pics/drawer%2000_00_00-00_00_30.gif" alt="show" />


### 进阶：参数传递
假如我们希望使用`Drawer Navigator`实现一个分类页面，渲染效果基本相同，但是传递的参数不同导致内容不同，为了不简单地将渲染效果的代码简单复制粘贴多遍，造成大量代码冗余，我们可以使用一个`SwitchScreen{i}`作为中间桥梁，不同的`SwitchScreen`向最终渲染效果的`RenderScreen`传递不同的参数，代码如下：
```js
import React, {useState} from 'react';
import {ActivityIndicator, Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';


const RenderScreen = props => {
    console.log('RenderScreen props:', props);

    React.useEffect(() => {
        ....
        }
    }, []);

    return (
        .....
    );
};

// SwtichScreen 用于不同类别页面的渲染，起到桥梁作用
function SwitchScreen1() {
  return <RenderScreen props="默认" />;
}

function SwitchScreen2() {
  return <RenderScreen props="类别1" />;
}

function SwitchScreen3() {
  return <RenderScreen props="类别2" />;
}

function SwitchScreen4() {
  return <RenderScreen props="类别3" />;
}

function SwitchScreen5() {
  return <RenderScreen props="类别4" />;
}

function SwitchScreen6() {
  return <RenderScreen props="类别5" />;
}

const Drawer = createDrawerNavigator();

export default function BrowseScreen() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="默认"
      drawerBackgroundColor="#fda4af">
      <Drawer.Screen name="默认" component={SwitchScreen1} />
      <Drawer.Screen name="类别1" component={SwitchScreen2} />
      <Drawer.Screen name="类别2" component={SwitchScreen3} />
      <Drawer.Screen name="类别3" component={SwitchScreen4} />
      <Drawer.Screen name="类别4" component={SwitchScreen5} />
      <Drawer.Screen name="类别5" component={SwitchScreen6} />
    </Drawer.Navigator>
  );
```
