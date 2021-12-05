import React, { useState, useEffect } from 'react'
import { myDatabaseChat } from '../../../config/utilsChatDatabase.js'
import { ref, push, child, update} from "firebase/database";


function RocketChat(datosUser) {

    const [emoji, setemoji] = useState(false)
    const [messages, setmessages] = useState({ txt: "" })
   


    useEffect(() => {


    }, [emoji])


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            var rand = function () {
                return Math.random().toString(36).substr(2);
            };

            var token = function () {
                return rand() + rand();
            };

            // set(ref(myDatabaseChat, 'pruebatres'), {
            //     name:"tu usuario",
            //     txt:messages.txt,
            //     id:token()                
            // });

            const new_msg = {
                name: datosUser.name,
                txt: messages.txt,
                id: token()
            }
            
            //esta variable solo hace el espacio nuevo en el chat para luego insertar
            const newPostKey = push(child(ref(myDatabaseChat), `${datosUser.table}}`)).key;

            const updates = {};
            updates[`${datosUser.table}/`+newPostKey] = new_msg;
            

            update(ref(myDatabaseChat), updates);

        } catch (e) {
            alert("Chat on on maintenance", e);
        }
        setmessages({ txt: "" })
    }

    const handleChange = (e) => {
        setmessages({ txt: e.target.value })
    }

    const emojiWorld = (e) => {
        e.preventDefault();
        setemoji(true)
    }

    const insertEmoji = (e) => {
        e.preventDefault();
        let prev_txt = messages.txt
        setmessages({ ...messages, txt: prev_txt + e.target.name })
        setemoji(false)
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
                <button name="emoji" onClick={(e) => emojiWorld(e)}>😃</button>
                {emoji ?
                    <div>
                        <h3>emojis</h3>
                        <button name="😀" onClick={(e) => insertEmoji(e)}>😀</button>
                        <button name="😅" onClick={(e) => insertEmoji(e)}>😅</button>
                        <button name="🙃" onClick={(e) => insertEmoji(e)}>🙃</button>
                        <button name="😍" onClick={(e) => insertEmoji(e)}>😍</button>
                        <button name="🤪" onClick={(e) => insertEmoji(e)}>🤪</button>
                        <button name="🤒" onClick={(e) => insertEmoji(e)}>🤒</button>
                        <button name="🙄" onClick={(e) => insertEmoji(e)}>🙄</button>
                        <button name="🥱" onClick={(e) => insertEmoji(e)}>🥱</button>
                        <button name="💯" onClick={(e) => insertEmoji(e)}>💯</button>
                        <button name="🚀" onClick={(e) => insertEmoji(e)}>🚀</button>
                    </div>
                    :
                    null}
            </form>

        </div>
    )
}

export default RocketChat
