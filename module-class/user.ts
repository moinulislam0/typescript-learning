export class User9{
 userName3: string;
 roll : number ;


 constructor(roll: number,username3: string){
    this.roll = roll;
    this.userName3 = username3;

 }
 display(){
    console.log(`username : ${this.userName3} roll : ${this.roll}`)
 }

}