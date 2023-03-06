import React from 'react'
import logo from '../logo.svg';

const AvatarList = () => {
const contacts = ["Olivia", "Ethan", "Sophia", "William", "Isabella", "Benjamin", "Mia", "Alexander", "Charlotte", "James"];
  return (
    <div className="AvatarLeft">
    <div className="Avatar">
    <img src={logo} className="App-logo" alt="logo" />
    </div>
    <div>
    {contacts.map((item,index) => (
      <div key={index}>
        <p>{item}</p>
      </div>
    ))}
    </div>
  </div>
  )
}

export default AvatarList