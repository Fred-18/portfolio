export type BurgerMenuProps = {
    isOpen: boolean;
    onToggleAction: () => void;
}
export type CardProps = {
    cardTitle: string;
    cardImages: string;
    cardId?: string;
}

export type BigCardProps = {
    projectId:string;
    projectDescription: string;
    projectLink: string;
    projectTechno: string[];
    projectTitle: string;
}

export type BubbleProps = {
    projectId:string;
    projectTechno: string ;
}
