import React, { Component } from 'react'
import welcImg from '../resources/images/IMG_0940.jpeg'

export default class WelcomeImage extends Component {
    render() {

        const styleStr = {
            backgroundImage: 'url('+welcImg+')',
            height: '100vh'
        };

        return (
            <div className='bg-image' style={styleStr}>
                <img src={welcImg} alt='Welcome' className='w-100'/>
            </div>
        )
    }
}
