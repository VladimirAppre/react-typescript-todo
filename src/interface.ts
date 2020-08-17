export interface Itodo {
    title: string,
    id: string,
    completed: boolean
}

export interface Icards {
    title: string,
    id: string,
    size: number,
    color: string,
    error: boolean
}

export interface IcardsRedux {
    title: string,
    id: string,
    edit: boolean
}

