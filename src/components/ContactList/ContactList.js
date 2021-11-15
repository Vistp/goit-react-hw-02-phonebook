import React from 'react';
// import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
    return(
    //   <h3> новые контакты
    //   </h3>
        <ul className="ContactList">
            {contacts.map(({  id, name, number}) => (
                <li key={ id } className="Contact">
                    <p className="Contact__name">{name}</p>
                    <p className="Contact__number">{number}</p>
                    <button onClick={() => onDeleteContact(id)}>Удалить</button>
            </li>
            ))}
        </ul>
    
    )
}

export default ContactList;