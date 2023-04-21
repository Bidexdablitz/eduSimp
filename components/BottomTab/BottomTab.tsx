import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useStyles from "../../custom_hooks/useStyles";
import BottomTabStyles from "../../styles/BottomTabStyles";
import BottomTabSvg from "./BottomTabSvg";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    FadeInDown,
    FadeOutUp,
    FadeOutDown,
} from "react-native-reanimated";

export default function BottomTab({ state, descriptors, navigation }: any) {
    const styles = useStyles(BottomTabStyles);
    const activeCaseTranslate = useSharedValue(0);
    const activeCase = {
        width: 50,
    };
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: activeCaseTranslate.value }, { translateY: -30 }],
        };
    });
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
