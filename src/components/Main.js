import React, { Component } from 'react'
import Navbar from './Navbar'
import WelcomeImage from './WelcomeImage'

export default class Main extends Component {
    render() {
        return (
            <>
                <Navbar />
                <WelcomeImage />
            </>
        )
    }
}
