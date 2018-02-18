webpackJsonp(["verification.module"],{

/***/ "../../../../../src/app/pages/verification/verification-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_component__ = __webpack_require__("../../../../../src/app/pages/verification/verification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verify_face_verify_face_component__ = __webpack_require__("../../../../../src/app/pages/verification/verify-face/verify-face.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__verification_component__["a" /* VerificationComponent */],
        children: [{
                path: 'verify-face',
                component: __WEBPACK_IMPORTED_MODULE_3__verify_face_verify_face_component__["a" /* VerifyFaceComponent */],
            },
        ],
    }];
var VerificationRoutingModule = /** @class */ (function () {
    function VerificationRoutingModule() {
    }
    VerificationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], VerificationRoutingModule);
    return VerificationRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__verification_component__["a" /* VerificationComponent */],
    __WEBPACK_IMPORTED_MODULE_3__verify_face_verify_face_component__["a" /* VerifyFaceComponent */],
];


/***/ }),

/***/ "../../../../../src/app/pages/verification/verification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VerificationComponent = /** @class */ (function () {
    function VerificationComponent() {
    }
    VerificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-verification',
            template: "<router-outlet></router-outlet>",
        })
    ], VerificationComponent);
    return VerificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/verification/verification.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationModule", function() { return VerificationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verification_routing_module__ = __webpack_require__("../../../../../src/app/pages/verification/verification-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usual_usual_module__ = __webpack_require__("../../../../../src/app/@usual/usual.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ack_angular_webcam__ = __webpack_require__("../../../../ack-angular-webcam/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ack_angular_webcam___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ack_angular_webcam__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var VerificationModule = /** @class */ (function () {
    function VerificationModule() {
    }
    VerificationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_3__verification_routing_module__["a" /* VerificationRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__usual_usual_module__["a" /* UsualModule */],
                __WEBPACK_IMPORTED_MODULE_6_ack_angular_webcam__["WebCamModule"],
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_3__verification_routing_module__["b" /* routedComponents */].slice(),
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__["a" /* SmartTableService */],
            ],
            entryComponents: [],
        })
    ], VerificationModule);
    return VerificationModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/verification/verify-face/verify-face.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n    <nb-card-header>\r\n        Verify Person\r\n        <div class=\"ddl float-right\">\r\n            <select class=\"form-control form-control-success\" [(ngModel)]=\"selectedGroup\" (change)=\"onGroupChange()\">\r\n                <option *ngFor=\"let c of groupList\" [ngValue]=\"c\">{{c.name}}</option>\r\n            </select>\r\n        </div>\r\n    </nb-card-header>\r\n\r\n    <nb-card-body>\r\n        <form novalidate>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-sm-6\">\r\n                    <ack-webcam [(ref)]=\"webcam\" [options]=\"webcamOption\"></ack-webcam>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <button class=\"btn btn-md btn-hero-secondary col-sm-3 col-form-label\" (click)=\"verify()\">Verify</button>\r\n                    <h1>{{identifiedPerson}}</h1>\r\n                    <span style=\"color:red\">{{errorMessage}}</span>\r\n                    <br/>\r\n                    <button class=\"btn btn-success\" *ngIf=\"isIdentified\">Authenticated</button>\r\n                    <button class=\"btn btn-danger\" *ngIf=\"!isIdentified\">Not Authenticated</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-sm-9\">\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n    </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "../../../../../src/app/pages/verification/verify-face/verify-face.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .ddl select {\n  margin-top: -10px; }\n:host-context(.nb-theme-default) nb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n:host-context(.nb-theme-cosmic) .ddl select {\n  margin-top: -10px; }\n:host-context(.nb-theme-cosmic) nb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/verification/verify-face/verify-face.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyFaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_group_service__ = __webpack_require__("../../../../../src/app/@core/data/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_person_service__ = __webpack_require__("../../../../../src/app/@core/data/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_face_service__ = __webpack_require__("../../../../../src/app/@core/data/face.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerifyFaceComponent = /** @class */ (function () {
    function VerifyFaceComponent(groupSvc, service, personSvc) {
        this.groupSvc = groupSvc;
        this.service = service;
        this.personSvc = personSvc;
        this.isIdentified = false;
        this.webcamOption = {
            audio: false,
            video: true,
            width: 500,
            height: 370,
            fallbackMode: 'callback',
            fallbackSrc: 'jscam_canvas_only.swf',
            fallbackQuality: 85,
        };
    }
    VerifyFaceComponent.prototype.ngOnInit = function () {
        this.getPersonList();
    };
    VerifyFaceComponent.prototype.b64toBlob = function (b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    VerifyFaceComponent.prototype.genBase64 = function () {
        var _this = this;
        this.webcam.getBase64()
            .then(function (base) {
            _this.base64 = base;
        })
            .catch(function (e) { return console.error(e); });
    };
    VerifyFaceComponent.prototype.getPersonList = function () {
        var _this = this;
        if (this.selectedGroup) {
            // this.service.getPersonList(this.selectedGroup.personGroupId).subscribe(person => {
            //     person.forEach(x => { x.personGroupId = this.selectedGroup.personGroupId });
            //     this.source.load(person);
            // });
        }
        else {
            this.groupSvc.getGroup().subscribe(function (data) {
                _this.groupList = data;
                _this.selectedGroup = data[0];
                // this.service.getPersonList(data[0].personGroupId).subscribe(person => {
                //     person.forEach(x => { x.personGroupId = this.selectedGroup.personGroupId });
                //     this.source.load(person);
                // });
            });
        }
    };
    VerifyFaceComponent.prototype.verify = function () {
        var _this = this;
        this.identifiedPerson = '';
        this.errorMessage = '';
        this.isIdentified = false;
        this.webcam.getBase64()
            .then(function (base) {
            _this.base64 = base;
            var block = _this.base64.split(';');
            var contentType = block[0].split(':')[1];
            var realData = block[1].split(',')[1];
            var blob = _this.b64toBlob(realData, contentType);
            _this.service.detect(blob).subscribe(function (detectResp) {
                var faceIds = [];
                detectResp.forEach(function (x) {
                    faceIds.push(x.faceId);
                });
                if (faceIds.length > 0) {
                    _this.service.identify(_this.selectedGroup.personGroupId, faceIds).subscribe(function (identifyResp) {
                        _this.personSvc.getPersonList(_this.selectedGroup.personGroupId).subscribe(function (personlistResp) {
                            setTimeout(function () { return _this.isIdentified = false; }, 0);
                            personlistResp.forEach(function (x) {
                                if (x.personId === identifyResp[0].candidates[0].personId) {
                                    setTimeout(function () {
                                        _this.isIdentified = true;
                                        _this.identifiedPerson = x.name;
                                    }, 0);
                                }
                            });
                        });
                        // this.service.verify(this.selectedGroup.personGroupId, identifyResp[0].candidates[0].personId, identifyResp[0].faceId).subscribe(verifyResp => {
                        //     console.log(verifyResp);
                        // });
                    }, function (error) {
                        _this.errorMessage = 'error.error.error.message';
                    });
                }
                else {
                    _this.errorMessage = 'No Face Found';
                }
            });
        })
            .catch(function (e) { return console.error(e); });
    };
    VerifyFaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-verify-face-list',
            template: __webpack_require__("../../../../../src/app/pages/verification/verify-face/verify-face.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/verification/verify-face/verify-face.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_data_group_service__["a" /* GroupService */],
            __WEBPACK_IMPORTED_MODULE_3__core_data_face_service__["a" /* FaceService */],
            __WEBPACK_IMPORTED_MODULE_2__core_data_person_service__["a" /* PersonService */]])
    ], VerifyFaceComponent);
    return VerifyFaceComponent;
}());



/***/ })

});
//# sourceMappingURL=verification.module.chunk.js.map