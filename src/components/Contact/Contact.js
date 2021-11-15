import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number, onDeleteContact }) => {
    return (
        <>
            <p className="Contact__name">{name}:</p>
            <p className="Contact__number">{number}</p>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
        </>
    )
}
Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default Contact;