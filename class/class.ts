
// Members Type

class Rahim {
  name :string;
}

const rahim =new Rahim();

rahim.name='Sarker';


console.log(rahim);



/*

Member visibility



There are three main visibility modifiers in TypeScript.

    public - (default) allows access to the class member from anywhere
    private - only allows access to the class member from within the class
    protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

*/

class Person{

    private name :string;

    public constructor(name:string){
        this.name=name;
    }

    public getName():string {
        return this.name;
    }

}

const p=new Person('My name is Rahim Sarker');

console.log(p.getName());

/*
the readonly keyword can prevent class members from being changed.
*/

class  Perosn1{
  private readonly name :string;

  constructor (name :string){
   this.name=name; 
  }

  public getName():string{
    return this.name;
  }

}


const p1=new Perosn1('MD sarker');

console.log(p1.getName());



interface Shape {

  getArea:() => number;

}

class Rect implements Shape{

    constructor (protected readonly width:number ,protected readonly height:number){

    }

    public getArea () :  number{
         return this.width * this.height;
    } 

}

const rect=new Rect(10,20);

console.log(rect.getArea());


// Extends inheritance 

interface Shape1{
    getArea : () => number;
}


class Rect1 implements Shape1 {

    constructor (protected readonly w:number,protected readonly h:number){
        this.w *this.h;
    }

    public getArea() :number {
        return this.w *this.h;
    }
}

class Sq extends Rect1{
    constructor(w:number){
        super(w,w);
    }
}

const sq=new Sq(100);

console.log(sq.getArea());


//overirde


interface Shape3{
    getArea: () => number;
}


class Rect3 implements Shape3{

   constructor (protected readonly w:number ,protected readonly h:number){

   }

    public getArea ():  number{
        return this.w * this.h;
    }

  public toString(): string {
    return `Rectangle[width=${this.w}, height=${this.h}]`;
  }


}

class Sq3 extends Rect3{
    constructor(w :number){
        super(w,w);
    }

   public override toString(): string {
    return `Square[width=${this.w}]`;
  }
}

const sq3=new Sq3(50);

console.log(sq3.toString());


/// Abstract class


abstract class Ploy{
    abstract getArea() :number;

    public toString() :string{
        return 'Poly [${this.getArea()}]';
    }
}

class Rect4 extends Ploy{

    constructor(protected readonly w:number,protected readonly h:number){
        super();
    }

    public getArea(): number {
        return this.w *this.h;
    }

}

const rect4=new Rect4(10,20);

console.log(rect4.getArea());
