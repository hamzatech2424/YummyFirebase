import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'





const CheckOutItems = ({heading,details}) => {



    return (
        <View style={styles.viewThree} >
        <Text style={[styles.textOne,{fontSize:moderateScale(15,0.1)}]}>
            {heading}
        </Text>
        <Text style={[styles.textOne,{color:'#686868'}]}>{details}</Text>
     </View>
    )
}

export default CheckOutItems

const styles = StyleSheet.create({
    viewThree:{
        width:'100%',
        height:'10%',
        // backgroundColor:'red',
        justifyContent:'center',
        paddingLeft:20
    },
    textOne: {
        fontFamily: 'Montserrat',
        fontSize: moderateScale(13.5, 0.1),
        fontWeight: '900',
        color: 'black',
    },
})
