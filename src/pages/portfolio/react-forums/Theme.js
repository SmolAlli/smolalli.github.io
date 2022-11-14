import { theme } from "@chakra-ui/react";

const customTheme = {
    initialColorMode: "system",
    useSystemColorMode: false,
    components: {
        Button: {
            variants: {
                navbar: {
                    ...theme.components.Button.variants.ghost,
                    _hover: {
                        backgroundColor: "blackAlpha.200",
                    },
                    _active: {
                        backgroundColor: "blackAlpha.400",
                    },
                    fontSize: "24px",
                },
                invisible: {
                    ...theme.components.Button.variants.ghost,
                    _hover: {
                        backgroundColor: "none",
                    },
                    _active: {
                        backgroundColor: "none",
                    },
                    fontSize: "24px",
                },
            },
        },
        Text: {
            variants: {
                branding: {
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: "bold",
                },
            },
        },
    },
};

export default customTheme;
