import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../src/Dashboard';

import SettingScreen from '../src/settings';

const Drawer = createDrawerNavigator();

export function DashDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="DashBoard"
                options={
                    {
                        title: '',
                        headerStyle: {
                            backgroundColor: '#4c669f',
                            elevation:0
                        },
                        drawerIcon:{}
                        // headerShown: false
                    }
                } component={Dashboard} />
            <Drawer.Screen name="Setting" component={SettingScreen} />
        </Drawer.Navigator>
    );
}

