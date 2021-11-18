import React from "react";
import {SvgXml} from 'react-native-svg';


const ArrowForwardSvg = ({color,size}) => {
    const defSize = size ? size : 12;
    const defColor = color ? color : 'white' 

    return (
        <SvgXml
        // width={size}
        // height={size}
        xml={`<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4.5L13 4.5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.5 1L13 4.5L9.5 8" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `}  />
    )
}

export default ArrowForwardSvg