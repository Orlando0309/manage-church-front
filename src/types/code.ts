// interfaces/Codemouvement.ts

export interface Codemouvement {
    id: number; 
    rootcode: number;
    code: string;
    label: string;
    flux:string

  }
export interface CodemouvementInput {
    rootcode: number;
    code: string;
    label: string;
    flux:string
  }
  