// RichTextEditor.tsx
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function RichTextEditor({value, onChange}:{value: string, onChange: (value: string) => void}) {

  return (
    <div style={{ width: '100%' }}>
      <ReactQuill theme="snow" value={value} onChange={onChange} />
      <div style={{ marginTop: '20px' }}>
        <strong>Conteúdo HTML gerado:</strong>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <div dangerouslySetInnerHTML={{ __html: value }} />
        </div>
      </div>
    </div>
  );
}
