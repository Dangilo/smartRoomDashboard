import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme, ThemeProvider} from "@material-ui/core";
import * as React from "react";
import red from "@material-ui/core/colors/red";

const Layout = (props) => {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#1c2764",
                light: "#1c2764",
                dark: "#1c2764",
            },
            secondary: {
                main: "#ffffff",
                light: "#ffffff",
                dark: "#ffffff",
            },
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <div id="main">
                {props.children}
            </div>
        </ThemeProvider>
    )
};


export default Layout;