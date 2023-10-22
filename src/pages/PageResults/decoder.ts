import { decode } from "html-entities";

const getFirstImageUrl = (decodedContent: string) => {
    const images = decodedContent.match(/<img src="(.*?)"/m);

    return images ? images[1] : null;
};

const decodeContent = (markup: string) => {
    return decode(markup);
};

const removeAllTags = (content: string) => {
    return content.replace(/<.*?>/g, " ");
};

export const getContent = (markup: string, wordnum: number) => {
    const decodedContent = decodeContent(markup);
    const bgUrl = getFirstImageUrl(decodedContent);
    const content = removeAllTags(decodedContent).slice(0, wordnum) + "...";

    return {
        bgUrl,
        content,
    };
};
