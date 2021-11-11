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
                    <div className="headline">The Green Gold</div>
                    <div className="mainWindow"></div>
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
                            Language
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
            </div>
        );
    }
}
