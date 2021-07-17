import { Analyte } from '../models/analysis-result';

export class Product{
    name: string;
    thc: number;
    cbd: number;
    cannaboids: number;
    info: string;
    photo: string;
    aromas: string[];
    terpenes: number;
    analyte_terp_labels: string[];
    analyte_terp_results: number[];
    analyte_cann_labels: string[];
    analyte_cann_results: number[];
}
//analyte_cann_labels:    ['THCa', 'Δ9-THC', 'Δ9-THC', 'THCV', 'CBDa', 'CBD', 'CBDV', 'CBN', 'CBGa', 'CBG', 'CBC'],
//analyte_terp_labels: ['β-Myrcene', 'β-Caryophyllene', 'α-Pinene', 'δ-Limonene', 'Linalool', 'α-Humulene', 'α-Bisabolol', 'β-Pinene', 'trans-Ocimene', 'Caryophyllene Oxide', 'cis-Nerolidol', 'Terpinolene', 'α-Terpinene', 'Camphene', 'cis-Ocimene', 'δ-3-Carene', 'Eucalyptol', 'γ-Terpinene', 'Geraniol', 'Guaiol', 'Isopulegol', 'p-Cymene', 'trans-Nerolidol'],
