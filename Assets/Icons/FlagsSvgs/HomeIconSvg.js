import React from "react";
import {SvgXml} from 'react-native-svg';


const HomeIconSvg = ({color,size}) => {
    const defSize = size ? size : 12;
    const defColor = color ? color : 'white' 

    return (
        <SvgXml
        // width={size}
        // height={size}
        xml={`<svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.5 33.5132H7.5C6.67157 33.5132 6 32.8416 6 32.0132V20.0132H3L16.938 6.07372C17.2194 5.79205 17.6011 5.63379 17.9993 5.63379C18.3974 5.63379 18.7791 5.79205 19.0605 6.07372L33 20.0132H30V32.0132C30 32.8416 29.3284 33.5132 28.5 33.5132ZM15 23.0132H21V30.5132H27V18.2552L18 9.25522L9 18.2552V30.5132H15V23.0132Z" fill="#2E3A59"/>
        </svg>
        `}  />
    )
}

export default HomeIconSvg