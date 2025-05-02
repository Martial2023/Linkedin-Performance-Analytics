"use server";

import { parse } from "csv-parse/sync";
import { CommonEngagementHashtags, EngagementCategrorieTextLength, EngagementPostTheme, EngagementTiming, NbrePostsResponse, TopHashtagImpact, TopHashtagImpactData } from "@/lib/types";


export async function getNbrePosts(): Promise<NbrePostsResponse> {
    try {
        // Charger le fichier via une requête HTTP
        const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";
        const fileUrl = `${baseUrl}/Kpis_csv/nbre_posts.csv`;
        const response = await fetch(fileUrl);

        if (!response.ok) {
            throw new Error(`Erreur lors de la récupération du fichier CSV : ${response.statusText}`);
        }

        const fileContent = await response.text();

        // Parser le CSV
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            delimiter: ",",
            trim: true
        });

        if (records.length === 0) {
            throw new Error("Le fichier CSV est vide");
        }
        const data = {
            nbre_postes: Number(records[0].nbre_postes),
            nbre_fort: Number(records[0].nbre_fort),
            nbre_viraux: Number(records[0].nbre_viraux),
        };

        return data
    } catch (csvError) {
        console.error("\nErreur lors du chargement du CSV :", csvError);
        return {
            nbre_postes: 0,
            nbre_fort: 0,
            nbre_viraux: 0
        };
    }


}


export async function getEngagementCategrorieTextLength({ type }: { type?: string }): Promise<EngagementCategrorieTextLength[]> {
    try {
        // Charger le fichier via une requête HTTP
        const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";
        const fileUrl = type === "viraux" ? `${baseUrl}/Kpis_csv/viral_categoy_proportion.csv` : `${baseUrl}/Kpis_csv/engagement_category_proportion.csv`;
        const response = await fetch(fileUrl);

        if (!response.ok) {
            throw new Error(`Erreur lors de la récupération du fichier CSV : ${response.statusText}`);
        }

        const fileContent = await response.text();

        // Parser le CSV
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            delimiter: ",",
            trim: true
        });

        if (records.length === 0) {
            throw new Error("Le fichier CSV est vide");
        }

        const data: EngagementCategrorieTextLength[] = records.map((record: EngagementCategrorieTextLength) => ({
            engagement_category: type==="viraux"? record.engagement_category==="true"? "viraux": "non viraux" : record.engagement_category,
            mean_text_length: Number(record.mean_text_length).toFixed(2),
        }));

        return data
    } catch (csvError) {
        console.error("\nErreur lors du chargement du CSV :", csvError);
        return []
    }


}

type EngagementPostThemeCsv = {
    theme: string,
    count: number,
}
export async function getEngagementPostTheme({type}: {type?: string}): Promise<EngagementPostTheme[]> {
    try {
        // Charger le fichier via une requête HTTP
        const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";
        const fileUrl = type === "viraux" ? `${baseUrl}/Kpis_csv/viral_post_theme_repartition.csv` : `${baseUrl}/Kpis_csv/engagement_post_theme.csv`;
        const response = await fetch(fileUrl);

        if (!response.ok) {
            throw new Error(`Erreur lors de la récupération du fichier CSV : ${response.statusText}`);
        }

        const fileContent = await response.text();

        // Parser le CSV
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            delimiter: ",",
            trim: true
        });

        if (records.length === 0) {
            throw new Error("Le fichier CSV est vide");
        }
        const sum = records.reduce((sum: number, record: EngagementPostThemeCsv) => {
            return sum + Number(record.count)
        }, 0)
        const data: EngagementPostTheme[] = records.map((record: EngagementPostThemeCsv) => ({
            id: record.theme,
            label: record.theme,
            value: Number((record.count * 100 / sum).toFixed(2)),
        }));

        return data
    } catch (csvError) {
        console.error("\nErreur lors du chargement du CSV :", csvError);
        return []
    }


}


type TopHashtagImpactCsv = {
    nbr_hashtags: number,
    mean_engagement_total: number,
    mean_shares: number
}
export async function getTopHashtagImpact({type}: {type?: string}): Promise<TopHashtagImpactData> {
    try {
        // Charger le fichier via une requête HTTP
        const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";
        const fileUrl = type === "viraux" ? `${baseUrl}/Kpis_csv/top_hashtag_impact.csv` : `${baseUrl}/Kpis_csv/top_hashtag_impact.csv`;
        const response = await fetch(fileUrl);

        if (!response.ok) {
            throw new Error(`Erreur lors de la récupération du fichier CSV : ${response.statusText}`);
        }

        const fileContent = await response.text();

        // Parser le CSV
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            delimiter: ",",
            trim: true
        });

        const engagement: TopHashtagImpact[] = records.map((record: TopHashtagImpactCsv) => ({
            x: record.nbr_hashtags,
            y: Number((record.mean_engagement_total)).toFixed(2),
        }));

        const shares: TopHashtagImpact[] = records.map((record: TopHashtagImpactCsv) => ({
            x: record.nbr_hashtags,
            y: Number((record.mean_shares)).toFixed(2),
        }))

        return {
            engagement: engagement,
            shares: shares
        }
    } catch (csvError) {
        console.error("\nErreur lors du chargement du CSV :", csvError);
        return {
            engagement: [],
            shares: []
        }
    }


}

export async function getCommonEngagementHashtags({type}: {type?: string}): Promise<CommonEngagementHashtags[]> {
    try {
        // Charger le fichier via une requête HTTP
        const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";
        const fileUrl = type === "viraux" ? `${baseUrl}/Kpis_csv/top_viral_hashtags.csv` : `${baseUrl}/Kpis_csv/top_engagement_hashtags.csv`;
        const response = await fetch(fileUrl);

        if (!response.ok) {
            throw new Error(`Erreur lors de la récupération du fichier CSV : ${response.statusText}`);
        }

        const fileContent = await response.text();

        // Parser le CSV
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            delimiter: ",",
            trim: true
        });

        const data: CommonEngagementHashtags[] = records.map((record: CommonEngagementHashtags) => ({
            hashtag: record.hashtag.slice(1),
            len: Number((record.len)).toFixed(2),
        }));

        return data
    } catch (csvError) {
        console.error("\nErreur lors du chargement du CSV :", csvError);
        return []
    }


}

type EngagementTimingCsv = {
    day_of_week: string;
    time_of_day: string;
    mean_engagement_total: string;
};

const TIME_PERIODS = [
    "Tôt le matin",
    "Milieu de matinée",
    "Après-midi",
    "Fin de journée",
    "Soir",
];
const TIME_KEYS: { [key: string]: string } = {
    "Tôt le matin": "Tot_le_matin",
    "Milieu de matinée": "Milieu_de_matinee",
    "Après-midi": "Apres_midi",
    "Fin de journée": "Fin_de_journee",
    "Soir": "Soir",
};
export async function getEngagementTiming({type}: {type?: string}): Promise<EngagementTiming[]> {
    try {
        // Charger le fichier via une requête HTTP
        const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";
        const fileUrl = type === "viraux"? `${baseUrl}/Kpis_csv/viral_timing.csv` : `${baseUrl}/Kpis_csv/engagement_timing.csv`;
        const response = await fetch(fileUrl);

        if (!response.ok) {
            throw new Error(`Erreur lors de la récupération du fichier CSV : ${response.statusText}`);
        }

        const fileContent = await response.text();

        // Parser le CSV
        const records: EngagementTimingCsv[] = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            delimiter: ",",
            trim: true,
        });

        // Regrouper les données par jour
        const groupedByDay: { [key: string]: { [key: string]: number } } = {};

        records.forEach((record) => {
            const day = record.day_of_week;
            const time = record.time_of_day;
            const engagement = parseFloat(record.mean_engagement_total); // Conserver la précision d'origine

            if (!groupedByDay[day]) {
                groupedByDay[day] = {};
            }
            groupedByDay[day][TIME_KEYS[time]] = engagement;
        });

        // Transformer en format demandé
        const data: EngagementTiming[] = Object.keys(groupedByDay).map((dayStr) => {
            const day = parseInt(dayStr, 10);
            const dayData = groupedByDay[dayStr];

            const result: EngagementTiming = {
                day, // Conserver day comme number
                "Tot_le_matin": 0,
                "Milieu_de_matinee": 0,
                "Apres_midi": 0,
                "Soir": 0,
                "Fin_de_journee": 0
            };

            TIME_PERIODS.forEach((period) => {
                if (dayData[TIME_KEYS[period]]) {
                    // Arrondir à 2 décimales seulement si nécessaire
                    result[TIME_KEYS[period] as keyof EngagementTiming] = Number(parseFloat(dayData[TIME_KEYS[period]].toFixed(2)));
                }
            });

            return result;
        });

        // Trier par jour pour un ordre cohérent
        data.sort((a, b) => a.day - b.day);
        return data;
    } catch (csvError) {
        console.error("Erreur lors du chargement du CSV :", csvError);
        return [];
    }
}