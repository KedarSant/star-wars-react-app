import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavbarItem extends Component {

    render() {
        const category = this.props.category;
        return (
            <React.Fragment>
                <li className='nav-item'><Link to={category === 'Home' ? '/' : `${this.props.category}`} className='nav-link'>{this.props.category.toUpperCase()}</Link></li>
            </React.Fragment>
        )
    }
}
