import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar,Alert } from "react-native"
import { moderateScale } from 'react-native-size-matters'
import AbstractHeader from '../../Components/AbstractComponents/AbstractHeader'
import AddressItem from '../../Components/Module/AddressItem'
import CartItem from '../../Components/Module/CartItem'
import ArrowForwardSvg from '../../../Assets/Icons/FlagsSvgs/ArrowForwardSvg'
import Colors from '../../theme'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteFromCart, IncreaseIteminCart, DecreaseIteminCart,AddtoCart } from '../../Redux/Action'
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import { useTranslation } from 'react-i18next'
import UseGetDataHook from '../../CustomHooks/UseGetDataHook'



const CartScreen = ({ navigation }) => {

  const [dbItems,setdbItems] = UseGetDataHook('Cart')  
  const { t, i18n } = useTranslation()


  const dispatch = useDispatch()
  const [totalPrice, settotalPrice] = useState(0)
  const [totalitemInCart, settotalitemInCart] = useState(0)
  const [subTotal, setsubTotal] = useState(0)
  const [delieveryFeeState, setdelieveryFeeState] = useState(50)
  const delieveryFee = 50

  const DeleteCartItem = (id) => {
    const Reference = database().ref(`/Cart`).child(id)
    Reference.remove()
  }



  const UpdateAndIncrementiItem = (value) => {
    const Reference = database().ref(`/Cart`).child(value.id)
    Reference.update({
      quantity: ++value.quantity
    }
    )
  }


  const UpdateAndDecrementiItem = (value) => {
    const Reference = database().ref(`/Cart`).child(value.id)
    Reference.update({
      quantity: --value.quantity
    }
    )
  }


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

    // setdelieveryFeeState(50)
    // storeData(cart)

  }, [totalPrice, totalitemInCart, settotalPrice, settotalitemInCart, dbItems])


  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.orange} />
      <AbstractHeader onPressBack={() => navigation.goBack()} label={t('Cart')} hideIcon backBtnColor={'white'} />


      <View style={styles.viewOne}>
        <View style={{ width: '90%', alignSelf: 'center', flex: 1 }}>

          <AddressItem />

          <ScrollView showsVerticalScrollIndicator={false}>

            {
              dbItems ?
                dbItems.map((value, index) => {
                  return (
                    <CartItem
                      key={index}
                      dishDetails={value}
                      dec={() => {
                        UpdateAndDecrementiItem(value)
                        //  dispatch(DecreaseIteminCart(value.id, value.count))
                      }
                      }
                      inc={() => {
                        UpdateAndIncrementiItem(value)
                        // dispatch(IncreaseIteminCart(value.id, value.count))
                      }}
                      del={() => {
                        // dispatch(DeleteFromCart(value.id))
                        DeleteCartItem(value.id)
                      }} />
                  )
                })
                : null
            }
          </ScrollView>
        </View>
      </View>

      <View style={{ backgroundColor: '#F3F3F3' }}>
        <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', height: moderateScale(100, 0.1), backgroundColor: '#F3F3F3' }}>
          <View style={{ width: '90%', height: '95%', alignSelf: 'center' }}>
            <View style={{ width: '100%', height: '50%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={[styles.textOne, { fontSize: moderateScale(14, 0.1), fontWeight: 'bold' }]}>{t('Total')}</Text>
              <Text style={[styles.textOne, { fontSize: moderateScale(14, 0.1), fontWeight: '900' }]}>£ {totalPrice}</Text>
            </View>

            <View style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => {
                  dbItems.length == 0 ? Alert.alert(t('Cart is Empty')) :
                  navigation.navigate('CheckOut')} }
                style={{ width: 130, height: '80%', borderRadius: 20, backgroundColor: Colors.orange, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={[styles.textOne, { fontSize: moderateScale(12, 0.1), color: 'white', paddingRight: 5 }]}>{t('CheckOut')}</Text>
                <ArrowForwardSvg />
              </TouchableOpacity>
              
            </View>
          </View>
        </View>
      </View>




    </View>
  )
}

export default CartScreen


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  viewOne: {
    width: '100%',
    flex: 1,
    // backgroundColor:'green'
  },
  textOne: {
    fontFamily: 'Montserrat',
    fontSize: moderateScale(17, 0.1),
    fontWeight: '900',
    color: 'black',
  },
})