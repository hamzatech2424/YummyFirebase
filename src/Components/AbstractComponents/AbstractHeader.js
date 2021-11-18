import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import BackBtnSvg from '../../../Assets/Icons/FlagsSvgs/BackBtnSvg';
import Colors from '../../theme';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';

const AbstractHeader = ({onPressBack, onPressCart,hideIcon,hideLabel,bgColor,label,backBtnColor,navigation}) => {

   
  const defbgColor = bgColor ? bgColor : Colors.orange
  const defLabel = label ? label : 'text Here'
  const defbackBtnColor = backBtnColor ? backBtnColor : '#F8774A'

  return (
    <View style={[styles.mainContainer,{backgroundColor:defbgColor}]}>
      <View style={styles.viewOne}>
        <TouchableOpacity onPress={onPressBack} style={styles.backBtn}>
          <BackBtnSvg color={defbackBtnColor}  />
        </TouchableOpacity>
      </View>
      <View style={styles.viewTwo}>
        {hideLabel ? null:
        <Text style={[styles.textOne,{color:'white'}]}>{defLabel}</Text>
        }
      </View>
      <View style={styles.viewThree}>
        {hideIcon?null:
        <TouchableOpacity
          style={styles.backBtn}
          onPress={onPressCart}>
          <MaterialCommunityIcon name="basket" color="white" size={20} />
        </TouchableOpacity>
        }
      </View>
    </View>
  );
};

export default AbstractHeader;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: moderateScale(60, 0.1),
    flexDirection: 'row',
  },
  viewOne: {
    height: '100%',
    width: '15%',
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding:20

  },
  viewTwo: {
    height: '100%',
    width: '70%',
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOne: {
    fontFamily: 'Poppins',
    fontSize: moderateScale(18, 0.1),
    fontWeight: '900',
    color: 'black',
  },
  viewThree: {
    height: '100%',
    width: '15%',
    // backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
