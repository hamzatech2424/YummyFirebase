import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Dimensions,Image, StatusBar} from "react-native";
// const { width, height } = Dimensions.get('window');
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../theme';
import auth from '@react-native-firebase/auth';


const SplashScreen = ({navigation}) => {

 // // Set an initializing state whilst Firebase connects
//  const [initializing, setInitializing] = useState(true);
//  const [user, setUser] = useState();

 // // Handle user state changes
 // function onAuthStateChanged(user) {
 //     setUser(user);
 //     if (initializing) setInitializing(false);
 // }

//  useEffect(() => {
//      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//      return subscriber; // unsubscribe on unmount
//    }, []);

//    if (initializing) return null;

 //   if (user) {
 //    navigation.replace('DrawerNavigationRoutes')
 //   }

    // console.log(height);
    // console.log(width);


    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.orange} />

<LottieView source={require("../../../Assets/Images/SplashScreenBlack.json")} autoPlay loop
style={{width:260,height:260}}
/>

            {/* <Image 
            style={{width:"24%",height:"18%"}}
            source={require("../Assets/Images/splashScreenLogo.png")}
             />
             */}
        </View>
    )
}

export default SplashScreen


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.orange,
        justifyContent:"center",
        alignItems:"center"
        
    }
})