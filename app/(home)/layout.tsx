import MobileNav from '@/components/components/MobileNav'
import Navbar from '@/components/components/Navbar'
// import { ScrollProgress } from '@/components/magicui/scroll-progress'
import React from 'react'

interface LayoutProps {
    children: React.ReactNode
}

const layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='lg:pl-64 min-h-[100vh] w-full'>
            {/* <ScrollProgress className="top-0 h-1" /> */}
            <div className='hidden lg:block'>
                <Navbar />
            </div>

            <div className='lg:hidden fixed top-0 right-0 p-2'>
                <MobileNav />
            </div>

            <main>
                {children}
            </main>
        </div>
    )
}

export default layout