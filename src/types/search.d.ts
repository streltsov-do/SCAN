interface DateInterval {
    startDate: string;
    endDate: string;
}

interface TargetSearchEntity {
    type: string;
    sparkId: number | null;
    entityId: number | null;
    inn: number;
    maxFullness: boolean;
    inBusinessNews: boolean | null;
}

interface TargetSearchEntitiesContext {
    targetSearchEntities: TargetSearchEntity[];
    onlyMainRole: boolean;
    onlyWithRiskFactors: boolean;
    tonality: "any" | "negative" | "positive";
    riskFactors: {
        and: string[];
        or: string[];
        not: string[];
    };
    themes: {
        and: string[];
        or: string[];
        not: string[];
    };
}

interface SearchTheme {
    and: string[];
    or: string[];
    not: string[];
}

export interface SearchContext {
    targetSearchEntitiesContext: TargetSearchEntitiesContext;
    searchEntitiesFilter?: SearchEntity[];
    locationsFilter?: SearchLocation;
    themesFilter: SearchTheme;
}

interface SearchArea {
    includedSources: string[];
    excludedSources: string[];
    includedSourceGroups: string[];
    excludedSourceGroups: string[];
}

interface FilterAttributes {
    excludeTechNews: boolean;
    excludeAnnouncements: boolean;
    excludeDigests: boolean;
}

export interface SearchRequest {
    intervalType: string;
    histogramTypes: string[];
    issueDateInterval: DateInterval;
    searchContext: SearchContext;
    similarMode: string;
    limit: number;
    sortType: string;
    sortDirectionType: string;
    attributeFilters?: FilterAttributes;
    searchArea: SearchArea;
}
