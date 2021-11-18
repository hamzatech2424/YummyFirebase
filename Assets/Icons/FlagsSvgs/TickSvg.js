import React from "react";
import {SvgXml} from 'react-native-svg';


const TickSvg = ({color,size}) => {
    const defSize = size ? size : 12;
    const defColor = color ? color : 'grey' 

    return (
        <SvgXml
        width={defSize}
        height={defSize}
        xml={`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="circle-ok">
        <path id="Path 3" d="M7 13L10 16L17 9" stroke="${defColor}" stroke-linecap="round"/>
        <path id="Oval" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="${defColor}"/>
        </g>
        </svg>        
        `}  />
    )
}

export default TickSvg