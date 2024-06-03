import { IsInt, IsPositive, IsString, Min, MinLength, maxLength, minLength } from "class-validator";
import { from, min } from "rxjs";


export class CreatePokemonDto {

    @Min(1)
    @IsPositive()
    @IsInt()
    no: number;

    @IsString()
    @MinLength(1)
    name: string;
}