import React from "react";
import { View } from "react-native";
import { SharedValue } from "react-native-reanimated";
import { calculateDimensions } from "../assets/bottomTab/calculateDimensions";

export default function useUpdateActiveCase(
    focused: boolean,
    ref: React.RefObject<View>,
    activeCaseTranslate: SharedValue<number>,
    activeCase: any
) {
    if (focused && ref.current) {
        calculateDimensions(ref, activeCaseTranslate, activeCase);
    }
}
