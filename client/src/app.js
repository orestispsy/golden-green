import React from "react";
import { BrowserRouter, Route, Link, HashRouter } from "react-router-dom";
import Main from "./main";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            chapter: false,
        };
    }

    componentDidMount() {}

    render() {
        return (
            <BrowserRouter>
                <div className="appContainer">
                    <div className="appContainerInner">
                        <div className="appTop">
                            <div className="headlineBack">
                                <div className="headline">The Green Gold</div>
                            </div>
                        </div>
                        <div className="topMenu">
                            <div
                                className="topMenuButton"
                                onClick={(e) => {
                                    this.setState({ chapter: 1 });
                                }}
                            >
                                Our Olive Oil
                            </div>
                            <div
                                className="topMenuButton"
                                onClick={(e) => {
                                    this.setState({ chapter: 2 });
                                }}
                            >
                                {" "}
                                The Production
                            </div>
                            <div
                                className="topMenuButton"
                                onClick={(e) => {
                                    this.setState({ chapter: 3 });
                                }}
                            >
                                About Us
                            </div>
                            <div className="topMenuButton">Shop</div>
                        </div>
                        <Main chapter={this.state.chapter} />
                        <div className="appBottom">
                            <img src="branch.png" className="branch"></img>
                        </div>
                    </div>
                </div>

                <div
                    className="languageMenu"
                    id={(this.state.menu && "languageMenu") || ""}
                    style={{
                        backgroundColor:
                            this.state.menu && `rgba(0, 0, 0, 0.5)`,
                    }}
                >
                    <div
                        className="languageToggler"
                        id={(this.state.menu && "languageToggler") || ""}
                        onClick={(e) =>
                            this.setState({ menu: !this.state.menu })
                        }
                    >
                        LANGUAGE
                    </div>
                    {this.state.menu && (
                        <div className="languageBox">
                            <div className="language">English</div>
                            <div className="language">German</div>
                            <div className="language">Greek</div>
                        </div>
                    )}
                </div>
            </BrowserRouter>
        );
    }
}
