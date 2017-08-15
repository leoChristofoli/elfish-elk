export class Bill {
    $key: string;
    title: string;
    value: number;
    category: string;
    when_created: Date;
    dateToPay: Date;
    active: boolean = true;
}
