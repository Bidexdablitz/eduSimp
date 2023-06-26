import themes, { ThemeKeys } from "../../styles/themes";
import { StyleType } from "../../custom_hooks/useStyles";
import {
    boxShadow,
    screenPadding,
    screenPaddingHorizontal,
    screenPaddingVertical,
} from "../../styles/global";
import { ImageStyle, StyleSheet } from "react-native";

interface HomeStyleType {
    container: StyleType;
    topStrip: StyleType;
    userInfo: StyleType;
    profilePicture: ImageStyle;
    userName: StyleType;
    userEmail: StyleType;
    userNameWrapper: StyleType;
}

export default function DrawerStyles(theme: ThemeKeys) {
    const styles: HomeStyleType = {
        container: {
            ...screenPaddingVertical,
            ...boxShadow,
            flex: 1,
            backgroundColor: themes[theme].backgroundColor,
        },
        topStrip: {
            ...screenPaddingHorizontal,
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            borderStyle: "solid",
            borderBottomWidth: 0.5,
            paddingBottom: 10,
        },
        userInfo: {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
        },
        profilePicture: { width: 40, borderRadius: 40, aspectRatio: "1/1" },
        userNameWrapper: { flex: 1, justifyContent: "center" },
        userName: { fontWeight: "600" },
        userEmail: { fontSize: 10 },
    };
    return styles;
}
