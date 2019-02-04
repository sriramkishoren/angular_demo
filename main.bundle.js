webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_student_student_service__ = __webpack_require__("../../../../../src/app/services/student/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_phone_pipe__ = __webpack_require__("../../../../../src/app/pipes/phone.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_index_app_component__ = __webpack_require__("../../../../../src/app/components/index/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_student_list_student_list_component__ = __webpack_require__("../../../../../src/app/components/student/list/student-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_student_details_student_details_component__ = __webpack_require__("../../../../../src/app/components/student/details/student-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_student_add_student_add_component__ = __webpack_require__("../../../../../src/app/components/student/add/student-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_highlight_student_directive__ = __webpack_require__("../../../../../src/app/directives/highlight-student.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Modules




// Services



// Pipes


// Components







// Parent Routes
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */],
        children: __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["b" /* homeChildRoutes */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_auth_service__["a" /* AuthService */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppModule = (function () {
    // enableProdMode();
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__components_index_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_student_list_student_list_component__["a" /* StudentListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_student_details_student_details_component__["a" /* StudentDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_student_add_student_add_component__["a" /* StudentAddComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_phone_pipe__["a" /* PhonePipe */],
                __WEBPACK_IMPORTED_MODULE_17__directives_highlight_student_directive__["a" /* HighlightStudentDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot({
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                }),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__services_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__services_student_student_service__["a" /* StudentService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__components_index_app_component__["a" /* AppComponent */]]
        })
        // enableProdMode();
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Created By : Author XYZ (http://angular/5)*/\r\n\r\n\r\n/*Created By : Author XYZ (http://angular/5)*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Created By : Author XYZ (http://angular/5) -->\r\n\r\n<!-- Side Bar -->\r\n<nav class=\"w3-sidebar w3-bar-block w3-collapse w3-animate-left w3-card-2\" style=\"z-index:3;width:250px;\" id=\"mySidebar\">\r\n\t<!-- Logo -->\r\n\t<img src=\"assets/sun-logo.png\" class=\"logo\">\r\n\t<!-- Sidebar Links -->\r\n\t<a class=\"w3-bar-item w3-button\" [ngClass]=\"{'w3-teal': (active == '/')}\" routerLink=\"/\"> <i class=\"w3-medium fa fa-user\"></i>  User List</a>\r\n\t<a class=\"w3-bar-item w3-button\" routerLink=\"/add\"  [ngClass]=\"{'w3-teal': (active == '/add')}\"> <i class=\"w3-medium fa fa-plus\"></i>  Add new user</a>\r\n\t<a class=\"w3-bar-item w3-button\" (click)=\"logOut()\"><i class=\"w3-medium fa fa-sign-out\"></i>  Logout</a>\r\n</nav>\r\n\r\n<!-- Load main contents -->\r\n<div class=\"w3-main\" style=\"margin-left:250px;\">\r\n\t<div class=\"w3-container\">\r\n\t<!-- Initiate Child Routing -->\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Created By : Author XYZ (http://angular/5) -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return homeChildRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_list_student_list_component__ = __webpack_require__("../../../../../src/app/components/student/list/student-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_details_student_details_component__ = __webpack_require__("../../../../../src/app/components/student/details/student-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_add_student_add_component__ = __webpack_require__("../../../../../src/app/components/student/add/student-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_config_config_service__ = __webpack_require__("../../../../../src/app/services/config/config.service.ts");
/**
 * Created By : Author XYZ (http://angular/5)
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Components



// Services

var HomeComponent = (function () {
    function HomeComponent(router, toastr) {
        var _this = this;
        this.router = router;
        this.toastr = toastr;
        // Detect route changes for active sidebar menu
        this.router.events.subscribe(function (val) {
            _this.routeChanged(val);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    // Detect route changes for active sidebar menu
    HomeComponent.prototype.routeChanged = function (val) {
        this.active = val.url;
    };
    // Logout User
    HomeComponent.prototype.logOut = function () {
        this.toastr.success('Success', "Logged Out Successfully");
        localStorage.removeItem('userData');
        this.router.navigate(['/login']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_6__services_config_config_service__["b" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], HomeComponent);
    return HomeComponent;
}());

// Define and export child routes of HomeComponent
var homeChildRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__student_list_student_list_component__["a" /* StudentListComponent */]
    },
    {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_5__student_add_student_add_component__["a" /* StudentAddComponent */]
    },
    {
        path: 'update/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__student_add_student_add_component__["a" /* StudentAddComponent */]
    },
    {
        path: 'detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__student_details_student_details_component__["a" /* StudentDetailsComponent */]
    }
];
/**
 * Created By : Author XYZ (http://angular/5)
 */


/***/ }),

/***/ "../../../../../src/app/components/index/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*Created By : Author XYZ (http://angular/5)*/\r\n\r\n\r\n/*Created By : Author XYZ (http://angular/5)*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/index/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Created By : Author XYZ (http://angular/5) -->\r\n<!-- App component - Load Parent routes defined in app.module.ts -->\r\n<router-outlet></router-outlet>\r\n<!-- Created By : Author XYZ (http://angular/5) -->"

/***/ }),

/***/ "../../../../../src/app/components/index/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/**
 * Created By : Author XYZ (http://angular/5)
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Student Management By Author XYZ';
        // Add few students for initial listing
        this.studentsList = [
            {
                id: 1,
                first_name: "Karry",
                last_name: "Micheal",
                email: "srkn@yopmail.com",
                phone: 9503733178,
                department: "Science"
            },
            {
                id: 2,
                first_name: "Oman",
                last_name: "Umir",
                email: "oman@yopmail.com",
                phone: 8574889658,
                department: "Commerce"
            },
            {
                id: 3,
                first_name: "Tina",
                last_name: "Dillon",
                email: "tina@yopmail.com",
                phone: 7485889658,
                department: "Science"
            },
            {
                id: 4,
                first_name: "John",
                last_name: "Doe",
                email: "john@yopmail.com",
                phone: 9685589748,
                department: "Arts"
            },
            {
                id: 5,
                first_name: "Peter",
                last_name: "Parker",
                email: "peter@yopmail.com",
                phone: 8595856547,
                department: "Engineering"
            }
        ];
        // Save students to localStorage
        localStorage.setItem('students', JSON.stringify(this.studentsList));
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/components/index/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/index/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

/**
 * Created By : Author XYZ (http://angular/5)
 */


/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Created By : Author XYZ (http://angular/5)*/\r\n\r\n.align-center{\r\n\twidth: 40%;\r\n\tmargin: auto;\r\n}\r\n.login-card{\r\n\tmargin-top: 5%;\r\n\tborder-radius: 15px;\r\n}\r\n\r\n/*Created By : Author XYZ (http://angular/5)*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Created By : Author XYZ (http://angular/5) -->\r\n\r\n<div class=\"w3-container align-center w3-card login-card\">\r\n\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\r\n\t\t<div class=\"text-center\">\r\n\t\t\t<img src=\"assets/sun-logo.png\" class=\"logo\">\r\n\t\t</div>\r\n\r\n\t\t<label class=\"w3-text-blue\"><b>Email</b></label>\r\n\t\t<input class=\"w3-input w3-border\" type=\"email\" formControlName=\"email\">\r\n\t\t<div class=\"w3-panel w3-red\"  *ngIf=\"loginForm.controls.email.invalid && (loginForm.controls.email.dirty || loginForm.controls.email.touched)\">Please enter valid email address</div> \r\n\r\n\t\t<label class=\"w3-text-blue\"><b>Password</b></label>\r\n\t\t<input class=\"w3-input w3-border\" type=\"password\" formControlName=\"password\">\r\n\t\t<div class=\"w3-panel w3-red\"  *ngIf=\"loginForm.controls.password.invalid && (loginForm.controls.password.dirty || loginForm.controls.password.touched)\">Password must be at least 6 characters long, and contain a number</div> \r\n\t\t<br>\r\n\t\t<button class=\"w3-btn w3-blue\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login <i class=\"w3-medium fa fa-check\"></i> </button>\r\n\t</form>\r\n\t<div class=\"w3-panel w3-blue-gray\">\r\n\t\t<h4>Notes : </h4>\r\n\t\t<p>Credentials : admin@yopmail.com &amp; admin123</p>\r\n\t\t<p>All data will be restored when refreshed</p>\r\n\t</div> \r\n</div>\r\n\r\n<!-- Created By : Author XYZ (http://angular/5) -->"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_config_service__ = __webpack_require__("../../../../../src/app/services/config/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/**
 * Created By : Author XYZ (http://angular/5)
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(formBuilder, router, userService, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
        this.loginForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__services_config_config_service__["a" /* ValidationService */].emailValidator]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__services_config_config_service__["a" /* ValidationService */].passwordValidator]]
        });
    }
    // Check if user already logged in
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('userData')) {
            this.router.navigate(['/']);
        }
    };
    // Initicate login
    LoginComponent.prototype.doLogin = function () {
        var login = this.userService.doLogin(this.loginForm.value);
        this.success(login);
    };
    // Login success function
    LoginComponent.prototype.success = function (data) {
        if (data.code == 200) {
            localStorage.setItem('userData', JSON.stringify(data.data));
            this.router.navigate(['/']);
            this.toastr.success('Success', "Logged In Successfully");
        }
        else {
            this.toastr.error('Failed', "Invalid Credentials");
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__services_config_config_service__["b" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]])
    ], LoginComponent);
    return LoginComponent;
}());

/**
 * Created By : Author XYZ (http://angular/5)
 */ 


/***/ }),

/***/ "../../../../../src/app/components/student/add/student-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Created By : Author XYZ (http://angular/5)*/\r\nform{\r\n\tpadding: 0px;\r\n}\r\n/*Created By : Author XYZ (http://angular/5)*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/student/add/student-add.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Created By : Author XYZ (http://angular/5) -->\r\n\r\n<div class=\"w3-container\" *ngIf=\"studentAddForm\">\r\n\t<form class=\"w3-container\" [formGroup]=\"studentAddForm\" (ngSubmit)=\"doRegister()\">\r\n\t<div class=\"w3-panel w3-round-small w3-teal\">\r\n\t\t<h3><span *ngIf=\"index == undefined\">Student Registration</span><span *ngIf=\"index != undefined\">Student Update</span> <a routerLink=\"/\" class=\"w3-button w3-green custom-button\"><i class=\"w3-medium fa fa-chevron-left\"></i> Back</a></h3>\r\n\t</div>\r\n\r\n\t\t<label class=\"w3-text-blue\"><i class=\"w3-medium custom-icon fa fa-user\"></i><b>First Name</b></label>\r\n\t\t<input class=\"w3-input w3-border\" type=\"text\" formControlName=\"first_name\">\r\n\t\t<div class=\"w3-panel w3-red\"  *ngIf=\"studentAddForm.controls.first_name.invalid && (studentAddForm.controls.first_name.dirty || studentAddForm.controls.first_name.touched)\">Please enter 3 to 50 characters</div> \r\n\r\n\t\t<label class=\"w3-text-blue\"><i class=\"w3-medium custom-icon fa fa-user\"></i><b>Last Name</b></label>\r\n\t\t<input class=\"w3-input w3-border\" type=\"text\" formControlName=\"last_name\">\r\n\t\t<div class=\"w3-panel w3-red\"  *ngIf=\"studentAddForm.controls.last_name.invalid && (studentAddForm.controls.last_name.dirty || studentAddForm.controls.last_name.touched)\">Please enter  3 to 50 characters </div> \r\n\r\n\t\t<label class=\"w3-text-blue\"><i class=\"w3-medium custom-icon fa fa-envelope-o\"></i><b>Email Address</b></label>\r\n\t\t<input class=\"w3-input w3-border\" type=\"text\" formControlName=\"email\">\r\n\t\t<div class=\"w3-panel w3-red\"  *ngIf=\"studentAddForm.controls.email.invalid && (studentAddForm.controls.email.dirty || studentAddForm.controls.email.touched)\">Please enter valid email address</div> \r\n\r\n\t\t<label class=\"w3-text-blue\"><i class=\"w3-medium custom-icon fa fa-phone\"></i><b>Phone</b></label>\r\n\t\t<input class=\"w3-input w3-border\" type=\"number\" formControlName=\"phone\">\r\n\t\t<div class=\"w3-panel w3-red\"  *ngIf=\"studentAddForm.controls.phone.invalid && (studentAddForm.controls.phone.dirty || studentAddForm.controls.phone.touched)\">Please enter valid phone number</div> \r\n\t\t<br>\r\n\t\t<button class=\"w3-btn w3-blue\" type=\"submit\" [disabled]=\"!studentAddForm.valid\"><span *ngIf=\"index == undefined\">Register</span><span *ngIf=\"index != undefined\">Update</span> <i class=\"w3-medium fa fa-check\"></i> </button>\r\n\r\n\t</form>\r\n</div>\r\n\r\n<!-- Created By : Author XYZ (http://angular/5) -->"

/***/ }),

/***/ "../../../../../src/app/components/student/add/student-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_config_service__ = __webpack_require__("../../../../../src/app/services/config/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_student_student_service__ = __webpack_require__("../../../../../src/app/services/student/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created By : Author XYZ (http://angular/5)
 */



// Services




var StudentAddComponent = (function () {
    function StudentAddComponent(formBuilder, router, route, studentService, toastr) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.studentService = studentService;
        this.toastr = toastr;
        // Check for route params
        this.route.params.subscribe(function (params) {
            _this.index = params['id'];
            // check if ID exists in route & call update or add methods accordingly
            if (_this.index && _this.index != null && _this.index != undefined) {
                _this.getStudentDetails(_this.index);
            }
            else {
                _this.createForm(null);
            }
        });
    }
    StudentAddComponent.prototype.ngOnInit = function () {
    };
    // Submit student details form
    StudentAddComponent.prototype.doRegister = function () {
        if (this.index && this.index != null && this.index != undefined) {
            this.studentAddForm.value.id = this.index;
        }
        else {
            this.index = null;
        }
        var studentRegister = this.studentService.doRegisterStudent(this.studentAddForm.value, this.index);
        if (studentRegister) {
            if (studentRegister.code == 200) {
                this.toastr.success(studentRegister.message, "Success");
                this.router.navigate(['/']);
            }
            else {
                this.toastr.error(studentRegister.message, "Failed");
            }
        }
    };
    // If this is update form, get user details and update form
    StudentAddComponent.prototype.getStudentDetails = function (index) {
        var studentDetail = this.studentService.getStudentDetails(index);
        this.createForm(studentDetail);
    };
    // If this is update request then auto fill form
    StudentAddComponent.prototype.createForm = function (data) {
        if (data == null) {
            this.studentAddForm = this.formBuilder.group({
                first_name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(50)]],
                last_name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(50)]],
                phone: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__services_config_config_service__["a" /* ValidationService */].checkLimit(5000000000, 9999999999)]],
                email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__services_config_config_service__["a" /* ValidationService */].emailValidator]]
            });
        }
        else {
            this.studentAddForm = this.formBuilder.group({
                first_name: [data.studentData.first_name, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(50)]],
                last_name: [data.studentData.last_name, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(50)]],
                phone: [data.studentData.phone, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__services_config_config_service__["a" /* ValidationService */].checkLimit(5000000000, 9999999999)]],
                email: [data.studentData.email, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__services_config_config_service__["a" /* ValidationService */].emailValidator]]
            });
        }
    };
    StudentAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-student-add',
            template: __webpack_require__("../../../../../src/app/components/student/add/student-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/student/add/student-add.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__services_config_config_service__["b" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__services_student_student_service__["a" /* StudentService */], __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]])
    ], StudentAddComponent);
    return StudentAddComponent;
}());

/**
 * Created By : Author XYZ (http://angular/5)
 */ 


/***/ }),

/***/ "../../../../../src/app/components/student/details/student-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Created By : Author XYZ (http://angular/5)*/\r\n.margin-right{\r\n\tmargin-right: 10px;\r\n}\r\n.custom-card{\r\n\twidth: 50%;\r\n\tmargin:auto;\r\n}\r\n/*Created By : Author XYZ (http://angular/5)*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/student/details/student-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Created By : Author XYZ (http://angular/5) -->\r\n\r\n<div class=\"w3-container\" *ngIf=\"studentDetail\">\r\n\t<div class=\"w3-panel w3-round-small w3-teal\">\r\n\t\t<h3>Student Details <button [routerLink]=\"['/update', index]\" class=\"w3-button w3-blue custom-button\"> <i class=\"w3-medium fa fa-pencil\"></i> Edit</button> <button routerLink=\"/\" class=\"w3-button w3-green custom-button margin-right\"> <i class=\"w3-medium fa fa-chevron-left\"></i> Back</button></h3>\r\n\t</div>\r\n\t<div class=\" w3-card custom-card\"><br>\r\n\t\t<h3 class=\"text-center\">{{studentDetail.first_name}} {{studentDetail.last_name}}</h3>\r\n\t\t<hr>\r\n\t\t<table class=\"w3-table w3-bordered\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td><i class=\"w3-medium custom-icon fa fa-user\"></i>First Name</td>\r\n\t\t\t\t<td>: <b>{{studentDetail.first_name}}</b></td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><i class=\"w3-medium custom-icon fa fa-user\"></i>Last name</td>\r\n\t\t\t\t<td>: <b>{{studentDetail.last_name}}</b></td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><i class=\"w3-medium custom-icon fa fa-envelope-o\"></i> Email Address</td>\r\n\t\t\t\t<td>: <b>{{studentDetail.email}}</b></td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><i class=\"w3-medium custom-icon fa fa-phone\"></i> Phone</td>\r\n\t\t\t\t<td>: <b>{{studentDetail.phone}}</b></td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Created By : Author XYZ (http://angular/5) -->"

/***/ }),

/***/ "../../../../../src/app/components/student/details/student-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_student_student_service__ = __webpack_require__("../../../../../src/app/services/student/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_config_config_service__ = __webpack_require__("../../../../../src/app/services/config/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created By : Author XYZ (http://angular/5)
 */



// Services


var StudentDetailsComponent = (function () {
    function StudentDetailsComponent(router, route, studentService, toastr) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.studentService = studentService;
        this.toastr = toastr;
        // Get user detail index number sent in params
        this.route.params.subscribe(function (params) {
            _this.index = params['id'];
            if (_this.index && _this.index != null && _this.index != undefined) {
                _this.getStudentDetails(_this.index);
            }
        });
    }
    StudentDetailsComponent.prototype.ngOnInit = function () {
    };
    // Get student details 
    StudentDetailsComponent.prototype.getStudentDetails = function (index) {
        var getStudentDetail = this.studentService.getStudentDetails(index);
        if (getStudentDetail) {
            this.studentDetail = getStudentDetail.studentData;
            this.toastr.success(getStudentDetail.message, "Success");
        }
    };
    StudentDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-student-details',
            template: __webpack_require__("../../../../../src/app/components/student/details/student-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/student/details/student-details.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_4__services_config_config_service__["b" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_student_student_service__["a" /* StudentService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], StudentDetailsComponent);
    return StudentDetailsComponent;
}());

/**
 * Created By : Author XYZ (http://angular/5)
 */ 


/***/ }),

/***/ "../../../../../src/app/components/student/list/student-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Created By : Author XYZ (http://angular/5)*/\r\ntd{\r\n\t    vertical-align: middle;\r\n}\r\n/*Created By : Author XYZ (http://angular/5)*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/student/list/student-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Created By : Author XYZ (http://angular/5) -->\r\n\r\n<div class=\"w3-container\" *ngIf=\"studentListData\">\r\n\t<div class=\"w3-panel w3-round-small w3-teal\">\r\n\t\t<h3>Student List <button routerLink=\"/add\" class=\"w3-button w3-green custom-button\"><i class=\"w3-medium  fa fa-plus\"></i> Add New Student</button></h3>\r\n\t</div>\r\n\t<span><i class=\"w3-medium fa fa-search\"></i> Search : <input class=\"\" type=\"text\" [(ngModel)]='filterData'></span>\r\n\r\n\t<div class=\"w3-panel w3-green\" *ngIf=\"(studentListData | filter:filterData).length == 0\">\r\n\t\t<h3>Oh no</h3>\r\n\t\t<p>No students found <span *ngIf=\"filterData\"> with search \"{{filterData}}\"</span> </p>\r\n\t</div>\r\n\t<div class=\"w3-panel w3-light-grey w3-padding-16 w3-card-2\" *ngIf=\"(studentListData | filter:filterData | filter:filterData).length != 0\">\r\n\t\t<table class=\"w3-table w3-striped w3-bordered\">\r\n\t\t\t<tr>\r\n\t\t\t\t<th><i class=\"w3-medium custom-icon fa fa-refresh\"></i> Sr. No.</th>\r\n\t\t\t\t<!-- <th>ID</th> -->\r\n\t\t\t\t<th><i class=\"w3-medium custom-icon fa fa-user\"></i> First Name</th>\r\n\t\t\t\t<th><i class=\"w3-medium custom-icon fa fa-user\"></i> Last Name</th>\r\n\t\t\t\t<th><i class=\"w3-medium custom-icon fa fa-envelope-o\"></i> Email</th>\r\n\t\t\t\t<th><i class=\"w3-medium custom-icon fa fa-phone\"></i> Phone</th>\r\n\t\t\t\t<th><i class=\"w3-medium custom-icon fa fa-pencil\"></i> Update</th>\r\n\t\t\t\t<th><i class=\"w3-medium custom-icon fa fa-trash\"></i> Delete</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr *ngFor=\"let student of studentListData | filter:filterData; index as i;\" appHighlightStudent>\r\n\t\t\t\t<td>{{i +1}}</td>\r\n\t\t\t\t<td class=\"pointer\" [routerLink]=\"['detail', i]\">{{student.first_name}} </td>\r\n\t\t\t\t<td class=\"pointer\" [routerLink]=\"['detail', i]\">{{student.last_name}}</td>\r\n\t\t\t\t<td class=\"pointer\" [routerLink]=\"['detail', i]\">{{student.email}}</td>\r\n\t\t\t\t<td class=\"pointer\" [routerLink]=\"['detail', i]\">{{student.phone | phone}}</td>\r\n\t\t\t\t<td><button [routerLink]=\"['update', i]\" class=\"w3-button w3-blue\">Update</button></td>\r\n\t\t\t\t<td><button (click)=\"deleteStudent(i);\" class=\"w3-button w3-red\">Delete</button></td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Created By : Author XYZ (http://angular/5) -->"

/***/ }),

/***/ "../../../../../src/app/components/student/list/student-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_student_student_service__ = __webpack_require__("../../../../../src/app/services/student/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_config_service__ = __webpack_require__("../../../../../src/app/services/config/config.service.ts");
/**
 * Created By : Author XYZ (http://angular/5)
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


var StudentListComponent = (function () {
    function StudentListComponent(studentService, toastr) {
        this.studentService = studentService;
        this.toastr = toastr;
    }
    // Call student list function on page load 
    StudentListComponent.prototype.ngOnInit = function () {
        this.getStudentList();
    };
    // Get student list from services
    StudentListComponent.prototype.getStudentList = function () {
        var studentList = this.studentService.getAllStudents();
        this.success(studentList);
    };
    // Get student list success
    StudentListComponent.prototype.success = function (data) {
        this.studentListData = data.data;
        for (var i = 0; i < this.studentListData.length; i++) {
            this.studentListData[i].name = this.studentListData[i].first_name + ' ' + this.studentListData[i].last_name;
        }
    };
    // Delete a student with its index
    StudentListComponent.prototype.deleteStudent = function (index) {
        // get confirm box for confirmation
        var r = confirm("Are you sure?");
        if (r == true) {
            var studentDelete = this.studentService.deleteStudent(index);
            if (studentDelete) {
                this.toastr.success("Success", "Student Deleted");
            }
            this.getStudentList();
        }
    };
    StudentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-student-list',
            template: __webpack_require__("../../../../../src/app/components/student/list/student-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/student/list/student-list.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__services_config_config_service__["b" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_student_student_service__["a" /* StudentService */], __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */]])
    ], StudentListComponent);
    return StudentListComponent;
}());

/**
 * Created By : Author XYZ (http://angular/5)
 */


/***/ }),

/***/ "../../../../../src/app/directives/highlight-student.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightStudentDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/**
 * Created By : Author XYZ (http://angular/5)
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightStudentDirective = (function () {
    function HighlightStudentDirective(el) {
        this.el = el;
    }
    HighlightStudentDirective.prototype.onMouseEnter = function () {
        this.highlight('gray');
    };
    HighlightStudentDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    HighlightStudentDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightStudentDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightStudentDirective.prototype, "onMouseLeave", null);
    HighlightStudentDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appHighlightStudent]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], HighlightStudentDirective);
    return HighlightStudentDirective;
}());

/**
 * Created By : Author XYZ (http://angular/5)
 */ 


/***/ }),

/***/ "../../../../../src/app/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        if (args != undefined && args != null && args != '') {
            return value.filter(function (data) { return (data.name.toLowerCase()).indexOf(args.toLowerCase()) > -1; });
        }
        return value;
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/phone.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/**
 * Created By : Author XYZ (http://angular/5)
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhonePipe = (function () {
    function PhonePipe() {
    }
    PhonePipe.prototype.transform = function (value, args) {
        return '+91-' + value;
    };
    PhonePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'phone'
        })
    ], PhonePipe);
    return PhonePipe;
}());

/**
 * Created By : Author XYZ (http://angular/5)
 */ 


/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/**
 * Created By : Author XYZ (http://angular/5)
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.canActivate = function (route, state) {
        var url = state.url;
        if (localStorage.getItem('userData')) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());

/**
 * Created By : Author XYZ (http://angular/5)
 */ 


/***/ }),

/***/ "../../../../../src/app/services/config/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConfigService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/* harmony export (immutable) */ __webpack_exports__["b"] = routerTransition;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/**
 * Created By : Author XYZ (http://angular/5)
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = (function () {
    function ConfigService() {
        this.apiURL = "http://localhost/saNG4-Demo-App/api/";
    }
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());

var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    ValidationService.checkLimit = function (min, max) {
        return function (c) {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    };
    return ValidationService;
}());

function routerTransition() {
    return slideToLeft();
}
function slideToLeft() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ transform: 'translateX(100%)', position: 'fixed', width: '100%' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ transform: 'translateX(0%)', position: 'fixed', width: '100%' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
/**
 * Created By : Author XYZ (http://angular/5)
 */


/***/ }),

/***/ "../../../../../src/app/services/student/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/**
 * Created By : Author XYZ (http://angular/5)
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentService = (function () {
    function StudentService() {
    }
    // Get all students list via API or any data storage
    StudentService.prototype.getAllStudents = function () {
        var studentList;
        if (localStorage.getItem('students') && localStorage.getItem('students') != '') {
            studentList = {
                code: 200,
                message: "Students List Fetched Successfully",
                data: JSON.parse(localStorage.getItem('students'))
            };
        }
        else {
            studentList = {
                code: 200,
                message: "Students List Fetched Successfully",
                data: JSON.parse(localStorage.getItem('students'))
            };
        }
        return studentList;
    };
    StudentService.prototype.doRegisterStudent = function (data, index) {
        var studentList = JSON.parse(localStorage.getItem('students'));
        var returnData;
        console.log("index", index);
        if (index != null) {
            for (var i = 0; i < studentList.length; i++) {
                if (index != i && studentList[i].email == data.email) {
                    returnData = {
                        code: 503,
                        message: "Email Address Already In Use",
                        data: null
                    };
                    return returnData;
                }
            }
            studentList[index] = data;
            localStorage.setItem('students', JSON.stringify(studentList));
            returnData = {
                code: 200,
                message: "Student Successfully Updated",
                data: JSON.parse(localStorage.getItem('students'))
            };
        }
        else {
            data.id = this.generateRandomID();
            for (var i = 0; i < studentList.length; i++) {
                if (studentList[i].email == data.email) {
                    returnData = {
                        code: 503,
                        message: "Email Address Already In Use",
                        data: null
                    };
                    return returnData;
                }
            }
            studentList.unshift(data);
            localStorage.setItem('students', JSON.stringify(studentList));
            returnData = {
                code: 200,
                message: "Student Successfully Added",
                data: JSON.parse(localStorage.getItem('students'))
            };
        }
        return returnData;
    };
    StudentService.prototype.deleteStudent = function (index) {
        var studentList = JSON.parse(localStorage.getItem('students'));
        studentList.splice(index, 1);
        localStorage.setItem('students', JSON.stringify(studentList));
        var returnData = {
            code: 200,
            message: "Student Successfully Deleted",
            data: JSON.parse(localStorage.getItem('students'))
        };
        return returnData;
    };
    StudentService.prototype.getStudentDetails = function (index) {
        var studentList = JSON.parse(localStorage.getItem('students'));
        var returnData = {
            code: 200,
            message: "Student Details Fetched",
            studentData: studentList[index]
        };
        return returnData;
    };
    StudentService.prototype.generateRandomID = function () {
        var x = Math.floor((Math.random() * Math.random() * 9999));
        return x;
    };
    StudentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StudentService);
    return StudentService;
}());

/**
 * Created By : Author XYZ (http://angular/5)
 */


/***/ }),

/***/ "../../../../../src/app/services/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/**
 * Created By : Author XYZ (http://angular/5)
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { HttpClient } from '@angular/common/http';
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.doLogin = function (data) {
        if (data.email == "admin@yopmail.com" && data.password == "admin123") {
            return {
                code: 200,
                message: "Login Successful",
                data: data
            };
        }
        else {
            return {
                code: 503,
                message: "Invalid Credentials",
                data: null
            };
        }
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());

/**
 * Created By : Author XYZ (http://angular/5)
 */ 


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/**
 * Created By : Author XYZ (http://angular/5)
 */




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
/**
 * Created By : Author XYZ (http://angular/5)
 */


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map