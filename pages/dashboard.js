import React from "react";
import Layout from "../components/Layout";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from '@material-ui/icons/ArrowBack';
import Router from 'next/router'

class Dashboard extends React.Component {

    static getInitialProps({query}) {
        return {query}
    }

    render() {
        return <Layout>
            <AppBar position="static" id="appBar">
                <Toolbar className="toolBar">
                    <IconButton edge="start" className="back_icon" onClick={() => Router.back()}>
                        <ArrowBack color="secondary" fontSize="large"/>
                    </IconButton>
                    <Typography variant="h3">
                        {this.props.query.description}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box id="dashboard">
                <iframe src={this.props.query.url}
                        id="frame"></iframe>
            </Box>

        </Layout>

    }
}

export default Dashboard;