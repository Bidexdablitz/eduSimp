import useStyles from "@custom_hooks/useStyles";
import React from "react";
import { Pressable, TextInput, View, TextInputProps } from "react-native";
import TextInputStyles from "./TextInputStyles";
import themes from "@styles/themes";
import ThemeContext from "@custom_context/ThemeContext";

type InputProps = {
    icon?: React.ReactNode;
} & TextInputProps;

export default function MyTextInput(props: InputProps) {
    const { theme } = React.useContext(ThemeContext)!;
    const [focused, setFocused] = React.useState(false);
    const ref = React.useRef<TextInput | null>(null);
    const styles = useStyles(TextInputStyles);
    return (
        <Pressable
            style={[styles.container, focused ? { borderColor: "pink" } : null]}
            onPress={() => ref.current?.focus()}
        >
            {props.icon}
            <TextInput
                ref={ref}
                placeholder="Search"
                placeholderTextColor={themes[theme].textInput.placeholder}
                style={[styles.inputField, { paddingLeft: props.icon ? 8 : 0 }]}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                {...props}
            />
        </Pressable>
    );
}
