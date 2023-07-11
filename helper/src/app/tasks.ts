export interface Task{
    id: number;
    name: string;
    date: string;
    done: boolean;

}

export const tasks = [
    {
    id: 1,
    name: 'Task 1',
    date: '2019-01-01',
    done: false
    },
    {
    id: 2,
    name: 'Task 2',
    date: '2020-01-01',
    done: false
    }]
