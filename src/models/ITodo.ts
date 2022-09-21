
export interface ITodo{
    id:string,
    name:string,
    createdAt:string,
    category:Category,
    content:string,
    dates:string[],
    isArchive:boolean
}
export type Category = "Task"|"Thought"|"Idea"|string

export function getDates(string:string):string[]{
    return string.match(/\d{1,2}([\/.-])\d{1,2}\1\d{4}/g)||[]
}
export function setCreatedDate():string{
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = today.toLocaleString('default', { month: 'long' });
    let yyyy = today.getFullYear();
    return  mm +" "+ dd + ', ' + yyyy;
}
