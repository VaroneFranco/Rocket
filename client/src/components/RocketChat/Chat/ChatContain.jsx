// import "./RocketMessages.css"
import React, { useState, useEffect } from "react";
import { myDatabaseChat } from "../../../config/utilsChatDatabase.js";
import { ref, onValue, get, child, onChildAdded } from "firebase/database";

import s from "./ChatContain.module.css";
import RocketChat from "../Input/RocketChat"
import Message from "../Message/Message.js";

function ChatContain({table, name , img }) {
  const [messagesChat, setmessagesChat] = useState("");
  let chatRef = ref(myDatabaseChat);
  let mesaChat = table;
  chatRef = child(chatRef, mesaChat);

  useEffect(() => {
    onValue(chatRef, (snapshot) => {
      if (snapshot.exists()) {
        setmessagesChat(Object.values(snapshot.val()));
      } else console.log("no hay chat aun");
    });

    onChildAdded(chatRef, (snapshot) => {
      setmessagesChat(Object.values(snapshot.val()));
    });
  }, []);


  useEffect(()=>{
      console.log(messagesChat)
  },[messagesChat])

  useEffect(()=>{
    console.log(`el usuario actual se llama ${name}, pertenece a la tabla ${table} y su imagen es ${img}`)
},[])

  return (
    <div className={s.chatBox}>
      <div className={s.chatBoxWrapper}>
        <div className={s.chatBoxTop}>
            
          {messagesChat.length
            ? messagesChat.map((m) => {
                return (
                    <Message name={m.name} img={m.img} txt={m.txt}/>
                );
              })
            : null}
        </div>

        <div className={s.bottom}>
        <RocketChat img={img} name={name} table={table}/>
        </div>
      </div>
    </div>
  );
}

export default ChatContain;
