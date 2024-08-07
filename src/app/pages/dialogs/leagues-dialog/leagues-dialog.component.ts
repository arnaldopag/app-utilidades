import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

// Original code

import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from '../../../material.modules';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-leagues-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatDialogContent,
    MaterialModule
  ],
  templateUrl: './leagues-dialog.component.html',
  styleUrl: './leagues-dialog.component.css',
})
export class LeaguesDialogComponent implements OnInit {
  public leagueForm: FormGroup | undefined;
  constructor(public dialogRef: MatDialogRef<LeaguesDialogComponent>,
    private lb:FormBuilder)  {}

  ngOnInit(): void {
    this.leagueForm = this.lb.group({
      logo: ['', [Validators.required]],
      name: ['', [Validators.required]],
      country: ['', [Validators.required]],
      abbreviation: ['', [Validators.required]],
    });
  }
  cancel(): void {
    this.dialogRef.close();
  }
}
