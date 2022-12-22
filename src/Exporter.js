import React from 'react'
import './Exporter.css'

import MiddleC from './MiddleC.png'
import MiddleD from './MiddleD.png'
import MiddleE from './MiddleE.png'
import MiddleF from './MiddleF.png'
import MiddleG from './MiddleG.png'
import MiddleA from './MiddleA.png'
import MiddleB from './MiddleB.png'
import UpperA from './UpperA.png'
import UpperB from './UpperB.png'
import UpperC from './UpperC.png'
import UpperD from './UpperD.png'
import UpperE from './UpperE.png'
import UpperF from './UpperF.png'
import UpperG from './UpperG.png'
import UUpperA from './UUpperA.png'
import UUpperB from './UUpperB.png'
import UUpperC from './UUpperC.png'
import LLowerE from './LLowerE.png'
import LLowerF from './LLowerF.png'
import LLowerG from './LLowerG.png'
import LLowerA from './LLowerA.png'
import LLowerB from './LLowerB.png'
import LowerC from './LowerC.png'
import LowerD from './LowerD.png'
import LowerE from './LowerE.png'
import LowerF from './LowerF.png'
import LowerG from './LowerG.png'


export default function Exporter(props) {

    let buttonStyle = { marginTop: '15px', border: 'none', borderRadius: '5px', height: '25px', width: '50px', color: 'white', display: 'inline-block' }
    if (props.leyerValue === true) {
        buttonStyle.backgroundColor = 'green'
    } else {
        buttonStyle.backgroundColor = 'red'
    }

    let photoArray = [MiddleA, MiddleB, MiddleC, MiddleD, MiddleE, MiddleF, MiddleG,
                        UpperA, UpperB, UpperC, UpperD, UpperE, UpperF, UpperG,
                        UUpperA, UUpperB, UUpperC,
                        LLowerA, LLowerB, LLowerE, LLowerF, LLowerG,
                        LowerC, LowerD, LowerE, LowerF, LowerG];

    return (
        <div className='ExporterDiv' style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className='Leyer' style={{ width: '35vw', height: '85vh', borderRadius: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: '75%', position: 'relative' }}>
                
                <img src={photoArray[props.image]} style={{ width: '30vw', margin:'auto', borderRadius: '15px'}} alt='Some Note Nerd' />

                {/*}
                <h1 className = 'mainText' style={{ color: 'white', fontSize: '40px' }}>{props.text}</h1>
                <h1 style={{ marginRight: '30px' }}>{props.wordTwo}</h1>
                
                <h1 style={{ marginLeft: '5px', marginTop: '27px' }}>{props.wordThree}</h1>
                */}
            </div>
            <div style={{ width: '75vw', display: 'flex', justifyContent: 'center' }}>
                <button style={buttonStyle} onClick={props.startLeyer}>{props.buttonText}</button>
            {/*}
                <button style={{ display: 'inline-block', position: 'absolute', marginTop: '15px', border: 'none', borderRadius: '5px', height: '25px', width: '50px', color: 'white', right: '20vw', backgroundColor: 'darkgray' }}>Menu</button>
            */}
            </div>
        </div>
    )
}