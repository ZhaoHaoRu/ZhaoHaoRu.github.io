---
layout: post
title:  "react-navigation 6.x 使用指南 (3)"
author: "Haoru"
comments: true
date: 2022-09-18
tags: React-Native
excerpt_separator: <!--more-->
# sticky: true
# hidden: true
---
<!--more-->

目前react-navigation的官方文档已经更新到了`6.x`版本，在[官方文档](https://reactnavigation.org/docs/getting-started/)中对于其基本的使用方法也有所介绍，但是对于一些比较复杂的使用场景，或者传参等细节问题并没有给出详细的解决方案。

在这篇文章中，我将介绍不同页面之间参数的传递和 `Link`的使用。

## 页面导航与参数传递
### navigation.navigate & navigation.replace
在[官方文档](https://reactnavigation.org/docs/params)中给出了`navigation.navigate`参数传递的基本方式：
```js
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
    return (
        ......
        <Button
            title="Go to Details"
            onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('Details', {
                itemId: 86,
                otherParam: 'anything you want here',
            });
            }}
        />
        ......
    );
}

function DetailsScreen({ route, navigation }) {
    /* 2. Get the param */
    const { itemId } = route.params;
    const { otherParam } = route.params;
    return (
    ......
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```
如果需要传递参数，需要在函数上加入`navigation`的参数，如果需要接受接受参数, 则需要加入`route`并使用`route.params`获得参数。

`navigation.replace`和`navigation.navigate`传递参数的方式是一样的，区别是`navigation.navigate`相当于新压入一个页面，回退的时候还是会回退到当前页面，`navigation.replace`是以新页面替换掉了当前页面。

## Link的使用以及参数传递
使用`Link`也可以帮助我们在不同页面之间进行导航，与`navigation.navigate`相比，`Link`更加自由，因为它不需要在函数上加上`navigation`的参数。

### 基本用法
在[官方文档](https://reactnavigation.org/docs/link/)提供了基本的用法。

### 参数传递和接收
```js
import {Link} from '@react-navigation/native';
...

// 参数的传出
const Card = ({props, userId}) => {
    ...
    return (
        ...
            <Link{% raw %}
            to={{
                screen: 'Detail',
                initial: false,
                params: {props: props, userId: userId},
            }}>{% endraw %}
                <Text mt={0.02 * w} color="#71717a" bold size="xl">
                    {title}
                </Text>
            </Link>
        ...
        </Box>
    );
};

// 参数的接受
const DetailScreen = ({route}) => {
    // console.log('detail screen', route.params);
    const {props} = route.params;
    const {userId} = route.params;
    const {groupId} = props.groupId;

    return (
        <>
        ...
        </>
    );
};
```

在使用`Link`的时候,`screen`是我们希望导航到的页面名字（这个名字必须已经在`Navigator`中定义过了），`params`中使用`key:value`方式传递参数，在目标页面使用`route.params`接受参数（注意在函数参数中一定要加入`route`）。


## 结语
通过这三篇文章，我基本上将我所接触到的`react-navigation`的基本用法和使用中遇到问题的解决方案做了介绍。`react-navigation`的更新还是非常快速的，并且相对于历史版本，语法上有了比较大的变动，最后还是要以[官方文档](https://reactnavigation.org/docs/getting-started/)作为最重要的参考。