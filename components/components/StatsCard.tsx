import { Loader2 } from 'lucide-react'
import React from 'react'

type Props = {
    title: string,
    value: number | undefined,
    isLoading: boolean,
    icon: React.ReactNode,
    iconBg: string
}

const StatsCard = ({ title, value, isLoading, icon, iconBg }: Props) => {
    return (
        <div className="bg-white dark:bg-gray-800/90 relative rounded-2xl overflow-hidden shadow-lg bgm-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-all hover:shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="absolute inset-0 bgm-gradient-to-b from-transparent to-black/[0.03] dark:to-white/[0.02]"></div>

            <div className="relative p-5">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
                        {isLoading ? (
                            <div className="mt-2">
                                <div className="flex items-center space-x-2">
                                    <div className="h-7 w-24 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                                    
                                </div>
                                <div className="flex items-center mt-2 gap-2">
                                    <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                                    <div className="h-4 w-4">
                                        <Loader2 className="h-4 w-4 text-primary animate-spin" />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-2xl md:text-3xl font-bold mt-1 text-gray-900 dark:text-gray-50">{value || 0}</p>
                        )}
                    </div>
                    <div className={`p-2.5 rounded-xl ${iconBg}`}>
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsCard