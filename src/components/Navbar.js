import React, { Component } from 'react'
import NavbarItem from './NavbarItem'

export default class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <h1 className="mb-0 navbar-brand">STAR WARS</h1>
                    <ul className="navbar-nav mr-auto" id="topNav">
                        <NavbarItem category='Home'/>
                        {
                            this.props.categories.map((category) => {
                            return <NavbarItem category={category} />
                        })}
                    </ul>
                </nav>
            </div>
        )
    }
}
