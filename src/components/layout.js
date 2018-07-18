import React, { Component } from '../../../../../.cache/typescript/2.9/node_modules/@types/react';
import { Header, HeaderBar } from './header';


class Layout extends Component {
    render() {
        return (
            <div className="layout-grid">
                <Header/>
                <HeaderBar/>
                {HeaderBar()}
                {this.props.children}
            </div>
        )
    }
}

export default Layout;