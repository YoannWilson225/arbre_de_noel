'use client';

import { useState } from "react";
import { PaymentDrawer } from "../_components/drawer/PaymentDrawer";


const Header = () => {
    const [open, setOpen] = useState(false);

    const handleClick = (e: any) => {
        e.preventDefault();
        setOpen(true);
    }

    return (
        <div className="orido_tm_header">
            <div className="header_in">
                <div className="logo">
                    <a href="#">
                        Arbre de Noël
                    </a>
                </div>
                <div className="menu">
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
                            <a href="#contact">Contacts</a>
                        </li>
                    </ul>
                    <span className="ccc" />
                </div>
                <button onClick={handleClick}>Contribuez !</button>
                <PaymentDrawer open={open} setOpen={setOpen} />
            </div>
        </div>
    );
};

export default Header;
