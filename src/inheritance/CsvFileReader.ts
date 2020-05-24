import fs from 'fs';

/**
 * @description You have to pass in a generic <T>
 */
export abstract class CsvFileReader<T> {
  // data is a two dimensional array of strings
  data: T[] = [];

  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
