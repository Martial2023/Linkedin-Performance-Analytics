'use client'

import StatsCard from '@/components/components/StatsCard'
import { NbrePostsResponse } from '@/lib/types'
import { Earth, TrendingUp, Users } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { getNbrePosts } from '../actions'
import EngagementPostThemeChart from '@/components/components/EngagementPostThemeChart'
import TopHastagsImpactChart from '@/components/components/TopHastagsImpactChart'
import CommonEngagementHashtagsChart from '@/components/components/CommonEngagementHashtagsChart'
import EngagementTimingChart from '@/components/components/EngagementTimingChart'
import EngagementCategrorieTextLengthChart from '@/components/components/EngagementCategrorieTextLengthChart'

const Page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [postsCount, setPostsCount] = useState<NbrePostsResponse>()
  
  const fetchPostsCount = async () => {
    try {
      setIsLoading(true)
      const data = await getNbrePosts()
      setPostsCount(data)
    } catch (error) {
      alert("fetchPostsCount: " + error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPostsCount()
  }, [])
  
  return (
    <main className="p-2 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Tableau de bord</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Vue d&apos;ensemble des publications et analyses LinkedIn</p>
      </div>

      <section className="grid md:grid-cols-3 gap-4 md:gap-6">
        <StatsCard
          title="Publications"
          value={postsCount?.nbre_postes}
          isLoading={isLoading}
          icon={<Earth className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
          iconBg="bg-blue-100 dark:bg-blue-900/20"
        />

        <StatsCard
          title="Engagements"
          value={postsCount?.nbre_fort}
          isLoading={isLoading}
          icon={<Users className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />}
          iconBg="bg-emerald-100 dark:bg-emerald-900/20"
        />

        <StatsCard
          title="Posts viraux"
          value={postsCount?.nbre_viraux}
          isLoading={isLoading}
          icon={<TrendingUp className="h-5 w-5 text-violet-600 dark:text-violet-400" />}
          iconBg="bg-violet-100 dark:bg-violet-900/20"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-5 gap-6 my-8">
        <div className="col-span-1 md:col-span-2 min-h-[400px] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700">
          <EngagementCategrorieTextLengthChart />
        </div>

        <div className="col-span-1 md:col-span-3 min-h-[400px] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700">
          <div className="p-4 h-full">
            <EngagementPostThemeChart />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="min-h-[400px] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md">
          <TopHastagsImpactChart />
        </div>

        <div className="min-h-[400px] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md">
          <CommonEngagementHashtagsChart />
        </div>
      </section>

      <section className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md min-h-[400px] my-8">
        <div className="p-4 h-full">
          <EngagementTimingChart />
        </div>
      </section>
    </main>
  )
}

export default Page