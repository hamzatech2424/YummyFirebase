import React,{useState,useEffect} from 'react'
import database from '@react-native-firebase/database'


export default (Reference) =>{

    const [arrayState,setarrayState] = useState([])

    useEffect(()=>{
        const unsubscribe = database()
        .ref(`/${Reference}`)
        .on('value', snapshot => {
      
            const types = snapshot.val()
            let newArr = []
            for (let i in types) {
                newArr.unshift({...types[i],id:i})
            }
            setarrayState(newArr)
        })

        return () => database().ref(`/${Reference}`).off('value', unsubscribe)

    },[])

    
    return [arrayState,setarrayState]


}



