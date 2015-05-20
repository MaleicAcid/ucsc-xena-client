/*global module: false */
'use strict';

// clinVar vcf: https://drive.google.com/uc?id=0Bzoozx2KZAPmb1NWQ1laZElzOXc&export=download
// 1000_genomes vcf: ftp://ftp-trace.ncbi.nih.gov/1000genomes/ftp/

// selected field for annotation display
var selectedKeys = {
    "Clinvar": ["INFO.CLNSIG","INFO.CLNORIGIN","INFO.CLNDBN","INFO.G5A","INFO.G5"],
    "1000_genomes":["INFO.AFR_AF","INFO.AMR_AF","INFO.EAS_AF","INFO.EUR_AF","INFO.SAS_AF"],
    "exac":["INFO.AC_AFR","INFO.AN_AFR","INFO.AC_AMR","INFO.AN_AMR",
        "INFO.AC_EAS","INFO.AN_EAS","INFO.AC_SAS","INFO.AN_SAS",
        "INFO.AC_FIN","INFO.AN_FIN","INFO.AC_NFE","INFO.AN_NFE",
        "INFO.AC_OTH","INFO.AN_OTH"]
};

var externalUrls = {
    //1000_genome http://browser.1000genomes.org/Homo_sapiens/Location/View/main?r=17:41234470-41234470
    "1000_genomes": {
        "url": "http://browser.1000genomes.org/Homo_sapiens/Location/View/main?r=$chr:$startPos-$endPos",
        "name": "1000 Genomes Browser",
        "type":"position"
    },
    // http://www.ncbi.nlm.nih.gov/clinvar/RCV000132455/
    "Clinvar":{
        "url":"http://www.ncbi.nlm.nih.gov/clinvar/$key/",
        "type":"key",
        "value":"INFO.CLNACC"
    },
    // http://databases.lovd.nl/shared/view/BRCA1?search_VariantOnGenome%2FDBID=%3D%22BRCA1_000010%22
    "lovd":{
        "url":"http://databases.lovd.nl/shared/view/BRCA1?search_VariantOnGenome%2FDBID=%3D%22$key%22",
        "type":"key",
        "value":"INFO.db_id"
    },
    // http://exac.broadinstitute.org/variant/17-41276080-G-A
    "exac":{
        "url":"http://exac.broadinstitute.org/variant/$chr-$startPos-$reference-$alt",
        "name": "ExAC Browser",
        "type":"position"
    }
};

var variantSets = [
    {
        "referenceSetId": "",
        "id": "Clinvar",
        "datasetId": "NotImplemented",
        "metadata": [
            {
                    "info": {
                        "0": "unknown",
                        "1": "germline",
                        "2": "somatic",
                        "3": "both germline and somatic",
                        "4": "inherited",
                        "8": "paternal",
                        "16": "maternal",
                        "32": "de-novo",
                        "64": "biparental",
                        "128": "uniparental",
                        "256": "not-tested",
                        "512": "tested-inconclusive",
                        "1073741824": "other"
                    },
                    "description": "Allele Origin",
                    "number": ".",
                    "value": "",
                    "key": "INFO.CLNORIGIN",
                    "type": "String",
                    "id": ""
                },
            {
                "info": {
                    "0": "uncertain significance",
                    "1": "not provided",
                    "2": "Benign",
                    "3": "Likely benign",
                    "4": "Likely pathogenic",
                    "5": "Pathogenic",
                    "6": "Drug response",
                    "7": "Histocompatibility",
                    "255": "Other"
                },
                "description": "Variant Clinical Significance",
                "number": ".",
                "value": "",
                "key": "INFO.CLNSIG",
                "type": "String",
                "id": ""
            }
        ]
    }
];


module.exports = {
    selectedKeys: selectedKeys,
    variantSets: variantSets,
    externalUrls: externalUrls
};