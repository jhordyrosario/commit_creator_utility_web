import React from "react";

const IssueReferenceInput = ({ issue, onChange }) => (
    <div>
        <label>Issue Reference (Optional)</label>
        <input
            type="text"
            placeholder="e.g., #123"
            value={issue}
            onChange={onChange(e.target.value)}
        />
    </div>
);

export default IssueReferenceInput;