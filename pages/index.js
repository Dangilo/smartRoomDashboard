import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from 'next/link'
import Layout from "../components/Layout";
import Carousel from "react-material-ui-carousel";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Header from "../components/Header";

export default function Index() {

    let items = [
        {
            url: "http://192.168.178.38:1880/ui/#!/0?socketid=ErzmKfwOANkECKcHAAAF",
            description: "Dashboard"
        },
        {
            url: "http://www.wikipedia.de",
            description: "STEC wiki"
        },
        {
            url: "http://192.168.178.38:1880/#flow/6fff9a44.41d484",
            description: "Node-Red Flow"
        },
        {
            url: "http://www.fh-wedel.de",
            description: "SmartRoom Steuerung"
        }
    ];

    return (
        <Layout>
            <Header/>
            <Box id="home">
                <Carousel className="carousel" navButtonsAlwaysVisible={true}
                          interval={8000}>
                    {items.map((item, i) => <Item key={i} item={item}/>)}
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

