import { VidaliiService, Context } from '@vidalii/vidalii-backend'
import { User } from "./user.entity";
const userType = `#graphql
type User{
    _id:ID
    email:String
    phone:String
    name:String
    lastname:string
}
input UserInput{
    email:String!
    phone:String!
    name:String!
    lastname:String!
}
extend type Mutation{
    UserInsert(user:UserInput!):User
}
`
VidaliiService.api.addType('User', userType)


function userInsert(parent, args, context: Context) {
    new User()
}

VidaliiService.api.addResolver('Mutation', userInsert)