import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';  
import './App.css';
import Header from './Header';  
import AddContact from './AddContact';
import ContactList from './ContactList';


function App(){
  const newId = uuidv4();  

const LOCAL_STORAGE_KEY="contcts";
const[contacts,setContacts]=useState([]);
  
const addContactHandler= (contact) =>{
   console.log(contact)
   setContacts([...contacts,{id:uuidv4(), ...contact}]) 
}

const removeContactHandler=(id)=>{
      const newContactList=contacts.filter((contact)=>{
        return contact.id!== id;
      })
      setContacts(newContactList);
}
useEffect(() => {
  const retrievedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);

  
  if (retrievedContacts) {
    setContacts(JSON.parse(retrievedContacts));
  }
}, []);  

useEffect(() => {
  if (contacts && contacts.length > 0) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)); 
  }
}, [contacts]);  

  return(
    <div className="ui container">
      <Router>
        
      <Header/>
      <Switch>
      <Route path="/add" component={AddContact}/>
      <Route path="/" component={ContactList}/>
      </Switch>
      {/*<AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>*/}
      </Router>
      
     
    </div>
  );
}

export default App;