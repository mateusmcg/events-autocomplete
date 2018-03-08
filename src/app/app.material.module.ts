import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule],
    exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule],
})
export class AppMaterialModule { }