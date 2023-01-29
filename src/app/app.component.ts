import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'polypsy'
  presentYear = new Date().getUTCFullYear()

  languageActivate: boolean = false

  language: string = 'EN'

  constructor (private translate: TranslateService) {
    translate.addLangs(['en', 'ru', 'ua'])
    translate.setDefaultLang('en')
    translate.use('en')
  }

  changeLanguage (language: string): void {
    this.language = language

    this.translate.use(language.toLowerCase())

  }
}
