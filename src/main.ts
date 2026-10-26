

class User {
    public notebooks: NoteBook[] = [];
    constructor(
    public id : number,
    public name : String,
    public email :String,
    private Password : String,
    public Phone :String,
    private _age : number  
    ){
        if (_age < 18 || _age > 60) {
      throw new Error("Age must be between 18 and 60");
    }
    }
    public addNotebook(notebook: NoteBook): void {
    this.notebooks.push(notebook);
  }
    displayInfo():void{
        
        return console.log(`${this.name}, ${this.id}, ${this.email}, #${this.Password}, ${this.Phone}, ${this._age}`);
        
    }
}


class Admim extends User{
    constructor(
     id : number,
     name : String,
     email :String,
     Password : String,
     Phone :String,
     age : number ,
     public adminRole: string
    ){
        super(id, name, email, Password, Phone, age)
    }
 public manageNotes(): void {
    console.log(`[Admin Panel] ${this.name} (${this.adminRole}) is managing system notes: adding, editing, or deleting entries.`);
  }
}




class Note {
    constructor(
    public id : number,
    public title : String,
    public content :String,
    public auther : User, //userId
    ){}
    displayInfoNote():void{
        return console.log(`${this.id}, ${this.title}, ${this.content}, ${this.auther}`);
    }
}


class NoteBook {
    private conllection : Note[]
    constructor(
        public userId : User
    ){
        this.conllection = [];
        userId.addNotebook(this)
    }
    public addNote({id ,title, content, userId}:{id:number, title:string, content: string, userId: User }){
            const note = new Note(id, title, content, userId)
            this.conllection.push(note)
    }

    public removeNote(id: number){
           const updateCollection =  this.conllection.filter(ele=> ele.id !== id)
           this.conllection = updateCollection
    }
}


class Storage<T> {
    public data : T[]
    constructor(){
        this.data=[]
    }

    public addItem(item:T):void{
        this.data.push(item)
    }
    public getAllItems(): T[] {
    return this.data;
  }
  public removeItem(item:T): void{
        this.data= this.data.filter(ele=> ele !== item)
  }
}















