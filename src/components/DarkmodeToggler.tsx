"use client"

import React, {useEffect, useState} from 'react'
import {MoonIcon, SunIcon} from "lucide-react";

export default function DarkmodeToggler() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('darkMode');
            return saved === 'true';
        }
        return false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', isDarkMode.toString());
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div>
            <div className="flex items-center cursor-pointer p-1 rounded-md bg-transparent hover:bg-slate-300 duration-200 dark:hover:bg-slate-800 " onClick={toggleDarkMode}>
                {isDarkMode ? (
                    <SunIcon className="text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200 w-6 h-6"/> // Show moon icon in dark mode
                ) : (
                    <MoonIcon className="text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200 w-6 h-6"/>  // Show sun icon in light mode
                )}

            </div>
        </div>
    )
}
