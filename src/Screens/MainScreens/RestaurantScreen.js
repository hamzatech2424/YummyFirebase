import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import AbstractHeader from '../../Components/AbstractComponents/AbstractHeader'
import ContentContainer from '../../Components/AbstractComponents/ContentContainer'
import EatableItem from '../../Components/Module/EatableItem'
import StarRating from '../../Components/Module/StarRating'
import Colors from '../../theme'
import database from '@react-native-firebase/database'
import { useSelector, useDispatch } from 'react-redux'
import { AddtoCart } from '../../Redux/Action'
import UseGetDataHook from '../../CustomHooks/UseGetDataHook'


const ItemWidth = Dimensions.get('window').width

const RestaurantScreen = ({ navigation, route }) => {
    const { restoData } = route.params;
    const [dataOfItems, setdataOfItems] = useState([])
    const dispatch = useDispatch()
    const idOfrestaurant = restoData.id
    const [mycart,setMyCart] = UseGetDataHook('Cart')  


    const RestaurantFoodItems = (idOfrestaurant) => {

        database()
            .ref('/Menu').child(idOfrestaurant)
            .on('value', snapshot => {

                const menu = snapshot.val()
                let newArr = []
                for (let i in menu) {
                    newArr.unshift({ ...menu[i], id: i })
                }
                setdataOfItems(newArr)

            })
    }


    const SendCartData = (item) => {

        const inCart = mycart.find(myitem => myitem.dishName == item.dishName ? true : false)

        if (inCart) {
            let obj1 = {...inCart}
            obj1.quantity = ++obj1.quantity
            database().ref(`/Cart`).child(inCart.id)
            .update(obj1).then(()=>{console.log('updated')})
        }
        else {
            item.quantity = 1
            database().ref(`/Cart`)
                .push(item)
        }

}



useEffect(() => {
    RestaurantFoodItems(idOfrestaurant)
        
}, [])


return (
    <View style={styles.mainContainer}>
        <AbstractHeader onPressBack={() => navigation.goBack()} hide bgColor={'transparent'} />

        <View style={styles.viewOne}>
            <View style={styles.viewTwo}>
                <Image source={require('../../../Assets/Images/hut.png')} style={{ width: '100%', height: '100%' }} />
            </View>

        </View>

        <View style={styles.viewThree}>
            <View style={styles.viewFour}>
                <View style={{ width: '50%', height: '100%' }}>
                    <View style={{ height: '55%', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={styles.textOne}>{restoData.rest_name}</Text>
                        <Text style={[styles.textOne, { fontSize: moderateScale(14, 0.1) }]}>Fast Food</Text>
                    </View>
                    <View style={{ height: '45%', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <View>
                            <StarRating />
                        </View>
                        <View>
                            <Text style={[styles.textOne, { fontSize: moderateScale(12, 0.1) }]}>Comments: 467</Text>
                        </View>
                    </View>
                </View>


                <View style={{ width: '50%', height: '100%' }}>
                    <View style={{ width: '100%', height: '50%', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <View style={styles.viewFive}>
                            <Text style={{ color: 'white' }}>Open</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: '50%', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={styles.textOne}>Rs.1000</Text>
                        <Text style={[styles.textOne, { fontSize: moderateScale(14, 0.1) }]}>Delievery Time: 20-30 min</Text>
                    </View>

                </View>
            </View>

            <View style={{ width: '85%', alignSelf: 'center', marginTop: 20, flex: 1 }}>
                <FlatList
                    data={dataOfItems}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return <EatableItem width={ItemWidth * 0.34}
                            onPress={() => {
                                // dispatch(AddtoCart(item))
                                SendCartData(item)
                            }}
                            name={item.dishName}
                            image={item.imgUrl}
                            price={item.dishPrice}
                            idOfDish={item.id}
                        />
                    }}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    </View>
)
}

export default RestaurantScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    viewOne: {
        width: '100%',
        height: 150,
        // backgroundColor:'green',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    viewTwo: {
        width: 120,
        height: 125
        // ,backgroundColor:'pink'
    },
    viewThree: {
        width: '100%',
        backgroundColor: '#F3F3F3',
        flex: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    viewFour: {
        width: '85%',
        alignSelf: 'center',
        height: moderateScale(110, 0.1),
        // backgroundColor:'pink',
        flexDirection: 'row'
    },
    textOne: {
        fontFamily: 'Montserrat',
        fontSize: moderateScale(19, 0.1),
        fontWeight: '900',
        color: 'black',
    },
    viewFive: {
        width: 70,
        height: 30,
        borderRadius: 25,
        backgroundColor: Colors.orange,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
