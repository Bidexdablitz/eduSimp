import { StyleType } from "../custom_hooks/useStyles";
import themes, { ThemeKeys } from "./themes";
import { StyleSheet } from "react-native";

interface BottomTabStyleType {
    container: StyleType;
    backDropSvg: StyleType;
    touchable: StyleType;
    text: StyleType;
    itemsWrapper: StyleType;
    icon: StyleType;
    activeIcon: StyleType;
    activeIconCase: StyleType;
}

export default function BottomTabStyles(theme: ThemeKeys) {
    const styles: BottomTabStyleType = {
        container: {
            bottom: 0,
            left: 0,
            right: 0,
            position: "absolute",
        },
        touchable: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        text: { color: themes[theme].bottomTab.color },
        itemsWrapper: {
            flex: 1,
            gap: 5,
            flexDirection: "row",
            justifyContent: "space-around",
            paddingHorizontal: 10,
        },
        backDropSvg: {
            backgroundColor: themes[theme].bottomTab.backgroundColor,
        },
        icon: {
            backgroundColor: themes[theme].bottomTab.icon.backgroundColor,
            borderColor: themes[theme].bottomTab.icon.borderColor,
        },
        activeIcon: {
            backgroundColor: themes[theme].bottomTab.activeIcon.backgroundColor,
            borderColor: themes[theme].bottomTab.activeIcon.borderColor,
        },
        activeIconCase: {
            ...StyleSheet.absoluteFillObject,
            borderRadius: 50,
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: themes[theme].bottomTab.backgroundColor,
        },
    };
    return styles;
}
