import { Injectable } from '@angular/core';
import { Language } from '@app/layout/models/language';
@Injectable({
  providedIn: 'root'
})
export class LanguageList {
  ListLn: Array<Language> = Array(
    { value: 'En', name: 'English', isRTL: false },
    { value: 'Ar', name: 'عربي', isRTL: true }
  );
  constructor() {}
}
