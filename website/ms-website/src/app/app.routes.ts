import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { AcademicsComponent } from './academics/academics.component';
import { ClassesComponent } from './classes/classes.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'about', component: AboutComponent},
    { path: 'admissions', component: AdmissionsComponent },
    { path: 'academics', component: AcademicsComponent },
    { path: 'classes', component: ClassesComponent },
    { path: 'facilities', component: FacilitiesComponent },
    { path: 'events', component: EventsComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contact', component: ContactComponent },
    
];
