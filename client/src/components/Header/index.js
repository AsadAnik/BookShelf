import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Sidenav from "./Sidenav/sidenav";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showNav: false
        };
    }

    // Hiding the NavBar..
    onHideNav = () => {
        this.setState({showNav: false});
    };


    // rendering method..
    render() {
        return (
           <header>
               <div className={'open_nav'}>
                   <FontAwesome
                        name={'bars'}
                        onClick={() => this.setState({showNav: true})}
                        style={{
                            color: '#ffffff',
                            padding: '10px',
                            cursor: 'pointer'
                        }}
                   />
               </div>

               {/*----------- SideNav Bar -------------*/}
               <Sidenav showNav={this.state.showNav} onHideNav={() => this.onHideNav()} />

               <Link to={'/'} className={'logo'}>The Book Shelf</Link>

           </header>
        );
    }
}

export default Header;
