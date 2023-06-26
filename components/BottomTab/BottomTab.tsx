import * as React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import useStyles from "../../custom_hooks/useStyles";
import BottomTabStyles from "./BottomTabStyles";
import BottomTabSvg from "./BottomTabSvg";
import Animated, { useAnimatedStyle, useSharedValue, FadeInDown, FadeOutDown } from "react-native-reanimated";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import BottomTabItemList from "./BottomTabItemList";

export default function BottomTab({ state, descriptors, navigation }: BottomTabBarProps) {
    const styles = useStyles(BottomTabStyles);
    const activeCaseTranslate = useSharedValue(0);
    const activeCase = {
        width: 50,
    };
    const Tabs = React.useMemo(() => {
        let activeIcon: any;
        return {
            list: state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const focused = state.index === index;
                if (focused) activeIcon = options.tabBarIcon;
                return {
                    name: route.name,
                    isFocused: focused,
                    Icon: options.tabBarIcon,
                };
            }),
            activeIcon: activeIcon,
        };
    }, [state, descriptors]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: activeCaseTranslate.value }, { translateY: -30 }],
        };
    });

    return (
        <View style={styles.container}>
            <BottomTabSvg activeCaseTranslate={activeCaseTranslate} />
            <Animated.View style={[styles.activeIconCase, animatedStyle]}>
                <Tabs.activeIcon
                    focused={false}
                    fill={styles.activeIcon.backgroundColor}
                    stroke={styles.activeIcon.borderColor}
                    width={25}
                    height={25}
                    strokeWidth={1}
                    activeCase={activeCase}
                    activeCaseTranslate={activeCaseTranslate}
                    entering={FadeInDown.delay(100)}
                    exiting={FadeOutDown}
                />
            </Animated.View>
            <BottomTabItemList
                navigation={navigation}
                activeCase={activeCase}
                activeCaseTranslate={activeCaseTranslate}
                Tabs={Tabs}
            />
        </View>
    );
}
