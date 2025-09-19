export type BurgerMenuProps = {
    isOpen: boolean;
    onToggleAction: () => void;
}
export type CardItem = {
    title: string;
    images: string;
    id?: string;
}
export type icard = {
    card: CardItem[];
}