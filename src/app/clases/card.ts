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
