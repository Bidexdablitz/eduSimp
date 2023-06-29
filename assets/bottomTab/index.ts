import { ColorValue } from "react-native";
import { BaseAnimationBuilder, EntryExitAnimationFunction, Keyframe } from "react-native-reanimated";
export { default as ApplicationToolsIcon } from "./ApplicationTools";
export { default as BookASessionIcon } from "./BookASession";
export { default as CommunityIcon } from "./Community";
export { default as EventsIcon } from "./Events";
export { default as HomeIcon } from "./Home";

export interface BottomTabIconSvgProp {
    fill: string;
    strokeWidth: number;
    stroke: ColorValue;
    width: number;
    height: number;
    animatedProps: Partial<{ translateY: number; opacity: number }>;
    entering?:
        | BaseAnimationBuilder
        | typeof BaseAnimationBuilder
        | EntryExitAnimationFunction
        | Keyframe
        | undefined;
}
