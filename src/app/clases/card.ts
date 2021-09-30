export class Card{
    cards!:CardInfo[];
    deck_id!:string;
    success!:boolean;
    remaining!:number;
}

export class CardInfo{
    code!:string;
    image!:string;
    images!:string[];
    suit!:string;
    value!:string;
}

export class AnimeInfo{
    tag_string_copyright!:string;
    file_url!:string;
    tag_string_character!:string;
}
