import {MatchResult} from './MatchResult';
/**
 * @description
 * @type {MatchData} is a
 * @typedef tuple which allows us to describe
 * the column order of the row of data
 */
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
