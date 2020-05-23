"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dataString) {
    // example 27/10/2018
    var dateParts = dataString
        .split('/') /* ['27', '10', '2018'] */
        .map(function (value) {
        return parseInt(value);
    });
    // return arrays display the date as Year, Month, and Day
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
