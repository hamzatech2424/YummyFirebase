import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'


const AbstractButton = ({ width, height, icon, bgcolor, label, txtSize, txtColor, onPress,BorderRad }) => {

    const defaultHeight = height ? height : moderateScale(66, 0.1)
    const defaultWidth = width ? width : moderateScale(375, 0.1)
    const defaultColor = bgcolor ? bgcolor : '#53B175'
    const defaultLabel = label ? label : 'TextHere'
    const defaultLabelTextSize = txtSize ? txtSize : moderateScale(17, 0.1)
    const defaultLabelTextColor = txtColor ? txtColor : 'white'
    const defaultIcon = icon ? icon : undefined
    const defBorderRad = BorderRad ? BorderRad : 20

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ width: defaultWidth, height: defaultHeight, backgroundColor: defaultColor, justifyContent: 'center', borderRadius: defBorderRad, alignItems: 'center' }}>
            {defaultIcon ? 
            <View style={{position:'absolute',left:35}}>
                {defaultIcon()}
            </View>
            :false}
            <Text style={{ fontSize: defaultLabelTextSize, color: defaultLabelTextColor, fontFamily: 'Gilroy' }}>{defaultLabel}</Text>
        </TouchableOpacity>
    )
}

export default AbstractButton


