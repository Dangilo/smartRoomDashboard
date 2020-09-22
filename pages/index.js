import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from 'next/link'
import Layout from "../components/Layout";
import Carousel from "react-material-ui-carousel";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Header from "../components/Header";
import Urls from "../public/urls";

export default function Index() {
    return (
        <Layout>
            <Header isDashboard={false}/>
            <Box id="home">
                <Carousel className="carousel" navButtonsAlwaysVisible={true}
                          interval={8000}>
                    {Urls.getUrls().map((item, i) => <Item key={i} item={item}/>)}
                </Carousel>
            </Box>
        </Layout>

    )
}

function Item(props) {
    return (
        <Paper elevation={0}>
            <Link href={{pathname: '/dashboard', query: {url: props.item.url, description: props.item.description}}}>
                <a>
                    <Box className="carousel-item">
                        <iframe src={props.item.url}/>
                        <Typography variant="h2" className="description">{props.item.description}</Typography>
                    </Box>
                </a>
            </Link>
        </Paper>
    )
}

