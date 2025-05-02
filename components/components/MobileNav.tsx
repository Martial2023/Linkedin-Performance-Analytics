'use client'

import React, { useState } from 'react'
import {
    Credenza,
    CredenzaBody,
    CredenzaClose,
    CredenzaContent,
    CredenzaDescription,
    CredenzaFooter,
    CredenzaHeader,
    CredenzaTitle,
    CredenzaTrigger,
} from "@/components/ui/CredenzaModal"
import { Button } from '../ui/button'
import { Info, Lightbulb, Linkedin, Menu, TrendingUp, Users } from 'lucide-react'
import { ThemeToggle } from '../ThemeToggle'
import Link from 'next/link'
import Image from 'next/image'

const MobileNav = () => {
    const [activeLink, setActiveLink] = useState('/');

    const navLinks = [
        {
            path: '/',
            icon: <Users className="h-5 w-5" />,
            label: 'Engagés',
            color: 'bg-blue-600/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400',
            description: 'Analyse des interactions'
        },
        {
            path: '/viral',
            icon: <TrendingUp className="h-5 w-5" />,
            label: 'Viraux',
            color: 'bg-green-600/10 text-green-600 dark:bg-green-500/20 dark:text-green-400',
            description: 'Posts à fort impact'
        },
        {
            path: '/insights',
            icon: <Lightbulb className="h-5 w-5" />,
            label: 'Insights',
            color: 'bg-amber-600/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400',
            description: 'Données analytiques'
        },
        {
            path: '/about',
            icon: <Info className="h-5 w-5" />,
            label: 'À propos',
            color: 'bg-violet-600/10 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400',
            description: 'Informations du projet'
        },
    ];

    return (
        <Credenza>
            <CredenzaTrigger asChild>
                <Button
                    aria-label="Ouvrir le menu"
                    className='z-[19999] absolute top-4 right-4'
                >
                    <Menu className='text-white' />
                </Button>
            </CredenzaTrigger>
            <CredenzaContent>
                <CredenzaHeader>
                    <CredenzaTitle>
                        <div className='flex items-center justify-between'>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                                    <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-medium">
                                        Posts
                                        <span className="text-sm block text-blue-600 dark:text-blue-400 font-semibold">Analytics</span>
                                    </h2>
                                </div>
                            </div>

                            <ThemeToggle />
                        </div>
                    </CredenzaTitle>

                    <CredenzaDescription>
                        Annalyse des posts linkedin
                    </CredenzaDescription>
                </CredenzaHeader>

                <CredenzaBody>
                    <nav className="flex-1 py-4 overflow-y-auto">
                        <div className="space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    href={link.path}
                                    key={link.path}
                                    onClick={() => {
                                        setActiveLink(link.path)
                                        const navCloser = document.getElementById("close_navbar");
                                        if (navCloser) {
                                            navCloser.click();
                                        }
                                    }}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${activeLink === link.path
                                        ? 'bg-white dark:bg-gray-800 shadow-sm'
                                        : 'hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm'
                                        }`}
                                >
                                    <span className={`p-2 rounded-md ${link.color}`}>
                                        {link.icon}
                                    </span>
                                    <span className="font-medium text-sm">{link.label}</span>
                                    {activeLink === link.path && (
                                        <div className="ml-auto h-2 w-2 rounded-full bg-blue-500"></div>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </CredenzaBody>

                <CredenzaFooter
                    className='flex items-center flex-row gap-4'
                >
                    <Link
                        href="/author"
                        className="flex items-center gap-3 group"
                        onClick={() => {
                            const navCloser = document.getElementById("close_navbar");
                            if (navCloser) {
                                navCloser.click();
                            }
                        }}
                    >
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 p-0.5">
                                <Image
                                    src="/avatar.jpg"
                                    alt="User Avatar"
                                    className="h-full w-full rounded-full object-cover border-2 border-white dark:border-gray-800"
                                    width={36}
                                    height={36}
                                />
                            </div>
                        </div>
                        <div className="text-xs">
                            <p className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">AVADRA Martial</p>
                            <span className="text-gray-500 dark:text-gray-400">Data Scientist</span>
                        </div>
                    </Link>
                    <CredenzaClose asChild>
                        <Button className='flex-1/3' id="close_navbar">Close</Button>
                    </CredenzaClose>
                </CredenzaFooter>
            </CredenzaContent>
        </Credenza>
    )
}

export default MobileNav