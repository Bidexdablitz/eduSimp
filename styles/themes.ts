export interface StyleMap {
    backgroundColor: string;
    color: string;
    statusBarcolor: string;
    bottomTab: {
        backgroundColor: string;
        color: string;
        icon: {
            backgroundColor: string;
            borderColor: string;
        };
        activeIcon: {
            backgroundColor: string;
            borderColor: string;
        };
    };
}

// edit this to add a new theme to the app
export enum ThemeKeys {
    Light = "light",
    Dark = "dark",
}

export type Themes = {
    [key in ThemeKeys]: StyleMap;
};

const themes: Themes = {
    [ThemeKeys.Light]: {
        backgroundColor: "white",
        color: "black",
        statusBarcolor: "black",
        bottomTab: {
            backgroundColor: "#F2F2F2",
            color: "black",
            icon: {
                backgroundColor: "none",
                borderColor: "black",
            },
            activeIcon: {
                backgroundColor: "#FF0000",
                borderColor: "white",
            },
        },
    },
    [ThemeKeys.Dark]: {
        backgroundColor: "black",
        color: "white",
        statusBarcolor: "white",
        bottomTab: {
            backgroundColor: "#333",
            color: "white",
            icon: {
                backgroundColor: "none",
                borderColor: "white",
            },
            activeIcon: {
                backgroundColor: "#FF0000",
                borderColor: "white",
            },
        },
    },
};

export default themes;
