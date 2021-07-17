export class Analyte{
    // thca: {
    //     result: number
    // };
    // delta_9_thc: {
    //     result: number
    // };
    // delta_8_thc: {
    //     result: number
    // };
    // thcv: {
    //     result: number
    // };
    // cbda: {
    //     result: number
    // };
    // cbd: {
    //     result: number
    // };
    // cbdv: {
    //     result: number
    // };
    // cbdn: {
    //     result: number
    // };
    // cbga: {
    //     result: number
    // };
    // cbg: {
    //     result: number
    // };
    // cbc: {
    //     result: number
    // };
    terpenes: {
        labels: string[];
        results: number[];
    };
    cannaboids: {
        labels: string[];
        results: number[];
    };
    
    Analyte(terp_labels: string[],
        terp_results: number[], 
        cann_labels: string[], 
        cann_results: number[]){

        this.terpenes.labels = terp_labels;
        this.terpenes.results = terp_results;
        this.cannaboids.labels = cann_labels;
        this.cannaboids.results = cann_results;
    }
}

export class TerpenesAnalyte{
    beta_myrcene: {
        result: number
    };
    beta_caryophyllene: {
        result: number
    };
    alpha_pinene: {
        result: number
    };
    delta_limonene: {
        result: number
    };
    linalool: {
        result: number
    };
    alpha_humulene: {
        result: number
    };
    alpha_bisabolol: {
        result: number
    };
    beta_pinene: {
        result: number
    };
    trans_ocimene: {
        result: number
    };
    caryophyllene_oxide: {
        result: number
    };
    cis_nerolidol: {
        result: number
    };
    terpinolene: {
        result: number
    };
    alpha_terpinene: {
        result: number
    };
    camphene: {
        result: number
    };
    cis_ocimene: {
        result: number
    };
    gama_3_carene: {
        result: number
    };
    eucalyptol: {
        result: number
    };
    gamma_terpinene: {
        result: number
    };
    geraniol: {
        result: number
    };
    guaiol: {
        result: number
    };
    isopulegol: {
        result: number
    };
    p_cymene: {
        result: number
    };
    trans_nerolidol: {
        result: number
    };
    
}