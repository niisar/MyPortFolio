webpackJsonp(["quiz.module"],{

/***/ "../../../../../src/app/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option__ = __webpack_require__("../../../../../src/app/models/option.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__("../../../../../src/app/models/question.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz__ = __webpack_require__("../../../../../src/app/models/quiz.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__quiz__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_config__ = __webpack_require__("../../../../../src/app/models/quiz-config.ts");
/* unused harmony namespace reexport */






/***/ }),

/***/ "../../../../../src/app/models/option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Option; });
var Option = /** @class */ (function () {
    function Option(data) {
        data = data || {};
        this.id = data.id;
        this.questionId = data.questionId;
        this.name = data.name;
        this.isAnswer = data.isAnswer;
    }
    return Option;
}());



/***/ }),

/***/ "../../../../../src/app/models/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option__ = __webpack_require__("../../../../../src/app/models/option.ts");

var Question = /** @class */ (function () {
    function Question(data) {
        var _this = this;
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(function (o) {
            _this.options.push(new __WEBPACK_IMPORTED_MODULE_0__option__["a" /* Option */](o));
        });
    }
    return Question;
}());



/***/ }),

/***/ "../../../../../src/app/models/quiz-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizConfig; });
var QuizConfig = /** @class */ (function () {
    function QuizConfig(data) {
        data = data || {};
        this.allowBack = data.allowBack;
        this.allowReview = data.allowReview;
        this.autoMove = data.autoMove;
        this.duration = data.duration;
        this.pageSize = data.pageSize;
        this.requiredAll = data.requiredAll;
        this.richText = data.richText;
        this.shuffleQuestions = data.shuffleQuestions;
        this.shuffleOptions = data.shuffleOptions;
        this.showClock = data.showClock;
        this.showPager = data.showPager;
    }
    return QuizConfig;
}());



/***/ }),

/***/ "../../../../../src/app/models/quiz.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quiz; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quiz_config__ = __webpack_require__("../../../../../src/app/models/quiz-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__("../../../../../src/app/models/question.ts");


var Quiz = /** @class */ (function () {
    function Quiz(data) {
        var _this = this;
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.config = new __WEBPACK_IMPORTED_MODULE_0__quiz_config__["a" /* QuizConfig */](data.config);
            this.questions = [];
            data.questions.forEach(function (q) {
                _this.questions.push(new __WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */](q));
            });
        }
    }
    return Quiz;
}());



/***/ }),

/***/ "../../../../../src/app/pages/quiz/quiz-app/quiz-app.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n    <nb-card-header>\r\n        Quiz App\r\n        <div class=\"ddl float-right\">\r\n            <select class=\"form-control form-control-success\" [(ngModel)]=\"quizName\" (change)=\"loadQuiz(quizName)\">\r\n                <option *ngFor=\"let quiz of quizes\" [value]=\"quiz.id\">{{quiz.name}}</option>\r\n            </select>\r\n        </div>\r\n    </nb-card-header>\r\n\r\n    <nb-card-body>\r\n        <div id=\"quiz\">\r\n            <h2 class=\"text-center font-weight-normal\">{{quiz.name}}</h2>\r\n            <hr />\r\n            <div *ngIf=\"mode=='quiz' && quiz\">\r\n                <div *ngFor=\"let question of filteredQuestions\">\r\n                    <div class=\"badge badge-info\" style=\"margin-bottom:7px\">Question {{pager.index + 1}} of {{pager.count}}.</div>\r\n                    <div *ngIf=\"AnswerStatus\" class=\"badge {{ AnswerStatus == 'correct'? 'badge-success': 'badge-danger'}}\">Your answer is {{AnswerStatus}}.</div>\r\n                    <h5 class=\"font-weight-normal\">{{pager.index + 1}}.\r\n                        <span [innerHTML]=\"question.name\"></span>\r\n                    </h5>\r\n                    <div class=\"row text-left options\">\r\n                        <div class=\"col-6\" *ngFor=\"let option of question.options\">\r\n                            <label class=\"custom-control custom-checkbox\">\r\n                                <input id=\"{{option.id}}\" class=\"custom-control-input\" type=\"checkbox\" [(ngModel)]=\"option.selected\" (change)=\"onSelect(question, option);\"\r\n                                />\r\n                                <span class=\"custom-control-indicator\"></span>\r\n                                <span class=\"custom-control-description\">{{option.name}}</span>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <hr />\r\n                <div class=\"text-center\">\r\n                    <button class=\"btn btn-secondary\" *ngIf=\"config.allowBack\" (click)=\"goTo(0);\">First</button>\r\n                    <button class=\"btn btn-secondary\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.index - 1);\">Prev</button>\r\n                    <button class=\"btn btn-secondary\" (click)=\"goTo(pager.index + 1);\">Next</button>\r\n                    <button class=\"btn btn-secondary\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.count - 1);\">Last</button>\r\n                    <!--<pagination *ngIf=\"config.showPager\" direction-links=\"false\" total-items=\"totalItems\" items-per-page=\"itemsPerPage\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>-->\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row text-center\" *ngIf=\"mode=='review'\">\r\n                <div class=\"col-4 cursor-pointer\" *ngFor=\"let question of quiz.questions; let index = index;\">\r\n                    <div (click)=\"goTo(index)\" class=\"p-3 mb-2 {{ isAnswered(question) == 'Answered'? 'bg-info': 'bg-warning' }}\">{{index + 1}}. {{ isAnswered(question) }}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"result\" *ngIf=\"mode=='result'\">\r\n                <h2>Quiz Result</h2>\r\n                <div *ngFor=\"let question of quiz.questions; let index = index\">\r\n                    <div class=\"result-question\">\r\n                        <h4>{{index + 1}}. {{question.name}}</h4>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6\" *ngFor=\"let Option of question.options\">\r\n                                <input id=\"{{Option.id}}\" type=\"checkbox\" disabled=\"disabled\" [(ngModel)]=\"Option.selected\" /> {{Option.name}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"alert {{ isCorrect(question) == 'correct'? 'alert-success': 'alert-danger'}}\">Your answer is {{isCorrect(question)}}.</div>\r\n                    </div>\r\n                </div>\r\n                <h4 class=\"alert alert-info text-center\">You may close this window now.</h4>\r\n            </div>\r\n            <hr />\r\n            <div *ngIf=\"mode!='result'\">\r\n                <button class=\"btn btn-secondary\" (click)=\"mode = 'quiz'\">Quiz</button>\r\n                <button class=\"btn btn-secondary\" (click)=\"mode = 'review'\">Review</button>\r\n                <button class=\"btn btn-secondary\" (click)=\"onSubmit();\">Submit Quiz</button>\r\n            </div>\r\n        </div>\r\n    </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "../../../../../src/app/pages/quiz/quiz-app/quiz-app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .ddl select {\n  margin-top: -10px; }\n:host-context(.nb-theme-default) nb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n:host-context(.nb-theme-cosmic) .ddl select {\n  margin-top: -10px; }\n:host-context(.nb-theme-cosmic) nb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/quiz/quiz-app/quiz-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_quiz_service__ = __webpack_require__("../../../../../src/app/@core/data/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pipes__ = __webpack_require__("../../../../ngx-pipes/ngx-pipes.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizAppComponent = /** @class */ (function () {
    function QuizAppComponent(quizService, shufflePipe) {
        this.quizService = quizService;
        this.shufflePipe = shufflePipe;
        this.AnswerStatus = '';
        this.quiz = new __WEBPACK_IMPORTED_MODULE_2__models__["a" /* Quiz */](null);
        this.mode = 'quiz';
        this.config = {
            'allowBack': true,
            'allowReview': true,
            autoMove: true,
            'duration': 9000,
            'pageSize': 1,
            'requiredAll': false,
            'richText': false,
            'shuffleQuestions': true,
            'shuffleOptions': true,
            'showClock': true,
            'showPager': true,
            'theme': 'none'
        };
        this.pager = {
            index: 0,
            size: 1,
            count: 1
        };
    }
    QuizAppComponent.prototype.ngOnInit = function () {
        this.quizes = this.quizService.getAll();
        this.quizName = this.quizes[0].id;
        this.loadQuiz(this.quizName);
    };
    QuizAppComponent.prototype.loadQuiz = function (quizName) {
        var _this = this;
        this.quizService.get(quizName).subscribe(function (res) {
            _this.quiz = new __WEBPACK_IMPORTED_MODULE_2__models__["a" /* Quiz */](res);
            if (_this.quiz.config.shuffleQuestions) {
                _this.quiz.questions = _this.shufflePipe.transform(_this.quiz.questions);
            }
            if (_this.quiz.config.shuffleQuestions) {
                _this.quiz.questions.forEach(function (quest) {
                    quest.options = _this.shufflePipe.transform(quest.options);
                });
            }
            _this.pager.count = _this.quiz.questions.length;
        });
        this.mode = 'quiz';
    };
    Object.defineProperty(QuizAppComponent.prototype, "filteredQuestions", {
        get: function () {
            return (this.quiz.questions) ?
                this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
        },
        enumerable: true,
        configurable: true
    });
    QuizAppComponent.prototype.onSelect = function (question, option) {
        if (question.questionTypeId === 1) {
            question.options.forEach(function (x) { if (x.id !== option.id)
                x.selected = false; });
        }
        this.AnswerStatus = this.isCorrect(question);
        var that = this;
        if (this.AnswerStatus === 'correct' && this.config.autoMove) {
            setTimeout(function () {
                that.goTo(that.pager.index + 1);
                that.AnswerStatus = '';
            }, 1000);
        }
    };
    QuizAppComponent.prototype.goTo = function (index) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            this.mode = 'quiz';
        }
    };
    QuizAppComponent.prototype.isAnswered = function (question) {
        return question.options.find(function (x) { return x.selected; }) ? 'Answered' : 'Not Answered';
    };
    ;
    QuizAppComponent.prototype.isCorrect = function (question) {
        return question.options.every(function (x) { return x.selected === x.isAnswer; }) ? 'correct' : 'wrong';
    };
    ;
    QuizAppComponent.prototype.onSubmit = function () {
        var _this = this;
        var answers = [];
        this.quiz.questions.forEach(function (x) { return answers.push({ 'quizId': _this.quiz.id, 'questionId': x.id, 'answered': x.answered }); });
        // Post your data to the server here. answers contains the questionId and the users' answer.
        console.log(this.quiz.questions);
        this.mode = 'result';
    };
    QuizAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-quiz-app',
            styles: [__webpack_require__("../../../../../src/app/pages/quiz/quiz-app/quiz-app.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/quiz/quiz-app/quiz-app.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3_ngx_pipes__["b" /* ShufflePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_data_quiz_service__["a" /* QuizService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_pipes__["b" /* ShufflePipe */]])
    ], QuizAppComponent);
    return QuizAppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/quiz/quiz-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_component__ = __webpack_require__("../../../../../src/app/pages/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_app_quiz_app_component__ = __webpack_require__("../../../../../src/app/pages/quiz/quiz-app/quiz-app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__quiz_component__["a" /* QuizComponent */],
        children: [{
                path: 'quizapp',
                component: __WEBPACK_IMPORTED_MODULE_3__quiz_app_quiz_app_component__["a" /* QuizAppComponent */],
            }],
    }];
var QuizRoutingModule = /** @class */ (function () {
    function QuizRoutingModule() {
    }
    QuizRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], QuizRoutingModule);
    return QuizRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__quiz_component__["a" /* QuizComponent */],
    __WEBPACK_IMPORTED_MODULE_3__quiz_app_quiz_app_component__["a" /* QuizAppComponent */],
];


/***/ }),

/***/ "../../../../../src/app/pages/quiz/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var QuizComponent = /** @class */ (function () {
    function QuizComponent() {
    }
    QuizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-quiz',
            template: "<router-outlet></router-outlet>",
        })
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/quiz/quiz.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizModule", function() { return QuizModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_routing_module__ = __webpack_require__("../../../../../src/app/pages/quiz/quiz-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuizModule = /** @class */ (function () {
    function QuizModule() {
    }
    QuizModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__quiz_routing_module__["a" /* QuizRoutingModule */],
            ],
            exports: [],
            declarations: __WEBPACK_IMPORTED_MODULE_2__quiz_routing_module__["b" /* routedComponents */].slice(),
        })
    ], QuizModule);
    return QuizModule;
}());



/***/ })

});
//# sourceMappingURL=quiz.module.chunk.js.map