var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Course;
(function (Course) {
    Course[Course["FastTrackBatch"] = 1] = "FastTrackBatch";
    Course[Course["CorporateBatch"] = 2] = "CorporateBatch";
    Course[Course["WeekendBatch"] = 3] = "WeekendBatch";
    Course[Course["CorporateWeekendBatch"] = 4] = "CorporateWeekendBatch";
})(Course || (Course = {}));
var Student = /** @class */ (function () {
    //constructor
    function Student(studentId, name, mobileNo, address, course) {
        this.studentId = studentId;
        if (name.length > 15) {
            console.log("Please provide a name less than 15 characters");
        }
        else {
            this.name = name;
        }
        if (mobileNo.toString().length != 10) {
            console.log("Please provide a 10 digit mobile number ");
        }
        else {
            this.mobileNo = mobileNo;
        }
        this.address = address;
        this.course = course;
    }
    Object.defineProperty(Student.prototype, "_studentId", {
        //getters
        get: function () {
            return this.studentId;
        },
        //setters
        set: function (studentId) {
            this.studentId = studentId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "_name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "_mobileNo", {
        get: function () {
            return this.mobileNo;
        },
        set: function (mobileNo) {
            this.mobileNo = mobileNo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "_address", {
        get: function () {
            return this.address;
        },
        set: function (address) {
            this.address = address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "_course", {
        get: function () {
            return this.course;
        },
        set: function (course) {
            this.course = course;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.calculateFee = function (course) {
        switch (course) {
            case 1:
                return 100;
                break;
            case 2:
                return 200;
                break;
            case 3:
                return 300;
                break;
            case 4:
                return 400;
                break;
        }
    };
    return Student;
}());
var FastTrackBatchStudent = /** @class */ (function (_super) {
    __extends(FastTrackBatchStudent, _super);
    function FastTrackBatchStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FastTrackBatchStudent.prototype.calculateFee = function (course) {
        var fee = 1000;
        return fee;
    };
    return FastTrackBatchStudent;
}(Student));
var CorporateBatchStudent = /** @class */ (function (_super) {
    __extends(CorporateBatchStudent, _super);
    function CorporateBatchStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CorporateBatchStudent.prototype.calculateFee = function (course) {
        var fee = 2000;
        return fee;
    };
    return CorporateBatchStudent;
}(Student));
var WeekendBatchStudent = /** @class */ (function (_super) {
    __extends(WeekendBatchStudent, _super);
    function WeekendBatchStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WeekendBatchStudent.prototype.calculateFee = function (course) {
        var fee = 3000;
        return fee;
    };
    return WeekendBatchStudent;
}(Student));
var CorporateWeekendBatchStudent = /** @class */ (function (_super) {
    __extends(CorporateWeekendBatchStudent, _super);
    function CorporateWeekendBatchStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CorporateWeekendBatchStudent.prototype.calculateFee = function (course) {
        var fee = 4000;
        return fee;
    };
    return CorporateWeekendBatchStudent;
}(Student));
var student1 = new Student("123", "Kitty", 9236465737, "jhbdjnd", 3);
console.log("The fee for Weekend Batch is:" + student1.calculateFee(student1.course)); //3000
var s1 = new CorporateBatchStudent("123", "Kitty", 9236465737, "jhbdjnd", 2);
console.log("The fee for Corporate Batch is " + s1.calculateFee(s1.course));
