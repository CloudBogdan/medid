export interface IClass {
    id: string | number
    title: string
    color: string | ("green" | "red" | "orange" | "yellow")
    pin?: boolean
}