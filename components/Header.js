import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Router from 'next/router'


const Header = (props) => {
    return (
        <AppBar position="static" id="appBar" color="primary">
            <Toolbar variant="dense" className="toolBar">
                {props.isDashboard ? dashboardAppBar(props.description) : homeAppBar()}
            </Toolbar>
        </AppBar>
    );
};

function dashboardAppBar(description) {
    return (
        <div>
            <IconButton edge="start" className="back_icon" onClick={() => Router.back()}>
                <ArrowBack color="secondary" fontSize="large"/>
            </IconButton>
            <Typography variant="h3">
                {description}
            </Typography>
        </div>
    )
}

function homeAppBar() {
    return (
        <Typography variant="h2">
            Willkommen im SmartRoom der FH Wedel
        </Typography>
    )
}


export default Header;