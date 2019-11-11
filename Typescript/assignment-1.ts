enum Course {
    "FastTrackBatch" = 1, "CorporateBatch", "WeekendBatch", "CorporateWeekendBatch"
}
class Student {
    private studentId: string;
    private name: string;
    private mobileNo: number;
    private address: string;
    public course: Course;

    //constructor
    constructor(studentId: string,name: string, mobileNo: number, address: string, course: number) {
        this.studentId = studentId;
        if(name.length > 15) {
            console.log("Please provide a name less than 15 characters");
        }
        else {
            this.name = name;
        }
        if(mobileNo.toString().length != 10) {
            console.log("Please provide a 10 digit mobile number ");
        }
        else{
            this.mobileNo = mobileNo;
        }
        this.address = address;
        this.course = course;
    }

    //getters
    get _studentId() : string {
        return this.studentId;
    }
    get _name() : string {
        return this.name;
    }
    get _mobileNo() : number {
        return this.mobileNo;
    }
    get _address() : string {
        return this.address;
    }
    get _course() : number {
        return this.course;
    }

    //setters
    set _studentId(studentId: string) {
        this.studentId = studentId;
    }
    set _name(name: string) {
        this.name = name;
    }
    set _mobileNo(mobileNo: number) {
        this.mobileNo = mobileNo;
    }
    set _address(address: string) {
        this.address = address;
    }
    set _course(course: number) {
        this.course = course;
    }
    
    calculateFee(course): number {
        switch(course) {
            case 1 : return 100;
                     break;
            case 2 : return 200;
                     break;
            case 3  : return 300;
                      break;
            case 4:   return 400;
                     break;
        }
    }
}

class FastTrackBatchStudent extends Student {
    calculateFee(course): number {
        var fee = 1000;
        return fee;
    }
}
class CorporateBatchStudent extends Student {
    calculateFee(course): number {
        var fee = 2000;
        return fee;
    }
}
class WeekendBatchStudent extends Student {
    calculateFee(course): number {
        var fee = 3000;
        return fee;
    }
}
class CorporateWeekendBatchStudent extends Student {
    calculateFee(course): number {
        var fee = 4000;
        return fee;
    }
}
let student1 = new Student("123","Kitty",9236465737,"jhbdjnd", 3);
console.log("The fee for Weekend Batch is:"+ student1.calculateFee(student1.course)) //3000
let s1 = new CorporateBatchStudent("123","Kitty",9236465737,"jhbdjnd", 2);
console.log("The fee for Corporate Batch is " + s1.calculateFee(s1.course));







