import React from "react";

const ShortDescriptionInput = ({ description, onChange }) => (
    <div className="short-description-input">
        <label>Short Description:</label>
        <input
            type="text"
            placeholder="Write a brief description..."
            value={description}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);

export default ShortDescriptionInput;