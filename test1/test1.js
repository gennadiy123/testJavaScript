'use strict';

class StringBuilder {
  constructor(baseString) {
    this.baseString = '';
    this._value = baseString;
  }
  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this._value;
  }
  pad(str) {
    this._value = str + this._value + str;
  }
}

const builder = new StringBuilder('.');


builder.append('^');

builder.prepend('^');

builder.pad('=');
console.log(builder.value); 
