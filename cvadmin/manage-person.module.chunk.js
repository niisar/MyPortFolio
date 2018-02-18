webpackJsonp(["manage-person.module"],{

/***/ "../../../../../src/app/pages/manage-person/group/group-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n    <nb-card-header>\r\n      Person Group\r\n    </nb-card-header>\r\n  \r\n    <nb-card-body>\r\n      <ng2-smart-table [settings]=\"settings\"  [source]=\"source\" \r\n      (create)=\"onCreate($event)\"\r\n      (edit)=\"onEdit($event)\"\r\n      (delete)=\"onDelete($event)\">\r\n      </ng2-smart-table>\r\n    </nb-card-body>\r\n  </nb-card>\r\n  "

/***/ }),

/***/ "../../../../../src/app/pages/manage-person/group/group-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_edit_group_modal_component__ = __webpack_require__("../../../../../src/app/pages/manage-person/group/modal/edit-group-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_group_service__ = __webpack_require__("../../../../../src/app/@core/data/group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupListComponent = /** @class */ (function () {
    function GroupListComponent(service, modalService) {
        this.service = service;
        this.modalService = modalService;
        this.settings = {
            mode: 'external',
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
            },
            columns: {
                personGroupId: {
                    title: 'Group ID',
                    type: 'string',
                },
                name: {
                    title: 'Group Name',
                    type: 'string',
                },
                userData: {
                    title: 'Comments',
                    type: 'string',
                },
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.getGroupList();
    }
    GroupListComponent.prototype.getGroupList = function () {
        var _this = this;
        this.service.getGroup().subscribe(function (data) {
            _this.source.load(data);
        });
    };
    GroupListComponent.prototype.onEdit = function (event) {
        var _this = this;
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__modal_edit_group_modal_component__["a" /* EditGroupModalComponent */], { size: 'lg', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = 'Edit Person Group';
        activeModal.componentInstance.selectedRow = event.data;
        activeModal.result.then(function (data) {
            if (data === 'Updated') {
                _this.getGroupList();
            }
        }, function (reason) {
        });
    };
    GroupListComponent.prototype.onDelete = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            var rowData = event.data;
            this.service.deleteGroup(rowData).subscribe(function (data) {
                _this.getGroupList();
            });
        }
    };
    GroupListComponent.prototype.onCreate = function (event) {
        var _this = this;
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__modal_edit_group_modal_component__["a" /* EditGroupModalComponent */], { size: 'lg', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = 'Add New Person Group';
        activeModal.result.then(function (data) {
            if (data === 'Saved') {
                _this.getGroupList();
            }
        }, function (reason) {
        });
    };
    GroupListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-person-group-list',
            template: __webpack_require__("../../../../../src/app/pages/manage-person/group/group-list.component.html"),
            styles: ["\n    nb-card {\n      transform: translate3d(0, 0, 0);\n    }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__core_data_group_service__["a" /* GroupService */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], GroupListComponent);
    return GroupListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/manage-person/group/modal/edit-group-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <span>{{ modalHeader }}</span>\r\n    <button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <form [formGroup]=\"groupForm\" novalidate>\r\n        <div class=\"form-group row\">\r\n            <label for=\"personGroupId\" class=\"col-sm-3 col-form-label\">Group ID</label>\r\n            <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"personGroupId\" id=\"personGroupId\">\r\n                <ngx-show-errors [control]=\"groupForm.controls.personGroupId\"></ngx-show-errors>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"name\" class=\"col-sm-3 col-form-label\">Group Name</label>\r\n            <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"name\">\r\n                <ngx-show-errors [control]=\"groupForm.controls.name\"></ngx-show-errors>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"userData\" class=\"col-sm-3 col-form-label\">Comments</label>\r\n            <div class=\"col-sm-9\">\r\n                <textarea class=\"form-control\" id=\"userData\" formControlName=\"userData\"></textarea>\r\n                <ngx-show-errors [control]=\"groupForm.controls.userData\"></ngx-show-errors>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button class=\"btn btn-md btn-primary\" [disabled]=\"!groupForm.valid\" (click)=\"save(groupForm)\">Save changes</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/manage-person/group/modal/edit-group-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGroupModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_group_service__ = __webpack_require__("../../../../../src/app/@core/data/group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditGroupModalComponent = /** @class */ (function () {
    function EditGroupModalComponent(activeModal, fb, service) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.service = service;
        this.selectedRow = {
            name: '',
            personGroupId: '',
            userData: '',
        };
        this.groupForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            personGroupId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            userData: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
        });
    }
    EditGroupModalComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    EditGroupModalComponent.prototype.createForm = function () {
        this.groupForm = this.fb.group({
            personGroupId: [{
                    value: this.selectedRow.personGroupId,
                    disabled: this.modalHeader.includes('Edit', 0),
                }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            name: [this.selectedRow.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            userData: [this.selectedRow.userData, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
        });
    };
    EditGroupModalComponent.prototype.closeModal = function (message) {
        this.activeModal.close(message);
    };
    EditGroupModalComponent.prototype.save = function (form) {
        var _this = this;
        var postBody = form.value;
        if (this.modalHeader.includes('Edit', 0)) {
            this.service.updateData(postBody).subscribe(function (data) {
                _this.closeModal('Updated');
            });
        }
        else {
            this.service.saveGroup(postBody).subscribe(function (data) {
                _this.closeModal('Saved');
            });
        }
    };
    EditGroupModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-edit-group-modal',
            template: __webpack_require__("../../../../../src/app/pages/manage-person/group/modal/edit-group-modal.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__core_data_group_service__["a" /* GroupService */]])
    ], EditGroupModalComponent);
    return EditGroupModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/manage-person/manage-person-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagePersonRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_person_component__ = __webpack_require__("../../../../../src/app/pages/manage-person/manage-person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_group_list_component__ = __webpack_require__("../../../../../src/app/pages/manage-person/group/group-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__person_person_list_component__ = __webpack_require__("../../../../../src/app/pages/manage-person/person/person-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__manage_person_component__["a" /* ManagePersonComponent */],
        children: [{
                path: 'group-list',
                component: __WEBPACK_IMPORTED_MODULE_3__group_group_list_component__["a" /* GroupListComponent */],
            },
            {
                path: 'person-list',
                component: __WEBPACK_IMPORTED_MODULE_4__person_person_list_component__["a" /* PersonListComponent */],
            },
        ],
    }];
var ManagePersonRoutingModule = /** @class */ (function () {
    function ManagePersonRoutingModule() {
    }
    ManagePersonRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], ManagePersonRoutingModule);
    return ManagePersonRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__manage_person_component__["a" /* ManagePersonComponent */],
    __WEBPACK_IMPORTED_MODULE_3__group_group_list_component__["a" /* GroupListComponent */],
    __WEBPACK_IMPORTED_MODULE_4__person_person_list_component__["a" /* PersonListComponent */],
];


/***/ }),

/***/ "../../../../../src/app/pages/manage-person/manage-person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagePersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ManagePersonComponent = /** @class */ (function () {
    function ManagePersonComponent() {
    }
    ManagePersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-manage-person',
            template: "<router-outlet></router-outlet>",
        })
    ], ManagePersonComponent);
    return ManagePersonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/manage-person/manage-person.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePersonModule", function() { return ManagePersonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_person_routing_module__ = __webpack_require__("../../../../../src/app/pages/manage-person/manage-person-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ack_angular_webcam__ = __webpack_require__("../../../../ack-angular-webcam/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ack_angular_webcam___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ack_angular_webcam__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__group_modal_edit_group_modal_component__ = __webpack_require__("../../../../../src/app/pages/manage-person/group/modal/edit-group-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__person_modal_edit_person_modal_component__ = __webpack_require__("../../../../../src/app/pages/manage-person/person/modal/edit-person-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__person_modal_edit_face_modal_component__ = __webpack_require__("../../../../../src/app/pages/manage-person/person/modal/edit-face-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__person_modal_view_face_modal_component__ = __webpack_require__("../../../../../src/app/pages/manage-person/person/modal/view-face-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__person_face_render_component__ = __webpack_require__("../../../../../src/app/pages/manage-person/person/face-render.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__usual_usual_module__ = __webpack_require__("../../../../../src/app/@usual/usual.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ManagePersonModule = /** @class */ (function () {
    function ManagePersonModule() {
    }
    ManagePersonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_3__manage_person_routing_module__["a" /* ManagePersonRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_4_ack_angular_webcam__["WebCamModule"],
                __WEBPACK_IMPORTED_MODULE_11__usual_usual_module__["a" /* UsualModule */],
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_3__manage_person_routing_module__["b" /* routedComponents */].concat([
                __WEBPACK_IMPORTED_MODULE_6__group_modal_edit_group_modal_component__["a" /* EditGroupModalComponent */],
                __WEBPACK_IMPORTED_MODULE_7__person_modal_edit_person_modal_component__["a" /* EditPersonModalComponent */],
                __WEBPACK_IMPORTED_MODULE_8__person_modal_edit_face_modal_component__["a" /* EditFaceModalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__person_modal_view_face_modal_component__["a" /* ViewFaceModalComponent */],
                __WEBPACK_IMPORTED_MODULE_10__person_face_render_component__["a" /* FaceRenderComponent */],
            ]),
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__core_data_smart_table_service__["a" /* SmartTableService */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__group_modal_edit_group_modal_component__["a" /* EditGroupModalComponent */],
                __WEBPACK_IMPORTED_MODULE_7__person_modal_edit_person_modal_component__["a" /* EditPersonModalComponent */],
                __WEBPACK_IMPORTED_MODULE_8__person_modal_edit_face_modal_component__["a" /* EditFaceModalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__person_modal_view_face_modal_component__["a" /* ViewFaceModalComponent */],
                __WEBPACK_IMPORTED_MODULE_10__person_face_render_component__["a" /* FaceRenderComponent */],
            ],
        })
    ], ManagePersonModule);
    return ManagePersonModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/manage-person/person/face-render.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaceRenderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_edit_face_modal_component__ = __webpack_require__("../../../../../src/app/pages/manage-person/person/modal/edit-face-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_view_face_modal_component__ = __webpack_require__("../../../../../src/app/pages/manage-person/person/modal/view-face-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FaceRenderComponent = /** @class */ (function () {
    function FaceRenderComponent(modalService) {
        this.modalService = modalService;
    }
    FaceRenderComponent.prototype.ngOnInit = function () {
        this.renderValue = this.value.toString().toUpperCase();
    };
    FaceRenderComponent.prototype.addFace = function () {
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__modal_edit_face_modal_component__["a" /* EditFaceModalComponent */], { size: 'lg', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = "Add [ " + this.rowData.name + " ] Face in [ " + this.rowData.personGroupId + " ]";
        activeModal.componentInstance.selectedRow = this.rowData;
    };
    FaceRenderComponent.prototype.viewFace = function () {
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__modal_view_face_modal_component__["a" /* ViewFaceModalComponent */], { size: 'lg', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = "View [ " + this.rowData.name + " ] Face IDs in [ " + this.rowData.personGroupId + " ]";
        activeModal.componentInstance.selectedRow = this.rowData;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FaceRenderComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FaceRenderComponent.prototype, "rowData", void 0);
    FaceRenderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <button class=\"btn btn-secondary\" (click)=\"addFace()\">Tag Face</button>\n    <button class=\"btn btn-secondary\" (click)=\"viewFace()\">View Faces</button>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], FaceRenderComponent);
    return FaceRenderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/manage-person/person/modal/edit-face-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <span>{{ modalHeader }}</span>\r\n    <button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <form novalidate>\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\">Web Cam Input</label>\r\n            <div class=\"col-sm-9\">\r\n                <ack-webcam [(ref)]=\"webcam\" [options]=\"options\"></ack-webcam>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <button class=\"btn btn-md btn-primary col-sm-3 col-form-label\" (click)=\"genBase64()\">Capture</button>\r\n            <div class=\"col-sm-7\">\r\n                <img class=\"img-responsive img-thumbnail\" [src]=\"base64\" style=\"max-height: 247px;\" />\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button class=\"btn btn-md btn-primary\" (click)=\"save(personForm)\">Submit</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/manage-person/person/modal/edit-face-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFaceModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_person_service__ = __webpack_require__("../../../../../src/app/@core/data/person.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditFaceModalComponent = /** @class */ (function () {
    function EditFaceModalComponent(activeModal, service) {
        this.activeModal = activeModal;
        this.service = service;
        this.base64 = 'data:image/png;base64,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';
        this.webcamOption = {
            audio: false,
            video: true,
            width: 50,
            height: 50,
            fallbackMode: 'callback',
            fallbackSrc: 'jscam_canvas_only.swf',
            fallbackQuality: 85,
        };
        this.selectedRow = {
            name: '',
            personGroupId: '',
            userData: '',
            personId: '',
        };
    }
    EditFaceModalComponent.prototype.onCamError = function (err) { };
    EditFaceModalComponent.prototype.onCamSuccess = function () { };
    EditFaceModalComponent.prototype.genPostData = function () {
        this.webcam.captureAsFormData({ fileName: 'file.jpg' })
            .then(function (formData) { })
            .catch(function (e) { });
        // img to file
        var block = this.base64.split(';');
        var contentType = block[0].split(':')[1];
        var realData = block[1].split(',')[1];
        var blob = this.b64toBlob(realData, contentType);
        var formDataToUpload = new FormData();
        formDataToUpload.append('file', blob);
    };
    EditFaceModalComponent.prototype.genBase64 = function () {
        var _this = this;
        this.webcam.getBase64()
            .then(function (base) {
            _this.base64 = base;
        })
            .catch(function (e) { return console.error(e); });
    };
    EditFaceModalComponent.prototype.b64toBlob = function (b64Data, contentType, sliceSize) {
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
    EditFaceModalComponent.prototype.ngOnInit = function () {
    };
    EditFaceModalComponent.prototype.closeModal = function (message) {
        this.activeModal.close(message);
    };
    EditFaceModalComponent.prototype.save = function () {
        var _this = this;
        var block = this.base64.split(';');
        var contentType = block[0].split(':')[1];
        var realData = block[1].split(',')[1];
        var blob = this.b64toBlob(realData, contentType);
        // const formDataToUpload = new FormData();
        // formDataToUpload.append('file', blob);
        var postBody = {
            name: '',
            personGroupId: '',
            personId: '',
            userData: '',
        };
        postBody.personGroupId = this.selectedRow.personGroupId;
        postBody.personId = this.selectedRow.personId;
        if (this.modalHeader.includes('Edit', 0)) {
            // TODO:
            // this.service.updatePerson(postBody).subscribe(data => {
            //     this.closeModal('Updated');
            // });
        }
        else {
            this.service.createPersonFace(postBody, blob).subscribe(function (data) {
                _this.closeModal('Saved');
            });
        }
    };
    EditFaceModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-edit-face-modal',
            template: __webpack_require__("../../../../../src/app/pages/manage-person/person/modal/edit-face-modal.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__core_data_person_service__["a" /* PersonService */]])
    ], EditFaceModalComponent);
    return EditFaceModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/manage-person/person/modal/edit-person-modal.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal-header\">\r\n        <span>{{ modalHeader }}</span>\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form [formGroup]=\"personForm\" novalidate>\r\n            <div class=\"form-group row\">\r\n                <label for=\"personGroupId\" class=\"col-sm-3 col-form-label\">Group ID</label>\r\n                <div class=\"col-sm-9\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"personGroupId\" id=\"personGroupId\">\r\n                    <ngx-show-errors [control]=\"personForm.controls.personGroupId\"></ngx-show-errors>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"name\" class=\"col-sm-3 col-form-label\">Person Name</label>\r\n                <div class=\"col-sm-9\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"name\">\r\n                    <ngx-show-errors [control]=\"personForm.controls.name\"></ngx-show-errors>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"userData\" class=\"col-sm-3 col-form-label\">Comments</label>\r\n                <div class=\"col-sm-9\">\r\n                    <textarea class=\"form-control\" id=\"userData\" formControlName=\"userData\"></textarea>\r\n                    <ngx-show-errors [control]=\"personForm.controls.userData\"></ngx-show-errors>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-md btn-primary\" [disabled]=\"!personForm.valid\" (click)=\"save(personForm)\">Save changes</button>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/pages/manage-person/person/modal/edit-person-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPersonModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_person_service__ = __webpack_require__("../../../../../src/app/@core/data/person.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditPersonModalComponent = /** @class */ (function () {
    function EditPersonModalComponent(activeModal, fb, service) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.service = service;
        this.selectedRow = {
            name: '',
            personGroupId: '',
            userData: '',
            personId: '',
        };
        this.personForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            personGroupId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            userData: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
        });
    }
    EditPersonModalComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    EditPersonModalComponent.prototype.createForm = function () {
        this.personForm = this.fb.group({
            personGroupId: [{
                    value: this.selectedRow.personGroupId,
                    disabled: true,
                }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            name: [this.selectedRow.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            userData: [this.selectedRow.userData, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
        });
    };
    EditPersonModalComponent.prototype.closeModal = function (message) {
        this.activeModal.close(message);
    };
    EditPersonModalComponent.prototype.save = function (form) {
        var _this = this;
        var postBody = form.value;
        postBody.personGroupId = this.selectedRow.personGroupId;
        postBody.personId = this.selectedRow.personId;
        if (this.modalHeader.includes('Edit', 0)) {
            this.service.updatePerson(postBody).subscribe(function (data) {
                _this.closeModal('Updated');
            });
        }
        else {
            this.service.createPerson(postBody).subscribe(function (data) {
                _this.closeModal('Saved');
            });
        }
    };
    EditPersonModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-edit-person-modal',
            template: __webpack_require__("../../../../../src/app/pages/manage-person/person/modal/edit-person-modal.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__core_data_person_service__["a" /* PersonService */]])
    ], EditPersonModalComponent);
    return EditPersonModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/manage-person/person/modal/view-face-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n        <span>{{ modalHeader }}</span>\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form novalidate>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-3 col-form-label\">Face IDs</label>\r\n                <div class=\"col-sm-9\">\r\n                    <ul>\r\n                        <li *ngFor=\"let r of selectedRow?.persistedFaceIds\">{{r}}</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-md btn-primary\" (click)=\"closeModal()\">Close</button>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/pages/manage-person/person/modal/view-face-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewFaceModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewFaceModalComponent = /** @class */ (function () {
    function ViewFaceModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.selectedRow = {
            name: '',
            personGroupId: '',
            userData: '',
            personId: '',
            persistedFaceIds: [],
        };
    }
    ViewFaceModalComponent.prototype.ngOnInit = function () {
    };
    ViewFaceModalComponent.prototype.closeModal = function (message) {
        this.activeModal.close(message);
    };
    ViewFaceModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-view-face-modal',
            template: __webpack_require__("../../../../../src/app/pages/manage-person/person/modal/view-face-modal.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], ViewFaceModalComponent);
    return ViewFaceModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/manage-person/person/person-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>\r\n    Person\r\n    <div class=\"ddl float-right\">\r\n      <select class=\"form-control form-control-success\" [(ngModel)]=\"selectedGroup\" (change)=\"onGroupChange()\">\r\n        <option *ngFor=\"let c of groupList\" [ngValue]=\"c\">{{c.name}}</option>\r\n      </select>\r\n    </div>\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (create)=\"onCreate($event)\" (edit)=\"onEdit($event)\" (delete)=\"onDelete($event)\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "../../../../../src/app/pages/manage-person/person/person-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .ddl select {\n  margin-top: -10px; }\n:host-context(.nb-theme-default) nb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n:host-context(.nb-theme-cosmic) .ddl select {\n  margin-top: -10px; }\n:host-context(.nb-theme-cosmic) nb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/manage-person/person/person-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_edit_person_modal_component__ = __webpack_require__("../../../../../src/app/pages/manage-person/person/modal/edit-person-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_person_service__ = __webpack_require__("../../../../../src/app/@core/data/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_data_group_service__ = __webpack_require__("../../../../../src/app/@core/data/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__face_render_component__ = __webpack_require__("../../../../../src/app/pages/manage-person/person/face-render.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PersonListComponent = /** @class */ (function () {
    function PersonListComponent(service, modalService, groupSvc) {
        this.service = service;
        this.modalService = modalService;
        this.groupSvc = groupSvc;
        this.settings = {
            mode: 'external',
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
            },
            columns: {
                name: {
                    title: 'Person Name',
                    type: 'string',
                },
                userData: {
                    title: 'Comments',
                    type: 'string',
                },
                personId: {
                    type: 'custom',
                    renderComponent: __WEBPACK_IMPORTED_MODULE_6__face_render_component__["a" /* FaceRenderComponent */],
                    filter: false,
                    title: 'Faces Actionss',
                },
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
    }
    PersonListComponent.prototype.ngOnInit = function () {
        this.getPersonList();
    };
    PersonListComponent.prototype.getPersonList = function () {
        var _this = this;
        if (this.selectedGroup) {
            this.service.getPersonList(this.selectedGroup.personGroupId).subscribe(function (person) {
                person.forEach(function (x) { x.personGroupId = _this.selectedGroup.personGroupId; });
                _this.source.load(person);
            });
        }
        else {
            this.groupSvc.getGroup().subscribe(function (data) {
                _this.groupList = data;
                _this.selectedGroup = data[0];
                _this.service.getPersonList(data[0].personGroupId).subscribe(function (person) {
                    person.forEach(function (x) { x.personGroupId = _this.selectedGroup.personGroupId; });
                    _this.source.load(person);
                });
            });
        }
    };
    PersonListComponent.prototype.onGroupChange = function () {
        this.getPersonList();
    };
    PersonListComponent.prototype.onEdit = function (event) {
        var _this = this;
        event.data.personGroupId = this.selectedGroup.personGroupId;
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__modal_edit_person_modal_component__["a" /* EditPersonModalComponent */], { size: 'lg', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = 'Edit Person';
        activeModal.componentInstance.selectedRow = event.data;
        activeModal.result.then(function (data) {
            if (data === 'Updated') {
                _this.getPersonList();
            }
        }, function (reason) {
        });
    };
    PersonListComponent.prototype.onDelete = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            event.data.personGroupId = this.selectedGroup.personGroupId;
            var rowData = event.data;
            this.service.deletePerson(rowData).subscribe(function (data) {
                _this.getPersonList();
            });
        }
    };
    PersonListComponent.prototype.onCreate = function (event) {
        var _this = this;
        // event.data.personGroupId = this.selectedGroup.personGroupId;
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__modal_edit_person_modal_component__["a" /* EditPersonModalComponent */], { size: 'lg', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = 'Add New Person';
        activeModal.componentInstance.selectedRow = event.data;
        if (activeModal.componentInstance.selectedRow) {
            activeModal.componentInstance.selectedRow.personGroupId = this.selectedGroup.personGroupId;
        }
        else {
            activeModal.componentInstance.selectedRow = {};
            activeModal.componentInstance.selectedRow.personGroupId = this.selectedGroup.personGroupId;
        }
        activeModal.result.then(function (data) {
            if (data === 'Saved') {
                _this.getPersonList();
            }
        }, function (reason) {
        });
    };
    PersonListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-person-list',
            template: __webpack_require__("../../../../../src/app/pages/manage-person/person/person-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/manage-person/person/person-list.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__core_data_person_service__["a" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5__core_data_group_service__["a" /* GroupService */]])
    ], PersonListComponent);
    return PersonListComponent;
}());



/***/ })

});
//# sourceMappingURL=manage-person.module.chunk.js.map