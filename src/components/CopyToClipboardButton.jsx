import React from 'react';

const CopyToClipboardButton = ({ text }) => {
  const handleCopy = () => navigator.clipboard.writeText(text);

  return (
    <button onClick={handleCopy}>
      Copy to Clipboard
    </button>
  );
};

export default CopyToClipboardButton;