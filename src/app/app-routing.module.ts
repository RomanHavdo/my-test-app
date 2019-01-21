import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/users', pathMatch:'full'},
    {path: 'users', component:UsersComponent},
    {path: 'posts', component:PostsComponent},
    {path: 'posts/:id',component:PostComponent},
    {path: 'posts/:id/edit',component:EditComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}