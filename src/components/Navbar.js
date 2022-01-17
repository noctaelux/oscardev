import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark shadow-5-strong fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <span className='ps-2'>Oscar Oswaldo Calzada</span>
                    </a>
                </div>
            </nav>
        )
    }
}
