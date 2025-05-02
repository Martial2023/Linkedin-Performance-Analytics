'use client'
import React, { useEffect, useState } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { EngagementTiming } from '@/lib/types'
import { getEngagementTiming } from '@/app/actions'
import { LineChart, Award, Clock, Lightbulb } from 'lucide-react'
import ShowExplanation from '../components/ShowExplanation'
import IsLoadingComponent from '../components/IsLoadingComponent'

const VirauxTimingChart = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [engagementTiming, setEngagementTiming] = useState<EngagementTiming[]>([])

    const fetchEngagementTiming = async () => {
        try {
            setIsLoading(true)
            const data = await getEngagementTiming({ type: "viraux" })
            setEngagementTiming(data)
        } catch (error) {
            console.error("EngagementTimingChart:", error)
        } finally {
            setIsLoading(false)
        }
    }

    const daysKey: { [key: number]: string } = {
        1: "Lun",
        2: "Mar",
        3: "Mer",
        4: "Jeu",
        5: "Ven",
        6: "Sam",
        7: "Dim"
    }

    useEffect(() => {
        fetchEngagementTiming()

    }, [])

    if (isLoading) {
        return (
            <IsLoadingComponent />
        );
    }

    return (
        <div className="">
            <div className="p-5 flex justify-between items-center">
                <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        Meilleurs moments pour un post viral
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        Meilleurs jours et moments de la semaine pour augmenter la viralité.
                    </p>
                </div>
            </div>

            <div className="p-5 h-[380px] relative">
                {
                    engagementTiming.length === 0 ? (
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
                            data={engagementTiming.map(item => ({
                                day: daysKey[item.day],
                                "Tôt le matin": item.Tot_le_matin,
                                "Milieu de matinee": item.Milieu_de_matinee,
                                "Apres midi": item.Apres_midi,
                                "Soir": item.Soir,
                                "Fin de journee": item.Fin_de_journee
                            }))}
                            keys={[
                                "Tôt le matin",
                                "Milieu de matinee",
                                "Apres midi",
                                "Soir",
                                "Fin de journee"
                            ]}
                            groupMode="grouped"
                            indexBy="day"
                            margin={{ top: 0, right: 0, bottom: 60, left: 20 }}
                            padding={0.3}
                            valueScale={{ type: 'linear' }}
                            indexScale={{ type: 'band', round: true }}
                            colors={{ scheme: 'nivo' }}
                            defs={[
                                {
                                    id: 'dots',
                                    type: 'patternDots',
                                    background: 'inherit',
                                    color: '#38bcb2',
                                    size: 4,
                                    padding: 1,
                                    stagger: true
                                },
                                {
                                    id: 'lines',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: '#eed312',
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10
                                }
                            ]}
                            borderRadius={4}
                            borderColor={{
                                from: 'color',
                                modifiers: [
                                    [
                                        'darker',
                                        1.6
                                    ]
                                ]
                            }}
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Jour',
                                legendPosition: 'middle',
                                legendOffset: 32,
                                truncateTickAt: 0
                            }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Engagement moyen',
                                legendPosition: 'middle',
                                legendOffset: -40,
                                truncateTickAt: 0
                            }}
                            labelSkipWidth={12}
                            labelSkipHeight={12}
                            labelTextColor={{
                                from: 'color',
                                modifiers: [
                                    [
                                        'darker',
                                        1.6
                                    ]
                                ]
                            }}
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
                            legends={[
                                {
                                    dataFrom: 'keys',
                                    anchor: "bottom-right",
                                    direction: 'row',
                                    justify: false,
                                    translateX: 0,
                                    translateY: 60,
                                    itemsSpacing: 2,
                                    itemWidth: 100,
                                    itemHeight: 20,
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 0.85,
                                    symbolSize: 20,
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemOpacity: 1
                                            }
                                        }
                                    ],
                                    itemTextColor: '#999999'
                                }
                            ]}
                        />
                    )}
            </div>

            <div className='w-full flex items-center justify-end p-4 pt-0'>
                <ShowExplanation
                    title={"Analyse d&apos;engagement LinkedIn"}
                >
                    <div className="rounded-xl bg-white dark:bg-gray-800/90 shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 backdrop-blur-sm hover:shadow-lg">
                        <div className="p-6 space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <LineChart className="w-7 h-7 text-indigo-500 dark:text-indigo-400" />
                                </div>
                                <p className="text-gray-700 dark:text-gray-200">
                                    L&apos;analyse des données relatives à la viralité par jour et période révèle des tendances assez similaires à celles des posts à fort engagement.
                                </p>
                            </div>

                            <div className="flex gap-4 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                                <div className="mt-1 flex-shrink-0">
                                    <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Pic de viralité - Vendredi</h4>
                                    <p className="text-gray-700 dark:text-gray-200">
                                        Le Vendredi en <span className="font-semibold">milieu de matinée</span> (487) et en <span className="font-semibold">fin de journée</span> (759) enregistrent les viralités les plus élevées, indiquant une audience B2B très active en fin de semaine également.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                                <div className="mt-1 flex-shrink-0">
                                    <Clock className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Début de semaine - Viralité modérée</h4>
                                    <p className="text-gray-700 dark:text-gray-200">
                                        Les <span className="font-semibold">lundis</span> (jour 1) et <span className="font-semibold">mardis</span> (jour 2) ont une viralité plus faible, principalement concentré dans l&apos;après-midi.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-900/30">
                                <div className="mt-1 flex-shrink-0">
                                    <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-700 dark:text-green-300 mb-1">Recommandation stratégique</h4>
                                    <p className="text-gray-700 dark:text-gray-200">
                                        Pour maximiser l&apos;impact, privilégiez les publications le mercredi soir ou le vendredi en fin de journée, en alignant le contenu sur des thèmes attractifs comme le leadership ou l&apos;IA.
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

export default VirauxTimingChart