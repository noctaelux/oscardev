import React, { Component } from 'react'
import logoImg from '../resources/images/PikPng.com_brackets-png_1429107.png';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logoImg} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                        <span className='ps-2'>Oscar Oswaldo Calzada</span>
                    </a>
                </div>
            </nav>
        )
    }
}
