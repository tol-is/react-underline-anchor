import React from 'react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

SyntaxHighlighter.registerLanguage('jsx', jsx);

export const Code = ({ code, language }: { code: string; language: string }) => {
  return (
    <SyntaxHighlighter language={language} wrapLongLines>
      {code}
    </SyntaxHighlighter>
  );
};
