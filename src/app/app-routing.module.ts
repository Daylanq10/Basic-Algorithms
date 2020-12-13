import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeInfoComponent} from './home-info/home-info.component';
import { LinearSearchComponent} from './linear-search/linear-search.component';
import { BinarySearchComponent} from './binary-search/binary-search.component';
import { SelectionSortComponent} from './selection-sort/selection-sort.component';
import { BubbleSortComponent} from './bubble-sort/bubble-sort.component';
import { MergeSortComponent} from './merge-sort/merge-sort.component';
import { QuickSortComponent} from './quick-sort/quick-sort.component';
import { InsertionSortComponent} from './insertion-sort/insertion-sort.component';

const routes: Routes = [
  {path: '/app/home-info', component: HomeInfoComponent},
  {path: 'linear-search', component: LinearSearchComponent},
  {path: 'binary-search', component: BinarySearchComponent},
  {path: 'selection-sort', component: SelectionSortComponent},
  {path: 'bubble-sort', component: BubbleSortComponent},
  {path: 'merge-sort', component: MergeSortComponent},
  {path: 'quick-sort', component: QuickSortComponent},
  {path: 'insertion-sort', component: InsertionSortComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
