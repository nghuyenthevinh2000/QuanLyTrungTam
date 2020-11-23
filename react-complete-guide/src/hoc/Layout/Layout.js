import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import classes from './Layout.css';
class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <React.Fragment>
                
                <NavBar></NavBar>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                </React.Fragment>
        )
    }
}

export default Layout;