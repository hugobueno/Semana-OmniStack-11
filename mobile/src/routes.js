import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const AppStack = createStackNavigator()
import Insidents from './pages/Insidents'
import Detail from './pages/Detail'





export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="Insidents" component={Insidents} />
                <AppStack.Screen name="Detail" component={Detail} />
                
            </AppStack.Navigator>
        </NavigationContainer>

    )
}