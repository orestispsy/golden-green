import React from "react";
import { Route, Link, HashRouter } from "react-router-dom";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        };
    }

    componentDidMount() {}

    render() {
        return (
            <div className="appContainer">
                <div className="appContainerInner">
                    <div className="mainTopImg">
                        <img src="branch.png" className="branch"></img>
                    </div>

                    <div className="mainWindow">
                        <div className="menuLeft">
                            <div className="about">About Us</div>
                            <div className="about">Production</div>
                            <div className="about">The Oil</div>
                            <div className="about">Shop</div>
                        </div>
                        <div className="mainWindowRight">
                            <div className="headlineBack">
                                <div className="headline">Golden Green</div>
                            </div>
                            <div className="mainRightBottom"></div>
                        </div>
                    </div>
                    <div
                        className="menu"
                        id={(this.state.menu && "menu") || ""}
                    >
                        <div
                            className="menuToggler"
                            id={(this.state.menu && "menuToggler") || ""}
                            onClick={(e) =>
                                this.setState({ menu: !this.state.menu })
                            }
                        >
                            LANGUAGE
                        </div>
                        {this.state.menu && (
                            <div className="menuInner">
                                <div className="language">English</div>
                                <div className="language">German</div>
                                <div className="language">Greek</div>
                            </div>
                        )}
                    </div>
                
                </div>
                    <div className="pageBottom"></div>
            </div>
        );
    }
}
