'use client'

import { TrendingUp, Linkedin, Users, Lightbulb, Info } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { ThemeToggle } from '../ThemeToggle'

const Navbar = () => {
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
      description: 'Posts viraux'
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
    <div className="top-0 left-0 fixed w-64 h-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-lg z-50 flex flex-col">
      <div className="p-6 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 shadow-sm">
            <Linkedin className="h-6 w-6 text-blue-700 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-none mb-1">
              <span className='text-slate-700 dark:text-slate-200'>Posts</span><br />
              <span className="text-blue-700 dark:text-blue-400 text-sm"> Analytics</span>
            </h2>
          </div>
        </div>
      </div>

      <nav className="flex-1 py-6 px-3 overflow-y-auto">
        <div className="space-y-2">
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              onClick={() => setActiveLink(link.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${activeLink === link.path
                ? 'bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 shadow-sm'
                : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
            >
              <span className={`p-2 rounded-md ${link.color} transition-all duration-300 ${activeLink === link.path ? 'shadow-sm' : ''
                }`}>
                {link.icon}
              </span>
              <div>
                <span className="font-medium text-sm">{link.label}</span>
                {activeLink === link.path && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{link.description}</p>
                )}
              </div>
              {activeLink === link.path && (
                <div className="ml-auto h-5 w-1 rounded-full bg-blue-600 dark:bg-blue-500"></div>
              )}
            </Link>
          ))}
        </div>
      </nav>

      <div className="p-4 mt-auto border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
        <div className="flex items-center justify-between">
          <Link href="/author" className="flex items-center gap-3 group">
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
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;