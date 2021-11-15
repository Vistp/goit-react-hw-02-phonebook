import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange}) => {
    return (
        <form>
            <label>
              Find contact by name <input
                type="text"
                value={value}
                onChange={onChange}
                />
            </label>
        </form>
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}
export default  Filter;