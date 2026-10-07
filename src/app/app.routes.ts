import { Routes } from '@angular/router';
import { WordAssociationComponent } from './word-association/word-association.component';
import { MemoGeneratorComponent } from './memo-generator/memo-generator.component';
import { MultiBlindComponent } from './multi-blind/multi-blind.component';
import { PracticeComponent } from './practice/practice.component';
import { MethodReferenceComponent } from './method-reference/method-reference.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { CubeVisualizerComponent } from './cube-visualizer/cube-visualizer.component';
import { MemoHelperComponent } from './memo-helper/memo-helper.component';
import { LearnComponent } from './learn/learn.component';
import { FiveStyleDbComponent } from './five-style-db/five-style-db.component';
import { UniqueCasesComponent } from './unique-cases/unique-cases.component';
import { ThreeStyleGroupComponent } from './three-style-group/three-style-group.component';

export const routes: Routes = [
  { path: 'word-association', component: WordAssociationComponent },
  { path: 'memo-generator', component: MemoGeneratorComponent },
  { path: 'multi-blind', component: MultiBlindComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'method-reference', component: MethodReferenceComponent },
  { path: 'algorithms', component: AlgorithmsComponent },
  { path: '5-style-db', component: FiveStyleDbComponent },
  { path: '3-style-unique', component: UniqueCasesComponent },
  { path: '3-style-group', component: ThreeStyleGroupComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'cube-visualizer', component: CubeVisualizerComponent },
  { path: 'memo-helper', component: MemoHelperComponent },
  { path: '', redirectTo: '/word-association', pathMatch: 'full' }
];
