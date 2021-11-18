import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import Colors from '../../theme'

const EatableItem = ({name,price,image,width,onPress,idOfDish}) => {

     const defWidth = width ? width : 140


    return (
        <View
        style={{width:defWidth,height:190,backgroundColor:'white',justifyContent:'center',alignItems:'center',marginHorizontal:'5%',marginVertical:'2%'}}>
        <View style={{width:100,height:100,borderRadius:15}}>
        <Image source={require('../../../Assets/Images/Pizza1.png')} style={{width:'100%',height:'100%'}} />
        </View>
        <View style={{width:'85%',height:25,justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:10}}>
          <Text style={[{fontSize:moderateScale(10,0.1),color:'black'}]}>{name}</Text>
          <Text style={[{fontSize:moderateScale(8,0.1),color:'red'}]}>Rs.{price}</Text>
        </View>
        <View style={{width:'100%',height:35,justifyContent:'center',alignItems:'center'}}>
           <TouchableOpacity 
           onPress={onPress}
           style={styles.addToCartBtn}>
             <Text style={styles.textOne}>Add to Cart</Text>
           </TouchableOpacity>
        </View>
        </View>
    )
}

export default EatableItem

const styles = StyleSheet.create({
  addToCartBtn:{
    width:'90%',
    height:'75%',
    backgroundColor:Colors.orange,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    marginTop:10
  },
  textOne:{
    fontSize:moderateScale(10,0.1),
    color:'white'
  }
})
