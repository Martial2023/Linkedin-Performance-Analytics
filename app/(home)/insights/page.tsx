import React from 'react';
import { Lightbulb, Hash, FileText, Clock, Book, MessageSquare, Type, ChartBar } from 'lucide-react';

const LinkedInTips = () => {
  const tips = [
    {
      id: 1,
      title: 'Publier sur les thèmes à fort engagement',
      icon: <Lightbulb className="h-6 w-6" />,
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
      description: "Créez des posts centrés sur la culture d'entreprise, la transformation numérique, la technologie, le leadership ou les ressources humaines. Les sujets comme l'IA, les projets et les tutoriels captivent aussi l'audience. Tout dépend bien également des points d'intérêt de votre réseau. Exemple : partagez un conseil pour améliorer la culture d'équipe.",
    },
    {
      id: 2,
      title: 'Utiliser des hashtags stratégiques',
      icon: <Hash className="h-6 w-6" />,
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
      description: "Ajoutez 3 à 5 hashtags pertinents comme #digitaltransformation, #leadership, #workplaceculture, #ai ou #innovation. Incluez un hashtag de niche (ex. : #data{votre nom}) pour cibler votre audience. Exemple : #ai pour un post sur l'intelligence artificielle.",
    },
    {
      id: 3,
      title: 'Optimiser la longueur des posts',
      icon: <FileText className="h-6 w-6" />,
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
      description: "Rédigez des posts de 200-250 mots avec un storytelling captivant ou des explications claires. Terminez par une question pour encourager les commentaires. Exemple : 'Quelles leçons avez-vous tirées de votre dernier projet ?'",
    },
    {
      id: 4,
      title: 'Publier aux moments stratégiques',
      icon: <Clock className="h-6 w-6" />,
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
      description: "Planifiez vos posts pour le mercredi soir (18h-21h) ou le vendredi (16h-18h ou 10h-11h) dans le fuseau horaire de votre audience. Évitez les lundis et mardis. Exemple : un post sur le leadership mercredi à 19h (Résultats des posts annalysés dans ce projet).",
    },
    {
      id: 5,
      title: 'Créer des posts éducatifs ou narratifs',
      icon: <Book className="h-6 w-6" />,
      color: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
      description: "Partagez des tutoriels (ex. : 'Comment utiliser l'IA pour le recrutement') ou des histoires personnelles/professionnelles. Utilisez des listes ou des formats 'leçon apprise'. Exemple : '3 erreurs à éviter en transformation numérique.'",
    },
    {
      id: 6,
      title: 'Encourager l’interaction avec un CTA',
      icon: <MessageSquare className="h-6 w-6" />,
      color: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
      description: "Terminez par une question ouverte ou un appel à l'action (ex. : 'Partagez vos idées en commentaire !'). Répondez rapidement aux commentaires pour maintenir l'engagement. Exemple : 'Quels outils d'IA utilisez-vous ?'",
    },
    {
      id: 7,
      title: 'Soigner le premier paragraphe et la mise en forme',
      icon: <Type className="h-6 w-6" />,
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
      description: "Commencez par une phrase accrocheuse ou une question. Utilisez des espaces, des puces ou des emojis modérés pour aérer le texte. Exemple : '🚀 L'IA change tout. Voici 3 façons de l'intégrer dans votre RH.'",
    },
    {
      id: 8,
      title: 'Tester et analyser les performances',
      icon: <ChartBar className="h-6 w-6" />,
      color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400',
      description: "Analyser les performances de vos posts (ex. : likes, commentaires, partages) pour identifier les thèmes et formats qui fonctionnent le mieux. Exemple : un post sur l'IA a généré 200 likes et 50 commentaires.",
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center">
        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-lg mr-4">
          <Lightbulb className="h-6 w-6" />
        </span>
        Insights pour optimiser vos posts LinkedIn
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 flex flex-col transition-transform hover:scale-105"
          >
            <div className={`h-12 w-12 rounded-lg ${tip.color} flex items-center justify-center mb-4`}>
              {tip.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {tip.id}. {tip.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LinkedInTips;