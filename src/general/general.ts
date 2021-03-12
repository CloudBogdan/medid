export const default_ease: number[] = [0.58, 0.16, 0.1, 0.87];

export function createClassName(names: any, def?: string): string {

    let result: string[] = [];

    if (!names[0])
        Object.keys(names).map(key=> {
            if (names[key])
                result.push(key);
        });
    else
        result = names;

    return [def, result.join(" ")].join(" ");
}

export function saveItem(item: string, value: any): void {

    localStorage.setItem(item, JSON.stringify(value));
    
}
export function loadItem(item: string): any {
    
    return JSON.parse(localStorage.getItem(item) || "null");

}
export function compareId(id1: number | string, id2: number | string): boolean {
    
    return id1.toString() === id2.toString();
    
}
export function sliceText(text: string, max?: number): string {

    return text.length > (max || 50) ? text.slice(0, max || 50) + "..." : text;

}

export function addZero(num: number): string | number {
    return num.toString().length < 2 ? "0"+num : num;
}
export function formatDate(date: Date): string {

    return `${ addZero(date.getDate()) }.${ addZero(date.getMonth()) }.${ addZero(+date.getFullYear().toString().slice(1)) } ${ addZero(date.getHours()) }:${ addZero(date.getMinutes()) }`;
    
}
export function getTimeFromDate(date: Date): string {

    return `${ addZero(date.getHours()) }:${ addZero(date.getMinutes()) }:${ addZero(date.getSeconds()) }`;
    
}