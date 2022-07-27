import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PlaceHolderDirective } from "../placeholder/placeholder.directive";
import { AlertComponent } from "./alert.component";
import { DropDdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner";

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceHolderDirective,
        DropDdownDirective
    ],
    imports: [
        CommonModule
    ],

    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceHolderDirective,
        DropDdownDirective,
        CommonModule
    ],
    entryComponents: [
        AlertComponent
      ]
})

export class SharedModule{

}