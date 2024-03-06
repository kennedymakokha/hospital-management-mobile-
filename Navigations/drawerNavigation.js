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
                            backgroundColor: 'transparent',
                            elevation:0
                        },
                        // headerShown: false
                    }
                } component={Dashboard} />
            <Drawer.Screen name="Setting" component={SettingScreen} />
        </Drawer.Navigator>
    );
}