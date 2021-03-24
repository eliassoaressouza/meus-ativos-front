import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClassificacaoComponent } from "./components/classificacao/classificacao.component";
import { AuthGuard } from "./core/auth/auth.guard";
import { HomeComponent } from "./paginas/home/home.component";
import { LoginComponent } from "./paginas/login/login.component";
import { MasterComponent } from "./paginas/master/master.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },

  {
    path: "",
    component: MasterComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "home",
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "classificacao",
        component: ClassificacaoComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
