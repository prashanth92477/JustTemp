export interface addd{
      street?: string,
        city?:string,
        state?:string,
}

export interface User{
   firstName: string,
      lastName: string,
      email:string,
      isActive?:boolean,
      hide?:boolean,
      registered?:Date

}


// export interface add{
//   street:string,
//   city:string,
//   state:string
// }
// export interface User{
//   firstName:string,
//   lastName:string,
//   age:number,
//   address:add,
//   hide:boolean,
//   registered:"new Date('01/01/2018 08:30:00')",
// }

// export interface User{
//   firstName:string,
//   lastName:string,
//   age?:number,
//   address?:{
//     street?:string,
//     city?:string,
//     state?:string,
//   },
//   isActive?:boolean,
//   hide?:boolean,
//   registered?: Date,
// }
