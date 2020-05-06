// mkdirp@0.5.5
//
// Copyright 2010 James Halliday (mail@substack.net)
//
// This project is free software released under the MIT/X11 license:
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).mkdirp=e()}}((function(){return function e(n,t,r){function o(f,u){if(!t[f]){if(!n[f]){var d="function"==typeof require&&require;if(!u&&d)return d(f,!0);if(i)return i(f,!0);var c=new Error("Cannot find module '"+f+"'");throw c.code="MODULE_NOT_FOUND",c}var a=t[f]={exports:{}};n[f][0].call(a.exports,(function(e){return o(n[f][1][e]||e)}),a,a.exports,e,n,t,r)}return t[f].exports}for(var i="function"==typeof require&&require,f=0;f<r.length;f++)o(r[f]);return o}({1:[function(e,n,t){var r=e("path"),o=e("fs"),i=parseInt("0777",8);function f(e,n,t,u){"function"==typeof n?(t=n,n={}):n&&"object"==typeof n||(n={mode:n});var d=n.mode,c=n.fs||o;void 0===d&&(d=i),u||(u=null);var a=t||function(){};e=r.resolve(e),c.mkdir(e,d,(function(t){if(!t)return a(null,u=u||e);switch(t.code){case"ENOENT":if(r.dirname(e)===e)return a(t);f(r.dirname(e),n,(function(t,r){t?a(t,r):f(e,n,a,r)}));break;default:c.stat(e,(function(e,n){e||!n.isDirectory()?a(t,u):a(null,u)}))}}))}n.exports=f.mkdirp=f.mkdirP=f,f.sync=function e(n,t,f){t&&"object"==typeof t||(t={mode:t});var u=t.mode,d=t.fs||o;void 0===u&&(u=i),f||(f=null),n=r.resolve(n);try{d.mkdirSync(n,u),f=f||n}catch(o){switch(o.code){case"ENOENT":f=e(r.dirname(n),t,f),e(n,t,f);break;default:var c;try{c=d.statSync(n)}catch(e){throw o}if(!c.isDirectory())throw o}}return f}},{fs:void 0,path:void 0}]},{},[1])(1)}));