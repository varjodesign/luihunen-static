import React, {useState, useEffect} from 'react';
import Logo from './assets/luihunen.png';
import {DESKTOP, MAX_WIDTH, MOBILE} from "./constants";

function App() {
    const [screenMode, setScreenMode] = useState(undefined);

    useEffect(() => {
        getScreenMode();
        window.addEventListener('resize', () => getScreenMode());
    }, [])

    const getScreenMode = () => {
        setScreenMode(window.innerWidth < MAX_WIDTH ? MOBILE : DESKTOP);
    }
  return (
    <div style={{display: 'flex', justifyContent: 'center', aligItems: 'center', minHeight: '100vh'}}>
        <div>
            <div>
                <img
                    style={{width: screenMode === DESKTOP ? 400 : 300, height: screenMode === DESKTOP ? 400 : 300}}
                    src={Logo}/>
            </div>
            <div>
                Rakennamme Luihuista verkkokauppaa.
            </div>
            <div style={{paddingTop: 16}}>
                Aukioloajat:
            </div>
            <div>
                Osoite
            </div>
            <div>
                Puhelinnumero
            </div>
        </div>
    </div>
  );
}

export default App;
