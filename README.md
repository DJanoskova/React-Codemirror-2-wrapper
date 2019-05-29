```
import React, { useState } from 'react'

import Codemirror from './Codemirror'
import './style.scss'

const MyComponent = () => {
  const [value, setValue] = useState('');
  
  const handleChange = e => {
    setValue(e.target.value);
  }
  
  return (
    <Codemirror
      onChange={handleChange}
      value={value}
      options={{ mode: 'javascript' }}
    />
  )
}

export default MyComponent
```
