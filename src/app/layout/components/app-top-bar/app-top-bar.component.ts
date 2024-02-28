import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink} from "@angular/router";
import {LayoutService} from "../../services/layout.service";
import {CommonModule} from "@angular/common";
import {MenuItem} from "primeng/api";
import {AppsComponent} from "../shared-component/apps/apps.component";
import {ProfileComponent} from "../shared-component/profile/profile.component";
import {SettingComponent} from "../shared-component/setting/setting.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,

    //Component
    AppsComponent,
    ProfileComponent,
    SettingComponent
  ],
  templateUrl: './app-top-bar.component.html',
  styleUrl: './app-top-bar.component.scss'
})
export class AppTopBarComponent {

  items!: MenuItem[];

  @ViewChild('menuButton') menuButton!: ElementRef;

  @ViewChild('topBarMenuButton') topbarMenuButton!: ElementRef;

  @ViewChild('topBarMenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) {
  }

  getLogoWidth(): number {
    return 245 + ((14 - parseInt(this.layoutService.config().scale.toFixed())) * 3);
  }
}
