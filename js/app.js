var app = angular.module("campus360", []);

app.controller("dashboardcontroller", function ($scope) {

    // College Details
    $scope.collegename = "FISAT";
    $scope.totalStudents = 1200;
    $scope.totalFaculty = 85;

    // Student List
    $scope.students = [
        "Chandler",
        "Joey",
        "Monica",
        "Phoebe",
        "Steph"
    ];

    // Filter Demo Data
    $scope.fees = 25000;
    $scope.today = new Date();

    // Department Details
    $scope.departments = [
        "IMCA",
        "MCA",
        "CSD",
        "BSC",
        "BBA"
    ];

    $scope.selectedDepartments = "MCA";

    // ng-disabled Demo
    $scope.isDisabled = true;

    $scope.allowAdmission = function () {
        $scope.isDisabled = false;
    };

    $scope.isReadOnly = true;

    $scope.toggleReadOnly = function () {
        $scope.isReadOnly = !$scope.isReadOnly;
    };
    

    // Hide Student List Initially
    $scope.showstudents = false;

    // student registration
    $scope.student = {};

    $scope.registerStudent = function (){
        alert("Student Registration is Successfull")
    }

    // Add Student
    $scope.addstudent = function () {
        $scope.totalStudents++;
    };

    // Add Faculty
    $scope.addfaculty = function () {
        $scope.totalFaculty++;
    };

    console.log("Dashboard Controller Loaded");

});