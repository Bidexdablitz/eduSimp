import { View } from "react-native";
import { SharedValue, withSpring } from "react-native-reanimated";

export function calculateDimensions(
    ref: React.RefObject<View>,
    activeCaseTranslate: SharedValue<number>,
    activeCase: any
) {
    ref.current!.measure((fx, fy, width, height, px) => {
        activeCaseTranslate.value = withSpring(px + width / 2 - activeCase.width / 2);
    });
}
