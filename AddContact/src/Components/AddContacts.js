import React, { useState } from 'react'
export default function AddContacts({addContact}) {
  
  const [contactData, setContacData]= useState({name:'',email:''});
 
  const handelChange=(e)=>{
    if(e.target.name==="name"){
      setContacData({...contactData,name: e.target.value})

    }
    else{
      setContacData({...contactData,email: e.target.value})

    }
  }
  const handelAdd=()=>{
    if(contactData.name===''||contactData.email===''){
      alert("Please fill all the details");
      return;
    }
    addContact(contactData);
    setContacData({name:'',email:''});
  }
  
  return (
    <div className='container'>
      <div>AddContacts</div>
    <form>
    <label>Name:</label>
    <input type='text' placeholder='Enter Name' name='name' value={contactData.name} onChange={handelChange}/>
    <label>Email:</label>
    <input type='text' placeholder='Enter Email' name='email' value={contactData.email} onChange={handelChange}/>
    
    </form>
    <button  onClick={handelAdd} >Add Contact</button>
    
      </div>
  )
}
