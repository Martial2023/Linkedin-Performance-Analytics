'use client'
import React, { useEffect, useState } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { CommonEngagementHashtags } from '@/lib/types'
import { getCommonEngagementHashtags } from '@/app/actions'
import ShowExplanation from '../components/ShowExplanation'
import IsLoadingComponent from '../components/IsLoadingComponent'

const TopVirauxHashtags = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [commonEngagementHashtags, setCommonEngagementHashtags] = useState<CommonEngagementHashtags[]>([])

    const fetchCommonEngagementHashtags = async () => {
        try {
            setIsLoading(true)
            const data = await getCommonEngagementHashtags({ type: "viraux" })
            setCommonEngagementHashtags(data)
        } catch (error) {
            console.error("CommonEngagementHashtagsChart:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchCommonEngagementHashtags()
    }, [])

    if (isLoading) {
        return (
            <IsLoadingComponent />
        );
    }

    return (
        <div className="rounded-xl bg-white dark:bg-gray-800/90 overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-5 border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        Hashtags à fort engagement
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        Les hashtags les plus utilisés dans les postes viraux
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                        {commonEngagementHashtags.length} hashtags analysés
                    </span>
                </div>
            </div>

            <div className="p-5 h-[350px] relative">
                {
                    commonEngagementHashtags.length === 0 ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-gray-600 dark:text-gray-300 font-medium">Aucune donnée disponible</p>
                            </div>
                        </div>
                    ) : (
                        <ResponsiveBar
                            data={commonEngagementHashtags.map(item => ({
                                hashtag: item.hashtag,
                                len: item.len,
                            }))}
                            indexBy="hashtag"
                            keys={['len']}
                            margin={{
                                bottom: 20,
                                left: 60,
                                right: 10,
                                top: 0,
                            }}
                            padding={0.4}
                            layout="horizontal"
                            valueScale={{ type: 'linear' }}
                            indexScale={{ type: 'band', round: true }}
                            borderRadius={4}
                            borderWidth={1}
                            borderColor={{
                                from: 'color',
                                modifiers: [['darker', 0.3]]
                            }}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                            }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                            }}
                            enableGridX={true}
                            gridXValues={5}
                            enableGridY={false}
                            enableLabel={true}
                            label={d => `${d.value}`}
                            labelTextColor={{
                                from: 'color',
                                modifiers: [['darker', 2]]
                            }}
                            labelSkipWidth={16}
                            labelSkipHeight={16}
                            animate={true}
                            motionConfig="gentle"
                            theme={{
                                tooltip: {
                                    container: {
                                        backgroundColor: 'var(--tooltip-bg)',
                                        color: 'var(--tooltip-color)',
                                        fontSize: '12px',
                                        borderRadius: '6px',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        padding: '10px 12px',
                                        border: '1px solid var(--tooltip-border)'
                                    }
                                },
                                legends: {
                                    text: {
                                        fill: 'var(--color-text)',
                                        fontSize: 12
                                    }
                                },
                                grid: {
                                    line: {
                                        stroke: 'var(--grid-line-color)',
                                        strokeWidth: 1,
                                        strokeDasharray: '4 4'
                                    }
                                },
                                axis: {
                                    domain: {
                                        line: {
                                            stroke: 'var(--axis-color)',
                                            strokeWidth: 1
                                        }
                                    },
                                    ticks: {
                                        line: {
                                            stroke: 'var(--axis-color)',
                                            strokeWidth: 1
                                        },
                                        text: {
                                            fill: 'var(--color-text)'
                                        }
                                    }
                                }
                            }}

                        />
                    )}
            </div>

            <div className='w-full flex items-center justify-end p-4 pt-0'>
                <ShowExplanation
                    title={"Analyse des hashtags à fort engagement"}
                >
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <div className="border-l-4 border-gray-500 pl-4">
                                        <h3 className="font-semibold text-gray-800 dark:text-white">Thématiques B2B clés</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                                            <span className="font-medium text-gray-600 dark:text-gray-400">#workplaceculture</span>,
                                            <span className="font-medium text-gray-600 dark:text-gray-400">#digitaltransformation</span>, et
                                            <span className="font-medium text-gray-600 dark:text-gray-400">#leadership</span> dominent,
                                            reflétant l&apos;importance de la culture d&apos;entreprise, de l&apos;innovation technologique et de l&apos;inspiration professionnelle.
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-gray-500 pl-4">
                                        <h3 className="font-semibold text-gray-800 dark:text-white">Ressources humaines & Carrière</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                                            Les hashtags comme <span className="font-medium text-gray-600 dark:text-gray-400">#humanresources</span>,
                                            <span className="font-medium text-gray-600 dark:text-gray-400">#hiring</span>,
                                            <span className="font-medium text-gray-600 dark:text-gray-400">#hr</span>,
                                            <span className="font-medium text-gray-600 dark:text-gray-400">#recruitment</span>,
                                            <span className="font-medium text-gray-600 dark:text-gray-400">#jobsearch</span>, et
                                            <span className="font-medium text-gray-600 dark:text-gray-400">#careergrowth</span> mettent en avant la gestion des talents et le développement professionnel.
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-gray-500 pl-4">
                                        <h3 className="font-semibold text-gray-800 dark:text-white">Tendances & Motivation</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                                            <span className="font-medium text-gray-600 dark:text-gray-400">#innovation</span>,
                                            <span className="font-medium text-gray-600 dark:text-gray-400">#ai</span>,
                                            <span className="font-medium text-gray-600 dark:text-gray-400">#futureofwork</span>,
                                            <span className="font-medium text-gray-600 dark:text-gray-400">#employeeengagement</span>,
                                            <span className="font-medium text-gray-600 dark:text-gray-400">#teamwork</span>, et
                                            <span className="font-medium text-gray-600 dark:text-gray-400">#leadershipdevelopment</span> témoignent d&apos;un intérêt pour les avancées technologiques, la collaboration et la motivation.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-md mt-4">
                                    <p className="text-gray-700 dark:text-gray-200 font-medium">
                                        💡 <span className="italic">L&apos;utilisation ciblée de ces hashtags, combinée à des contenus riches et pertinents, maximise la viralité et la période de diffusion sur LinkedIn.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ShowExplanation>
            </div>
        </div>
    )
}

export default TopVirauxHashtags