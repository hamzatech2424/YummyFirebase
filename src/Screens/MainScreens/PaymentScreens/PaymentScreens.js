import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { moderateScale } from 'react-native-size-matters'
import AbstractHeader from '../../../Components/AbstractComponents/AbstractHeader'
import PaymentAddBtn from '../../../Components/Module/PaymentAddBtn'
import PaymentsCardCompo from '../../../Components/Module/PaymentsCardCompo'
import PaymentMethodModal from '../Modals/PaymentMethodModal'
import { useTranslation } from 'react-i18next'


const PaymentScreens = ({navigation}) => {

    const [Visible, setVisible] = useState(false)
    const [paypalActive, setpaypalActive] = useState(true)
    const [visaActive, setvisaActive] = useState(false)
    const [cardDetails, setcardDetails] = useState({
        id: 0,
        cardName: 'PAYPAL',
        cardNumber: '',
        mmy: '',
        cvc: ''
    })
    const [cardData, setcardData] = useState([])
    const [myCardActive, setmyCardActive] = useState(false)
    const { t, i18n } = useTranslation()



    //  console.log(cardData)



    return (
        <View style={styles.mainContainer}>
            <AbstractHeader onPressBack={() => navigation.goBack()} hideIcon backBtnColor={'white'} label={t('Payment Methods')} />


            <View style={styles.viewOne}>

                <View style={{ marginVertical: 20 }}>
                    <PaymentAddBtn onPress={() => setVisible(true)} />
                </View>


                <View style={{ marginBottom: 10, marginTop: 20 }} >
                    <Text style={styles.textOne}>{t('Credit Cards')}</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false
                }>
                    {cardData.map((value, index) => {
                        return <PaymentsCardCompo key={index} myCardActive={myCardActive} label={value.cardName} onPress={() => setmyCardActive((prev) => !prev)} />
                    })}
                </ScrollView>

            </View>

            <PaymentMethodModal
                isVisible={Visible}
                setModalVisiblity={() => { setVisible(preState => preState = !preState) }}
                cardNumber={cardDetails.cardNumber}
                setcardNumber={(txt) => setcardDetails({ ...cardDetails, cardNumber: txt })}
                mmy={cardDetails.mmy}
                setmmy={(txt) => setcardDetails({ ...cardDetails, mmy: txt })}
                cvc={cardDetails.cvc}
                setcvc={(txt) => setcardDetails({ ...cardDetails, cvc: txt })}
                setCardPaypal={() => setcardDetails({ ...cardDetails, cardName: 'PAYPAL' })}
                setCardVisa={() => setcardDetails({ ...cardDetails, cardName: 'VISA' })}
                paypalActive={paypalActive}
                setpaypalActive={() => {
                    setpaypalActive(true)
                    setvisaActive(false)
                }}
                visaActive={visaActive}
                setvisaActive={() => {
                    setpaypalActive(false)
                    setvisaActive(true)
                }}
                onConfirm={() => {
                    (prev) => setcardDetails({ ...cardDetails, id: prev + 1 })
                    setcardData((oldArr) => [...oldArr, cardDetails])
                }
                }
            />

        </View>
    )
}

export default PaymentScreens

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    viewOne: {
        width: '85%',
        flex: 1,
        // backgroundColor:'pink',
        height: '50%',
        alignSelf: 'center'
    },
    textOne: {
        fontFamily: 'OpenSans',
        fontSize: moderateScale(16, 0.1),
        color: '#4A4A4A',
        fontWeight: 'bold'
    }
})
