import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CepPipe } from './cep.pipe';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CpfPipe } from './cpf.pipe';
import { JoinerPipe } from './joiner.pipe';
registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent, CepPipe, CpfPipe, JoinerPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
