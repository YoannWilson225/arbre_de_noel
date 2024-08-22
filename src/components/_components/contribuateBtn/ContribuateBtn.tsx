import React from 'react';
import { useDrawer } from '../drawer/DrawerContext';
import { PaymentDrawer } from '../drawer/PaymentDrawer';

export default function ContribuateBtn() {
    const { open, setOpen } = useDrawer();

    const handleClick = (e: any) => {
        e.preventDefault();
        setOpen(true);
    }

    return (
        <>
            <div className="relative inline-flex group">
                <div
                    className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>
                <a href="#" title="Contribuez" onClick={handleClick}
                    className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl"
                    role="button">Contribuez !</a>
            </div>
            <PaymentDrawer open={open} setOpen={setOpen} />
        </>

    )
}
