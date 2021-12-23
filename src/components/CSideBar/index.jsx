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
                    <a href="/menu-3">menu-3</a>
                </div>
                <div className="menu-item">
                    <a href="/menu-4">menu-4</a>
                </div>
                <div className="menu-item">
                    <a href="/menu-5">menu-5</a>
                </div>
                <div className="menu-item">
                    <a href="/menu-6">menu-6</a>
                </div>
                <div className="menu-item">
                    <a href="/menu-7">menu-7</a>
                </div>
            </div>
            <div className="btm">CONTACT ＵＳ</div>
        </div>
    )
}

export default CSideBar