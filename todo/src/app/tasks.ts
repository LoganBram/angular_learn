export interface Task{
    id: number;
    task: string;
    date: string;
    completed: boolean;
}

export const tasks = [
    {
        id: 1,
        task: 'Do the dishes',
        date: '2021-01-01',
        completed: false
    },
    {
        id: 2,
        task: 'Mop Floor',
        date: '2021-01-01',
        completed: false
    }
]
    
