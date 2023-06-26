import * as React from "react";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import ThemeContext from "../custom_context/ThemeContext";
import { ThemeKeys } from "../styles/themes";

export type StyleType = ViewStyle | TextStyle | ImageStyle;

export default function useStyles<T extends StyleSheet.NamedStyles<T>>(
    styleFormatter: (theme: ThemeKeys) => T
) {
    const { theme } = React.useContext(ThemeContext)!;
    return React.useMemo(() => StyleSheet.create(styleFormatter(theme)), [theme]);
}
