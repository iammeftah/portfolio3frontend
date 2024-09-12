import React, {useState} from 'react';
import Header from "../components/Header";
import { User, GraduationCap, Sparkles, Briefcase, AppWindow} from 'lucide-react';
import { motion } from 'framer-motion';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'; 

const Navbar = () => {
    const navItems = [
        { name: 'About', icon: <User /> },
        { name: 'Education', icon: <GraduationCap /> },
        { name: 'Skills', icon: <Sparkles />},
        { name: 'Experience', icon: <Briefcase /> },
        { name: 'Projects', icon: <AppWindow /> }
    ];

    const [activeTab, setActiveTab] = useState('About')

    return (
        <nav className="z-50 w-full px-6 md:px-96 flex items-center justify-center">
            <div className="bg-slate-300 dark:bg-slate-700 rounded-full p-2 w-full">
                <div className="w-full flex justify-between items-center gap-8">
                    <div className="flex justify-center gap-4 relative">
                        {navItems.map(({name, icon}) => (
                            <a
                                key={name}
                                href={`#${name.toLowerCase()}`}
                                className={`p-2 rounded-full inline-flex items-center text-sm font-medium text-slate-950 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative ${
                                    activeTab === name ? 'text-blue-600 dark:text-blue-400' : ''
                                }`}
                                onClick={() => setActiveTab(name)}
                            >
                                <span className="relative z-20 flex items-center">
                                    {React.cloneElement(icon, {className: 'w-4 h-4'})}
                                    <span className="ml-2">{name}</span>
                                </span>
                                {activeTab === name && (
                                    <motion.div
                                        className="absolute inset-0 bg-slate-200 dark:bg-slate-600 rounded-full"
                                        layoutId="activeTab"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30
                                        }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>
                    <div className="text-xl font-bold text-slate-950 dark:text-slate-200">
                        <h1>Meftah<span className="text-sky-500">.</span></h1>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const CreativeDeveloperHero = () => {
    const [typedText, setTypedText] = React.useState('');
    const fullText = 'SoftwareEngineer developer = new SoftwareEngineer("Meftah Ahmed Reda");\n';

    React.useEffect(() => {
        if (typedText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText(fullText.slice(0, typedText.length + 1));
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [typedText]);

    return (
        <div className="w-full flex items-center justify-center py-8 px-6 lg:px-96">
            <div className="w-full flex items-start space-x-8">
                <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4E03AQG4WD3ubIhcUw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714926691515?e=1731542400&v=beta&t=AP_CmfbJnUH3_G-bcBVusGnRrUtEi7qwOkU9MglpY7c"
                        alt="Meftah Ahmed Reda"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-grow">
                    <div className="leading-tight mb-4">
                        <h1 className="text-4xl font-bold">Hi, I'm Meftah Ahmed Reda</h1>
                        <h2 className="text-2xl font-semibold">I'm a software developer</h2>
                    </div>
                    <div className="bg-black text-green-400 p-4 rounded-md mb-6 font-mono text-sm overflow-x-auto">
                        <SyntaxHighlighter language="java" style={vs2015}>
                            {typedText || fullText}
                        </SyntaxHighlighter>
                    </div>
                    <p className="text-lg mb-6">
                        Aspiring Software Engineer with a passion for crafting innovative solutions to complex problems.
                        Experienced in full-stack web development, with a focus on Spring Boot, React, and Angular.
                        Enthusiastic about AI integration in enterprise domains and blockchain technologies.
                        Skilled in project management and team leadership, with a track record of successful project
                        deliveries.
                        Always eager to learn and adapt to new technologies, pushing the boundaries of what's possible
                        in code.
                    </p>
                </div>
            </div>
        </div>
    );
};



export default function Home() {
    return (
        <div className="bg-slate-200 dark:bg-slate-950 min-h-screen flex flex-col">
            <Header/>
            <div className="grow flex flex-col">
                <div className="text-slate-950 dark:text-slate-200">
                    <CreativeDeveloperHero/>
                </div>
                <div className="sticky top-4">
                    <Navbar/>
                </div>
            </div>
        </div>
    );
}