import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../src/splash';
import Login from '../src/Login';
import Doctors from '../src/doctors';
import Dashboard from '../src/Dashboard';
import Doctorsdetails from '../src/doctorsdetails';
import { DashDrawer } from './drawerNavigation';

const Stack = createStackNavigator();

export function DashboardStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Splash} options={
                {
                    headerShown: false
                }
            } />
            <Stack.Screen name="Login" component={Login}
                options={
                    {
                        headerShown: false
                    }
                } />
            <Stack.Screen name="Dashboard" component={DashDrawer}
                options={
                    {
                        headerShown: false,
                        
                    }
                } />
            <Stack.Screen name="Doctors" component={Doctors}

                options={{
                    title: 'Doctors',
                    headerStyle: {
                        backgroundColor: '#82c7fe',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
            <Stack.Screen name="doctor" component={Doctorsdetails}

                options={{
                    title: 'Doctors',
                    headerStyle: {
                        backgroundColor: '#82c7fe',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
        </Stack.Navigator>
    );
}