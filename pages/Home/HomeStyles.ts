import themes, { ThemeKeys } from "../../styles/themes";
import Constants from "expo-constants";
import { StyleType } from "../../custom_hooks/useStyles";
import { screenPadding } from "../../styles/global";

interface HomeStyleType {
    container: StyleType;
    button: StyleType;
}

export default function HomeStyles(theme: ThemeKeys) {
    const styles: HomeStyleType = {
        container: {
            ...screenPadding,
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
