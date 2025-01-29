import React from 'react';
import ContactCard from './ContactCard'

const ContactList=(props)=>{
    console.log(props.contacts);

    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };

    const contacts=[{
        id:"1",
        name:"hamee",
        email:"123@gmail.com"
    }]
    const renderContactList=(contacts|| []).map((contact)=>{
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler}/>
        );
    });
    return(
        <div className="ui celled list">
          {renderContactList}
        </div>
    );
}

export default ContactList;