import React from "react";
import { BrowserRouter, Route, Link, HashRouter } from "react-router-dom";
import Main from "./main";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            chapter: false,
            test:false,
            test2:false
        };
    }

    componentDidMount() {}

    

    render() {
        return (
            <BrowserRouter>
                <div
                    className="appContainer"
                    onAnimationStart={(e) => {
                        clearTimeout(timer);
                        const timer = setTimeout(() => {
                            this.setState({ test: true, test2: true });
                        }, 200);
                    }}
                >
                    <div className="appContainerInner">
                        <div className="appTop">
                            <div className="headlineBack">
                                {this.state.test && (
                                    <div
                                        className="headline"
                                        onAnimationEnd={(e) => {
                                            var ddd =
                                                document.getElementsByClassName(
                                                    "topMenuButton"
                                                );
                                            var i = 0;

                                            var interval = setInterval(
                                                function () {
                                                    var obj = ddd[i];

                                                    obj.style.visibility =
                                                        "visible";
                                                    if (i < ddd.length - 1) {
                                                        obj.style.animation =
                                                            "fadeIN 1s, shopBlink 2s";
                                                    }

                                                    i++;

                                                    if (i === ddd.length) {
                                                        clearInterval(interval);
                                                    }
                                                },
                                                150
                                            );
                                            this.setState({ blinkShop: true });
                                        }}
                                    >
                                        {" "}
                                        The Golden Green
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="topMenu">
                            <div
                                className="topMenuButton"
                                onClick={(e) => {
                                    this.setState({ chapter: 1 });
                                }}
                            >
                                The Oil
                            </div>
                            <div
                                className="topMenuButton"
                                onClick={(e) => {
                                    this.setState({ chapter: 2 });
                                }}
                            >
                                {" "}
                                Production
                            </div>
                            <div
                                className="topMenuButton"
                                onClick={(e) => {
                                    this.setState({ chapter: 3 });
                                }}
                            >
                                About Us
                            </div>
                            <div
                                className="topMenuButton"
                                style={{
                                    animation:
                                        this.state.blinkShop &&
                                        `fadeIN 3s, shopBlink 0.5s 4 `,
                                      
                                }}
                            >
                                Shop
                            </div>
                        </div>
                        {this.state.test2 && (
                            <Main chapter={this.state.chapter} />
                        )}
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
