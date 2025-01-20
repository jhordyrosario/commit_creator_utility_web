import React from "react";

const ScopeInput = ({ selectedScope, onChange }) => (
    <div className="scope-input">
        <label>Scope:</label>
        <input
            type="text"
            placeholder="e.g., auth, ui, api"
            value={selectedScope}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);

export default ScopeInput;