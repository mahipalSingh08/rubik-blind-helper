import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { FiveStyleAlgItem } from './default5-algo';

export interface PairItem {
  pair: string;
  count: number;
}

export interface PairsResponse {
  piece_type: string;
  letter: string;
  total_pairs: number;
  pairs: PairItem[];
}

export interface AlgListResponse {
  piece_type: string;
  pair?: string;
  total: number;
  page: number;
  page_size: number;
  items: FiveStyleAlgItem[];
}

export interface BackendHealth {
  status: string;
  database: string;
  counts: {
    edges: number;
    corners: number;
    total: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class FiveStyleService {
  private readonly baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  /**
   * Health check to verify FastAPI connection and Atlas MongoDB status
   */
  checkHealth(): Observable<BackendHealth | null> {
    return this.http.get<BackendHealth>(`${this.baseUrl}/health`).pipe(
      catchError(err => {
        console.warn('FastAPI backend health check failed:', err);
        return of(null);
      })
    );
  }

  /**
   * Get valid starting letters for corners or edges
   */
  getLetters(pieceType: 'edges' | 'corners'): Observable<{ piece_type: string; letters: string[] }> {
    return this.http.get<{ piece_type: string; letters: string[] }>(
      `${this.baseUrl}/api/5style/${pieceType}/letters`
    );
  }

  /**
   * Fetch 2-letter pairs of a single letter (e.g. 'A' -> ['AB', 'AD', 'AF', ...])
   */
  getPairsForLetter(
    pieceType: 'edges' | 'corners',
    letter: string,
    moves?: string
  ): Observable<PairsResponse> {
    let params = new HttpParams().set('letter', letter.toUpperCase());
    if (moves && moves !== 'all') {
      params = params.set('moves', moves);
    }
    return this.http.get<PairsResponse>(
      `${this.baseUrl}/api/5style/${pieceType}/pairs`,
      { params }
    );
  }

  /**
   * Fetch 5-style algorithms starting with a specific 2-letter pair
   */
  getAlgorithmsByPair(
    pieceType: 'edges' | 'corners',
    pair: string,
    moves?: string,
    page: number = 1,
    pageSize: number = 100
  ): Observable<AlgListResponse> {
    let params = new HttpParams()
      .set('pair', pair.toUpperCase())
      .set('page', page.toString())
      .set('page_size', pageSize.toString());

    if (moves && moves !== 'all') {
      params = params.set('moves', moves);
    }

    return this.http.get<AlgListResponse>(
      `${this.baseUrl}/api/5style/${pieceType}/by-pair`,
      { params }
    );
  }

  /**
   * Fetch a single 4-letter algorithm (e.g. 'ABUD' or 'BEWQ')
   */
  getAlgorithm(
    pieceType: 'edges' | 'corners',
    sequence: string
  ): Observable<FiveStyleAlgItem> {
    return this.http.get<FiveStyleAlgItem>(
      `${this.baseUrl}/api/5style/${pieceType}/${sequence.toUpperCase()}`
    );
  }

  /**
   * Search algorithms by sequence query or letters
   */
  searchAlgorithms(
    pieceType: 'edges' | 'corners',
    query?: string,
    letter?: string,
    moves?: string,
    page: number = 1,
    pageSize: number = 50
  ): Observable<{ total: number; page: number; page_size: number; items: FiveStyleAlgItem[] }> {
    let params = new HttpParams()
      .set('piece_type', pieceType)
      .set('page', page.toString())
      .set('page_size', pageSize.toString());

    if (query) {
      params = params.set('query', query.toUpperCase());
    }
    if (letter) {
      params = params.set('letter', letter.toUpperCase());
    }
    if (moves && moves !== 'all') {
      params = params.set('moves', moves);
    }

    return this.http.get<{ total: number; page: number; page_size: number; items: FiveStyleAlgItem[] }>(
      `${this.baseUrl}/api/5style/search`,
      { params }
    );
  }

  /**
   * Update an algorithm in MongoDB Atlas
   */
  updateAlgorithm(
    pieceType: 'edges' | 'corners',
    sequence: string,
    data: { commutator?: string; algorithm?: string; moves?: number; setupmove?: string }
  ): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(
      `${this.baseUrl}/api/5style/${pieceType}/${sequence.toUpperCase()}`,
      data
    );
  }
}
