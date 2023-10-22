// interface typeCard {
//     attributes: {
//         coverage: {
//             state: string;
//             value: number;
//         };
//         iinfluence: number;
//         isAnnouncement: boolean;
//         isDigest: boolean;
//         isSpeechRecognition: boolean;
//         isTechNews: boolean;
//         wordCount: number;
//     };
//     content: {
//         markup: string;
//     };
//     dedupClusterId: string;
//     desc: string;
//     entities: {
//         companies: {
//             entityId: number;
//             isMainRole: boolean;
//             isSpeechAuthor: boolean;
//             localId: number;
//             name: string;
//             suggestedCompanies: {
//                 inn: string;
//                 ogrn: string;
//                 searchPrecision: string;
//                 sparkId: number;
//             }[];
//             tags: string[];
//         }[];
//     };
//     locations: {
//         code: {
//             countryCode: string;
//             regionCode: string;
//         };
//         isMainRole: boolean;
//         localId: number;
//         name: string;
//     }[];
//     people: {
//         entityId: number;
//         isMainRole: boolean;
//         isSpeechAuthor: boolean;
//         localId: number;
//         name: string;
//         rotatedName: string;
//         tags: string[];
//     }[];
//     themes: {}[]
// }

export interface DocAuthor {
    name: string;
}

export interface DocSource {
    id: integer;
    name: string;
    categoryId: integer;
    levelId: integer;
    groupId: integer;
}

export interface DocTitle {
    text: string;
    markup: string;
}

export interface DocContent {
    markup: string;
}

export interface DocAttributes {
    isTechNews: boolean; //Признак того, что публикация является технической новостью.
    isAnnouncement: boolean; //Признак того, что публикация является анонсом или календарём событий.
    isDigest: boolean; //Признак того, что публикация является дайджестом, то есть сводкой новостей.
    wordCount: integer; //Количество слов текста публикации.
    // influence	    В рамках данного проекта не используется.
    // coverage	    В рамках данного проекта не используется.
}

export interface ScanDoc {
    schemaVersion: string;
    id: string;
    version: number;
    issueDate: string;
    url: string;
    author: DocAuthor;
    source: DocSource;
    dedupClusterId: string;
    title: DocTitle;
    content: DocContent;
    // entities?
    attributes: DocAttributes;
    language: string;

    desc: string;
    img: string | null;
}
