import React from 'react';

const Filter = ({ value, onChangeFilter }) => {
    return (
        <label>
            <input
                className="filterInput"
                type="text"
                name="filter"
                value={value}
                placeholder="Search contact..."
                onChange={event => onChangeFilter(event.target)}
            />
        </label>
    );
};

export default Filter;
