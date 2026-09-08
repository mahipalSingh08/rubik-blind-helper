import { Routes } from '@angular/router';
import { WordAssociationComponent } from './word-association/word-association.component';
import { MemoGeneratorComponent } from './memo-generator/memo-generator.component';
import { MethodReferenceComponent } from './method-reference/method-reference.component';
import { SetupMovesComponent } from './setup-moves/setup-moves.component';
import { CubeVisualizerComponent } from './cube-visualizer/cube-visualizer.component';
import { MemoHelperComponent } from './memo-helper/memo-helper.component';

export const routes: Routes = [
  { path: 'word-association', component: WordAssociationComponent },
  { path: 'memo-generator', component: MemoGeneratorComponent },
  { path: 'method-reference', component: MethodReferenceComponent },
  { path: 'setup-moves', component: SetupMovesComponent },
  { path: 'cube-visualizer', component: CubeVisualizerComponent },
  { path: 'memo-helper', component: MemoHelperComponent },
  { path: '', redirectTo: '/word-association', pathMatch: 'full' }
];
