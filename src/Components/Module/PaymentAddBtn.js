import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { useTranslation } from 'react-i18next'


const PaymentAddBtn = ({onPress}) => {

    const { t, i18n } = useTranslation()


    return (
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.mainContainer}>
           <View style={styles.viewOne}>
              <Text style={styles.textOne}>{t('ADD NEW PAYMENT')}</Text>
              <Text style={[styles.textOne,{fontSize:moderateScale(18,0.1)}]}>+</Text>
                   
           </View>
        </TouchableOpacity>
    )
}

export default PaymentAddBtn

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:moderateScale(80,0.1),
        backgroundColor:'#F3F3F3',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
    },
    viewOne:{
        width:'90%',
        height:'50%',
        // backgroundColor:'orange',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    textOne:{
        fontFamily:'OpenSans',
        fontSize:moderateScale(16,0.1),
        color:'#4A4A4A',
        fontWeight:'bold'

    }
})
