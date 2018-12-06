import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {FuncionarioComponent} from './funcionario/funcionario.component';
import {CargoComponent} from './cargo/cargo.component';
import {BalancaComponent} from './balanca/balanca.component';
import {ProdutoComponent} from './produto/produto.component';
import {EmbalagemComponent} from './embalagem/embalagem.component';
import {AmostraComponent} from './amostra/amostra.component';
import {CalibragemComponent} from './calibragem/calibragem.component';
import {AnalisesComponent} from './analises/analises.component';
import { LoginComponent } from './login/login.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'funcionario', component: FuncionarioComponent},
  {path: 'cargo', component: CargoComponent},
  {path: 'balanca', component: BalancaComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'embalagem', component: EmbalagemComponent},
  {path: 'amostra', component: AmostraComponent},
  {path: 'calibragem', component: CalibragemComponent},
  {path: 'analises', component: AnalisesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'relatorio', component: RelatorioComponent}
];
