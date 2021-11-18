import React, { useEffect,useState } from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import AbstractHeader from '../../Components/AbstractComponents/AbstractHeader';
import ContentContainer from '../../Components/AbstractComponents/ContentContainer';
import Colors from '../../theme';
import {moderateScale} from 'react-native-size-matters';
import CategoryItem from '../../Components/Module/CategoryItem';
import RestaurantItem from '../../Components/Module/RestaurantItem';
import database from '@react-native-firebase/database'
import {useTranslation} from 'react-i18next'
import UseGetDataHook from '../../CustomHooks/UseGetDataHook'
const HomeScreen = ({navigation}) => {


const [restaurant,setRestaurant] = useState([])
const [Selected,setSelected] = useState(true)
const {t,i18n} = useTranslation()
const [foodType,setFoodType] = UseGetDataHook('FoodType')  



const ReadDataForRestaurant = (idOfType) =>{
  database()
  .ref('/Restaurant')
  .on('value', snapshot => {

      const rest = snapshot.val()
      let newArr = []
      for (let i in rest) {
      
        if(rest[i].rest_food_type == idOfType){
          newArr.unshift({...rest[i],id:i})
        }
    
      }
      setRestaurant(newArr)

  })
} 


const SelectedType = (idOfType) => {
  // console.log(idOfType)
  for (let i = 0; i < foodType.length; i++) {
      // console.log(foodType[i].active)
    if(foodType[i].id == idOfType){
        foodType[i].active = true
        setSelected(foodType[i])
    }
    else {
      foodType[i].active = false
    }
  }
}


  useEffect(()=>{
    ReadDataForRestaurant('-Mmsd_zrRchklvRkWoEu')

  },[])


  
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.orange} />
      <AbstractHeader onPressBack={()=>navigation.navigate('CountrySelect')} label={t('Home')} backBtnColor={'white'} onPressCart={()=>navigation.navigate('Cart')} />

      <View style={styles.viewOne}>
        <View style={styles.viewOneinIt}>
          <View style={{width: '85%', alignSelf: 'center', marginTop: 10}}>
            <Text style={styles.textOne}>{t('Categories')}</Text>
          </View>

          <View style={styles.viewThree}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {foodType.map((value, index) => {
                return (
                  <CategoryItem
                    onPress={()=>{
                      SelectedType(value.id)
                      ReadDataForRestaurant(value.id)
                    }}
                    key={index}
                    label={value.foodTypeName}
                    Picture={value.foodImage}
                    isActive={value.active}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>

      <View style={styles.viewTwo}>
        <View style={styles.viewFour}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.textOne}>{t('Select Restaurant')}</Text>
          </View>
        </View>

        <View style={{width: '85%',alignSelf: 'center',flex:1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {restaurant.map((value, index) => {
              return (
                <RestaurantItem
                  key={index}
                  name={value.rest_name}
                  imgUrl={value.image}
                  onPress={()=>navigation.navigate('Restaurant',{restoData:value})}
                />
              );
            })}
            <View style={{width:'100%',height:moderateScale(44,0.1)}}></View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  viewOne: {
    width: '100%',
    height: moderateScale(230, 0.1),
    backgroundColor: '#F3F3F3',
  },
  viewOneinIt: {
    width: '100%',
    height: moderateScale(230, 0.1),
    backgroundColor: '#F3F3F3',
  },
  viewTwo: {
    width: '100%',
    flex:1,
    backgroundColor: 'white',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    marginTop: -35,
  },
  viewThree: {
    width: '100%',
    height: moderateScale(150, 0.1),
    // backgroundColor: 'green',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewFour: {
    width: '85%',
    height: moderateScale(25, 0.1),
    marginTop: 10,
    // backgroundColor:'pink',
    alignSelf: 'center',
  },
  textOne: {
    fontFamily: 'Montserrat',
    fontSize: moderateScale(17, 0.1),
    fontWeight: '900',
    color: 'black',
  },
});
