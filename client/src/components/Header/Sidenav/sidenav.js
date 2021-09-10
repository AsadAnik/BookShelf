import React from 'react';
import SideNav from 'react-simple-sidenav';
import SidenavItems from './sidenavItems';

const Sidenav = ({ showNav, onHideNav }) => (
    <SideNav showNav={showNav} onHideNav={onHideNav}
        navStyle={{
            background: 'black',
            maxWidth: '300px',
            color: 'lightgrey',
        }}
    >
        <SidenavItems />
    </SideNav>
);

export default Sidenav;
