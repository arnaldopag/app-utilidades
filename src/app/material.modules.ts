import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconAnchor } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatInputModule,
  MatListModule,
  MatIconAnchor,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatTable,
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule {}
