import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesPageComponent } from './heroes-page/heroes-page.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ListPageComponent } from './list-page/list-page.component';


@NgModule({
  declarations: [
    HeroesPageComponent,
    LayoutPageComponent,
    SearchPageComponent,
    ListPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]

})
export class HeroesModule { }
