import React from 'react';
import ReactLoading from 'react-loading';

/**
 * LOADING TYPES
 * blank
 * balls
 * bars
 * bubbles
 * cubes
 * cylon
 * spin
 * spinningBubbles
 * spokes
 */

export default function Loading({type, color, height, width}){
    return (
        <ReactLoading type={type} color={color} height={width} width={width}/>
    )
}