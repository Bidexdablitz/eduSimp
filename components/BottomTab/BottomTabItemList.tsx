import { BottomTabBarProps, BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import useStyles from "../../custom_hooks/useStyles";
import BottomTabStyles from "./BottomTabStyles";
import { StyleSheet } from "react-native";
import { SharedValue } from "react-native-reanimated";
import { NavigationHelpers, ParamListBase } from "@react-navigation/native";

interface Props {
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
    Tabs: {
        list: {
            name: any;
            isFocused: boolean;
            Icon: ((props: { focused: boolean; color: string; size: number }) => React.ReactNode) | undefined;
        }[];
        activeIcon: any;
    };
    activeCase: any;
    activeCaseTranslate: SharedValue<number>;
}

function BottomTabItemList({ navigation, Tabs, activeCase, activeCaseTranslate }: Props) {
    const styles = useStyles(BottomTabStyles);

    return (
        <View style={[styles.itemsWrapper, StyleSheet.absoluteFill]}>
            {Tabs.list.map((item: any, index: number) => (
                <TabItem
                    item={item}
                    navigation={navigation}
                    key={index}
                    activeCase={activeCase}
                    activeCaseTranslate={activeCaseTranslate}
                />
            ))}
        </View>
    );
}

function TabItem({ item, navigation, activeCase, activeCaseTranslate }: any) {
    const styles = useStyles(BottomTabStyles);
    const size = 20;
    return (
        <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate(item.name)}>
            <item.Icon
                focused={item.isFocused}
                fill={styles.icon.backgroundColor}
                stroke={styles.icon.borderColor}
                width={size}
                height={size}
                strokeWidth={1}
                activeCase={activeCase}
                activeCaseTranslate={activeCaseTranslate}
            />
        </TouchableOpacity>
    );
}

export default BottomTabItemList;
