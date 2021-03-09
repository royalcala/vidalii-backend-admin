import { orm, val } from "@vidalii/vidalii-backend";


export class User {
    @orm.Property()
    _id: string = ''

    email:string
}