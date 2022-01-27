export type Question = {
    id: string
    title: string
    content: string
    choices: { [key: string]: string }
    practice: boolean
}
