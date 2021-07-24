import React, { memo, useState } from 'react';
// import React, {memo, useCallback, useState} from "react";
import './App.css';
import '@csstools/normalize.css';

const Wrap = memo(() => {
    const [name, setName] = useState('234')
    return <div>{name}</div>
})

export default Wrap