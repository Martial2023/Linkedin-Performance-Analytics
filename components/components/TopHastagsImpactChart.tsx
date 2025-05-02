'use client'
import React, { useEffect, useState } from 'react'
import { ResponsiveLine } from '@nivo/line'
import { getTopHashtagImpact } from '@/app/actions'
import { TopHashtagImpactData } from '@/lib/types'
import ShowExplanation from './ShowExplanation'
import { TrendingUp, Share2, AlertTriangle, TrendingDown, Award } from 'lucide-react'
import 'ldrs/react/Bouncy.css'
import IsLoadingComponent from './IsLoadingComponent'

const TopHashtagsImpactChart = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [TopHashtagImpact, setTopHashtagImpact] = useState<TopHashtagImpactData>()

    const fetchTopHashtagImpact = async () => {
        try {
            setIsLoading(true)
            const data = await getTopHashtagImpact({ type: "engagement" })
            setTopHashtagImpact(data)
        } catch (error) {
            console.error("TopHashtagImpactChart:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchTopHashtagImpact()
    }, [])

    if (isLoading) {
        return (
            <IsLoadingComponent />
        );
    }

    const chartTheme = {
        axis: {
            ticks: {
                text: {
                    fill: 'var(--color-text)',
                    fontSize: 11,
                },
                line: {
                    stroke: 'var(--color-border)',
                    strokeWidth: 1
                }
            },
            domain: {
                line: {
                    stroke: 'var(--color-border)',
                    strokeWidth: 1
                }
            }
        },
        grid: {
            line: {
                stroke: 'var(--color-grid)',
                strokeWidth: 1,
                strokeDasharray: '4 4'
            }
        },
        crosshair: {
            line: {
                stroke: 'var(--color-crosshair)',
                strokeWidth: 1,
                strokeOpacity: 0.5,
                strokeDasharray: '5 5'
            }
        },
        tooltip: {
            container: {
                background: 'var(--color-tooltip-bg)',
                color: 'var(--color-tooltip-text)',
                fontSize: 12,
                borderRadius: 4,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                padding: '8px 12px'
            }
        },
        legends: {
            text: {
                fill: 'var(--color-text)',
                fontSize: 12
            }
        }
    };

    return (
        <div className="relative rounded-xl bg-white dark:bg-gray-800/80 shadow-md border border-gray-100 dark:border-gray-700/80 overflow-hidden transition-colors backdrop-blur-sm">
            <style jsx global>{`
                :root {
                    --color-text: #4B5563;
                    --color-border: #E5E7EB;
                    --color-grid: #F3F4F6;
                    --color-crosshair: #6B7280;
                    --color-tooltip-bg: #FFFFFF;
                    --color-tooltip-text: #374151;
                }
                
                .dark {
                    --color-text: #D1D5DB;
                    --color-border: #374151;
                    --color-grid: #1F2937;
                    --color-crosshair: #9CA3AF;
                    --color-tooltip-bg: #374151;
                    --color-tooltip-text: #F3F4F6;
                }
            `}</style>

            <div className="px-6 pt-5 pb-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-full mr-1"></span>
                    Impact du nombre de hashtags sur les réactions et les partages das postes viraux
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Analyse de la corrélation entre le nombre de hashtags et l&apos;engagement
                </p>
            </div>

            <div className='h-[350px] w-full px-4 py-6'>
                <ResponsiveLine
                    animate
                    curve="natural"
                    data={[
                        {
                            color: '#4F46E5',
                            data: TopHashtagImpact?.engagement || [],
                            id: 'Réactions'
                        },
                        {
                            color: '#EC4899',
                            data: TopHashtagImpact?.shares || [],
                            id: 'Partages'
                        }
                    ]}
                    defs={[
                        {
                            colors: [
                                { color: 'rgba(79, 70, 229, 0.6)', offset: 0 },
                                { color: 'rgba(79, 70, 229, 0)', offset: 100 }
                            ],
                            id: 'gradientReactions',
                            type: 'linearGradient'
                        },
                        {
                            colors: [
                                { color: 'rgba(236, 72, 153, 0.5)', offset: 0 },
                                { color: 'rgba(236, 72, 153, 0)', offset: 100 }
                            ],
                            id: 'gradientShares',
                            type: 'linearGradient'
                        }
                    ]}
                    enableArea
                    enableSlices="x"
                    enableTouchCrosshair
                    enableGridX={true}
                    enableGridY={true}
                    useMesh={true}
                    theme={chartTheme}
                    colors={['#60A5FA', '#4ADE80']}
                    fill={[
                        { id: 'gradientReactions', match: { id: 'Réactions' } },
                        { id: 'gradientShares', match: { id: 'Partages' } }
                    ]}
                    margin={{ bottom: 50, left: 40, right: 40, top: 20 }}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 50,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 100,
                            itemHeight: 20,
                            itemOpacity: 0.85,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    yScale={{
                        type: "linear",
                        stacked: false,
                        min: 'auto',
                        max: 'auto'
                    }}
                />
            </div>

            <div className='w-full flex items-center justify-end p-4 pt-0'>
                <ShowExplanation
                    title={"Impact des hashtags sur l'engagement LinkedIn"}
                >
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm p-5 my-6">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mt-1">
                                    <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                                    <span className="font-medium text-blue-600 dark:text-blue-400">1-2 hashtags</span> semblent optimaux pour l&apos;engagement total, avec <span className="bg-blue-50 dark:bg-blue-900/20 px-1 py-0.5 rounded font-mono text-xs">nbr_hashtags=1</span> générant le meilleur score (<span className="font-semibold">~93</span> en moyenne).
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full mt-1">
                                    <Share2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                                    Les <span className="font-medium text-purple-600 dark:text-purple-400">partages</span> augmentent avec <span className="font-medium">2-7 hashtags</span> (pic à <span className="font-semibold">12</span> pour 6 hashtags), suggérant que les hashtags pourraient favoriser la viralité jusqu&apos;à un certain seuil.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full mt-1">
                                    <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                                    Au-delà de <span className="font-medium text-red-600 dark:text-red-400">10 hashtags</span>, les résultats deviennent incohérents (fortes fluctuations, faibles médianes), probablement car ces publications sont rares et parfois perçues comme spammy par l&apos;algorithme LinkedIn ou les utilisateurs.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full mt-1">
                                    <TrendingDown className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                                    Les publications <span className="font-medium text-amber-600 dark:text-amber-400">sans hashtags</span> (<span className="bg-amber-50 dark:bg-amber-900/20 px-1 py-0.5 rounded font-mono text-xs">0 hashtag</span>) performent moins bien (<span className="font-semibold">66</span> d&apos;engagement, <span className="font-semibold">5,93</span> partages) que celles avec 1-2 hashtags, confirmant que les hashtags pourraient améliorer la découvrabilité.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-2 mb-2">
                                <Award className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                                <h4 className="font-medium text-gray-800 dark:text-gray-200">Conclusion</h4>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm bg-gray-50 dark:bg-gray-700/50 p-3 rounded-md">
                                La corrélation négative (<span className="font-mono text-xs bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded">-0,09</span> pour l&apos;engagement, <span className="font-mono text-xs bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded">0,0001</span> pour les partages) indique que le nombre de hashtags n&apos;est pas le principal moteur de performance. <span className="italic font-medium text-teal-600 dark:text-teal-400">La qualité du contenu et la taille du réseau restent les facteurs les plus déterminants pour le succès d&apos;une publication LinkedIn.</span>
                            </p>
                        </div>
                    </div>
                </ShowExplanation>
            </div>
        </div>
    )
}

export default TopHashtagsImpactChart