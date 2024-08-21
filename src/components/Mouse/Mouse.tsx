'use client';

import { customCursor } from "@/lib/globalFunction";
import { Fragment, useEffect } from "react";
const Mouse = () => {
    useEffect(() => {
        customCursor();
    }, []);

    return (
        <Fragment>
            <div className="mouse-cursor cursor-outer" />
            <div className="mouse-cursor cursor-inner" />
        </Fragment>
    );
};
export default Mouse;
