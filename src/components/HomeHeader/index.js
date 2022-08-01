import React from 'react';
import './homeheader.scss'

export default function HomeHeader() {
    return (
        <div className='headerBox'>
            <div className='titleBox'>
                <h1 className='title'>
                    Lord of the Rings Movies
                </h1>
                <p className='text'>
                    Ave. movie runtime: xxx min
                </p>
                <p className='text'>
                    Ave. movie budget: $XXM
                </p>
            </div>
        </div>
    )
}