export type BurgerMenuProps = {
    isOpen: boolean;
    onToggleAction: () => void;
}
export type CardItem = {
    title: string;
    images: string;
    id?: string;
}

export type BigCardItem= {
    description: string;
    link: string;
    techno: string;
    title: string;
}