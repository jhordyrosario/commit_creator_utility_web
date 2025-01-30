import React, { useState } from 'react';
import Header from './components/Header';
import CommitTypeSelector from './components/CommitTypeSelector';
import ScopeInput from './components/ScopeInput';
import ShortDescriptionInput from './components/ShortDescriptionInput';
import DetailedDescriptionInput from './components/DetailedDescriptionInput';
import BreakingChangeInput from './components/BreakingChangeInput';
import IssueReferenceInput from './components/IssueReferenceInput';
import GeneratedCommitDisplay from './components/GeneratedCommitDisplay';
import CopyToClipboardButton from './components/CopyToClipboardButton';

const App = () => {
  const [type, setType] = useState('feat');
  const [scope, setScope] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [details, setDetails] = useState('');
  const [breakingChange, setBreakingChange] = useState('');
  const [issue, setIssue] = useState('');

  const generateCommitMessage = () => {
    let commit = `${type}${scope ? `(${scope})` : ''}: ${shortDescription}`;
    if (details) commit += `\n\n${details}`;
    if (breakingChange) commit += `\n\nBREAKING CHANGE: ${breakingChange}`;
    if (issue) commit += `\n\nRefs: ${issue}`;
    return commit;
  };

  return (
    <div className="app">
      <Header />
      <CommitTypeSelector selectedType={type} onChange={setType} />
      <ScopeInput scope={scope} onChange={setScope} />
      <ShortDescriptionInput description={shortDescription} onChange={setShortDescription} />
      <DetailedDescriptionInput details={details} onChange={setDetails} />
      <BreakingChangeInput breakingChange={breakingChange} onChange={setBreakingChange} />
      <IssueReferenceInput issue={issue} onChange={setIssue} />
      <GeneratedCommitDisplay commitMessage={generateCommitMessage()} />
      <CopyToClipboardButton text={generateCommitMessage()} />
    </div>
  );
};

export default App;