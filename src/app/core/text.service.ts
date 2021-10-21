import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() {
  }

  static toLowerCase(text) {
    return text.trim().toLowerCase();
  }

  static normalize(text: string) {
    return text.trim()
      .toLowerCase()
      .replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
      .replace(/e/g, '(e|è|é|ê|ë)')
      .replace(/a/g, '(a|à|tá|â)')
      .replace(/i/g, '(i|ì|í|î|ï)')
      .replace(/n/g, '(ñ|n)')
      .replace(/o/g, '(o|ò|ó|ô|œ)')
      .replace(/u/g, '(u|ù|ú|û|ü)')
      .replace(/y/g, '(y|ý|ÿ)');
  }

  static robotize(text: string) {
    return text.trim()
      .toLowerCase()
      // .replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
      .replace(/(e|è|é|ê|ë)/g, 'e')
      .replace(/(a|à|tá|â)/g, 'a')
      .replace(/(i|ì|í|î|ï)/g, 'i')
      .replace(/(ñ|n)/g, 'n')
      .replace(/(o|ò|ó|ô|œ)/g, 'o')
      .replace(/(u|ù|ú|û|ü)/g, 'u')
      .replace(/(y|ý|ÿ)/g, 'y');
  }

  static jsonStringify(json) {
    try {

      return JSON.stringify(json);
    } catch (e) {
      return {};
    }
  }
}
