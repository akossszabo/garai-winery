import Header from "./layout/header";
import Footer from "./layout/footer";
import { Component } from "react";

export class Layout extends Component {
    render() {
        let { children } = this.props;
        return (
            <>
                <Header />
                <main>{children}</main>
                <Footer />
            </>
        );
    }
}
