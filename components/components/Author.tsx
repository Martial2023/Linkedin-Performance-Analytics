'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, Linkedin, Globe, CircuitBoard } from 'lucide-react';
import Image from 'next/image';

const Author = () => {
    const [greeting, setGreeting] = useState("Bonjour");

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour >= 12 || currentHour < 6) {
            setGreeting("Bonsoir");
        }
    }, []);

    return (
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden">
            <div className="flex flex-col md:flex-row">
                {/* Image section */}
                <div className="w-full md:w-1/3 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-6">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-md">
                        <Image
                            fill
                            src="/avatar.jpg"
                            alt="AVADRA Martial"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Content section */}
                <div className="w-full md:w-2/3 p-8">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AVADRA Martial</h1>
                        <div className="flex items-center mt-1">
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-3 py-1 rounded-full">Data Scientist</span>
                            <span className="mx-2 text-gray-400">|</span>
                            <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs px-3 py-1 rounded-full">Ingénieur en Mathématiques et Modélisation</span>
                        </div>
                    </div>

                    <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        <p className="font-medium">{greeting},</p>

                        <p>
                            Je suis Martial, Data Scientist et élève ingénieur en Mathématiques et Modélisation,
                            passionné par la data science et l&apos;intelligence artificielle.
                        </p>

                        <p>
                            Je conçois des solutions intelligentes alliant analyse de données, modélisation prédictive
                            et vision par ordinateur, avec un fort intérêt pour les applications concrètes :
                        </p>

                        <ul className="space-y-2 pl-6 list-disc">
                            <li>Reconnaissance faciale en temps réel</li>
                            <li>Détection de fraude dans les systèmes de paiement</li>
                            <li>Applications web intelligentes pour la gestion d&apos;entreprise</li>
                        </ul>

                        <p>
                            Curieux, rigoureux et animé par l&apos;envie d&apos;avoir un impact positif en Afrique,
                            je m&apos;investis dans des projets innovants qui répondent à des problématiques réelles.
                        </p>
                    </div>

                    {/* Contact links */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <Link href="mailto:martialhilarionavadra@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                            <Mail size={16} />
                            <span>martialhilarionavadra@gmail.com</span>
                        </Link>

                        <Link href="https://wa.me/22958256765" className="flex items-center gap-2 text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors">
                            <Phone size={16} />
                            <span>+229 58 25 67 65</span>
                        </Link>

                        <Link href="https://www.linkedin.com/in/martial-hilarion-avadra-4680bb321" className="flex items-center gap-2 text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500 transition-colors">
                            <Linkedin size={16} />
                            <span>Martial Hilarion AVADRA</span>
                        </Link>

                        <Link href="https://avadramartial.vercel.app/" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
                            <Globe size={16} />
                            <span>Portfolio</span>
                        </Link>

                        <Link href="https://talent-u.vercel.app/profile/6d9337d8-830b-43ab-9563-11fed65a74dc" className="flex items-center gap-2 text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors">
                            <CircuitBoard size={16} />
                            <span>Mon Profil TalentU</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Author;