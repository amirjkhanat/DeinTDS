this.primevue = this.primevue || {};
this.primevue.inputnumber = (function (Button, AngleDownIcon, AngleUpIcon, InputText, utils, BaseComponent, InputNumberStyle, vue) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
    var AngleDownIcon__default = /*#__PURE__*/_interopDefaultLegacy(AngleDownIcon);
    var AngleUpIcon__default = /*#__PURE__*/_interopDefaultLegacy(AngleUpIcon);
    var InputText__default = /*#__PURE__*/_interopDefaultLegacy(InputText);
    var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
    var InputNumberStyle__default = /*#__PURE__*/_interopDefaultLegacy(InputNumberStyle);

    var script$1 = {
      name: 'BaseInputNumber',
      "extends": BaseComponent__default["default"],
      props: {
        modelValue: {
          type: Number,
          "default": null
        },
        format: {
          type: Boolean,
          "default": true
        },
        showButtons: {
          type: Boolean,
          "default": false
        },
        buttonLayout: {
          type: String,
          "default": 'stacked'
        },
        incrementButtonClass: {
          type: String,
          "default": null
        },
        decrementButtonClass: {
          type: String,
          "default": null
        },
        incrementButtonIcon: {
          type: String,
          "default": undefined
        },
        decrementButtonIcon: {
          type: String,
          "default": undefined
        },
        locale: {
          type: String,
          "default": undefined
        },
        localeMatcher: {
          type: String,
          "default": undefined
        },
        mode: {
          type: String,
          "default": 'decimal'
        },
        prefix: {
          type: String,
          "default": null
        },
        suffix: {
          type: String,
          "default": null
        },
        currency: {
          type: String,
          "default": undefined
        },
        currencyDisplay: {
          type: String,
          "default": undefined
        },
        useGrouping: {
          type: Boolean,
          "default": true
        },
        minFractionDigits: {
          type: Number,
          "default": undefined
        },
        maxFractionDigits: {
          type: Number,
          "default": undefined
        },
        roundingMode: {
          type: String,
          "default": 'halfExpand',
          validator: function validator(value) {
            return ['ceil', 'floor', 'expand', 'trunc', 'halfCeil', 'halfFloor', 'halfExpand', 'halfTrunc', 'halfEven'].includes(value);
          }
        },
        min: {
          type: Number,
          "default": null
        },
        max: {
          type: Number,
          "default": null
        },
        step: {
          type: Number,
          "default": 1
        },
        allowEmpty: {
          type: Boolean,
          "default": true
        },
        highlightOnFocus: {
          type: Boolean,
          "default": false
        },
        readonly: {
          type: Boolean,
          "default": false
        },
        variant: {
          type: String,
          "default": null
        },
        invalid: {
          type: Boolean,
          "default": false
        },
        disabled: {
          type: Boolean,
          "default": false
        },
        placeholder: {
          type: String,
          "default": null
        },
        inputId: {
          type: String,
          "default": null
        },
        inputClass: {
          type: [String, Object],
          "default": null
        },
        inputStyle: {
          type: Object,
          "default": null
        },
        inputProps: {
          type: null,
          "default": null
        },
        incrementButtonProps: {
          type: null,
          "default": null
        },
        decrementButtonProps: {
          type: null,
          "default": null
        },
        ariaLabelledby: {
          type: String,
          "default": null
        },
        ariaLabel: {
          type: String,
          "default": null
        }
      },
      style: InputNumberStyle__default["default"],
      provide: function provide() {
        return {
          $parentInstance: this
        };
      }
    };

    function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
    function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
    function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
    function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
    function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
    var script = {
      name: 'InputNumber',
      "extends": script$1,
      inheritAttrs: false,
      emits: ['update:modelValue', 'input', 'focus', 'blur'],
      numberFormat: null,
      _numeral: null,
      _decimal: null,
      _group: null,
      _minusSign: null,
      _currency: null,
      _suffix: null,
      _prefix: null,
      _index: null,
      groupChar: '',
      isSpecialChar: null,
      prefixChar: null,
      suffixChar: null,
      timer: null,
      data: function data() {
        return {
          d_modelValue: this.modelValue,
          focused: false
        };
      },
      watch: {
        modelValue: function modelValue(newValue) {
          this.d_modelValue = newValue;
        },
        locale: function locale(newValue, oldValue) {
          this.updateConstructParser(newValue, oldValue);
        },
        localeMatcher: function localeMatcher(newValue, oldValue) {
          this.updateConstructParser(newValue, oldValue);
        },
        mode: function mode(newValue, oldValue) {
          this.updateConstructParser(newValue, oldValue);
        },
        currency: function currency(newValue, oldValue) {
          this.updateConstructParser(newValue, oldValue);
        },
        currencyDisplay: function currencyDisplay(newValue, oldValue) {
          this.updateConstructParser(newValue, oldValue);
        },
        useGrouping: function useGrouping(newValue, oldValue) {
          this.updateConstructParser(newValue, oldValue);
        },
        minFractionDigits: function minFractionDigits(newValue, oldValue) {
          this.updateConstructParser(newValue, oldValue);
        },
        maxFractionDigits: function maxFractionDigits(newValue, oldValue) {
          this.updateConstructParser(newValue, oldValue);
        },
        suffix: function suffix(newValue, oldValue) {
          this.updateConstructParser(newValue, oldValue);
        },
        prefix: function prefix(newValue, oldValue) {
          this.updateConstructParser(newValue, oldValue);
        }
      },
      created: function created() {
        this.constructParser();
      },
      methods: {
        getOptions: function getOptions() {
          return {
            localeMatcher: this.localeMatcher,
            style: this.mode,
            currency: this.currency,
            currencyDisplay: this.currencyDisplay,
            useGrouping: this.useGrouping,
            minimumFractionDigits: this.minFractionDigits,
            maximumFractionDigits: this.maxFractionDigits,
            roundingMode: this.roundingMode
          };
        },
        constructParser: function constructParser() {
          this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
          var numerals = _toConsumableArray(new Intl.NumberFormat(this.locale, {
            useGrouping: false
          }).format(9876543210)).reverse();
          var index = new Map(numerals.map(function (d, i) {
            return [d, i];
          }));
          this._numeral = new RegExp("[".concat(numerals.join(''), "]"), 'g');
          this._group = this.getGroupingExpression();
          this._minusSign = this.getMinusSignExpression();
          this._currency = this.getCurrencyExpression();
          this._decimal = this.getDecimalExpression();
          this._suffix = this.getSuffixExpression();
          this._prefix = this.getPrefixExpression();
          this._index = function (d) {
            return index.get(d);
          };
        },
        updateConstructParser: function updateConstructParser(newValue, oldValue) {
          if (newValue !== oldValue) {
            this.constructParser();
          }
        },
        escapeRegExp: function escapeRegExp(text) {
          return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        },
        getDecimalExpression: function getDecimalExpression() {
          var formatter = new Intl.NumberFormat(this.locale, _objectSpread(_objectSpread({}, this.getOptions()), {}, {
            useGrouping: false
          }));
          return new RegExp("[".concat(formatter.format(1.1).replace(this._currency, '').trim().replace(this._numeral, ''), "]"), 'g');
        },
        getGroupingExpression: function getGroupingExpression() {
          var formatter = new Intl.NumberFormat(this.locale, {
            useGrouping: true
          });
          this.groupChar = formatter.format(1000000).trim().replace(this._numeral, '').charAt(0);
          return new RegExp("[".concat(this.groupChar, "]"), 'g');
        },
        getMinusSignExpression: function getMinusSignExpression() {
          var formatter = new Intl.NumberFormat(this.locale, {
            useGrouping: false
          });
          return new RegExp("[".concat(formatter.format(-1).trim().replace(this._numeral, ''), "]"), 'g');
        },
        getCurrencyExpression: function getCurrencyExpression() {
          if (this.currency) {
            var formatter = new Intl.NumberFormat(this.locale, {
              style: 'currency',
              currency: this.currency,
              currencyDisplay: this.currencyDisplay,
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
              roundingMode: this.roundingMode
            });
            return new RegExp("[".concat(formatter.format(1).replace(/\s/g, '').replace(this._numeral, '').replace(this._group, ''), "]"), 'g');
          }
          return new RegExp("[]", 'g');
        },
        getPrefixExpression: function getPrefixExpression() {
          if (this.prefix) {
            this.prefixChar = this.prefix;
          } else {
            var formatter = new Intl.NumberFormat(this.locale, {
              style: this.mode,
              currency: this.currency,
              currencyDisplay: this.currencyDisplay
            });
            this.prefixChar = formatter.format(1).split('1')[0];
          }
          return new RegExp("".concat(this.escapeRegExp(this.prefixChar || '')), 'g');
        },
        getSuffixExpression: function getSuffixExpression() {
          if (this.suffix) {
            this.suffixChar = this.suffix;
          } else {
            var formatter = new Intl.NumberFormat(this.locale, {
              style: this.mode,
              currency: this.currency,
              currencyDisplay: this.currencyDisplay,
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
              roundingMode: this.roundingMode
            });
            this.suffixChar = formatter.format(1).split('1')[1];
          }
          return new RegExp("".concat(this.escapeRegExp(this.suffixChar || '')), 'g');
        },
        formatValue: function formatValue(value) {
          if (value != null) {
            if (value === '-') {
              // Minus sign
              return value;
            }
            if (this.format) {
              var formatter = new Intl.NumberFormat(this.locale, this.getOptions());
              var formattedValue = formatter.format(value);
              if (this.prefix) {
                formattedValue = this.prefix + formattedValue;
              }
              if (this.suffix) {
                formattedValue = formattedValue + this.suffix;
              }
              return formattedValue;
            }
            return value.toString();
          }
          return '';
        },
        parseValue: function parseValue(text) {
          var filteredText = text.replace(this._suffix, '').replace(this._prefix, '').trim().replace(/\s/g, '').replace(this._currency, '').replace(this._group, '').replace(this._minusSign, '-').replace(this._decimal, '.').replace(this._numeral, this._index);
          if (filteredText) {
            if (filteredText === '-')
              // Minus sign
              return filteredText;
            var parsedValue = +filteredText;
            return isNaN(parsedValue) ? null : parsedValue;
          }
          return null;
        },
        repeat: function repeat(event, interval, dir) {
          var _this = this;
          if (this.readonly) {
            return;
          }
          var i = interval || 500;
          this.clearTimer();
          this.timer = setTimeout(function () {
            _this.repeat(event, 40, dir);
          }, i);
          this.spin(event, dir);
        },
        spin: function spin(event, dir) {
          if (this.$refs.input) {
            var step = this.step * dir;
            var currentValue = this.parseValue(this.$refs.input.$el.value) || 0;
            var newValue = this.validateValue(currentValue + step);
            this.updateInput(newValue, null, 'spin');
            this.updateModel(event, newValue);
            this.handleOnInput(event, currentValue, newValue);
          }
        },
        onUpButtonMouseDown: function onUpButtonMouseDown(event) {
          if (!this.disabled) {
            this.$refs.input.$el.focus();
            this.repeat(event, null, 1);
            event.preventDefault();
          }
        },
        onUpButtonMouseUp: function onUpButtonMouseUp() {
          if (!this.disabled) {
            this.clearTimer();
          }
        },
        onUpButtonMouseLeave: function onUpButtonMouseLeave() {
          if (!this.disabled) {
            this.clearTimer();
          }
        },
        onUpButtonKeyUp: function onUpButtonKeyUp() {
          if (!this.disabled) {
            this.clearTimer();
          }
        },
        onUpButtonKeyDown: function onUpButtonKeyDown(event) {
          if (event.code === 'Space' || event.code === 'Enter' || event.code === 'NumpadEnter') {
            this.repeat(event, null, 1);
          }
        },
        onDownButtonMouseDown: function onDownButtonMouseDown(event) {
          if (!this.disabled) {
            this.$refs.input.$el.focus();
            this.repeat(event, null, -1);
            event.preventDefault();
          }
        },
        onDownButtonMouseUp: function onDownButtonMouseUp() {
          if (!this.disabled) {
            this.clearTimer();
          }
        },
        onDownButtonMouseLeave: function onDownButtonMouseLeave() {
          if (!this.disabled) {
            this.clearTimer();
          }
        },
        onDownButtonKeyUp: function onDownButtonKeyUp() {
          if (!this.disabled) {
            this.clearTimer();
          }
        },
        onDownButtonKeyDown: function onDownButtonKeyDown(event) {
          if (event.code === 'Space' || event.code === 'Enter' || event.code === 'NumpadEnter') {
            this.repeat(event, null, -1);
          }
        },
        onUserInput: function onUserInput() {
          if (this.isSpecialChar) {
            this.$refs.input.$el.value = this.lastValue;
          }
          this.isSpecialChar = false;
        },
        onInputKeyDown: function onInputKeyDown(event) {
          if (this.readonly) {
            return;
          }
          if (event.altKey || event.ctrlKey || event.metaKey) {
            this.isSpecialChar = true;
            this.lastValue = this.$refs.input.$el.value;
            return;
          }
          this.lastValue = event.target.value;
          var selectionStart = event.target.selectionStart;
          var selectionEnd = event.target.selectionEnd;
          var inputValue = event.target.value;
          var newValueStr = null;
          switch (event.code) {
            case 'ArrowUp':
              this.spin(event, 1);
              event.preventDefault();
              break;
            case 'ArrowDown':
              this.spin(event, -1);
              event.preventDefault();
              break;
            case 'ArrowLeft':
              if (!this.isNumeralChar(inputValue.charAt(selectionStart - 1))) {
                event.preventDefault();
              }
              break;
            case 'ArrowRight':
              if (!this.isNumeralChar(inputValue.charAt(selectionStart))) {
                event.preventDefault();
              }
              break;
            case 'Tab':
            case 'Enter':
            case 'NumpadEnter':
              newValueStr = this.validateValue(this.parseValue(inputValue));
              this.$refs.input.$el.value = this.formatValue(newValueStr);
              this.$refs.input.$el.setAttribute('aria-valuenow', newValueStr);
              this.updateModel(event, newValueStr);
              break;
            case 'Backspace':
              {
                event.preventDefault();
                if (selectionStart === selectionEnd) {
                  var deleteChar = inputValue.charAt(selectionStart - 1);
                  var _this$getDecimalCharI = this.getDecimalCharIndexes(inputValue),
                    decimalCharIndex = _this$getDecimalCharI.decimalCharIndex,
                    decimalCharIndexWithoutPrefix = _this$getDecimalCharI.decimalCharIndexWithoutPrefix;
                  if (this.isNumeralChar(deleteChar)) {
                    var decimalLength = this.getDecimalLength(inputValue);
                    if (this._group.test(deleteChar)) {
                      this._group.lastIndex = 0;
                      newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
                    } else if (this._decimal.test(deleteChar)) {
                      this._decimal.lastIndex = 0;
                      if (decimalLength) {
                        this.$refs.input.$el.setSelectionRange(selectionStart - 1, selectionStart - 1);
                      } else {
                        newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                      }
                    } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                      var insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? '' : '0';
                      newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
                    } else if (decimalCharIndexWithoutPrefix === 1) {
                      newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
                      newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
                    } else {
                      newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                    }
                  }
                  this.updateValue(event, newValueStr, null, 'delete-single');
                } else {
                  newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
                  this.updateValue(event, newValueStr, null, 'delete-range');
                }
                break;
              }
            case 'Delete':
              event.preventDefault();
              if (selectionStart === selectionEnd) {
                var _deleteChar = inputValue.charAt(selectionStart);
                var _this$getDecimalCharI2 = this.getDecimalCharIndexes(inputValue),
                  _decimalCharIndex = _this$getDecimalCharI2.decimalCharIndex,
                  _decimalCharIndexWithoutPrefix = _this$getDecimalCharI2.decimalCharIndexWithoutPrefix;
                if (this.isNumeralChar(_deleteChar)) {
                  var _decimalLength = this.getDecimalLength(inputValue);
                  if (this._group.test(_deleteChar)) {
                    this._group.lastIndex = 0;
                    newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
                  } else if (this._decimal.test(_deleteChar)) {
                    this._decimal.lastIndex = 0;
                    if (_decimalLength) {
                      this.$refs.input.$el.setSelectionRange(selectionStart + 1, selectionStart + 1);
                    } else {
                      newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                    }
                  } else if (_decimalCharIndex > 0 && selectionStart > _decimalCharIndex) {
                    var _insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < _decimalLength ? '' : '0';
                    newValueStr = inputValue.slice(0, selectionStart) + _insertedText + inputValue.slice(selectionStart + 1);
                  } else if (_decimalCharIndexWithoutPrefix === 1) {
                    newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1);
                    newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
                  } else {
                    newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                  }
                }
                this.updateValue(event, newValueStr, null, 'delete-back-single');
              } else {
                newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
                this.updateValue(event, newValueStr, null, 'delete-range');
              }
              break;
            case 'Home':
              event.preventDefault();
              if (!utils.ObjectUtils.isEmpty(this.min)) {
                this.updateModel(event, this.min);
              }
              break;
            case 'End':
              event.preventDefault();
              if (!utils.ObjectUtils.isEmpty(this.max)) {
                this.updateModel(event, this.max);
              }
              break;
          }
        },
        onInputKeyPress: function onInputKeyPress(event) {
          if (this.readonly) {
            return;
          }
          var _char = event.key;
          var isDecimalSign = this.isDecimalSign(_char);
          var isMinusSign = this.isMinusSign(_char);
          if (event.code !== 'Enter') {
            event.preventDefault();
          }
          if (Number(_char) >= 0 && Number(_char) <= 9 || isMinusSign || isDecimalSign) {
            this.insert(event, _char, {
              isDecimalSign: isDecimalSign,
              isMinusSign: isMinusSign
            });
          }
        },
        onPaste: function onPaste(event) {
          event.preventDefault();
          var data = (event.clipboardData || window['clipboardData']).getData('Text');
          if (data) {
            var filteredData = this.parseValue(data);
            if (filteredData != null) {
              this.insert(event, filteredData.toString());
            }
          }
        },
        allowMinusSign: function allowMinusSign() {
          return this.min === null || this.min < 0;
        },
        isMinusSign: function isMinusSign(_char2) {
          if (this._minusSign.test(_char2) || _char2 === '-') {
            this._minusSign.lastIndex = 0;
            return true;
          }
          return false;
        },
        isDecimalSign: function isDecimalSign(_char3) {
          if (this._decimal.test(_char3)) {
            this._decimal.lastIndex = 0;
            return true;
          }
          return false;
        },
        isDecimalMode: function isDecimalMode() {
          return this.mode === 'decimal';
        },
        getDecimalCharIndexes: function getDecimalCharIndexes(val) {
          var decimalCharIndex = val.search(this._decimal);
          this._decimal.lastIndex = 0;
          var filteredVal = val.replace(this._prefix, '').trim().replace(/\s/g, '').replace(this._currency, '');
          var decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
          this._decimal.lastIndex = 0;
          return {
            decimalCharIndex: decimalCharIndex,
            decimalCharIndexWithoutPrefix: decimalCharIndexWithoutPrefix
          };
        },
        getCharIndexes: function getCharIndexes(val) {
          var decimalCharIndex = val.search(this._decimal);
          this._decimal.lastIndex = 0;
          var minusCharIndex = val.search(this._minusSign);
          this._minusSign.lastIndex = 0;
          var suffixCharIndex = val.search(this._suffix);
          this._suffix.lastIndex = 0;
          var currencyCharIndex = val.search(this._currency);
          this._currency.lastIndex = 0;
          return {
            decimalCharIndex: decimalCharIndex,
            minusCharIndex: minusCharIndex,
            suffixCharIndex: suffixCharIndex,
            currencyCharIndex: currencyCharIndex
          };
        },
        insert: function insert(event, text) {
          var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
            isDecimalSign: false,
            isMinusSign: false
          };
          var minusCharIndexOnText = text.search(this._minusSign);
          this._minusSign.lastIndex = 0;
          if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
            return;
          }
          var selectionStart = this.$refs.input.$el.selectionStart;
          var selectionEnd = this.$refs.input.$el.selectionEnd;
          var inputValue = this.$refs.input.$el.value.trim();
          var _this$getCharIndexes = this.getCharIndexes(inputValue),
            decimalCharIndex = _this$getCharIndexes.decimalCharIndex,
            minusCharIndex = _this$getCharIndexes.minusCharIndex,
            suffixCharIndex = _this$getCharIndexes.suffixCharIndex,
            currencyCharIndex = _this$getCharIndexes.currencyCharIndex;
          var newValueStr;
          if (sign.isMinusSign) {
            if (selectionStart === 0) {
              newValueStr = inputValue;
              if (minusCharIndex === -1 || selectionEnd !== 0) {
                newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
              }
              this.updateValue(event, newValueStr, text, 'insert');
            }
          } else if (sign.isDecimalSign) {
            if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
              this.updateValue(event, inputValue, text, 'insert');
            } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
              newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
              this.updateValue(event, newValueStr, text, 'insert');
            } else if (decimalCharIndex === -1 && this.maxFractionDigits) {
              newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
              this.updateValue(event, newValueStr, text, 'insert');
            }
          } else {
            var maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
            var operation = selectionStart !== selectionEnd ? 'range-insert' : 'insert';
            if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
                var charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
                newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
                this.updateValue(event, newValueStr, text, operation);
              }
            } else {
              newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
              this.updateValue(event, newValueStr, text, operation);
            }
          }
        },
        insertText: function insertText(value, text, start, end) {
          var textSplit = text === '.' ? text : text.split('.');
          if (textSplit.length === 2) {
            var decimalCharIndex = value.slice(start, end).search(this._decimal);
            this._decimal.lastIndex = 0;
            return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : this.formatValue(text) || value;
          } else if (end - start === value.length) {
            return this.formatValue(text);
          } else if (start === 0) {
            return text + value.slice(end);
          } else if (end === value.length) {
            return value.slice(0, start) + text;
          } else {
            return value.slice(0, start) + text + value.slice(end);
          }
        },
        deleteRange: function deleteRange(value, start, end) {
          var newValueStr;
          if (end - start === value.length) newValueStr = '';else if (start === 0) newValueStr = value.slice(end);else if (end === value.length) newValueStr = value.slice(0, start);else newValueStr = value.slice(0, start) + value.slice(end);
          return newValueStr;
        },
        initCursor: function initCursor() {
          var selectionStart = this.$refs.input.$el.selectionStart;
          var inputValue = this.$refs.input.$el.value;
          var valueLength = inputValue.length;
          var index = null;

          // remove prefix
          var prefixLength = (this.prefixChar || '').length;
          inputValue = inputValue.replace(this._prefix, '');
          selectionStart = selectionStart - prefixLength;
          var _char4 = inputValue.charAt(selectionStart);
          if (this.isNumeralChar(_char4)) {
            return selectionStart + prefixLength;
          }

          //left
          var i = selectionStart - 1;
          while (i >= 0) {
            _char4 = inputValue.charAt(i);
            if (this.isNumeralChar(_char4)) {
              index = i + prefixLength;
              break;
            } else {
              i--;
            }
          }
          if (index !== null) {
            this.$refs.input.$el.setSelectionRange(index + 1, index + 1);
          } else {
            i = selectionStart;
            while (i < valueLength) {
              _char4 = inputValue.charAt(i);
              if (this.isNumeralChar(_char4)) {
                index = i + prefixLength;
                break;
              } else {
                i++;
              }
            }
            if (index !== null) {
              this.$refs.input.$el.setSelectionRange(index, index);
            }
          }
          return index || 0;
        },
        onInputClick: function onInputClick() {
          var currentValue = this.$refs.input.$el.value;
          if (!this.readonly && currentValue !== utils.DomHandler.getSelection()) {
            this.initCursor();
          }
        },
        isNumeralChar: function isNumeralChar(_char5) {
          if (_char5.length === 1 && (this._numeral.test(_char5) || this._decimal.test(_char5) || this._group.test(_char5) || this._minusSign.test(_char5))) {
            this.resetRegex();
            return true;
          }
          return false;
        },
        resetRegex: function resetRegex() {
          this._numeral.lastIndex = 0;
          this._decimal.lastIndex = 0;
          this._group.lastIndex = 0;
          this._minusSign.lastIndex = 0;
        },
        updateValue: function updateValue(event, valueStr, insertedValueStr, operation) {
          var currentValue = this.$refs.input.$el.value;
          var newValue = null;
          if (valueStr != null) {
            newValue = this.parseValue(valueStr);
            newValue = !newValue && !this.allowEmpty ? 0 : newValue;
            this.updateInput(newValue, insertedValueStr, operation, valueStr);
            this.handleOnInput(event, currentValue, newValue);
          }
        },
        handleOnInput: function handleOnInput(event, currentValue, newValue) {
          if (this.isValueChanged(currentValue, newValue)) {
            this.$emit('input', {
              originalEvent: event,
              value: newValue,
              formattedValue: currentValue
            });
          }
        },
        isValueChanged: function isValueChanged(currentValue, newValue) {
          if (newValue === null && currentValue !== null) {
            return true;
          }
          if (newValue != null) {
            var parsedCurrentValue = typeof currentValue === 'string' ? this.parseValue(currentValue) : currentValue;
            return newValue !== parsedCurrentValue;
          }
          return false;
        },
        validateValue: function validateValue(value) {
          if (value === '-' || value == null) {
            return null;
          }
          if (this.min != null && value < this.min) {
            return this.min;
          }
          if (this.max != null && value > this.max) {
            return this.max;
          }
          return value;
        },
        updateInput: function updateInput(value, insertedValueStr, operation, valueStr) {
          insertedValueStr = insertedValueStr || '';
          var inputValue = this.$refs.input.$el.value;
          var newValue = this.formatValue(value);
          var currentLength = inputValue.length;
          if (newValue !== valueStr) {
            newValue = this.concatValues(newValue, valueStr);
          }
          if (currentLength === 0) {
            this.$refs.input.$el.value = newValue;
            this.$refs.input.$el.setSelectionRange(0, 0);
            var index = this.initCursor();
            var selectionEnd = index + insertedValueStr.length;
            this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
          } else {
            var selectionStart = this.$refs.input.$el.selectionStart;
            var _selectionEnd = this.$refs.input.$el.selectionEnd;
            this.$refs.input.$el.value = newValue;
            var newLength = newValue.length;
            if (operation === 'range-insert') {
              var startValue = this.parseValue((inputValue || '').slice(0, selectionStart));
              var startValueStr = startValue !== null ? startValue.toString() : '';
              var startExpr = startValueStr.split('').join("(".concat(this.groupChar, ")?"));
              var sRegex = new RegExp(startExpr, 'g');
              sRegex.test(newValue);
              var tExpr = insertedValueStr.split('').join("(".concat(this.groupChar, ")?"));
              var tRegex = new RegExp(tExpr, 'g');
              tRegex.test(newValue.slice(sRegex.lastIndex));
              _selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
              this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
            } else if (newLength === currentLength) {
              if (operation === 'insert' || operation === 'delete-back-single') {
                this.$refs.input.$el.setSelectionRange(_selectionEnd + 1, _selectionEnd + 1);
              } else if (operation === 'delete-single') {
                this.$refs.input.$el.setSelectionRange(_selectionEnd - 1, _selectionEnd - 1);
              } else if (operation === 'delete-range' || operation === 'spin') {
                this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
              }
            } else if (operation === 'delete-back-single') {
              var prevChar = inputValue.charAt(_selectionEnd - 1);
              var nextChar = inputValue.charAt(_selectionEnd);
              var diff = currentLength - newLength;
              var isGroupChar = this._group.test(nextChar);
              if (isGroupChar && diff === 1) {
                _selectionEnd += 1;
              } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
                _selectionEnd += -1 * diff + 1;
              }
              this._group.lastIndex = 0;
              this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
            } else if (inputValue === '-' && operation === 'insert') {
              this.$refs.input.$el.setSelectionRange(0, 0);
              var _index = this.initCursor();
              var _selectionEnd2 = _index + insertedValueStr.length + 1;
              this.$refs.input.$el.setSelectionRange(_selectionEnd2, _selectionEnd2);
            } else {
              _selectionEnd = _selectionEnd + (newLength - currentLength);
              this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
            }
          }
          this.$refs.input.$el.setAttribute('aria-valuenow', value);
        },
        concatValues: function concatValues(val1, val2) {
          if (val1 && val2) {
            var decimalCharIndex = val2.search(this._decimal);
            this._decimal.lastIndex = 0;
            if (this.suffixChar) {
              return decimalCharIndex !== -1 ? val1.replace(this.suffixChar, '').split(this._decimal)[0] + val2.replace(this.suffixChar, '').slice(decimalCharIndex) + this.suffixChar : val1;
            } else {
              return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
            }
          }
          return val1;
        },
        getDecimalLength: function getDecimalLength(value) {
          if (value) {
            var valueSplit = value.split(this._decimal);
            if (valueSplit.length === 2) {
              return valueSplit[1].replace(this._suffix, '').trim().replace(/\s/g, '').replace(this._currency, '').length;
            }
          }
          return 0;
        },
        updateModel: function updateModel(event, value) {
          this.d_modelValue = value;
          this.$emit('update:modelValue', value);
        },
        onInputFocus: function onInputFocus(event) {
          this.focused = true;
          if (!this.disabled && !this.readonly && this.$refs.input.$el.value !== utils.DomHandler.getSelection() && this.highlightOnFocus) {
            event.target.select();
          }
          this.$emit('focus', event);
        },
        onInputBlur: function onInputBlur(event) {
          this.focused = false;
          var input = event.target;
          var newValue = this.validateValue(this.parseValue(input.value));
          this.$emit('blur', {
            originalEvent: event,
            value: input.value
          });
          input.value = this.formatValue(newValue);
          input.setAttribute('aria-valuenow', newValue);
          this.updateModel(event, newValue);
          if (!this.disabled && !this.readonly && this.highlightOnFocus) {
            utils.DomHandler.clearSelection();
          }
        },
        clearTimer: function clearTimer() {
          if (this.timer) {
            clearInterval(this.timer);
          }
        },
        maxBoundry: function maxBoundry() {
          return this.d_modelValue >= this.max;
        },
        minBoundry: function minBoundry() {
          return this.d_modelValue <= this.min;
        }
      },
      computed: {
        filled: function filled() {
          return this.modelValue != null && this.modelValue.toString().length > 0;
        },
        upButtonListeners: function upButtonListeners() {
          var _this2 = this;
          return {
            mousedown: function mousedown(event) {
              return _this2.onUpButtonMouseDown(event);
            },
            mouseup: function mouseup(event) {
              return _this2.onUpButtonMouseUp(event);
            },
            mouseleave: function mouseleave(event) {
              return _this2.onUpButtonMouseLeave(event);
            },
            keydown: function keydown(event) {
              return _this2.onUpButtonKeyDown(event);
            },
            keyup: function keyup(event) {
              return _this2.onUpButtonKeyUp(event);
            }
          };
        },
        downButtonListeners: function downButtonListeners() {
          var _this3 = this;
          return {
            mousedown: function mousedown(event) {
              return _this3.onDownButtonMouseDown(event);
            },
            mouseup: function mouseup(event) {
              return _this3.onDownButtonMouseUp(event);
            },
            mouseleave: function mouseleave(event) {
              return _this3.onDownButtonMouseLeave(event);
            },
            keydown: function keydown(event) {
              return _this3.onDownButtonKeyDown(event);
            },
            keyup: function keyup(event) {
              return _this3.onDownButtonKeyUp(event);
            }
          };
        },
        formattedValue: function formattedValue() {
          var val = !this.modelValue && !this.allowEmpty ? 0 : this.modelValue;
          return this.formatValue(val);
        },
        getFormatter: function getFormatter() {
          return this.numberFormat;
        }
      },
      components: {
        INInputText: InputText__default["default"],
        INButton: Button__default["default"],
        AngleUpIcon: AngleUpIcon__default["default"],
        AngleDownIcon: AngleDownIcon__default["default"]
      }
    };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      var _component_INInputText = vue.resolveComponent("INInputText");
      var _component_INButton = vue.resolveComponent("INButton");
      return vue.openBlock(), vue.createElementBlock("span", vue.mergeProps({
        "class": _ctx.cx('root')
      }, _ctx.ptmi('root')), [vue.createVNode(_component_INInputText, vue.mergeProps({
        ref: "input",
        id: _ctx.inputId,
        role: "spinbutton",
        "class": [_ctx.cx('input'), _ctx.inputClass],
        style: _ctx.inputStyle,
        value: $options.formattedValue,
        "aria-valuemin": _ctx.min,
        "aria-valuemax": _ctx.max,
        "aria-valuenow": _ctx.modelValue,
        inputmode: _ctx.mode === 'decimal' && !_ctx.minFractionDigits ? 'numeric' : 'decimal',
        disabled: _ctx.disabled,
        readonly: _ctx.readonly,
        placeholder: _ctx.placeholder,
        "aria-labelledby": _ctx.ariaLabelledby,
        "aria-label": _ctx.ariaLabel,
        "aria-invalid": _ctx.invalid || undefined,
        onInput: $options.onUserInput,
        onKeydown: $options.onInputKeyDown,
        onKeypress: $options.onInputKeyPress,
        onPaste: $options.onPaste,
        onClick: $options.onInputClick,
        onFocus: $options.onInputFocus,
        onBlur: $options.onInputBlur
      }, _ctx.inputProps, {
        pt: _ctx.ptm('input'),
        unstyled: _ctx.unstyled
      }), null, 16, ["id", "class", "style", "value", "aria-valuemin", "aria-valuemax", "aria-valuenow", "inputmode", "disabled", "readonly", "placeholder", "aria-labelledby", "aria-label", "aria-invalid", "onInput", "onKeydown", "onKeypress", "onPaste", "onClick", "onFocus", "onBlur", "pt", "unstyled"]), _ctx.showButtons && _ctx.buttonLayout === 'stacked' ? (vue.openBlock(), vue.createElementBlock("span", vue.mergeProps({
        key: 0,
        "class": _ctx.cx('buttonGroup')
      }, _ctx.ptm('buttonGroup')), [vue.createVNode(_component_INButton, vue.mergeProps({
        "class": [_ctx.cx('incrementButton'), _ctx.incrementButtonClass]
      }, vue.toHandlers($options.upButtonListeners), {
        disabled: _ctx.disabled,
        tabindex: -1,
        "aria-hidden": "true"
      }, _ctx.incrementButtonProps, {
        pt: _ctx.ptm('incrementButton'),
        unstyled: _ctx.unstyled
      }), {
        icon: vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "incrementbuttonicon", {}, function () {
            return [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.incrementButtonIcon ? 'span' : 'AngleUpIcon'), vue.mergeProps({
              "class": _ctx.incrementButtonIcon
            }, _ctx.ptm('incrementButton')['icon'], {
              "data-pc-section": "incrementbuttonicon"
            }), null, 16, ["class"]))];
          })];
        }),
        _: 3
      }, 16, ["class", "disabled", "pt", "unstyled"]), vue.createVNode(_component_INButton, vue.mergeProps({
        "class": [_ctx.cx('decrementButton'), _ctx.decrementButtonClass]
      }, vue.toHandlers($options.downButtonListeners), {
        disabled: _ctx.disabled,
        tabindex: -1,
        "aria-hidden": "true"
      }, _ctx.decrementButtonProps, {
        pt: _ctx.ptm('decrementButton'),
        unstyled: _ctx.unstyled
      }), {
        icon: vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "decrementbuttonicon", {}, function () {
            return [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.decrementButtonIcon ? 'span' : 'AngleDownIcon'), vue.mergeProps({
              "class": _ctx.decrementButtonIcon
            }, _ctx.ptm('decrementButton')['icon'], {
              "data-pc-section": "decrementbuttonicon"
            }), null, 16, ["class"]))];
          })];
        }),
        _: 3
      }, 16, ["class", "disabled", "pt", "unstyled"])], 16)) : vue.createCommentVNode("", true), _ctx.showButtons && _ctx.buttonLayout !== 'stacked' ? (vue.openBlock(), vue.createBlock(_component_INButton, vue.mergeProps({
        key: 1,
        "class": [_ctx.cx('incrementButton'), _ctx.incrementButtonClass]
      }, vue.toHandlers($options.upButtonListeners), {
        disabled: _ctx.disabled,
        tabindex: -1,
        "aria-hidden": "true"
      }, _ctx.incrementButtonProps, {
        pt: _ctx.ptm('incrementButton'),
        unstyled: _ctx.unstyled
      }), {
        icon: vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "incrementbuttonicon", {}, function () {
            return [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.incrementButtonIcon ? 'span' : 'AngleUpIcon'), vue.mergeProps({
              "class": _ctx.incrementButtonIcon
            }, _ctx.ptm('incrementButton')['icon'], {
              "data-pc-section": "incrementbuttonicon"
            }), null, 16, ["class"]))];
          })];
        }),
        _: 3
      }, 16, ["class", "disabled", "pt", "unstyled"])) : vue.createCommentVNode("", true), _ctx.showButtons && _ctx.buttonLayout !== 'stacked' ? (vue.openBlock(), vue.createBlock(_component_INButton, vue.mergeProps({
        key: 2,
        "class": [_ctx.cx('decrementButton'), _ctx.decrementButtonClass]
      }, vue.toHandlers($options.downButtonListeners), {
        disabled: _ctx.disabled,
        tabindex: -1,
        "aria-hidden": "true"
      }, _ctx.decrementButtonProps, {
        pt: _ctx.ptm('decrementButton'),
        unstyled: _ctx.unstyled
      }), {
        icon: vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "decrementbuttonicon", {}, function () {
            return [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.decrementButtonIcon ? 'span' : 'AngleDownIcon'), vue.mergeProps({
              "class": _ctx.decrementButtonIcon
            }, _ctx.ptm('decrementButton')['icon'], {
              "data-pc-section": "decrementbuttonicon"
            }), null, 16, ["class"]))];
          })];
        }),
        _: 3
      }, 16, ["class", "disabled", "pt", "unstyled"])) : vue.createCommentVNode("", true)], 16);
    }

    script.render = render;

    return script;

})(primevue.button, primevue.icons.angledown, primevue.icons.angleup, primevue.inputtext, primevue.utils, primevue.basecomponent, primevue.inputnumber.style, Vue);
