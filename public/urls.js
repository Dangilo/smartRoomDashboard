export default class Urls {

    static urls = [
        {
            url: "http://192.168.178.38:1880/ui/#!/0?socketid=ErzmKfwOANkECKcHAAAF",
            description: "Dashboard"
        },
        {
            url: "http://wiki.stec.fh-wedel.de/",
            description: "STEC wiki"
        },
        {
            url: "http://192.168.178.38:1880/#flow/6fff9a44.41d484",
            description: "Node-Red Flow"
        },
        {
            url: "http://www.fh-wedel.de",
            description: "FH Wedel"
        }
    ];


    static getUrls() {
        return this.urls;
    }
}


