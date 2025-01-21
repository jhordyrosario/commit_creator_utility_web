import React from "react";

const DetailedDescriptionInput = ({details, onchange}) => (
    <div>
        <label>Detailed Description (Optional):</label>
        <textarea
            placeholder="Write a detailed description..."
            value={details}
            onChange={(e) => onchange(e.target.value)}
        />
    </div>
);

export default DetailedDescriptionInput;