import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';

const shoppingListRuotes: Routes = [
    {path: '', component: ShoppingListComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(shoppingListRuotes) // this is not the root module, se always have to be ForChild()
    ],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}