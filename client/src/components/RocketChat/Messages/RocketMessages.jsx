// import "./RocketMessages.css"
import React, { useState, useEffect } from 'react'
import { myDatabaseChat } from '../../../config/utilsChatDatabase.js'
import { ref, onValue, child } from "firebase/database";



function RocketMessages(datosUser) {
    const [messagesChat, setmessagesChat] = useState("")
    let chatRef = ref(myDatabaseChat);
    let mesaChat=datosUser.table
    chatRef = child(chatRef, mesaChat);
    let list=[]
   

    useEffect(() => {
        
        onValue(chatRef, (snapshot) => {
            // if(list.length===0){
            //     list.push(Object.values(snapshot.val()))            
            // }
            // else{
            //     console.log("nada")
            //     console.log(list)
            if(snapshot.exists()){
                setmessagesChat(Object.values(snapshot.val()))
            }
            else(console.log("no hay chat aun"))
                
            // }
            
        })
        
        // onChildAdded(chatRef, (snapshot) => {
        //     // if(list.length===0){
        //     //     list.push(Object.values(snapshot.val()))            
        //     // }
        //     // else{
        //     //     console.log("nada")
        //     //     console.log(list)
        //         setmessagesChat(Object.values(snapshot.val()))
        //     // }
            
        // })

    }, [])




    return (
        <div className="container_chat">
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
