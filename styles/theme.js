import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { purple, amber, } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
    palette: {
        primary: purple,
        secondary: amber,
    },
});

theme = responsiveFontSizes(theme);

export default theme;