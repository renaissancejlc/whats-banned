


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { questions } from '../data/questions';
// import { v4 as uuidv4 } from 'uuid';

// // Replace the below with your actual Firebase project config
// import { getDatabase, ref, set, onValue } from 'firebase/database';
// import { getAuth, signInAnonymously } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyA9vhPU5bqBLZlvDSX7u6e1bM9hYywjL0M",
//   authDomain: "whatsbanned-f8663.firebaseapp.com",
//   databaseURL: "https://whatsbanned-f8663-default-rtdb.firebaseio.com",
//   projectId: "whatsbanned-f8663",
//   storageBucket: "whatsbanned-f8663.appspot.com",
//   messagingSenderId: "533267783226",
//   appId: "1:533267783226:web:7e938e3c45117f2a17df03",
//   measurementId: "G-XFMFY0QBV4"
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const auth = getAuth(app);

const HostGame = () => {
//   const [roomCode] = useState(uuidv4().slice(0, 6).toUpperCase());
//   const [players, setPlayers] = useState([]);
//   const [gameStarted, setGameStarted] = useState(false);
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     signInAnonymously(auth).then(() => {
//       const roomRef = ref(database, `rooms/${roomCode}`);
//       set(roomRef, {
//         host: true,
//         players: [],
//         gameStarted: false,
//         questions,
//         currentQuestionIndex: 0
//       });

//       // Listen for players joining
//       onValue(ref(database, `rooms/${roomCode}/players`), (snapshot) => {
//         const playersData = snapshot.val();
//         if (playersData) {
//           setPlayers(Object.values(playersData));
//         }
//       });
//     });
//   }, [roomCode]);

//   const handleStartGame = () => {
//     setGameStarted(true);
//     set(ref(database, `rooms/${roomCode}/gameStarted`), true);
//     // Navigate to gameplay with room code
//     navigate(`/game?room=${roomCode}`);
//   };

  return (
    <div style={{
      backgroundColor: '#fff',
      height: '100vh',
      padding: '40px',
      fontFamily: 'Arial Black, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      lineHeight: '1.2',
      color: '#000'
    }}>
      <h1 style={{
        fontSize: '5rem',
        letterSpacing: '-2px',
        position: 'relative',
        zIndex: 1,
        margin: 0
      }}>
        COMING<br />
        <span style={{
          position: 'absolute',
          left: '10px',
          top: '30px',
          color: '#ff0000',
          zIndex: -1
        }}>SOON</span>
      </h1>
      <div style={{
        fontSize: '1.2rem',
        marginTop: '40px',
        fontWeight: 'bold',
        textTransform: 'uppercase'
      }}>
        Kahoot-style chaos, but subversive
      </div>
      <div style={{
        fontSize: '1rem',
        marginTop: '20px',
        maxWidth: '500px',
        fontStyle: 'italic'
      }}>
        Asynchronous play. Unhinged facts. Unapologetic calls to action.
      </div>
      <div style={{
        marginTop: '40px',
        background: '#000',
        color: '#fff',
        padding: '20px',
        transform: 'rotate(-2deg)',
        width: 'fit-content'
      }}>
        <p style={{ margin: 0 }}>
          You&apos;ll host. They&apos;ll scramble.<br />One room code to rule them all.
        </p>
      </div>
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '40px',
        fontSize: '0.9rem',
        color: '#999'
      }}>
        Built in solidarity. Deployed soon.
      </div>
    </div>
  );
};

export default HostGame;