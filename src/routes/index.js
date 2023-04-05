import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../pages/home/Home';
import Favorites from '../pages/favorites/Favorites';

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#121212",

                tabBarStyle:{
                    backgroundColor: '#fff',
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen
                name='HomeTab' 
                component={Home}
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        return (focused)?
                             <Ionicons name='home' color="#000" size={size} />
                            : <Ionicons name='home-outline' color={color} size={size} />
                    }
                }} 
            />
            
            <Tab.Screen 
                name='Favorites' 
                component={Favorites} 
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        return (focused)? 
                            <Ionicons name='heart' color="#ff4141" size={size} />
                            : <Ionicons name='heart-outline' color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    );
}