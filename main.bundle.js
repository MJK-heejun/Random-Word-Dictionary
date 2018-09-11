webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#appComp{\r\n    height:100vh;\r\n    overflow: hidden;\r\n    overflow: auto;\r\n}\r\n\r\nmd-toolbar{\r\n    padding: 0;\r\n}\r\n\r\nmd-tab-group{\r\n    margin: 0;\r\n    border-top: 3px solid #000000; /*black*/\r\n    \r\n    overflow: hidden;\r\n}\r\n\r\n.mat-sidenav-container > .mat-sidenav > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels {\r\n  .mat-tab-label[role^='tab'] {\r\n    min-width: 50px;\r\n  }\r\n}\r\n\r\n    /*\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n min-width: 0!important;\r\n padding: 3px!important;\r\n margin: 3px!important;\r\n}\r\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"appComp\">\r\n    <md-sidenav-container fxLayout=\"column\" fxFlexFill>\r\n\r\n        <md-toolbar fxLayout=\"row\">\r\n            <div class=\"sidenav-content\">\r\n                <button type=\"button\" md-button (click)=\"sidenav.open()\">\r\n                    <i class=\"fa fa-bars fa-2x\" aria-hidden=\"true\"></i>\r\n                </button>\r\n            </div>\r\n            <h3>Random Dictionary</h3>            \r\n        </md-toolbar>\r\n        <div class=\"main-content\" fxFlexFill>\r\n            <md-tab-group md-stretch-tabs \r\n                          (selectedIndexChange)=\"selectedIndexChange($event)\"\r\n                          [selectedIndex]=\"selectedIndex\">\r\n                <md-tab label=\"Random\">\r\n                    <app-random [newWord]=\"newWord\"></app-random>\r\n                </md-tab>\r\n                <md-tab label=\"Saved\">\r\n                    <app-saved-list (selectedWord)=\"wordFromList($event)\"\r\n                                    [selectedIndex]=\"selectedIndex\"></app-saved-list>\r\n                </md-tab>\r\n            </md-tab-group>\r\n        </div>\r\n\r\n\r\n        <md-sidenav #sidenav>\r\n            <app-setting></app-setting>\r\n        </md-sidenav>\r\n    </md-sidenav-container>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.selectedIndex = 0;
    }
    AppComponent.prototype.selectedIndexChange = function (val) {
        this.selectedIndex = val;
    };
    AppComponent.prototype.wordFromList = function (ev) {
        this.selectedIndex = 0;
        this.newWord = ev;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__random_random_component__ = __webpack_require__("../../../../../src/app/random/random.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__setting_setting_component__ = __webpack_require__("../../../../../src/app/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__definition_definition_component__ = __webpack_require__("../../../../../src/app/definition/definition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__audio_audio_component__ = __webpack_require__("../../../../../src/app/audio/audio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__setting_service_service__ = __webpack_require__("../../../../../src/app/setting-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__word_service__ = __webpack_require__("../../../../../src/app/word.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__saved_list_saved_list_component__ = __webpack_require__("../../../../../src/app/saved-list/saved-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//component





//service



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__random_random_component__["a" /* RandomComponent */],
            __WEBPACK_IMPORTED_MODULE_9__setting_setting_component__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_10__definition_definition_component__["a" /* DefinitionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__audio_audio_component__["a" /* AudioComponent */],
            __WEBPACK_IMPORTED_MODULE_14__saved_list_saved_list_component__["a" /* SavedListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__setting_service_service__["a" /* SettingServiceService */], __WEBPACK_IMPORTED_MODULE_13__word_service__["a" /* WordService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/audio/audio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/audio/audio.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/audio/audio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__word_service__ = __webpack_require__("../../../../../src/app/word.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_service_service__ = __webpack_require__("../../../../../src/app/setting-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AudioComponent = (function () {
    function AudioComponent(wordService, settingService) {
        this.wordService = wordService;
        this.settingService = settingService;
    }
    AudioComponent.prototype.ngOnInit = function () {
    };
    AudioComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.word) {
            this.wordService.GetAudioUrl(this.word).subscribe(//subscribe to the observable return method              
            function (//subscribe to the observable return method              
                data) {
                _this.audioSrc = "invliadAudioSrc";
                if (data[0]) {
                    _this.audioSrc = data[0].fileUrl;
                    if (_this.settingService.IsAutoAudioLoading()) {
                        var audio = new Audio(_this.audioSrc);
                        audio.play();
                    }
                }
            }, function (error) { return alert(error); }, function () { return console.log("finished"); });
        }
    };
    return AudioComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], AudioComponent.prototype, "word", void 0);
AudioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-audio',
        template: __webpack_require__("../../../../../src/app/audio/audio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/audio/audio.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__word_service__["a" /* WordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__word_service__["a" /* WordService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__setting_service_service__["a" /* SettingServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__setting_service_service__["a" /* SettingServiceService */]) === "function" && _b || Object])
], AudioComponent);

var _a, _b;
//# sourceMappingURL=audio.component.js.map

/***/ }),

/***/ "../../../../../src/app/definition/definition.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n    text-align: center;\r\n    padding: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/definition/definition.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    <!--{{definition}}-->\r\n    <span *ngFor=\"let word of getSplitWord()\" (click)=\"onSpanClick(word)\">\r\n        {{ word }}\r\n    </span>\r\n\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/definition/definition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__word_service__ = __webpack_require__("../../../../../src/app/word.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefinitionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefinitionComponent = (function () {
    function DefinitionComponent(wordService) {
        this.wordService = wordService;
        this.newWord = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    DefinitionComponent.prototype.ngOnInit = function () {
    };
    DefinitionComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.word) {
            this.wordService.GetDefinition(this.word).subscribe(//subscribe to the observable return method
            function (//subscribe to the observable return method
                data) {
                _this.definition = data[0] ? data[0].text : "definition not found.";
                if (_this.definition.substring(0, 15) == "Plural form of ") {
                    var newSearchWord = _this.definition.substring(15, _this.definition.length - 1);
                    _this.wordService.GetDefinition(newSearchWord).subscribe(function (data) {
                        var additionalDef = data[0] ? data[0].text : "definition not found";
                        _this.definition = _this.definition + " (" + additionalDef + ")";
                    });
                }
            }, function (error) { return alert(error); });
        }
    };
    DefinitionComponent.prototype.getSplitWord = function () {
        return this.definition ? this.definition.slice(0, -1).split(" ") : [];
    };
    DefinitionComponent.prototype.onSpanClick = function (newWord) {
        this.newWord.emit(newWord);
    };
    return DefinitionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], DefinitionComponent.prototype, "word", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], DefinitionComponent.prototype, "newWord", void 0);
DefinitionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-definition',
        template: __webpack_require__("../../../../../src/app/definition/definition.component.html"),
        styles: [__webpack_require__("../../../../../src/app/definition/definition.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__word_service__["a" /* WordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__word_service__["a" /* WordService */]) === "function" && _a || Object])
], DefinitionComponent);

var _a;
//# sourceMappingURL=definition.component.js.map

/***/ }),

/***/ "../../../../../src/app/random/random.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#randomComponent{\r\n    overflow: hidden;\r\n    height: 70vh;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n}\r\n\r\nbutton{\r\n    margin: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/random/random.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"randomComponent\" fxLayout=\"column\" fxLayoutAlign=\"space-between center\">\r\n    <div>\r\n        <h2>\r\n            {{myWord}}\r\n        </h2>\r\n        <app-definition (newWord)=\"wordDefComp($event)\"\r\n                        [word]=\"myWord\"></app-definition>\r\n        <app-audio [word]=\"myWord\"></app-audio>\r\n    </div>\r\n    <div fxLayout=\"row\">\r\n        <button md-raised-button (click)=\"onRandomClick()\">New Random Word</button>\r\n        <button md-raised-button (click)=\"onSaveClick()\">Save</button>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/random/random.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__word_service__ = __webpack_require__("../../../../../src/app/word.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_service_service__ = __webpack_require__("../../../../../src/app/setting-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RandomComponent = (function () {
    function RandomComponent(wordService, settingService) {
        this.wordService = wordService;
        this.settingService = settingService;
    }
    RandomComponent.prototype.ngOnInit = function () {
    };
    RandomComponent.prototype.wordDefComp = function (ev) {
        this.myWord = ev;
    };
    RandomComponent.prototype.onRandomClick = function () {
        var _this = this;
        var wordType = this.settingService.GetCurrentWordType() == "any" ? null : this.settingService.GetCurrentWordType();
        this.wordService.GetRandomWord(wordType).subscribe(//subscribe to the observable return method
        function (//subscribe to the observable return method
            data) { return _this.myWord = data.word; }, function (error) { return alert(error); }, function () { return console.log("finished"); });
    };
    RandomComponent.prototype.onSaveClick = function () {
        this.wordService.AddToList(this.myWord);
        alert("saved");
    };
    //word from saved list
    RandomComponent.prototype.ngOnChanges = function () {
        this.myWord = this.newWord;
    };
    return RandomComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], RandomComponent.prototype, "newWord", void 0);
RandomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-random',
        template: __webpack_require__("../../../../../src/app/random/random.component.html"),
        styles: [__webpack_require__("../../../../../src/app/random/random.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__word_service__["a" /* WordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__word_service__["a" /* WordService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__setting_service_service__["a" /* SettingServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__setting_service_service__["a" /* SettingServiceService */]) === "function" && _b || Object])
], RandomComponent);

var _a, _b;
//# sourceMappingURL=random.component.js.map

/***/ }),

/***/ "../../../../../src/app/saved-list/saved-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#savedListComponent {\r\n    overflow-y: scroll;\r\n    height: 70vh;\r\n}\r\n\r\n\r\nmd-list{\r\n    /*height: 50vh;*/\r\n}\r\n\r\nmd-list-item {\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/saved-list/saved-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"savedListComponent\">\r\n    <md-list>\r\n        <md-list-item *ngFor=\"let word of wordList\">\r\n            <h4 md-line (click)=\"onListItemClick(word)\">{{word}}</h4>\r\n        </md-list-item>\r\n        <md-divider></md-divider>\r\n    </md-list>\r\n</div>\r\n\r\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <button md-raised-button (click)=\"onClear()\">Clear</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/saved-list/saved-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__word_service__ = __webpack_require__("../../../../../src/app/word.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SavedListComponent = (function () {
    function SavedListComponent(wordService) {
        this.wordService = wordService;
        this.selectedWord = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    SavedListComponent.prototype.ngOnInit = function () {
        this.wordList = this.wordService.GetList();
    };
    SavedListComponent.prototype.onListItemClick = function (word) {
        console.log(word + " clicked");
        this.selectedWord.emit(word);
    };
    SavedListComponent.prototype.onClear = function () {
        this.wordService.ClearList();
        this.wordList = this.wordService.GetList();
    };
    SavedListComponent.prototype.ngOnChanges = function () {
        //refresh the list
        if (this.selectedIndex == 1)
            this.wordList = this.wordService.GetList();
    };
    return SavedListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], SavedListComponent.prototype, "selectedIndex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], SavedListComponent.prototype, "selectedWord", void 0);
SavedListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-saved-list',
        template: __webpack_require__("../../../../../src/app/saved-list/saved-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/saved-list/saved-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__word_service__["a" /* WordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__word_service__["a" /* WordService */]) === "function" && _a || Object])
], SavedListComponent);

var _a;
//# sourceMappingURL=saved-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/setting-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingServiceService = (function () {
    function SettingServiceService() {
        this.isAutoAudioLoad = true;
        this.wordType = "any";
    }
    SettingServiceService.prototype.GetCurrentWordType = function () {
        return this.wordType;
    };
    SettingServiceService.prototype.SetWordType = function (wordType) {
        this.wordType = wordType;
    };
    SettingServiceService.prototype.IsAutoAudioLoading = function () {
        return this.isAutoAudioLoad;
    };
    SettingServiceService.prototype.SetAutoAudio = function (autoAudio) {
        this.isAutoAudioLoad = autoAudio;
    };
    return SettingServiceService;
}());
SettingServiceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SettingServiceService);

//# sourceMappingURL=setting-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/setting/setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#settingComponent{\r\n    padding: 10px;\r\n}\r\n\r\nmd-radio-button, md-checkbox{\r\n    padding: 10px;\r\n}\r\n\r\n.md-divider {\r\n    width: 100%;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    margin: 10px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"settingComponent\">\r\n    <h2>Settings</h2>\r\n\r\n    <md-radio-group [(ngModel)]=\"wordType\" (ngModelChange)=\"onChange()\" fxLayout=\"column\">\r\n        <md-radio-button [value]=\"'any'\">\r\n            Any\r\n        </md-radio-button>\r\n        <md-radio-button [value]=\"'verb'\">\r\n            Verb\r\n        </md-radio-button>\r\n        <md-radio-button [value]=\"'noun'\">\r\n            Noun\r\n        </md-radio-button>\r\n        <md-radio-button [value]=\"'adjective'\">\r\n            Adjective\r\n        </md-radio-button>\r\n    </md-radio-group>\r\n    <md-divider></md-divider>\r\n\r\n    <div class=\"md-divider\"></div>\r\n\r\n\r\n    <section>\r\n        <md-checkbox  [(ngModel)]=\"isAutoAudioLoad\" (ngModelChange)=\"onChangeAudio()\">Auto Audio Play</md-checkbox>\r\n    </section>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setting_service_service__ = __webpack_require__("../../../../../src/app/setting-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingComponent = (function () {
    function SettingComponent(settingService) {
        this.settingService = settingService;
        this.wordType = 'noun';
        this.isAutoAudioLoad = true;
    }
    SettingComponent.prototype.ngOnInit = function () {
        this.wordType = this.settingService.GetCurrentWordType();
    };
    SettingComponent.prototype.onChange = function () {
        console.log("changed");
        this.settingService.SetWordType(this.wordType);
    };
    SettingComponent.prototype.onChangeAudio = function () {
        this.settingService.SetAutoAudio(this.isAutoAudioLoad);
    };
    return SettingComponent;
}());
SettingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-setting',
        template: __webpack_require__("../../../../../src/app/setting/setting.component.html"),
        styles: [__webpack_require__("../../../../../src/app/setting/setting.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__setting_service_service__["a" /* SettingServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__setting_service_service__["a" /* SettingServiceService */]) === "function" && _a || Object])
], SettingComponent);

var _a;
//# sourceMappingURL=setting.component.js.map

/***/ }),

/***/ "../../../../../src/app/word.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WordService = (function () {
    function WordService(http) {
        this.http = http;
        this.baseUrl = "api.wordnik.com/v4/";
        this.baseUrl = window.location.protocol == 'https:' ? "https://" + this.baseUrl : "http://" + this.baseUrl;
    }
    WordService.prototype.GetRandomWord = function (wordType) {
        var randomApi = this.baseUrl + "words.json/randomWord?hasDictionaryDef=true&hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=d7e00125cd33554cd1c1a509b7f0091f3558955bb416ee24b";
        var url = wordType ? randomApi + "&includePartOfSpeech=" + wordType : randomApi;
        return this.http.get(url)
            .map(function (res) { return res.json(); }); //convert observable into json format
    };
    WordService.prototype.GetDefinition = function (word) {
        var url = this.baseUrl + "word.json/" + word + "/definitions?limit=1&includeRelated=true&sourceDictionaries=all&useCanonical=true&includeTags=false&api_key=d7e00125cd33554cd1c1a509b7f0091f3558955bb416ee24b";
        return this.http.get(url)
            .map(function (res) { return res.json(); }); //convert observable into json format
    };
    WordService.prototype.GetAudioUrl = function (word) {
        var url = this.baseUrl + "word.json/" + word + "/audio?useCanonical=true&limit=1&api_key=d7e00125cd33554cd1c1a509b7f0091f3558955bb416ee24b";
        return this.http.get(url)
            .map(function (res) { return res.json(); }); //convert observable into json format
    };
    WordService.prototype.GetList = function () {
        var key = "randomWordDictionaryArray";
        return localStorage[key] ? JSON.parse(localStorage[key]) : [];
    };
    WordService.prototype.AddToList = function (word) {
        if (word) {
            var key = "randomWordDictionaryArray";
            if (!localStorage[key])
                localStorage.setItem(key, JSON.stringify([]));
            var currentArr = JSON.parse(localStorage[key]);
            if (!currentArr.includes(word)) {
                currentArr.push(word);
                localStorage.setItem(key, JSON.stringify(currentArr));
            }
            console.log("storage list");
            console.log(localStorage[key]);
        }
    };
    WordService.prototype.ClearList = function () {
        localStorage.clear();
    };
    WordService.prototype.RemoveFromList = function (word) {
        var key = "randomWordDictionaryArray";
        var currentArr = JSON.parse(localStorage[key]);
        var index = currentArr.indexOf(word);
        if (index !== -1)
            currentArr.splice(index, 1);
        localStorage.setItem(key, JSON.stringify(currentArr));
        console.log("storage list");
        console.log(localStorage[key]);
    };
    return WordService;
}());
WordService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WordService);

var _a;
//# sourceMappingURL=word.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map