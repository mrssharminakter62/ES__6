class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Shakera R.A High school'
    }
}

const student1 = new student(12, "Muaaz");
const student2 = new student(13, "saad");
//console.log(student1, student2);
console.log(student1.name, student2.name);