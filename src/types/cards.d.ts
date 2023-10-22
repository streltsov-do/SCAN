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
