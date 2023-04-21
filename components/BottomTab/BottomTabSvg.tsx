import * as React from "react";
import Svg, { Mask, Rect, G, Path } from "react-native-svg";
import { Dimensions } from "react-native";
import useStyles from "../../custom_hooks/useStyles";
import BottomBarStyles from "../../styles/BottomTabStyles";
import Animated, { SharedValue, useAnimatedProps } from "react-native-reanimated";

interface SvgProps {
    activeCaseTranslate: SharedValue<number>;
    width?: number;
    height?: number;
}
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

function SVGComponent({
    activeCaseTranslate,
    width = Dimensions.get("window").width * 2.5,
    height = 62,
}: SvgProps) {
    const styles = useStyles(BottomBarStyles);
    const animatedProps = useAnimatedProps(() => {
        return {
            translateX: activeCaseTranslate.value - width / 2,
        };
    });

    return (
        <AnimatedSvg width={width} height={height} animatedProps={animatedProps}>
            <Mask id="mask">
                <Rect x={0} y={0} width={width} height={height} fill="white" />
                <Path
                    translateY={-0.55}
                    translateX={width / 2 - 28}
                    d="M104.286 7.689e-05C85.5553 1.01256 79.4804 29.8685 53.1557 29.8685C26.831 29.8685 18.731 7.64132e-05 0 7.64132e-05C0 7.64132e-05 36.6598 0 53.1557 0C69.6515 0 104.286 7.689e-05 104.286 7.689e-05Z"
                    fill="black"
                />
            </Mask>
            <Rect width="100%" height="100%" fill={styles.backDropSvg.backgroundColor} mask="url(#mask)" />
        </AnimatedSvg>
    );
}
export default SVGComponent;
