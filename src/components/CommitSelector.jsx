import React from 'react';

const CommitTypeSelector = ({ selectedType, onChange }) => {
  const commitTypes = ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'];

  return (
    <div className="commit-type-selector">
      <label>Select Commit Type:</label>
      <select value={selectedType} onChange={(e) => onChange(e.target.value)}>
        {commitTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CommitTypeSelector;