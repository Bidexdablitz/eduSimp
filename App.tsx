import * as React from "react";
import { StatusBar, Text } from "react-native";
import { ThemeKeys } from "./styles/themes";
import ThemeContext from "./custom_context/ThemeContext";
import useStatusBarStyle from "./custom_hooks/useStatusBarStyle";
import Base from "./components/Base";

export default function App() {
    const [theme, setTheme] = React.useState<ThemeKeys>(ThemeKeys.Dark);

    // memoize setTheme
    const memoizedSetTheme = React.useCallback(setTheme, [setTheme]);
    const memoizedThemeContextValue = React.useMemo(
        () => ({ theme, setTheme: memoizedSetTheme }),
        [theme, memoizedSetTheme]
    );
    const statusBarTheme = useStatusBarStyle(theme);

    return (
        <ThemeContext.Provider value={memoizedThemeContextValue}>
            <StatusBar barStyle={statusBarTheme.content} backgroundColor={statusBarTheme.background} />
            <Base />
        </ThemeContext.Provider>
    );
}
