import * as React from "react";
import { View } from "react-native";
import useStyles from "../../custom_hooks/useStyles";
import BottomTabStyles from "./BottomTabStyles";
import BottomTabSvg from "./BottomTabSvg";
import Animated, { useAnimatedStyle, useSharedValue, FadeInDown, SharedValue } from "react-native-reanimated";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import BottomTabItemList from "./BottomTabItemList";
import { BottomTabIconSvgProp } from "@assets/bottomTab";

export interface activeCaseType {
    width: number;
    translateX: SharedValue<number> | null;
}
export default function BottomTab({ state, descriptors, navigation }: BottomTabBarProps) {
    const styles = useStyles(BottomTabStyles);
    // memoize dictionary to prevent unnecessary rerenders of tab icons
    const activeCase = React.useMemo<activeCaseType>(() => ({ width: 50, translateX: null }), []);
    activeCase.translateX = useSharedValue(0);

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
            transform: [{ translateX: activeCase.translateX!.value }, { translateY: -30 }],
        };
    });

    return (
        <View style={styles.container}>
            <BottomTabSvg activeCase={activeCase} height={55} />
            <Animated.View style={[styles.activeIconCase, animatedStyle]}>
                <Tabs.activeIcon
                    inActiveCase={true}
                    focused={false}
                    fill={styles.activeIcon.backgroundColor}
                    stroke={styles.activeIcon.borderColor}
                    width={25}
                    height={25}
                    strokeWidth={1}
                    activeCase={activeCase}
                    entering={FadeInDown}
                />
            </Animated.View>
            <BottomTabItemList navigation={navigation} activeCase={activeCase} Tabs={Tabs} />
        </View>
    );
}
