import React from 'react';
import { useState } from 'react';
import {Button, Modal, FormControl} from 'react-bootstrap';


const EditContact = ({showEditModal, handleEditClose, editedContact, saveChanges}) => {
  const [contact, setContact] = useState(editedContact);

  let handleInput = (e) => {
    let newObjCon = {
        ...contact,
        [e.target.name]: e.target.value
    };
    setContact(newObjCon);
  }

  function saveEditedContact() {
    for(let i in contact) {
        if(contact[i]===" ") {
            alert("Some inputs are empty");
            return;
        }
    }
    // console.log(contact);
    saveChanges(contact);
};


  return (
    <>
    <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
        <Modal.Title>Update Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="form">
                <FormControl size="lg" className="my-3" placeholder="Name" value={contact.name} name="name" onChange={handleInput} />
                <FormControl size="lg" className="my-3" placeholder="Surname" value={contact.surname} name='surname' onChange={handleInput} />
                <FormControl size="lg" className="my-3" placeholder="Phone" value={contact.phone} name='phone' onChange={handleInput} />
            </div>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={handleEditClose} className='btn_close_add'>
            Close
        </Button>
        <Button onClick={saveEditedContact} className='btn_close_add'>
            Save Changes
        </Button>
        </Modal.Footer>
    </Modal>    
    </>
  )
}

export default EditContact;