import React from "react";

const BreakingChangeInput = ({ breakingChange, onChange }) => (
    <div className="breaking-change-input">
        <label>Breaking Change (Optional):</label>
        <textarea
            placeholder="Describe the breaking change..."
            value={breakingChange}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);

export default BreakingChangeInput;