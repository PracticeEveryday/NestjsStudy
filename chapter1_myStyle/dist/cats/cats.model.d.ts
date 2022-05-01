export interface CatType {
    id: string;
    name: string;
    age: number;
    species: string;
    isCute: boolean;
    friends: Array<string>;
}
export declare const Cat: CatType[];
