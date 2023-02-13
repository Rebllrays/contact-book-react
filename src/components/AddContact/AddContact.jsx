import React, {useState} from 'react'
import {Button, Modal, FormControl} from 'react-bootstrap';

const AddContact = ({show, handleClose, addContact}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');

    function createContact() {
      if(!name || !surname || !phone) {
        alert('Some inputs are empty!');
        return;
      };

      let newObj = {
        name, 
        surname,
        phone,
        id: Date.now()
      };

      addContact(newObj);

      setName('');
      setSurname('');
      setPhone('');

      handleClose();
    }

  return (
    <div>
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
        <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="form">
                <FormControl size="lg" className="my-3" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <FormControl size="lg" className="my-3" placeholder="Surname" value={surname} onChange={e => setSurname(e.target.value)} />
                <FormControl size="lg" className="my-3" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={handleClose} className='btn_close_add'>
            Close
        </Button>
        <Button onClick={createContact} className='btn_close_add'>
            Add
        </Button>
        </Modal.Footer>
    </Modal>
    </div>
  )
}

export default AddContact