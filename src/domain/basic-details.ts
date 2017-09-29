export class BasicDetails{
    name: string;
    age: number;
    current_city: string;
    gender: string;

    isMale() : boolean{
        return this.gender == "male";
    }
}
