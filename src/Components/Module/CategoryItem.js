import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { moderateScale } from 'react-native-size-matters'
import PizzaSvg from '../../../Assets/Icons/PizzaSvg'
import Colors from '../../theme'

const CategoryItem = ({label,Picture,onPress,isActive}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        style={[styles.mainContainer,{backgroundColor:isActive?Colors.orange:'white'}]}>
              <View style={{width:70,height:70}}>
                <Image source={{uri:Picture}}  style={{width:'100%',height:'100%'}} />
              </View>
            <View style={{paddingTop:10}}>
                <Text style={[styles.textOne,{color:isActive?'white':'black'}]}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    mainContainer:{
        width:moderateScale(100,0.1),
        height:moderateScale(130,0.1),
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:8,
        marginVertical:15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    
        elevation: 1.5,
    },
    textOne:{
        fontFamily: 'Montserrat',
        fontSize: moderateScale(13, 0.1),
        fontWeight: '900',
    }
})
