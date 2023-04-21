import * as React from "react";
import Svg, { Mask, Rect, G, Path } from "react-native-svg";

interface SvgProps {
    width: number;
    height: number;
    translateX: number;
}

function SVGComponent({ width, height, translateX }: SvgProps) {
    return (
        <Svg {...{ width }} {...{ height }}>
            <Mask id="mask">
                <Rect x={0} y={0} {...{ width }} {...{ height }} fill="white" />
                <G transform={`translate(${translateX} -0.4)`}>
                    <Path
                        d="M103 0.500073C84.5 1.50007 78.5 30.0001 52.5 30.0001C26.5 30.0001 18.5 0.500073 0 0.500073C0 0.207673 36.2076 0.499997 52.5 0.499997C68.7924 0.499997 103 0.207673 103 0.500073Z"
                        fill="black"
                    />
                </G>
            </Mask>
            <Rect width="100%" height="100%" fill="blue" mask="url(#mask)" />
        </Svg>
    );
}
export default SVGComponent;
