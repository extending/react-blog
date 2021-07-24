import React from 'react';
import '../../css/common.css'

const CSideBar = () => {
    return (
        <div className="side-bar">
            <div className="menu">
                <div className="menu-item">
                    <a href="/home">home</a>
                </div>
                <div className="menu-item">
                    <a href="/menu">menu</a>
                </div>
                <div className="menu-item">
                    <a href="/home">menu-3</a>
                </div>
                <div className="menu-item">
                    <a href="/home">menu-4</a>
                </div>
                <div className="menu-item">
                    <a href="/home">menu-5</a>
                </div>
                <div className="menu-item">
                    <a href="/home">menu-6</a>
                </div>
                <div className="menu-item">
                    <a href="/home">menu-7</a>
                </div>
            </div>
            <div className="btm">CONTACT ＵＳ</div>
        </div>
    )
}

export default CSideBar