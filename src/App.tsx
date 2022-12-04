import React, { useEffect,useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import './App.css';

/* 
Example of how to call this by hitting and endpoint 
  curl \
  -H "Title: Title of Notification" \
  -H "Priority: urgent" \
  -H "Tags: warning,skull" \
  -d "main message in notification" \
  https://ntfy.sh/DamianMontero
*/

interface WebSocketMessage {
  id: string
  time: string
  event: string
  topic:string
  title: string
  message: string
  tags: string
}

function App() {
  const [notification,setNotification] = useState<string>("");

  useEffect( () => {

    const checkPermissiong = async () => {
      const permission = await Notification.requestPermission();
      if (Notification.permission !== 'granted') {
        alert("You've denied notification so this demo will not work. ")
      }
    }

    checkPermissiong();

      const webSocket = new WebSocket('wss://ntfy.sh/DamianMontero/ws');
      webSocket.onmessage = (e) => {
        //  Eample of e.data = {"id":"9y6Kxu34FQHV","time":1669941518,"event":"message","topic":"DamianMontero","title":"title of dama","message":"message","tags":["warning"]}
        const {id,time,event,topic,title,message,tags} = JSON.parse(e.data) as WebSocketMessage
        if (title) {
          const greeting = new Notification(title,{
              body: message,
              // you could read the picture from the message or have a hard coded one like this
              icon: 'https://damianmontero.com/damian.jpg' 
            });
          greeting.addEventListener('click', function(){
            // what to do when they click on the message. You could do things here, or simply open a new page.
            setNotification("OMG! You totally clicked that notification. \nGood job!")
          });
          // For here 
          setNotification(`We have received a new mssage with the title: ${title}`);
        }
      //});
      }

      return () => webSocket.close();

  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <h1>
      Notification Example.
    </h1>
    {notification}

      </header>
    </div>
  );
}

export default App;
