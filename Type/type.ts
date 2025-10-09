export type BurgerMenuProps = {
    isOpen: boolean;
    onToggleAction: () => void;
}
export type CardItem = {
    cardTitle: string;
    cardImages: string;
    cardId?: string;
}

export type BigCardItem= {
    projectId:string;
    projectDescription: string;
    projectLink: string;
    projectTechno: string[];
    projectTitle: string;
}