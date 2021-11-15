import React from 'react';
// import PropTypes from 'prop-types';
import Contact from '../Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
    return(
        <ul className="ContactList">
            {contacts.map(({  id, name, number}) => (
                <li key={ id } className="Contact">
                    {/* <p className="Contact__name">{name}</p>
                    <p className="Contact__number">{number}</p>
                    <button onClick={() => onDeleteContact(id)}>Delete</button> */}
                    <Contact
                        id={id}
                        name={name}
                        number={number}
                        onDeleteContact={onDeleteContact}
                    />
            </li>
            ))}
        </ul>
    
    )
}

export default ContactList;