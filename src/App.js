//imports
//import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from "react";

//firebase imports
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
//function imports of firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
  // your firebase config
  apiKey: "AIzaSyBHMavbmvI6IKYKdQN_pO6A4KZCG-vTjx0",
  authDomain: "webchat-65de0.firebaseapp.com",
  projectId: "webchat-65de0",
  storageBucket: "webchat-65de0.appspot.com",
  messagingSenderId: "454032400697",
  appId: "1:454032400697:web:8383997cb5e7f6152c88e8",
  measurementId: "G-J8MESJE1RH"
})
// firebase declaraton
const auth = firebase.auth();
const firestore = firebase.firestore();
//const analytics = firebase.analytics();




//main
function App() {
  //auth construction
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

     { /* check if useAuthState is logged in or not */}

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

// signin function
function SignIn() {
    // signIn
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

//sign out function

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


//chatroom

function ChatRoom() {
  //scroll ke liye
  const dummy = useRef();
  // message integrity
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

// message bhejne
  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';


  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


export default App;
