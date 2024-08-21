'use client';

import { useState } from "react";
const MobileMenu = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="orido_tm_mobile_menu">
            <div className="mobile_menu_inner">
                <div className="mobile_in">
                    <div className="logo">
                        <a href="#">
                            Arbre de Noël
                        </a>
                    </div>
                    <div className="trigger" onClick={() => setToggle(!toggle)}>
                        <div
                            className={`hamburger hamburger--slider ${toggle ? "is-active" : ""
                                }`}
                        >
                            <div className="hamburger-box">
                                <div className="hamburger-inner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
                <div className="dropdown_inner">
                    <ul className="anchor_nav">
                        <li className="current">
                            <a href="#home">Accueil</a>
                        </li>
                        <li>
                            <a href="#objectif">Objectifs</a>
                        </li>
                        <li>
                            <a href="#concepteur">Concepteurs</a>
                        </li>
                        <li>
                            <a href="#programme">Programme</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default MobileMenu;
