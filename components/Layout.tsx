import Header from "./Header";
import Footer from "./Footer";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme, ThemeProvider} from "@material-ui/core";
import * as React from "react";
import Head from "next/head";

import red from "@material-ui/core/colors/red";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme: Theme) => ({
    palette: {
        primary: red,
    },
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    offset: theme.mixins.toolbar
}));


const Layout = (props) => {
    const classes = useStyle();
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
                <Footer/>
            </div>
        </ThemeProvider>
    )
};




export default Layout;