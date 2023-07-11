export interface Forecast{
    date: string;
    temp: number;
    feelslike: number;
    sky: string;
    location: string;
}

export const forecast = [
    {
        date: "2023-07-12",
        temp: 25,
        feelslike: 28,
        sky: "Sunny",
        location: "New York"
    },
    {
        date: "2023-07-13",
        temp: 22,
        feelslike: 25,
        sky: "Partly Cloudy",
        location: "Vancouver"
    },
]