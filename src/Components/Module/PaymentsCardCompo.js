import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import PayPalSvg from '../../../Assets/Icons/FlagsSvgs/PayPalSvg'
import VisaCardSvg from '../../../Assets/Icons/FlagsSvgs/VisaCardSvg'
import TickSvg from '../../../Assets/Icons/FlagsSvgs/TickSvg'
import Colors from '../../theme'

const PaymentsCardCompo = ({onPress,myCardActive,label}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.mainContainer}>
           <View style={styles.viewOne}>
            
            <View style={styles.viewTwo}>
                {label == 'PAYPAL' ?
                <PayPalSvg size={50} />
                : label == 'VISA' ?
                <VisaCardSvg size={50} /> : null}
            </View>
            <View style={styles.viewThree}>
            <Text style={[styles.textOne,{fontSize:moderateScale(12,0.1)}]}>**** **** **** 3850</Text>
              <Text style={[styles.textOne,{fontSize:moderateScale(15,0.1)}]}>{label}</Text>
             </View>   
                   
             <View style={styles.viewFour}>
            <TickSvg size={30} color={myCardActive?'grey':Colors.orange} />
             </View> 
           </View>
        </TouchableOpacity>
    )
}

export default PaymentsCardCompo

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:moderateScale(80,0.1),
        backgroundColor:'#F3F3F3',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:5
    },
    viewOne:{
        width:'90%',
        height:'65%',
        // backgroundColor:'orange',
        flexDirection:'row',
    },
    viewTwo:{
        width:'20%',
        height:'100%',
        // backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    viewThree:{
        width:'60%',
        height:'100%',
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'flex-start',
        paddingLeft:30
    },
    viewFour:{
        width:'20%',
        height:'100%',
        // backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    textOne:{
        fontFamily:'OpenSans',
        fontSize:moderateScale(16,0.1),
        color:'#4A4A4A',
        fontWeight:'bold'

    }
})
