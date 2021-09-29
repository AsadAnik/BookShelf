import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

const SidenavItem = () => {
    const items = [
        {
            type: 'navItem',
            icon: 'home',
            text: 'Home',
            link: '/',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'user',
            text: 'My Profile',
            link: '/user',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'address-card',
            text: 'Register',
            link: '/register',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'sign-in',
            text: 'Login',
            link: '/login',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text',
            text: 'My Reviews',
            link: '/user/user-reviews',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text',
            text: 'Add Reviews',
            link: '/user/add-review',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'sign-out',
            text: 'Logout',
            link: '/logout',
            restricted: false
        }
    ];

    // Elements..
    const element = (item, i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesome name={item.icon} />
                {item.text}
            </Link>
        </div>
    );

    // Show list..
    const showItems = () => (
        items.map((item, i) => {
            return element(item, i);
        })
    );

    // Returning statement..
    return (
        <>
            <div>
                { showItems() }
            </div>
        </>
    );
};

export default SidenavItem;
