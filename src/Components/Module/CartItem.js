import React,{useEffect} from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import Colors from '../../theme'
import Entypo from 'react-native-vector-icons/dist/Entypo';



const CartItem = ({ dishDetails, del, inc, dec }) => {

    // console.log(dishDetails, 'cartitem say')
        


    return (
        <View style={styles.mainContainer}>
            <View style={styles.viewOne}>
                <View style={{ width: 80, height: 70, borderRadius: 20, paddingLeft: 2 }}>
                    <Image source={require('../../../Assets/Images/cartItem.png')} style={{ width: '100%', height: '100%', borderRadius: 15 }} />
                </View>
                <View style={{ height: '100%', justifyContent: 'center', marginLeft: 20 }}>
                    <Text style={[styles.textOne, { fontSize: moderateScale(14, 0.1), paddingBottom: 3 }]}>{dishDetails.dishName}</Text>
                    {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 15, height: 15, borderRadius: 10, marginRight: 2 }}>
                            <Image source={require('../../../Assets/Images/hut.png')} style={{ width: '100%', height: '100%' }} />
                        </View>
                        <Text style={[styles.textOne, { fontSize: moderateScale(10, 0.1), fontWeight: '500' }]}>Pizza hut</Text>
                    </View> */}
                    <View>
                        <Text style={{ color: 'black', fontSize: moderateScale(12, 0.1), }}>Rs.{dishDetails.dishPrice}</Text>
                    </View>
                </View>

            </View>
            <View style={styles.viewTwo}>
                <View style={{ width: '100%', height: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ width: 90, height: 35, borderRadius: 20, flexDirection: 'row', borderWidth: 1, borderColor: Colors.orange }}>
                        <TouchableOpacity
                              onPress={() => {
                                if(dishDetails.quantity >= 0){
                                   inc()
                                }
                               }}
                            style={{ width: '35%', height: '100%', justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: Colors.orange, paddingBottom: 2, fontSize: 17 }}>+</Text></TouchableOpacity>
                        <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: Colors.orange, fontSize: 17 }}>{dishDetails.quantity}</Text></View>
                        <TouchableOpacity
                             onPress={() => {
                                if(dishDetails.quantity > 1){
                                   dec()
                                }
                               }}
                            style={{ width: '35%', height: '100%', justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: Colors.orange, paddingBottom: 2, fontSize: 18 }}>-</Text></TouchableOpacity>
                    </View>

                    <TouchableOpacity
                     onPress={del}
                        style={{ padding: 8 }} >
                        <Entypo color={Colors.orange} name={'cross'} size={25} />
                    </TouchableOpacity>


                </View>

            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: 15,
        width: '99%',
        alignSelf: 'center',
        height: moderateScale(70, 0.1),
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 1.5,
    },
    viewOne: {
        width: '60%',
        height: '100%',
        // backgroundColor: 'green',
        flexDirection: 'row'
    },
    viewTwo: {
        width: '40%',
        height: '100%',
        // backgroundColor: 'grey',
        flexDirection: 'row'

    },
    textOne: {
        fontFamily: 'Montserrat',
        fontSize: moderateScale(17, 0.1),
        fontWeight: '900',
        color: 'black',
    },
})
