import { useEffect } from 'react';
import './App.css'

const tg = window.Telegram.WebApp;

function App() {

  useEffect(()=>{
    tg.ready();
  },[]);

  const handleClose = () => {
    tg.close();
  }

  return (
    <>
      <div>
        В разработке...
        <button onClick={handleClose}>Закрыть окно</button>
      </div>
    </>
  )
}

export default App
