import React from 'react';
import {Card, Button} from 'react-bootstrap';

const ContactList = ({contacts, getOneContact, deleteContact}) => {
  // console.log(contacts);
  return (
    <div>
      <h2 className='title d-flex justify-content-center'>Contacts List</h2>
      {contacts.map(item => (
        <Card key={item.id} style={{ width: '80%' }} className="card m-auto my-2">
          <Card.Body style={{ display: 'flex', justifyContent: 'space-between' }} >
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.surname}</Card.Text>
            <Card.Text>{item.phone}</Card.Text>
            <Button className='btn-card' onClick = {() => getOneContact(item.id)}>Edit</Button>
            <Button className='btn-card mx-2' onClick={() => deleteContact(item.id)}>Delete</Button>
          </Card.Body>
        </Card>
        ))}
    </div>
  )
}

export default ContactList;