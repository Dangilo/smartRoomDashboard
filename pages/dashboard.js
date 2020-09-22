import React from "react";
import Layout from "../components/Layout";
import Box from "@material-ui/core/Box";
import Header from "../components/Header";

class Dashboard extends React.Component {

    static getInitialProps({query}) {
        return {query}
    }

    render() {
        return <Layout>
            <Header isDashboard={true} description={this.props.query.description}/>
            <Box id="dashboard">
                <iframe src={this.props.query.url}
                        id="frame"></iframe>
            </Box>
        </Layout>

    }
}

export default Dashboard;