import React from 'react';
import { Database, FileText, GitBranch, BarChart3, Shield, Linkedin, Brain, Bot, RefreshCw } from 'lucide-react';
import Image from 'next/image';

const Page = () => {
    const steps = [
        {
            id: 1,
            title: 'Scraping des données LinkedIn',
            icon: <Bot className="h-6 w-6" />,
            color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
            description: 'Collecte des données brutes (posts, engagements, thèmes) depuis LinkedIn en utilisant un script Python avec Selenium pour naviguer sur les pages et BeautifulSoup pour extraire les informations souhaitées.',
            tools: ['Python', 'Selenium', 'BeautifulSoup'],
        },
        {
            id: 2,
            title: 'Première transformation et sauvegarde',
            icon: <GitBranch className="h-6 w-6" />,
            color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400',
            description: 'Transformation initiale des données scrapées (nettoyage, normalisation, structuration) et sauvegarde dans un format optimisé .parquet pour un stockage temporaire efficace.',
            tools: ['Python', 'polars'],
        },
        {
            id: 3,
            title: 'Validation des données',
            icon: <Shield className="h-6 w-6" />,
            color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
            description: "Vérification de l'intégrité et de la cohérence des données (gestion des valeurs manquantes, validation des formats, suppression des doublons) pour garantir leur qualité.",
            tools: ['Python', 'polars'],
        },
        {
            id: 4,
            title: 'Chargement dans PostgreSQL',
            icon: <Database className="h-6 w-6" />,
            color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400',
            description: 'Importation des données validées dans une base de données PostgreSQL pour un stockage structuré et une interrogation efficace, utilisant des scripts Python.',
            tools: ['PostgreSQL', 'Python', 'SQLAlchemy', 'psycopg2'],
        },
        {
            id: 5,
            title: 'Extraction ultérieure vers Parquet',
            icon: <FileText className="h-6 w-6" />,
            color: 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400',
            description: 'Extraction des données de PostgreSQL vers des fichiers .parquet pour faciliter les traitements ultérieurs, en utilisant des requêtes SQL et des scripts Python.',
            tools: ['PostgreSQL', 'Python', 'polars'],
        },
        {
            id: 6,
            title: 'Deuxième transformation et calcul des KPI',
            icon: <BarChart3 className="h-6 w-6" />,
            color: 'bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400',
            description: 'Traitement des fichiers .parquet avec Polars pour calculer des KPI (engagement par thème, période, ...) et enregistrement des résultats dans MongoDB. Visualisations intermédiaires avec Plotly.',
            tools: ['Python', 'Polars', 'Plotly', 'MongoDB', 'pymongo'],
        },
        {
            id: 7,
            title: 'Visualisation via tableau de bord',
            icon: <BarChart3 className="h-6 w-6" />,
            color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400',
            description: 'Création d&apos;un tableau de bord interactif avec Next.js et TypeScript, affichant les KPI via des visualisations dynamiques avec Nivo.',
            tools: ['Next.js', 'TypeScript', 'Nivo', 'React'],
        },
        {
            id: 8,
            title: 'Automatisation du pipeline',
            icon: <RefreshCw className="h-6 w-6" />,
            color: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400',
            description: 'Mise en place d&apos;un workflow quotidien avec Airflow pour automatiser le scraping, la transformation, le calcul des KPI et la mise à jour des bases de données.',
            tools: ['Apache Airflow', 'Python'],
        },
        {
            id: 9,
            title: 'Segmentation avec DBSCAN',
            icon: <Brain className="h-6 w-6" />,
            color: 'bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400',
            description: 'Application de l’algorithme DBSCAN pour identifier des regroupements dans les données (par exemple, types de posts), révélant des insights non détectés par l’analyse exploratoire.',
            tools: ['Python', 'scikit-learn'],
        },
    ];

    return (
        <div className="min-h-screen p-2 md:p-10">
            <header className="mb-16 max-w-5xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                                Pipeline d&apos;analyse des performances LinkedIn
                            </h1>
                            <p className="md:text-lg text-gray-600 dark:text-gray-300 mb-6">
                                Analyse des publications LinkedIn pour calculer et visualiser des KPI clés afin de comprendre les performances des posts à fort engagement et à fort potentiel de viralité.<br />
                                Sur quelle thématique publier ? Quelle est la longueur idéale d&apos;un post ? Quels hashtags utiliser ? Quand publier ?
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 rounded-full text-xs font-medium border">ETL</span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium border">Data Pipeline</span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium border">Social Media Analytics</span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium border">Dashboard</span>
                            </div>
                        </div>
                        <div className="shrink-0 w-16 h-16 md:w-32 md:h-32 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <Linkedin className="w-6 h-6 md:w-16 md:h-16 text-blue-600 dark:text-blue-400" />
                        </div>
                    </div>
                </div>
            </header>

            <section className="max-w-6xl mx-auto mb-16">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-2 md:p-8">
                    <div className="aspect-video w-full bg-gray-50 dark:bg-gray-700/50 rounded-lg relative overflow-hidden z-10">
                        <Image
                            src="/pipeline.png"
                            fill
                            className="object-cover rounded-lg"
                            alt="Pipeline d&apos;analyse LinkedIn"
                        />
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-2 rounded-lg mr-3">
                        <GitBranch className="h-5 w-5" />
                    </span>
                    Flux de données
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    {steps.map((step) => (
                        <div key={step.id} className="">
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 md:p-8 flex flex-col items-center justify-center md:flex-row gap-6">
                                <div className={`h-10 w-10 shrink-0 rounded-lg ${step.color} flex items-center justify-center`}>
                                    {step.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                                        <span>{step.id}. {step.title}</span>
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {step.tools?.map((tool) => (
                                            <span
                                                key={tool}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Page;