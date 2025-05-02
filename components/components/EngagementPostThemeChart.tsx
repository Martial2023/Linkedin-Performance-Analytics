'use client'
import React, { useEffect, useState } from 'react'
import { ResponsivePie } from '@nivo/pie'
import { EngagementPostTheme } from '@/lib/types'
import { getEngagementPostTheme } from '@/app/actions'
import ShowExplanation from './ShowExplanation'
import IsLoadingComponent from './IsLoadingComponent'

const EngagementPostThemeChart = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [engagementPostTheme, setEngagementPostTheme] = useState<EngagementPostTheme[]>([])

    const fetchEngagementPostTheme = async () => {
        try {
            setIsLoading(true)
            const data = await getEngagementPostTheme({ type: "engagement_post_theme" })
            setEngagementPostTheme(data)
        } catch (error) {
            console.error("EngagementPostThemeChart:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchEngagementPostTheme()
    }, [])


    if (isLoading) {
        return (
            <IsLoadingComponent />
        );
    }

    return (
        <div className="rounded-lg bg-white dark:bg-gray-800">
            <div className="p-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    Répartition des thèmes dans les postes à fort engagement
                </h4>
            </div>

            <div className="p-4 h-[350px] relative">
                {
                    engagementPostTheme.length === 0 ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Aucune donnée disponible</p>
                        </div>
                    ) : (
                        <ResponsivePie
                            data={engagementPostTheme}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20
                            }}
                            innerRadius={0.55}
                            padAngle={0.5}
                            cornerRadius={4}
                            activeOuterRadiusOffset={8}
                            borderWidth={1}
                            borderColor={{
                                from: 'color',
                                modifiers: [['darker', 0.2]]
                            }}
                            arcLinkLabelsSkipAngle={12}
                            arcLinkLabelsTextColor={{ theme: 'labels.text.fill' }}
                            arcLinkLabelsThickness={2}
                            arcLinkLabelsColor={{ from: 'color' }}
                            arcLinkLabelsDiagonalLength={10}
                            arcLinkLabelsStraightLength={15}
                            arcLinkLabelsOffset={1}
                            arcLabelsSkipAngle={10}
                            arcLabelsTextColor={{
                                from: 'color',
                                modifiers: [['darker', 3]]
                            }}
                            theme={{
                                tooltip: {
                                    container: {
                                        background: 'var(--tooltip-bg, #ffffff)',
                                        color: 'var(--tooltip-color, #333333)',
                                        fontSize: 12,
                                        borderRadius: 6,
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                        padding: '8px 12px',
                                    },
                                },
                                labels: {
                                    text: {
                                        fill: 'var(--label-color, #333333)',
                                    },
                                },
                            }}
                            defs={[
                                {
                                    id: 'dots',
                                    type: 'patternDots',
                                    background: 'inherit',
                                    color: 'rgba(0, 0, 0, 0.1)',
                                    size: 4,
                                    padding: 2,
                                    stagger: true
                                },
                                {
                                    id: 'lines',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: 'rgba(0, 0, 0, 0.1)',
                                    rotation: -45,
                                    lineWidth: 4,
                                    spacing: 8
                                }
                            ]}
                        />
                    )}
            </div>

            <div className='w-full flex items-center justify-end p-2'>
                <ShowExplanation
                    title={"Post"}
                >
                    <p
                        className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed p-4 text-sm md:text-base font-normal tracking-wide bg-gray-50 dark:bg-gray-800/50 rounded-md border border-gray-100 dark:border-gray-700 shadow-sm my-4"
                    >
                        Les thèmes les plus fréquents des posts viraux sur LinkedIn sont <span className="font-semibold text-blue-600 dark:text-blue-400">Projet</span>, <span className="font-semibold text-indigo-600 dark:text-indigo-400">Leadership</span>, <span className="font-semibold text-teal-600 dark:text-teal-400">Finance</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">Technologie</span> et <span className="font-semibold text-cyan-600 dark:text-cyan-400">Transformation Numérique</span>, reflétant des priorités B2B(Business to Business) telles que l&apos;innovation, la gestion des talents et l&apos;inspiration professionnelle. Les sujets comme <span className="font-semibold text-blue-600 dark:text-blue-400">IA</span>, <span className="font-semibold text-indigo-600 dark:text-indigo-400">Tutoriel</span> et <span className="font-semibold text-teal-600 dark:text-teal-400">Éducation</span> suscitent également un fort engagement, car ils captivent l&apos;audience par leur pertinence. <span className="italic">Un contenu de qualité aligné sur ces thèmes optimise significativement les chances d&apos;obtenir un engagement élevé de la part des utilisateurs LinkedIn.</span>
                    </p>
                </ShowExplanation>
            </div>


            <style jsx global>{`
                :root {
                    --tooltip-bg: #ffffff;
                    --tooltip-color: #333333;
                    --label-color: #333333;
                    --legend-color: #333333;
                }
                
                .dark {
                    --tooltip-bg: #2D3748;
                    --tooltip-color: #E2E8F0;
                    --label-color: #E2E8F0;
                    --legend-color: #E2E8F0;
                }
            `}</style>
        </div>
    )
}

export default EngagementPostThemeChart