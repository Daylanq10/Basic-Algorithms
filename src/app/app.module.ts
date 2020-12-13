import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeInfoComponent } from './home-info/home-info.component';
import { LinearSearchComponent } from './linear-search/linear-search.component';
import { BinarySearchComponent } from './binary-search/binary-search.component';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { QuickSortComponent } from './quick-sort/quick-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeInfoComponent,
    LinearSearchComponent,
    BinarySearchComponent,
    SelectionSortComponent,
    BubbleSortComponent,
    MergeSortComponent,
    QuickSortComponent,
    InsertionSortComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
          {path: 'home-info', component: HomeInfoComponent},
          {path: 'linear-search', component: LinearSearchComponent}
        ]),
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
