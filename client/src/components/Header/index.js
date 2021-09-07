import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
           <header>
               <div className={'open_nav'}></div>
           </header>
        );
    }
}

export default Header;
