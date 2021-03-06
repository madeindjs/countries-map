(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@jagomf/countrieslist')) :
    typeof define === 'function' && define.amd ? define('countries-map', ['exports', '@angular/core', '@angular/common', '@jagomf/countrieslist'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['countries-map'] = {}, global.ng.core, global.ng.common, global.countrieslist));
}(this, (function (exports, core, common, countrieslist) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var chartsVersion = '45.2';
    var chartsScript = 'https://www.gstatic.com/charts/loader.js';
    var GoogleChartsLoaderService = /** @class */ (function () {
        function GoogleChartsLoaderService(localeId) {
            this.localeId = localeId;
            this.googleScriptLoadingNotifier = new core.EventEmitter();
            this.googleScriptIsLoading = false;
        }
        GoogleChartsLoaderService.prototype.load = function (apiKey) {
            return __awaiter(this, void 0, void 0, function () {
                var initializer;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadGoogleChartsScript()];
                        case 1:
                            _a.sent();
                            initializer = {
                                packages: ['geochart'],
                                language: this.localeId
                            };
                            if (apiKey) {
                                return [2 /*return*/, google.charts.load(chartsVersion, initializer, apiKey)];
                            }
                            else {
                                return [2 /*return*/, google.charts.load(chartsVersion, initializer)];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        GoogleChartsLoaderService.prototype.loadGoogleChartsScript = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (typeof google !== 'undefined' && google.charts) {
                    resolve();
                }
                else if (!_this.googleScriptIsLoading) {
                    _this.googleScriptIsLoading = true;
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = chartsScript;
                    script.async = true;
                    script.defer = true;
                    script.onload = function () {
                        _this.googleScriptIsLoading = false;
                        _this.googleScriptLoadingNotifier.emit(true);
                        resolve();
                    };
                    script.onerror = function () {
                        _this.googleScriptIsLoading = false;
                        _this.googleScriptLoadingNotifier.emit(false);
                        reject();
                    };
                    document.getElementsByTagName('head')[0].appendChild(script);
                }
                else {
                    _this.googleScriptLoadingNotifier.subscribe(function (loaded) {
                        if (loaded) {
                            resolve();
                        }
                        else {
                            reject();
                        }
                    });
                }
            });
        };
        return GoogleChartsLoaderService;
    }());
    GoogleChartsLoaderService.decorators = [
        { type: core.Injectable }
    ];
    GoogleChartsLoaderService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
    ]; };

    (function (CharErrorCode) {
        CharErrorCode["loading"] = "loading";
    })(exports.CharErrorCode || (exports.CharErrorCode = {}));

    var valueHolder = 'value';
    var countryName = function (countryCode) {
        return countrieslist.en[countryCode];
    };
    var ɵ0 = countryName;
    var CountriesMapComponent = /** @class */ (function () {
        function CountriesMapComponent(cdRef, el, loaderService) {
            this.cdRef = cdRef;
            this.el = el;
            this.loaderService = loaderService;
            this.countryLabel = 'Country';
            this.valueLabel = 'Value';
            this.showCaption = true;
            this.captionBelow = true;
            this.autoResize = false;
            this.minValue = 0;
            this.minColor = 'white';
            this.maxColor = 'red';
            this.backgroundColor = 'white';
            this.noDataColor = '#CFCFCF';
            this.exceptionColor = '#FFEE58';
            this.chartReady = new core.EventEmitter();
            this.chartError = new core.EventEmitter();
            this.chartSelect = new core.EventEmitter();
            this.selection = null;
            this.innerLoading = true;
        }
        Object.defineProperty(CountriesMapComponent.prototype, "loading", {
            get: function () {
                return this.innerLoading;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CountriesMapComponent.prototype, "selectionValue", {
            get: function () {
                return this.data[this.selection.countryId].value;
            },
            enumerable: false,
            configurable: true
        });
        CountriesMapComponent.prototype.screenSizeChanged = function () {
            if (!this.loading && this.autoResize) {
                var map = this.mapContent.nativeElement;
                map.style.setProperty('height', map.clientWidth * this.proportion + "px");
                this.redraw();
            }
        };
        CountriesMapComponent.prototype.getExtraSelected = function (country) {
            var extra = this.data[country].extra;
            return extra && Object.keys(extra).map(function (key) { return ({ key: key, val: extra[key] }); });
        };
        CountriesMapComponent.prototype.selectCountry = function (country) {
            this.selection = country ? {
                countryId: country,
                countryName: countryName(country),
                extra: this.getExtraSelected(country)
            } : null;
            this.cdRef.detectChanges();
        };
        /**
         * Convert a table (object) formatted as
         * `{ GB: { value:123, ...otherdata }, ES: { value:456, ...whatever } }`
         * to an array for Google Charts formatted as
         * `[ ['Country', 'Value'], ['GB', 123], ['ES', 456] ]`
         * and save to this.processedData
         */
        CountriesMapComponent.prototype.processInputData = function () {
            this.googleData = Object.entries(this.data).reduce(function (acc, _a) {
                var _b = __read(_a, 2), key = _b[0], val = _b[1];
                var rawValContent = val[valueHolder];
                acc.push([key, rawValContent === null ? null : rawValContent ? +rawValContent.toString() : 0]);
                return acc;
            }, [['Country', 'Value']]);
        };
        CountriesMapComponent.prototype.ngOnChanges = function (_a) {
            var data = _a.data;
            if (data) {
                if (!this.data) {
                    return;
                }
                this.initializeMap({
                    //#region DEFAULTS (automatically set):
                    // displayMode: 'regions',
                    // region: 'world',
                    // enableRegionInteractivity: true,
                    // keepAspectRatio: true,
                    //#endregion
                    colorAxis: {
                        colors: [this.minColor, this.maxColor],
                        minValue: Number.isInteger(this.minValue) ? this.minValue : undefined,
                        maxValue: Number.isInteger(this.maxValue) ? this.maxValue : undefined
                    },
                    datalessRegionColor: this.noDataColor,
                    backgroundColor: this.backgroundColor,
                    defaultColor: this.exceptionColor,
                    legend: 'none',
                    tooltip: { trigger: 'none' }
                });
            }
        };
        CountriesMapComponent.prototype.initializeMap = function (defaultOptions) {
            return __awaiter(this, void 0, void 0, function () {
                var self, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.loaderService.load(this.apiKey)];
                        case 1:
                            _a.sent();
                            this.processInputData();
                            this.wrapper = new google.visualization.ChartWrapper({
                                chartType: 'GeoChart',
                                dataTable: this.googleData,
                                options: Object.assign(defaultOptions, this.options)
                            });
                            this.registerChartWrapperEvents();
                            this.redraw();
                            self = this.el.nativeElement;
                            this.proportion = self.clientHeight / self.clientWidth;
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            this.onCharterror({ id: exports.CharErrorCode.loading, message: 'Could not load' });
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        CountriesMapComponent.prototype.redraw = function () {
            this.wrapper.draw(this.el.nativeElement.querySelector('div.cm-map-content'));
        };
        CountriesMapComponent.prototype.onChartReady = function () {
            if (this.innerLoading) {
                this.innerLoading = false;
                this.chartReady.emit();
            }
        };
        CountriesMapComponent.prototype.onCharterror = function (error) {
            this.chartError.emit(error);
        };
        CountriesMapComponent.prototype.onMapSelect = function () {
            var event = {
                selected: false,
                value: null,
                country: null
            };
            var selection = this.wrapper.getChart().getSelection();
            if (selection.length > 0) {
                var tableRow = selection[0].row;
                var dataTable = this.wrapper.getDataTable();
                event.selected = true;
                event.value = dataTable.getValue(tableRow, 1);
                event.country = dataTable.getValue(tableRow, 0);
                this.selectCountry(event.country);
            }
            else {
                this.selectCountry(null);
            }
            this.chartSelect.emit(event);
        };
        CountriesMapComponent.prototype.registerChartWrapperEvents = function () {
            var addListener = google.visualization.events.addListener;
            addListener(this.wrapper, 'ready', this.onChartReady.bind(this));
            addListener(this.wrapper, 'error', this.onCharterror.bind(this));
            addListener(this.wrapper, 'select', this.onMapSelect.bind(this));
        };
        CountriesMapComponent.prototype.ngOnDestroy = function () {
            var removeListener = google.visualization.events.removeListener;
            removeListener('ready');
            removeListener('error');
            removeListener('select');
        };
        return CountriesMapComponent;
    }());
    CountriesMapComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'countries-map',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "<div class=\"major-block loading\" *ngIf=\"loading\"><span class=\"text\">Loading map...</span></div>\r\n\r\n<div class=\"major-block cm-map-content\" #mapContent [ngClass]=\"{'goes-first': captionBelow}\"></div>\r\n\r\n<div class=\"major-block cm-caption-container\" [ngClass]=\"{'goes-first': !captionBelow}\"\r\n  *ngIf=\"!loading && showCaption\">\r\n  <div class=\"cm-simple-caption\">\r\n    <div class=\"cm-country-label\">\r\n      <span class=\"cm-default-label\" *ngIf=\"!selection\">{{countryLabel}}</span>\r\n      <span class=\"cm-country-name\" *ngIf=\"selection\">{{selection?.countryName}}</span>\r\n    </div>\r\n    <div class=\"cm-value-label\">\r\n      <span class=\"cm-value-text\"\r\n        [ngClass]=\"{'has-value': selection}\">{{valueLabel}}<span *ngIf=\"selection\">: </span></span>\r\n      <span class=\"cm-value-content\" *ngIf=\"selection\">{{selectionValue}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"cm-extended-caption\" *ngIf=\"selection?.extra && selection?.extra.length > 0\">\r\n    <div *ngFor=\"let item of selection?.extra\" class=\"cm-extended-item\">\r\n      <span class=\"cm-extended-label\">{{item.key}}</span>:\r\n      <span class=\"cm-extended-value\">{{item.val}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [":host{align-content:stretch;align-items:stretch;display:flex;flex-flow:column nowrap;justify-content:space-between}.major-block.loading{align-self:center;flex:0 1 auto}.loading .text{color:grey;font-family:sans-serif;font-style:italic}.major-block.cm-map-content{flex:0 1 auto}.major-block.goes-first{order:0}.major-block:not(.goes-first){order:1}.major-block.cm-caption-container{display:flex;flex:0 1 auto;flex-flow:column nowrap;justify-content:space-between}.cm-simple-caption{display:flex;flex-flow:row nowrap;justify-content:space-between}.cm-country-label{align-self:flex-start;flex:0 1 auto}.cm-value-label{align-self:flex-end;flex:0 1 auto}.cm-country-label,.cm-value-label{flex:0 1 auto}.cm-country-label .cm-country-name{font-weight:700}.cm-country-label .cm-country-name,.cm-value-label .cm-value-text{color:#333}.cm-country-label .cm-default-label,.cm-value-label .cm-value-text:not(.has-value){color:#777;font-style:italic}.cm-extended-caption{display:grid;grid-gap:5px;grid-template-columns:repeat(auto-fill,minmax(120px,1fr))}.cm-extended-item{margin:5px auto}.cm-extended-item .cm-extended-label{font-weight:700}"]
                },] }
    ];
    CountriesMapComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef },
        { type: GoogleChartsLoaderService }
    ]; };
    CountriesMapComponent.propDecorators = {
        data: [{ type: core.Input }],
        apiKey: [{ type: core.Input }],
        options: [{ type: core.Input }],
        countryLabel: [{ type: core.Input }],
        valueLabel: [{ type: core.Input }],
        showCaption: [{ type: core.Input }],
        captionBelow: [{ type: core.Input }],
        autoResize: [{ type: core.Input }],
        minValue: [{ type: core.Input }],
        maxValue: [{ type: core.Input }],
        minColor: [{ type: core.Input }],
        maxColor: [{ type: core.Input }],
        backgroundColor: [{ type: core.Input }],
        noDataColor: [{ type: core.Input }],
        exceptionColor: [{ type: core.Input }],
        chartReady: [{ type: core.Output }],
        chartError: [{ type: core.Output }],
        chartSelect: [{ type: core.Output }],
        mapContent: [{ type: core.ViewChild, args: ['mapContent', { static: false },] }],
        screenSizeChanged: [{ type: core.HostListener, args: ['window:deviceorientation',] }, { type: core.HostListener, args: ['window:resize',] }]
    };

    var CountriesMapModule = /** @class */ (function () {
        function CountriesMapModule() {
        }
        return CountriesMapModule;
    }());
    CountriesMapModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [CountriesMapComponent],
                    providers: [GoogleChartsLoaderService],
                    exports: [
                        CountriesMapComponent
                    ]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CountriesMapComponent = CountriesMapComponent;
    exports.CountriesMapModule = CountriesMapModule;
    exports.ɵa = GoogleChartsLoaderService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=countries-map.umd.js.map
