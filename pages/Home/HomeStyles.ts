import themes, { ThemeKeys } from "../../styles/themes";
import Constants from "expo-constants";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { StyleType } from "../../custom_hooks/useStyles";

interface HomeStyleType {
    container: StyleType;
    button: StyleType;
}

export default function HomeStyles(theme: ThemeKeys) {
    const styles: HomeStyleType = {
        container: {
            flex: 1,
            // paddingTop: Constants.statusBarHeight,
            backgroundColor: themes[theme].backgroundColor,
            marginTop: "auto",
        },
        button: {
            fontSize: 20,
            fontWeight: "bold",
            textTransform: "capitalize",
            color: themes[theme].color,
            alignSelf: "flex-end",
        },
    };
    return styles;
}
