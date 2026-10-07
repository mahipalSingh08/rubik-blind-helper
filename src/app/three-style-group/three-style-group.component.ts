import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import edgeUnique from '../shared/edge-unique.json';
import cornerUnique from '../shared/corner-unique.json';
import { DEFAULT_EDGES, DEFAULT_CORNERS } from '../shared/default-algs';

interface GroupedCase {
  letterPair: string;
  setup: string;
  commutator: string;
  algorithm: string;
  isMain: boolean;
}

interface CommutatorFamily {
  coreCommutator: string;
  cases: GroupedCase[];
  selectedVariant: string | null;
  selectedAlgorithm: string | null;
  selectedCommutatorStr: string | null;
}

@Component({
  selector: 'app-three-style-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './three-style-group.component.html',
  styleUrl: './three-style-group.component.css'
})
export class ThreeStyleGroupComponent implements OnInit {
  currentType: 'edge' | 'corner' = 'edge';
  
  edgeFamilies: CommutatorFamily[] = [];
  cornerFamilies: CommutatorFamily[] = [];

  ngOnInit() {
    this.edgeFamilies = this.parseFamilies(edgeUnique, DEFAULT_EDGES);
    this.cornerFamilies = this.parseFamilies(cornerUnique, DEFAULT_CORNERS);
  }

  parseFamilies(uniqueJson: any, defaultDb: any): CommutatorFamily[] {
    const familiesMap = new Map<string, GroupedCase[]>();

    const processCase = (caseName: string, isMain: boolean, baseData: any) => {
      if (!caseName) return;
      
      const algData = defaultDb[caseName];
      // If the case isn't in defaultDb, we try to derive it or leave it blank
      let commStr = algData?.short || '';
      let algStr = algData?.long || '';

      if (!commStr && baseData) {
        // Fallback if missing in defaultDb but we know it's a derived case
        // This is a naive fallback; in reality they should be in defaultDb
        commStr = `Unknown (${caseName})`;
      }

      const { setup, core } = this.extractSetupAndCore(commStr);

      if (!familiesMap.has(core)) {
        familiesMap.set(core, []);
      }
      
      // Prevent duplicates
      if (!familiesMap.get(core)!.some(c => c.letterPair === caseName)) {
        familiesMap.get(core)!.push({
          letterPair: caseName,
          setup: setup,
          commutator: commStr,
          algorithm: algStr,
          isMain: setup === ''
        });
      }
    };

    for (const [key, data] of Object.entries(uniqueJson) as any) {
      // 1. Process base case
      processCase(key, true, data);

      // 2. Process derived cases
      if (data.derive) {
        processCase(data.derive.inverse, false, data);
        processCase(data.derive.mirror, false, data);
        processCase(data.derive.mirror_inverse, false, data);
      }
    }

    const families: CommutatorFamily[] = [];
    familiesMap.forEach((cases, core) => {
      // Sort cases: main cases first, then alphabetically
      cases.sort((a, b) => {
        if (a.isMain && !b.isMain) return -1;
        if (!a.isMain && b.isMain) return 1;
        return a.letterPair.localeCompare(b.letterPair);
      });

      // Default selection is the main case, or the first one if none
      const defaultCase = cases[0];
      
      families.push({
        coreCommutator: core,
        cases: cases,
        selectedVariant: defaultCase.letterPair,
        selectedAlgorithm: defaultCase.algorithm,
        selectedCommutatorStr: defaultCase.commutator
      });
    });

    // Sort families by number of cases (descending), then alphabetically by core
    families.sort((a, b) => {
      if (b.cases.length !== a.cases.length) {
        return b.cases.length - a.cases.length;
      }
      return a.coreCommutator.localeCompare(b.coreCommutator);
    });

    return families;
  }

  extractSetupAndCore(comm: string): { setup: string, core: string } {
    let setup = '';
    let core = comm.trim();
    
    // Format: [Setup : [A, B]]
    if (core.includes(':')) {
      const parts = core.split(':');
      setup = parts[0].trim();
      if (setup.startsWith('[')) setup = setup.substring(1).trim();
      
      core = parts.slice(1).join(':').trim();
      if (core.endsWith(']')) core = core.slice(0, -1).trim();
      // Remove surrounding brackets of the core if they exist
      if (core.startsWith('[')) core = core.substring(1).trim();
      if (core.endsWith(']')) core = core.slice(0, -1).trim();
    } else {
      // Pure commutator: [A, B]
      if (core.startsWith('[')) core = core.substring(1).trim();
      if (core.endsWith(']')) core = core.slice(0, -1).trim();
    }

    return { setup, core };
  }

  hideSingles = true;

  setType(type: 'edge' | 'corner') {
    this.currentType = type;
  }

  toggleHideSingles() {
    this.hideSingles = !this.hideSingles;
  }

  get currentFamilies(): CommutatorFamily[] {
    const list = this.currentType === 'edge' ? this.edgeFamilies : this.cornerFamilies;
    if (this.hideSingles) {
      return list.filter(f => f.cases.length > 1);
    }
    return list;
  }

  selectVariant(family: CommutatorFamily, c: GroupedCase) {
    family.selectedVariant = c.letterPair;
    family.selectedAlgorithm = c.algorithm;
    family.selectedCommutatorStr = c.commutator;
  }
}
