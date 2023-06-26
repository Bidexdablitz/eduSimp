import React from "react";
import { Pressable, TextInput, View } from "react-native";

interface InputProps {
    icon?: React.ReactNode;
}

export default function MyTextInput(props: InputProps) {
    const [focused, setFocused] = React.useState(false);
    const ref = React.useRef<TextInput | null>(null);

    return (
        <Pressable
            style={[
                {
                    flex: 1,
                    flexDirection: "row",
                    borderRadius: 10,
                    padding: 8,
                    backgroundColor: "#EFEFF0",
                    borderColor: "#EFEFF0",
                    alignItems: "center",
                },
                focused ? { backgroundColor: "pink" } : null,
            ]}
            onPress={() => ref.current?.focus()}
        >
            {props.icon}
            <TextInput
                ref={ref}
                placeholder="Search"
                style={[
                    {
                        flex: 1,
                        color: "#848488",
                        paddingLeft: props.icon ? 8 : 0,
                    },
                ]}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                {...props}
            />
        </Pressable>
    );
}
