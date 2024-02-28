import {Component, OnInit, ViewChild} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {Listbox, ListboxModule} from "primeng/listbox";
import {PaginatorModule} from "primeng/paginator";

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [
        OverlayPanelModule,
        ListboxModule,
        ButtonModule,
        PaginatorModule
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
    countries!: any[];
    @ViewChild('myListBox') myListBoxComponent!: Listbox;

    ngOnInit() {
        this.countries = [
            {name: 'Australia', code: 'AU'},
            {name: 'Brazil', code: 'BR'},
            {name: 'China', code: 'CN'},
            {name: 'Egypt', code: 'EG'},
            {name: 'France', code: 'FR'}
        ];
    }

    clickOption(event: { value: any; }) {
        this.myListBoxComponent.modelValue.set(null);
        console.warn(event.value);
    }
}
