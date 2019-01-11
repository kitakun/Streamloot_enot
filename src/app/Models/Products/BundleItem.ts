import { IAttribute } from "../IAttribute";

export class BundleItem {
    public ItemId: string;
    public Name: string;
    public Price: number;
    public Attributes: Array<IAttribute>;
}