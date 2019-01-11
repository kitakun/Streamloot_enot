export class AddressModel 
{
    public Country: string;

    public FullName: string;

    public City: string;

    public State: string;

    public Address1: string;

    public Address2: string;

    public ZipCode: string;

    constructor() {
        this.Country = '';
        this.Address1 = '';
        this.Address2 = '';
        this.City = '';
        this.FullName = '';
        this.State = '';
        this.ZipCode = '';
    }
}