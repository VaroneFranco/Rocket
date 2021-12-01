import React, { useState } from 'react'
import {myFirestore} from '../../../config/utilsFirestore.js'
import { collection, addDoc, getDoc } from "firebase/firestore";

function RocketChat() {


   
    
      



    const [messages, setmessages] = useState({txt:"", allMessages:[]})
    

    const handleSubmit=async (e)=>{
        e.preventDefault();
        var list=messages.allMessages;
        let new_msg={name:"tu usuario" , txt:messages.txt, id:list.length};
        list.push(new_msg);
        setmessages({txt:"", allMessages:list})
        try {
            const chatRef = await addDoc(collection(myFirestore, "CHAT-DE-MESA-ID"), {
              name: new_msg.name,
              txt: new_msg.txt,
              id: new_msg.id
            });
            console.log("Document written with ID: ", chatRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
       
    }

    const handleChange=(e)=>{
        setmessages({...messages, txt:e.target.value})
    }

    return (
        <div>
            <ul>
                {/* {messages?.allMessages && messages.allMessages.map(m=>{
                    return <li id={m.id}>{m.name}: {m.txt}</li>
                })} */}
            </ul>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" value={messages.txt} name="input" onChange={(e) => handleChange(e)}></input>
                <button type="submit" >🚀</button>
                <button name="emoji" >😃</button>

            </form>
        </div>
    )
}

export default RocketChat
