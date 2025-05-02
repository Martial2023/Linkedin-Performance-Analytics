'use client'
import React, { useEffect, useState } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { EngagementCategrorieTextLength } from '@/lib/types'
import { getEngagementCategrorieTextLength } from '@/app/actions'
import ShowExplanation from './ShowExplanation';
import { TrendingUp, AlignLeft, Lightbulb } from 'lucide-react'
import IsLoadingComponent from './IsLoadingComponent'

const EngagementCategrorieTextLengthChart = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [engagementTextLength, setEngagementTextLength] = useState<EngagementCategrorieTextLength[]>([])

  const fetchEngagementTextLength = async () => {
    try {
      setIsLoading(true)
      const data = await getEngagementCategrorieTextLength({ type: "" })
      setEngagementTextLength(data)
    } catch (error) {
      console.error("EngagementCategrorieTextLengthChart:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchEngagementTextLength()
  }, [])

  if (isLoading) {
    return (
      <IsLoadingComponent />
    );
  }

  return (
    <div className="rounded-xl bg-white dark:bg-gray-800/90 shadow-md transition-all duration-300 backdrop-blur-sm hover:shadow-lg">
      <div className="p-5 flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
            Volume du post Vs Engagement
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Impact de la longueur du contenu sur l&apos;engagement
          </p>
        </div>
      </div>

      <div className="p-5 h-[350px] relative">
        {
          engagementTextLength.length === 0 ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Aucune donnée disponible</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Essayez d&apos;ajuster vos filtres ou de recharger la page</p>
              </div>
            </div>
          ) : (
            <ResponsiveBar
              data={engagementTextLength.map(item => ({
                categorie: item.engagement_category,
                len: item.mean_text_length,
              }))}
              indexBy="categorie"
              keys={['len']}
              margin={{
                bottom: 20,
                left: 60,
                right: 10,
                top: 0,
              }}
              padding={0.4}
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
              enableGridY={true}
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

      <div className='w-full flex items-center justify-end p-4'>
        <ShowExplanation
          title={"Analyse du volume du contenu avec son taux d&apos;engagement"}
        >
          <div className="w-full max-w-3xl">
            <div className="bg-white dark:bg-gray-800/90 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 backdrop-blur-sm hover:shadow-lg">
              <div className="p-6">
                <div className="space-y-4">
                  {/* Statistiques clés */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 flex items-start gap-3">
                      <div className="bg-indigo-100 dark:bg-indigo-800/40 rounded-full p-2">
                        <TrendingUp className="text-indigo-600 dark:text-indigo-400 h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-100">Fort engagement</h4>
                        <p className="text-indigo-700 dark:text-indigo-300 font-semibold text-lg">~215 mots</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 flex items-start gap-3">
                      <div className="bg-blue-100 dark:bg-blue-800/40 rounded-full p-2">
                        <AlignLeft className="text-blue-600 dark:text-blue-400 h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-100">Faible engagement</h4>
                        <p className="text-blue-700 dark:text-blue-300 font-semibold text-lg">~165 mots</p>
                      </div>
                    </div>
                  </div>

                  {/* Contenu principal */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Les posts à fort engagement sur LinkedIn, avec une longueur moyenne d&apos;environ 215 mots, surpassent nettement ceux à faible engagement (environ 165 mots), soulignant une préférence pour des contenus plus riches et détaillés, tels que des publications éducatives, techniques ou narratives. Cette différence d&apos;environ 50 mots suggère que les utilisateurs valorisent les posts offrant du contexte ou une valeur ajoutée, comme des explications sur l&apos;IA ou du storytelling. Cependant, l&apos;écart-type élevé (~100 mots) dans les deux catégories indique que la longueur n&apos;est pas le seul facteur ; la qualité du contenu et son alignement avec les intérêts de l&apos;audience (par exemple, leadership, innovation) restent cruciaux pour maximiser l&apos;engagement.
                    </p>
                  </div>
                </div>

                {/* Note finale */}
                <div className="mt-6 flex items-start gap-3 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <div className="bg-amber-100 dark:bg-amber-800/30 p-2 rounded-full mt-1 flex-shrink-0">
                    <Lightbulb className="text-amber-600 dark:text-amber-400 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">À retenir</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                      La longueur du contenu contribue à l&apos;engagement, mais l&apos;écart-type élevé (~100 mots) confirme que la qualité et la pertinence restent des facteurs déterminants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ShowExplanation>
      </div>
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
    </div>
  )
}

export default EngagementCategrorieTextLengthChart