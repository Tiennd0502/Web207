(function() {
    let myApp = angular.module('myApp', ['ngRoute']);
    // bài 1
    myApp.config(($routeProvider) => {
        $routeProvider
            .when("/home", { templateUrl: "home.html" })
            .when("/introduce", { templateUrl: "introduce.html" })
            .when("/contact", { templateUrl: "contact.html" })
            .when("/feedback", { templateUrl: "feedback.html" })
            .when("/answer", { templateUrl: "answer.html" })
            .otherwise({ redirectTo: "/home" });
    })
    myApp.controller('FormCtrl', ($scope) => {

    });

})()