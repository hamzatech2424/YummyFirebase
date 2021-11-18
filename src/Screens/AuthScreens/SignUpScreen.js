import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Alert, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PhoneInput from "react-native-phone-number-input";
import Colors from '../../theme';
import auth from '@react-native-firebase/auth';
import { useTranslation } from 'react-i18next'


const SignInScreen = ({ navigation }) => {

    const [nameFocus, setnameFocus] = useState(false)
    const [emailFocus, setemailFocus] = useState(false)
    const [passwordFocus, setpasswordFocus] = useState(false)
    const [NumberFocus, setNumberFocus] = useState(false)
    const [PasswordValidate, setPasswordValidate] = useState(false)
    const [EmailValidate, setEmailValidate] = useState(false)
    const phoneInput = useRef();
    const [SignUpCredentials, setSignUpCredentials] = useState({
        Fullname: "",
        email: "",
        password: "",
        contact: ""
    })
    const { t, i18n } = useTranslation()


   const SignUpWithFirebase = () =>{
   
   auth()
  .createUserWithEmailAndPassword(SignUpCredentials.email, SignUpCredentials.password)
  .then(() => {
    
    navigation.navigate('SignInPage')
    setSignUpCredentials('')
    // console.log('User account created & signed in!');

  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
      Alert.alert('That email address is already in use!')
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
      Alert.alert('That email address is invalid!')

    }
    // console.error(error);
  });
    }




    const PasswordValidation = () => {
        if (SignUpCredentials.password.length > 5) {
            setPasswordValidate(false)
        }
        else {
            setPasswordValidate(true)
        }
    }

    const EmailValidation = () => {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (SignUpCredentials.email.match(mailformat)) {
            setEmailValidate(false)
        }
        else {
            setEmailValidate(true)
        }
    }

    const SignUpButtonValidationCheck = () => {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (SignUpCredentials.email.match(mailformat) && SignUpCredentials.password.length > 5) {
            SignUpWithFirebase()
        }
        else if (SignUpCredentials.email == "" && SignUpCredentials.password == "") {
            Alert.alert("Fill the Fields")
        }
        else {
            Alert.alert("Clear the errors first")
        }
    }






  



    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <StatusBar barStyle={'dark-content'} backgroundColor={"white"} />

            <View style={styles.container}>


                <View style={styles.innerMiddle} >

                <Text style={styles.SignInTxt} >
                    {t('Sign Up')}
                </Text>

                    <View style={styles.ViewOfField}>
                        <Text style={styles.TxtOfField} >
                            {t('Full Name')}
                        </Text>

                        <TextInput placeholder={t('Full Name')}
                            style={nameFocus ? styles.TxtInputFocused : styles.TxtInput}
                            value={SignUpCredentials.Fullname}
                            onChangeText={(txt) => setSignUpCredentials({ ...SignUpCredentials, Fullname: txt })}
                            onFocus={() => {
                                setemailFocus(false)
                                setpasswordFocus(false)
                                setnameFocus(true)
                            }}
                        />
                    </View>


                    <View style={styles.ViewOfField} >
                        <Text style={styles.TxtOfField} >
                            {t('Email ID')}
                        </Text>

                        <TextInput placeholder={t("Enter your Email")}
                            style={emailFocus ? styles.TxtInputFocused : styles.TxtInput}
                            value={SignUpCredentials.email}
                            onChangeText={(txt) => {
                                setSignUpCredentials({ ...SignUpCredentials, email: txt })
                                EmailValidation()
                            }}
                            onFocus={() => {
                                setemailFocus(true)
                                setpasswordFocus(false)
                                setnameFocus(false)
                            }}
                        />
                        {EmailValidate ?
                            <Text style={{ color: "red" }}>{t('*Email must be correctly Formated')}</Text> : null}
                    </View>




                    <View style={styles.ViewOfField}>
                        <Text style={styles.TxtOfField} >
                        {t('Password')}
                        </Text>


                        <TextInput placeholder={t('Password')}
                            secureTextEntry={true}
                            style={passwordFocus ? styles.TxtInputFocused : styles.TxtInput}
                            value={SignUpCredentials.password}
                            onChangeText={(txt) => {
                                setSignUpCredentials({ ...SignUpCredentials, password: txt })
                                PasswordValidation()
                            }}
                            onFocus={() => {
                                setemailFocus(false)
                                setpasswordFocus(true)
                                setnameFocus(false)
                            }}
                        />
                        {PasswordValidate ?
                            <Text style={{ color: "red" }}>{t('*Password must be 6 characters long')}</Text> : null}
                    </View>




                    {/* <View style={styles.ViewOfField}>
                        <Text style={styles.TxtOfField} >
                            Contact
                        </Text>

                        <PhoneInput
                            ref={phoneInput}
                            defaultCode="PK"
                            layout="first"
                            defaultvalue={SignUpCredentials.contact}
                            onChangeFormattedText={(txt) => setSignUpCredentials({ ...SignUpCredentials, contact: txt })}
                            // onChangeFormattedText={(text) => {
                            //   setFormattedValue(text);
                            // }}
                            containerStyle={NumberFocus ? { width: "100%", borderColor: "#f51929", borderWidth: 1, borderRadius: 10 } : { width: "100%", borderColor: "grey", borderWidth: 1, borderRadius: 10 }}
                            textContainerStyle={{ borderRadius: 10, height: 50 }}
                            textInputStyle={{ height: 50 }}
                            // withDarkTheme
                            // withShadow
                            autoFocus
                        />

                    </View> */}



                    <TouchableOpacity
                        style={styles.SignInBtn}
                        onPress={() => SignUpButtonValidationCheck()}

                    >
                        <Text
                            style={{ color: "white", fontWeight: "bold" }}
                        >{t('Sign Up')}</Text>
                    </TouchableOpacity>

                    <View style={styles.NotYet}>
                        <Text>{t('Already have a account,')}

                            <Text
                                onPress={() => navigation.navigate("SignInPage")}
                                style={{ fontWeight: "bold", color: Colors.orange }}>
                                {t('Sign In')}</Text></Text>
                    </View>

                </View>

              

            </View>

        </KeyboardAwareScrollView>


    )
}

export default SignInScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
  
    },


    innerMiddle: {
        width: "87%",
        height: "63%",
        // backgroundColor: "purple",
        marginTop: "30%",
        
    },
    SignInTxt: {
        fontSize: 22,
        fontWeight: "bold",
        alignSelf:'center',
        marginVertical:25
        // marginTop:"15%"
    },
    ViewOfField: {
        //    backgroundColor:"orange",
        marginTop: "5%",
        height:90
    },
    TxtOfField: {
        fontSize: 15,
        marginBottom: "2%"
    },
    TxtInput: {
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: "3%",


    },
    TxtInputFocused: {
        borderColor: Colors.orange,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: "3%",
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 1.5,
    },

    SignInBtn: {
        width: "90%",
        height: 50,
        marginTop: "10%",
        backgroundColor: Colors.orange,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: "5%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 4,
    },


    Bottom: {
        width: "100%",
        height: "30%",
        backgroundColor: "yellow"
    },
    NotYet: {
        width: "100%",
        // backgroundColor:"pink",
        justifyContent: "center",
        alignItems: "center",
        marginTop:20
    },
})