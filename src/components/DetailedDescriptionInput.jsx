import React from "react";

const DetailedDescriptionInput = ({details, onChange}) => (
    <div>
        <label>Detailed Description (Optional):</label>
        <textarea
            placeholder="Write a detailed description..."
            value={details}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);

export default DetailedDescriptionInput;