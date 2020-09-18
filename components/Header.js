import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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