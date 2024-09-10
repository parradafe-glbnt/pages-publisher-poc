/**
 * User interface
 * @prop id - the main product identificator
 * @prop name - product official name
 * @prop value - total product value (taxes included)
 * @interface
 */


export interface Product{
    id: string;
    name : string;
    value : number;
}