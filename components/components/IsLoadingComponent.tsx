import { Bouncy } from 'ldrs/react'
import React from 'react'

const IsLoadingComponent = () => {
    return (
        <div className="w-full h-[450px] flex flex-col items-center justify-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="relative w-16 h-16 mb-4">
                <Bouncy
                    size="45"
                    speed="1.75"
                    color="#4F46E5"
                />
            </div>
            <div className="flex flex-col items-center">
                <p className="text-gray-800 dark:text-gray-200 font-medium">Chargement des données</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Préparation du graphique...</p>
            </div>
        </div>
    )
}

export default IsLoadingComponent