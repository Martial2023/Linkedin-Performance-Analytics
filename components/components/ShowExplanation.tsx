'use client'

import React from 'react'
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
import { FileChartColumn, Linkedin } from 'lucide-react'
import { ThemeToggle } from '../ThemeToggle'

type Props = {
    title: string,
    children: React.ReactNode
}
const ShowExplanation = ({ title, children }: Props) => {

    return (
        <Credenza>
            <CredenzaTrigger asChild>
                <Button size={'sm'} className='flex items-center text-white rounded-br-2xl'>
                    <FileChartColumn className='text-white' />
                    Analyse
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
                                <h3 className='"text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2"'>
                                    {title}
                                </h3>
                            </div>

                            <ThemeToggle />
                        </div>
                    </CredenzaTitle>

                    <CredenzaDescription>
                        Commentaire
                    </CredenzaDescription>
                </CredenzaHeader>

                <CredenzaBody className='md:max-h-[60vh] overflow-y-scroll'>
                    {children}
                </CredenzaBody>

                <CredenzaFooter>
                    <CredenzaClose asChild>
                        <Button id="close_navbar text-white">Fermer</Button>
                    </CredenzaClose>
                </CredenzaFooter>
            </CredenzaContent>
        </Credenza>
    )
}

export default ShowExplanation