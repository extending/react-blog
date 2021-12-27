import React from 'react';
import styled from 'styled-components';
import styles from '../../css/common.module.css'

const Cont = styled.h2`
    background: purple
`

const Home = () => {
    return (
        <>
            <div className={styles.child}>home...</div>
            <Cont>h2 title</Cont>
        </>
    )
}

export default Home