import React from 'react';
import Header from '../components/Header';

const Layout = (props) => {
    return (
        <>
            <Header />
            <div>{props.children}</div>
        </>
    );
};

export default Layout;
