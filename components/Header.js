import Head from "next/head";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";


const Header = () => {
    return (
        <AppBar position="static" id="appBar" color="primary">
            <Toolbar variant="dense">
                <Typography variant="h2">
                    Willkommen im SmartRoom der FH Wedel
                </Typography>
            </Toolbar>
        </AppBar>
    );
};


export default Header;