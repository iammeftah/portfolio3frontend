import React from 'react';
import DarkmodeToggler from "../components/DarkmodeToggler";
import {Github, Linkedin, Mail} from "lucide-react";

export default function Header() {

    return (
        <header className="w-full px-6 py-4 lg:px-96 flex flex-row items-center justify-between">
            <div className="text-2xl font-bold text-slate-950 dark:text-slate-200">
               <h1>Meftah<span className="text-sky-500">.</span></h1>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
                <a target="_blank" className="text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200 duration-200" href="https://github.com/itserror808" rel="noreferrer"><Github/></a>
                <a target="_blank" className="text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200 duration-200" href="https://www.linkedin.com/in/ahmed-reda-meftah-015641281/" rel="noreferrer"><Linkedin/></a>
                <a className="text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200 duration-200" href="mailto:meftahahmedreda02@gmail.com"><Mail/></a>
                <DarkmodeToggler/>
            </div>
        </header>
    );
}

