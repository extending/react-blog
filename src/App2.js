import React, { memo, useEffect, useState } from 'react';
// import React, {memo, useCallback, useState} from "react";
import CHeader from './components/CHeader/'
import CSideBar from './components/CSideBar/'
import CCont from './components/CCont/'
import './App.css';
import './css/common.css';
import '@csstools/normalize.css';

const Wrap = memo(() => {
    return (
        <>
            {/* <CHeader /> */}
            <div className="main">
                {/* <CSideBar /> */}
                <CCont />
            </div>
        </>
    )
})

export default Wrap