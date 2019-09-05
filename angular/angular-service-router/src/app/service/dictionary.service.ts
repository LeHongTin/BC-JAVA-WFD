import { Injectable } from '@angular/core';
import { IWord } from '../models/IWord';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() { }

  private words: IWord[] = [
    { key: 'one', meaning:'mot' },
    { key: 'two', meaning: 'hai'},
    {key: 'three', meaning: 'ba'},
  ];

  search(word: string): string {
    if(!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLocaleLowerCase());
    if(w){
      return w.meaning;
    }
    return 'Not found!';
  }
}
