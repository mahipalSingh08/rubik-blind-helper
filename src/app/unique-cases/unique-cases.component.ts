import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import edgeUnique from '../shared/edge-unique.json';
import cornerUnique from '../shared/corner-unique.json';
import { DEFAULT_EDGES, DEFAULT_CORNERS } from '../shared/default-algs';

interface UniqueCase {
  base: string;
  inverse: string;
  mirror: string;
  mirrorInverse: string;
  selectedVariant: string;
  selectedAlgorithm: string;
}

@Component({
  selector: 'app-unique-cases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unique-cases.component.html',
  styleUrl: './unique-cases.component.css'
})
export class UniqueCasesComponent implements OnInit {
  currentType: 'edge' | 'corner' = 'edge';
  
  edgeCases: UniqueCase[] = [];
  cornerCases: UniqueCase[] = [];

  ngOnInit() {
    this.edgeCases = this.parseUniqueData(edgeUnique, DEFAULT_EDGES);
    this.cornerCases = this.parseUniqueData(cornerUnique, DEFAULT_CORNERS);
  }

  parseUniqueData(uniqueJson: any, defaultDb: any): UniqueCase[] {
    const result: UniqueCase[] = [];
    for (const key of Object.keys(uniqueJson)) {
      const data = uniqueJson[key];
      const baseAlg = defaultDb[key];
      
      result.push({
        base: key,
        inverse: data.derive?.inverse || '',
        mirror: data.derive?.mirror || '',
        mirrorInverse: data.derive?.mirror_inverse || '',
        selectedVariant: key,
        selectedAlgorithm: baseAlg?.long || data.algorithm || ''
      });
    }
    return result;
  }

  setType(type: 'edge' | 'corner') {
    this.currentType = type;
  }

  get currentCases(): UniqueCase[] {
    return this.currentType === 'edge' ? this.edgeCases : this.cornerCases;
  }

  getDb(): any {
    return this.currentType === 'edge' ? DEFAULT_EDGES : DEFAULT_CORNERS;
  }

  selectVariant(item: UniqueCase, variant: string) {
    if (!variant) return;
    item.selectedVariant = variant;
    
    const db = this.getDb();
    const algData = db[variant];
    
    if (algData) {
      item.selectedAlgorithm = algData.long;
    } else {
      item.selectedAlgorithm = 'Algorithm not found';
    }
  }
}
