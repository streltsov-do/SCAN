interface CardProps {
    active?: boolean;
    color: string;
    title: string;
    titleDesc: string;
    icon: {
        img: string;
        width: number;
        height: number;
        top: number;
        right: number;
    };
    price: {
        sale: number;
        src: number;
        installment: number;
    };
    options: string[];
}

export { CardProps };
