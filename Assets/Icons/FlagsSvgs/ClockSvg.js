import React from "react";
import {SvgXml} from 'react-native-svg';


const ClockSvg = ({color,size}) => {
    const defSize = size ? size : 12;
    const defColor = color ? color : 'white' 

    return (
        <SvgXml
        // width={size}
        // height={size}
        xml={`<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.69795 17.0095C14.4116 17.0095 18.2328 13.5054 18.2328 9.18295C18.2328 4.86049 14.4116 1.35645 9.69795 1.35645C4.98428 1.35645 1.16309 4.86049 1.16309 9.18295C1.16309 13.5054 4.98428 17.0095 9.69795 17.0095Z" stroke="#0A191E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.69775 4.4873V9.18322L13.1117 10.7485" stroke="#0A191E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
        `}  />
    )
}

export default ClockSvg