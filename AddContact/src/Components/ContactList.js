import React from 'react'

export default function ContactList(props) {
  const {contact,removeContact}=props;
console.log("from Contactlist",contact);
  
const contactList = contact.map((val)=>{
    return (
        <div className='container'>
        
      <div>{val.data.name}</div>  
      <div>{val.data.email}</div>
      <span><button onClick={()=>removeContact(val.id)}>Delete</button></span> 
        </div>
    )
})
    return (
    <div className='contaclist'>
     <h1>ContactList</h1>
     <div>{contactList}</div>
    </div>
  )
}
