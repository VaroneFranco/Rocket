import React, {useState, useEffect} from 'react'
import {myFirestore} from '../../../config/utilsFirestore.js'
import { collection, addDoc, getDocs, doc, onSnapshot } from "firebase/firestore";




function RocketMessages() {
    const [messagesChat, setmessagesChat] = useState([])

    useEffect(async () => {
    const querySnapshot = await getDocs(collection(myFirestore, "CHAT-DE-MESA-ID"));
    setmessagesChat({...setmessagesChat, querySnapshot})   
    }, [])


    const unsub = onSnapshot(doc(myFirestore, "CHAT-DE-MESA-ID", "SF"), (doc) => {
        console.log("Current data: ", doc.data());
    });

    console.log(messagesChat)

    return (
        <div>
            <ul>

            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            
            </ul>
        </div>
    )
}

export default RocketMessages
