import logo from './logo.svg';
import './App.css';
import { AudioController } from 'magic-r-engine';
import audio1 from './dummySound.mp3';
import audio2 from './Friend.mp3';
import playBtnImg from './play btn.png';
import pauseBtnImg from './pause.png';
import nextBtn from './next.png';
import prevBtn from './prev.png'

function App() {
  let sfxArray=[
    {
      id: "Track_Id_1",  
      src: audio1,  
    },
    {
      id: "Track_Id_2",  
      src: audio2,  
    },
  ]
  return (
    <div className="App">
      <AudioController
        audioVolume={1}
        audioSpeed ={1}
        onEnded={()=>{
          console.log('at end')
        }}
        sfxs={sfxArray}
        isShowNextPrevBtn = {false}
        isAutoPlay={true}
        playBtnImg ={ playBtnImg // image url
        }
        pauseBtnImg={ pauseBtnImg // image url
        }
        nextBtnImg={nextBtn
        }
        prevBtnImg={ prevBtn // image url
        }
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
