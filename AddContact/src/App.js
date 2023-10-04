
import './App.css';
import Header from './Components/Header';
import AddContacts from './Components/AddContacts'
import ContactList from './Components/ContactList';
import { useEffect, useState } from 'react';
import uuid4 from 'uuid4';
function App() {
  const localStoragekey = "contact";
  const [contact,setContact]= useState(()=>{
    return JSON.parse(localStorage.getItem(localStoragekey))
  ||[]});

  
  useEffect(()=>{
    localStorage.setItem(localStoragekey,JSON.stringify(contact));
  },[contact])

  
  function addContact(data){
    setContact([...contact,{id:uuid4(),data}]);
  }
  function remove(id){
    const updatedList= contact.filter((val)=>{
      return val.id !==id;
    })
setContact(updatedList);

  }



  return (
    <>
    <Header/>
    <AddContacts addContact={addContact}/>
    <ContactList contact={contact} removeContact={remove}/>
    </>
      
  );
}

export default App;
