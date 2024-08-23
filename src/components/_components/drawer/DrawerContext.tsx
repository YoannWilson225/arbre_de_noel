'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Créer un contexte pour gérer l'état du drawer
const DrawerContext = createContext<any>(null);

export function useDrawer() {
    return useContext(DrawerContext);
}

export function DrawerProvider({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);

    const value = {
        open,
        setOpen,
    };

    return (
        <DrawerContext.Provider value={value}>
            {children}
        </DrawerContext.Provider>
    );
}
