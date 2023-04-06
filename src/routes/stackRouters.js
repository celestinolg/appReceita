import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../pages/home/Home';
import Detail from '../pages/detail/Detail';
import Search from '../pages/search/Search';


const Stack = createNativeStackNavigator();

export function StackRouters(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Home' 
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='Detail' 
                component={Detail} 
                options={{
                    title:'Detalhes da receita'
                }}
            />
            <Stack.Screen 
                name='Search' 
                component={Search} 
                options={{
                    title:'Veja o que econtramos'
                }}
            />
        </Stack.Navigator>
    );
}