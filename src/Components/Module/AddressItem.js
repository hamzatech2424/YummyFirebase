import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import ClockSvg from '../../../Assets/Icons/FlagsSvgs/ClockSvg'
import HomeIconSvg from '../../../Assets/Icons/FlagsSvgs/HomeIconSvg'
import {useTranslation} from 'react-i18next'


const AddressItem = () => {
    
const {t,i18n} = useTranslation()



    return (
        <View style={styles.mainContainer}>
            <View style={styles.viewOne}>
                <View style={{ width: '100%', height: '60%', flexDirection: 'row' }}>
                    <View style={{ width: '15%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <HomeIconSvg />
                    </View>
                    <View style={{ width: '57%', height: '100%', justifyContent: 'center' }}>
                        <View>
                            <Text style={[styles.textOne,{color:'#686868'}]}>Hameed Town Satyana Road</Text>
                        </View>
                    </View>
                    <View style={{ width: '28%', height: '100%',  justifyContent: 'center', alignItems: 'flex-end' }}>
                        <TouchableOpacity>
                            <Text style={[styles.textOne, { fontSize: moderateScale(11, 0.1) }]}>{t('Edit Address')}</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ width: '100%', height: '40%', flexDirection: 'row' }}>
                    <View style={{ width: '15%', height: '100%',  justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30, borderRadius: 5, backgroundColor: '#E6B64E', justifyContent: 'center', alignItems: 'center' }}>
                            <ClockSvg />
                        </View>
                    </View>


                    <View style={{ width: '57%', height: '100%', justifyContent: 'center' }}>
                        <Text style={[styles.textOne, { fontSize: moderateScale(10, 0.1), fontWeight: '500' }]}>30 mins</Text>
                    </View>

                    <View style={{ width: '28%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                        <View>
                            <Text style={[styles.textOne, { fontSize: moderateScale(11, 0.1) }]}>{t('Scheduled Time')}</Text>
                        </View>
                    </View>



                </View>

            </View>
        </View>
    )
}

export default AddressItem

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: moderateScale(119, 0.1),
        backgroundColor: '#FEEBC1',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10
    },
    viewOne: {
        width: '88%',
        height: '85%',
        // backgroundColor: 'green'
    },
    textOne: {
        fontFamily: 'Montserrat',
        fontSize: moderateScale(13.5, 0.1),
        fontWeight: '900',
        color: 'black',
    },
})
