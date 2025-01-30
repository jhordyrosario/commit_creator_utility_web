import React from "react";

const GeneratedCommitDisplay = ({ commitMessage }) => (
    <div className="generated-commit-display">
        <label>Generated Commit Message:</label>
        <pre>{commitMessage}</pre>
    </div>
);

export default GeneratedCommitDisplay;