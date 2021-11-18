import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { moderateScale } from "react-native-size-matters";
import AbstractButton from "../../../Components/AbstractComponents/AbstractButton";
import Colors from "../../../theme";
import PayPalSvg from '../../../../Assets/Icons/FlagsSvgs/PayPalSvg'
import VisaCardSvg from '../../../../Assets/Icons/FlagsSvgs/VisaCardSvg'
import { useTranslation } from 'react-i18next'


const PaymentMethodModal = (props) => {
  
  const { t, i18n } = useTranslation()

  return (

    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isVisible}
    >
      <TouchableWithoutFeedback
        onPress={() => { props.setModalVisiblity() }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <View style={styles.viewOne}>
                 
                 <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',width:'60%',alignSelf:'center'}}>
                 <TouchableOpacity
                 onPress={()=>{
                     props.setCardPaypal()
                     props.setpaypalActive()
                    }}
                 style={styles.viewTwo}>
                     <PayPalSvg size={35} />
                     <View style={{width:15,height:15,backgroundColor:'grey',borderRadius:7.5,justifyContent:'center',alignItems:'center'}}>
                     {props.paypalActive ? 
                       <View style={{width:8,height:8,backgroundColor:Colors.orange,borderRadius:4}} />
                     :null}
                     </View>
                 </TouchableOpacity>

                 <TouchableOpacity
                 onPress={
                     ()=>{
                     props.setCardVisa()
                     props.setvisaActive()
                     }
                    }
                 style={styles.viewTwo}>
                 <VisaCardSvg size={35} />
                     <View style={{width:15,height:15,backgroundColor:'grey',borderRadius:7.5,justifyContent:'center',alignItems:'center'}}>
                      {props.visaActive?
                       <View style={{width:8,height:8,backgroundColor:Colors.orange,borderRadius:4}} />
                       :null}
                     </View>
                 </TouchableOpacity>
                 </View>

                 <View style={{width:'100%',height:moderateScale(200,0.1)}}>
                     <View style={{marginTop:20}}>
                     <TextInput
                     value={props.cardNumber}
                     onChangeText={props.setcardNumber}
                     placeholder={t('Card Number')} style={{borderWidth:1,borderColor:'lightgrey',borderRadius:10,height:moderateScale(42,0.1)}} />
                      </View>
                     <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                    
                     <TextInput
                     value={props.mmy}
                     onChangeText={props.setmmy}
                     placeholder={'MM/YY'} style={{borderWidth:1,borderColor:'lightgrey',borderRadius:10,height:moderateScale(42,0.1) ,width:'47%'}} />
                     
                     <TextInput
                     value={props.cvc}
                     onChangeText={props.setcvc}
                     placeholder={'CVC'} style={{borderWidth:1,borderColor:'lightgrey',borderRadius:10,height:moderateScale(42,0.1),width:'47%'}} />
                    </View>

                    <View style={{marginTop:30}}>
                        <AbstractButton
                         onPress={() => { 
                             props.setModalVisiblity()
                             props.onConfirm()
                             }}
                        width={'100%'} height={'45%'} BorderRad={15} bgcolor={Colors.orange} txtSize={moderateScale(14,0.1)} label={t('Confirm')} />
                    </View>
                 </View>
               
               
               </View>    
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>


  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(196, 196, 196, 0.7)"
    // marginTop: 22
  },
  modalView: {
    // margin: 20,
    height: moderateScale(300,0.1),
    width: moderateScale(250,0.1),
    backgroundColor: "#F3F3F3",
    flexDirection: "column",
    borderRadius: 20,
    // padding: 35,
    alignItems: "center",
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3
  },
  viewOne:{
      width:'80%',
      height:'80%',
    //   backgroundColor:'pink'
  },
  viewTwo:{
    width:moderateScale(49,0.1),
    height:moderateScale(49,0.1),
    // backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center'
  }


});

export default PaymentMethodModal;