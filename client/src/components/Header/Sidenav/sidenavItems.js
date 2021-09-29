import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SidenavItem = ({User}) => {
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
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'address-card',
            text: 'Register',
            link: '/register',
            restricted: false,
            exclude: true
        },
        {
            type: 'navItem',
            icon: 'sign-in',
            text: 'Login',
            link: '/login',
            restricted: false,
            exclude: true
        },
        {
            type: 'navItem',
            icon: 'file-text',
            text: 'My Reviews',
            link: '/user/user-reviews',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'file-text',
            text: 'Add Reviews',
            link: '/user/add-review',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'sign-out',
            text: 'Logout',
            link: '/logout',
            restricted: true
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
        User.login &&
            items.map((item, i) => {
                if (User.login.isAuth){
                    return !item.exclude && element(item, i);
                }else{
                    return !item.restricted && element(item, i);
                }
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

// mapStateToProps..
const mapStateToProps = (state) => {
    return {
        User: state.Users
    };
};

export default connect(mapStateToProps)(SidenavItem);
