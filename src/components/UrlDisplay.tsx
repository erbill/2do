// src/UrlDisplay.tsx

import React, { useState } from 'react';

function UrlDisplay() {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy the URL: ", err);
    }
  };

  return (
    <div className="underthebridge">
      <p>You can visit this url to access later</p>
      <span className="information" onClick={copyToClipboard} style={{ cursor: "pointer" }}>
        {window.location.href}
      </span>
      
      {copySuccess && <span> - URL copied!</span>}
    </div>
  );
}

export default UrlDisplay;
