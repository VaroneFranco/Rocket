import React, { useState, useEffect } from 'react'
import { myDatabaseChat } from '../../../config/utilsChatDatabase.js'
import { ref, onValue, get, child } from "firebase/database";



function RocketMessages() {
    const [messagesChat, setmessagesChat] = useState("")
    let chatRef = ref(myDatabaseChat);
    chatRef = child(chatRef, "nuevo-chat");
    let list=[]

    // useEffect(() => {
       
    // }, [])

    onValue(chatRef, (snapshot) => {
        if(list.length===0){
            list.push(Object.values(snapshot.val()))            
        }
        else{
            console.log("nada")
            console.log(list)
            setmessagesChat(Object.values(snapshot.val()))
        }
        
    })



    return (
        <div>
            <ul>
                {messagesChat.length ? messagesChat.map(m=>{
                    return <div>{m.name}: {m.txt}</div> 
                    })
                :
                null
                }
            </ul>
        </div>
    )
}

export default RocketMessages
