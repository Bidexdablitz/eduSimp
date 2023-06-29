import { useAnimatedProps, withTiming } from "react-native-reanimated";

export default function useIconAnimation({ height, focused }: any) {
    const animatedProps = useAnimatedProps(() => {
        if (!focused) {
            return {
                translateY: 0,
                opacity: 1,
            };
        }
        return {
            translateY: withTiming(height, { duration: 200 }),
            opacity: withTiming(0, { duration: 100 }),
        };
    }, [focused]);
    return animatedProps;
}
