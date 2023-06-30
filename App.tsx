import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "react-native";
import { ThemeKeys } from "@styles/themes";
import ThemeContext from "@custom_context/ThemeContext";
import useStatusBarStyle from "@custom_hooks/useStatusBarStyle";
import Base from "@pages/Base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "@components/Drawer/Drawer";

const DrawerNavigator = createDrawerNavigator();

export default function App() {
    const [theme, setTheme] = React.useState<ThemeKeys>(ThemeKeys.Dark);

    // memoize theme
    const memoizedThemeContextValue = React.useMemo(() => {
        return { theme, setTheme };
    }, [theme, setTheme]);

    const statusBarTheme = useStatusBarStyle(theme);

    return (
        <ThemeContext.Provider value={memoizedThemeContextValue}>
            <StatusBar barStyle={statusBarTheme.content} backgroundColor={statusBarTheme.background} />
            <NavigationContainer>
                <DrawerNavigator.Navigator
                    drawerContent={Drawer}
                    screenOptions={{
                        drawerPosition: "right",
                        drawerType: "front",
                        drawerHideStatusBarOnOpen: true,
                        headerShown: false,
                    }}
                >
                    <DrawerNavigator.Screen name="Index" component={Base} />
                </DrawerNavigator.Navigator>
            </NavigationContainer>
        </ThemeContext.Provider>
    );
}
