export interface NbrePostsResponse {
    nbre_postes: number,
    nbre_fort: number,
    nbre_viraux: number
}

export interface EngagementCategrorieTextLength {
    engagement_category: string,
    mean_text_length: number,
}

export interface EngagementPostTheme {
    id: string,
    label: string,
    value: number
}

export interface TopHashtagImpact {
    x: number,
    y: number
}

export interface TopHashtagImpactData {
    engagement: TopHashtagImpact[],
    shares: TopHashtagImpact[]
}

export interface CommonEngagementHashtags {
    hashtag: string,
    len: number
}

export interface EngagementTiming {
    day: number,
    "Tot_le_matin": number,
    "Milieu_de_matinee": number,
    "Apres_midi": number,
    "Soir": number,
    "Fin_de_journee": number
}