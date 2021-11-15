import React from 'react';

const Filter = ({ value, onChange}) => {
    return (
        <form>
            <label>
              Поиск<input
                type="text"
                // name="name"
                value={value}
                onChange={onChange}
                />
            </label>
        </form>
    )
}

export default  Filter;