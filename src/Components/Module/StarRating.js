import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';


const StarRating = () => {
    return (
        <View style={styles.mainContainer}>
             <AntDesign name={'star'} color={'red'} size={moderateScale(15,0.1)} />
             <AntDesign name={'star'} color={'red'} size={moderateScale(15,0.1)} />
             <AntDesign name={'star'} color={'red'} size={moderateScale(15,0.1)} />
             <AntDesign name={'star'} color={'red'} size={moderateScale(15,0.1)} />
             <AntDesign name={'star'} color={'red'} size={moderateScale(15,0.1)} />
        </View>
    )
}

export default StarRating

const styles = StyleSheet.create({
    mainContainer:{
      flexDirection:'row'
    }
})
