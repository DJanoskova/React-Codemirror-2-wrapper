import React from 'react';
import PropTypes from 'prop-types';

import { Controlled } from 'react-codemirror2';

import('codemirror/mode/xml/xml');
import('codemirror/mode/javascript/javascript');
import('codemirror/mode/htmlmixed/htmlmixed');

import('codemirror/addon/edit/closebrackets');
import('codemirror/addon/edit/closetag');
import('codemirror/addon/edit/matchbrackets');
import('codemirror/addon/edit/matchtags');

import('codemirror/addon/selection/active-line');
import('codemirror/addon/selection/mark-selection');

const Codemirror = ({ value, onChange, options }) => {
  const handleChange = (editor, data, value) => {
    onChange({ target: { value } });
  };
  return (
    <Controlled
      value={value}
      options={{
        theme: 'material',
        lineNumbers: true,
        lineWrapping: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        autoCloseTags: true,
        matchTags: true,
        styleActiveLine: true,
        mode: 'javascript',
        ...options
      }}
      onBeforeChange={handleChange}
    />
  );
};

Codemirror.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.object
};

Codemirror.defaultProps = {
  value: '',
  options: null
};

export default Codemirror;
