import React, { useState, useEffect } from 'react'
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import AbstractHeader from '../../Components/AbstractComponents/AbstractHeader'
import Colors from '../../theme'
import { useTranslation } from 'react-i18next'
import { moderateScale } from 'react-native-size-matters'
import CheckOutItems from '../../Components/AbstractComponents/CheckOutItems'
import { ScrollView } from 'react-native-gesture-handler'
import UseGetDataHook from '../../CustomHooks/UseGetDataHook'



const PriceCalculationsItems = ({ heading, Amount }) => {
    const { t, i18n } = useTranslation()

    return (
        <View style={{ width: '100%', height: 35, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={[styles.textOne, { fontSize: moderateScale(14, 0.1), fontWeight: 'bold' }]}>{t(heading)}</Text>
            <Text style={[styles.textOne, { fontSize: moderateScale(14, 0.1), fontWeight: 'bold' }]}>£.{Amount}</Text>
        </View>
    )
}




const CheckOutScreen = ({ navigation }) => {

    const { t, i18n } = useTranslation()
    const [dbItems, setdbItems] = UseGetDataHook('Cart')
    const [totalPrice, settotalPrice] = useState(0)
    const [totalitemInCart, settotalitemInCart] = useState(0)
    const [subTotal, setsubTotal] = useState(0)


    useEffect(() => {

        let items = 0
        let price = 0
        let subTotal = 0
        const delieveryFee = 50
    
        {
          dbItems ?
            dbItems.map((item) => {
              items += item.quantity
              price += item.quantity * item.dishPrice
    
              console.log(items, price)
    
    
              if (items == 0) {
                subTotal = 0
                delieveryFee = 0
    
              }
              else {
                subTotal += item.quantity * item.dishPrice 
                // console.log(subTotal)
              }
    
            })
            : null
        }
        settotalPrice(price)
        settotalitemInCart(items)
        setsubTotal(subTotal + delieveryFee )
    
      }, [totalPrice, totalitemInCart, settotalPrice, settotalitemInCart, dbItems])



    return (
        <View style={styles.mainContainer}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.orange} />
            <AbstractHeader onPressBack={() => navigation.goBack()} label={t('CheckOut')} hideIcon backBtnColor={'white'} />
            <View style={styles.viewOne}>

                <View style={styles.viewTwo}>

                    <CheckOutItems heading={t('DelieveryAddress')} details={'Hameed Town Satyana Road'} />
                    <CheckOutItems heading={t('Items in Cart')} details={dbItems.length} />

                    <View style={{ alignSelf: 'center', height: 50, justifyContent: 'center' }}>
                        <Text style={[styles.textOne, { fontSize: moderateScale(15) }]}>
                            {t('Items Summary')}
                        </Text>
                    </View>

                    <ScrollView style={{ alignSelf: 'auto' }} showsVerticalScrollIndicator={false}>

                        {dbItems.map((val, index) => {
                            return (
                                <View key={index} style={styles.viewFour}>
                                    <View style={{ width: '20%', height: '85%', marginLeft: 20 }}>
                                        <Image source={require('../../../Assets/Images/cartItem.png')} style={{ width: '100%', height: '100%', borderRadius: 15 }} />
                                    </View>
                                    <View style={{ marginLeft: 20 }}>
                                        <Text style={[styles.textOne, { fontSize: moderateScale(15, 0.1), paddingBottom: 3 }]}>{val.dishName}</Text>
                                        <Text style={{ color: 'black', fontSize: moderateScale(13, 0.1), }}>£.{val.dishPrice}<Text style={{color:'red'}}> x {val.quantity}</Text></Text>
                                    </View>
                                </View>
                            )
                        })}


                    </ScrollView>

                    <View style={{ width: '100%', height: 170 }}>

                        <View style={{ marginTop: 40 }}>
                            <PriceCalculationsItems heading={'Total'} Amount={totalPrice} />
                        </View>
                        <View>
                            <PriceCalculationsItems heading={'Delievery'} Amount={50} />
                        </View>
                        <View>
                            <PriceCalculationsItems heading={'Sub Total'} Amount={subTotal} />
                        </View>

                    </View>




                </View>
                <View style={{ width: '100%', height: 70, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Payment')}
                        style={{ width: 130, height: '55%', borderRadius: 20, backgroundColor: Colors.orange, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[styles.textOne, { fontSize: moderateScale(12, 0.1), color: 'white', paddingRight: 5 }]}>{t('Payment')}</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default CheckOutScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    viewOne: {
        width: '90%',
        alignSelf: 'center',
        flex: 1,
        // backgroundColor: 'green',
        justifyContent: 'center'
    },

    viewTwo: {
        paddingHorizontal: 10,
        width: '100%',
        height: '80%',
        // backgroundColor: 'pink',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    viewThree: {
        width: '100%',
        height: '10%',
        backgroundColor: 'red',
        justifyContent: 'center',
        paddingLeft: 20
    },
    textOne: {
        fontFamily: 'Montserrat',
        fontSize: moderateScale(13.5, 0.1),
        fontWeight: '900',
        color: 'black',
    },
    viewFour: {
        width: '100%',
        height: 80,
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

})
