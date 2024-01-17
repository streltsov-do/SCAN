export type FiltNames =
    | "chkFiltMax"
    | "chkFiltEnd"
    | "chkFiltMain"
    | "chkFiltRisc"
    | "chkFiltTech"
    | "chkFiltAd"
    | "chkFiltSumm";

const FILT_ARR: {
    name: FiltNames;
    desc: string;
    defaultChecked: boolean;
    enabled: boolean;
}[] = [
    {
        name: "chkFiltMax",
        desc: "Признак максимальной полноты",
        defaultChecked: true,
        enabled: true,
    },
    {
        name: "chkFiltEnd",
        desc: "Упоминания в бизнес-контексте",
        defaultChecked: true,
        enabled: true,
    },
    {
        name: "chkFiltMain",
        desc: "Главная роль в публикации",
        defaultChecked: true,
        enabled: true,
    },
    {
        name: "chkFiltRisc",
        desc: "Публикации только с риск-факторами",
        defaultChecked: false,
        enabled: false,
    },
    {
        name: "chkFiltTech",
        desc: "Включать технические новости рынков",
        defaultChecked: false,
        enabled: false,
    },
    {
        name: "chkFiltAd",
        desc: "Включать анонсы и календари",
        defaultChecked: true,
        enabled: true,
    },
    {
        name: "chkFiltSumm",
        desc: "Включать сводки новостей",
        defaultChecked: false,
        enabled: false,
    },
];

export { FILT_ARR };
