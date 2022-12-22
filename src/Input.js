import React from 'react'
import './Input.css'

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=Nunito:ital,wght@0,300;1,300&family=Poppins:wght@300&family=Roboto+Condensed:wght@300&display=swap');
</style>

export default function Input(props) {
  return (
    <div className="InputGrids" style={{ height: '100vh', backgroundColor: 'lightgrey', display: 'grid' }}>
  {/* <textarea value={props.input} onChange={props.handleChange} style={{ gridColumn: '2/7', gridRow: '2', border: 'none', borderRadius: '15px', padding: '5%', fontFamily: 'Nunito' }} />
      <button style={{ gridRow: '3', gridColumn: '4', border: 'none', height: '30px', borderRadius: '30px', marginTop: '20px' }} onClick={props.handleSubmit}>Submit</button>
      <p style={{ gridRow: '3', gridColumn: '2/7', margin: 'auto' }}>__________________________________</p>
  */}

      <p style={{ gridRow: '3', gridColumn: '2', marginTop: '120px', fontFamily: 'Poppins' }}>TIME PER CARD:</p>
      <input value={props.wpm} onChange={props.wpmChange} style={{ gridRow: '3', gridColumn: '2', marginTop: '120px', marginLeft: '150px', height: '20px', width: '40px', border: 'none', borderRadius: '5px' }}></input>

{/*
      
      <label class="switch" style = {{ gridRow: '4', gridColumn: '3', marginTop: '8px', }}>
        <input type="checkbox"></input>
          <span class="slider round"></span>
      </label>
      <p style = {{gridRow: '4', gridColumn: '2', fontFamily: 'Poppins'}}>Peripheral: </p>
*/}

    </div>
  );
}