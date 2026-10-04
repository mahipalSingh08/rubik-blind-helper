export interface AlgDef {
  short: string;
  long: string;
}

export const DEFAULT_SPECIAL: Record<string, AlgDef> = {
  "PARITY": { short: "R U R' F' R U R' U' R' F R2 U' R' U'", long: "" },
  "EDGE_FLIPS": { short: "M' U M' U M' U M' U2 M' U M' U M' U M' U2", long: "" },
  "CORNER_TWISTS": { short: "(R' D R D') x2 U (D R' D' R) x2 U'", long: "" }
};

export const DEFAULT_EDGES: Record<string, AlgDef> = {
  "AB": {
    "short": "[R2 D' : [U2, M']]",
    "long": "R2 D' U2 M' U2 M D R2"
  },
  "AD": {
    "short": "[L2 D : [U2, M']]",
    "long": "L2 D U2 M' U2 M D' L2"
  },
  "AE": {
    "short": "[S' D : [U2, M']]",
    "long": "S' D U2 M' U2 M D' S"
  },
  "AF": {
    "short": "[U' : [R' E R, U2]]",
    "long": "U' R' E R U2 R' E' R U'"
  },
  "AG": {
    "short": "[U : [L' E' L, U2]]",
    "long": "U L' E' L U2 L' E L U"
  },
  "AH": {
    "short": "[F E2 F', U2]",
    "long": "F E2 F' U2 F E2 F' U2"
  },
  "AJ": {
    "short": "[R' D' : [U2, M']]",
    "long": "R' D' U2 M' U2 M D R"
  },
  "AK": {
    "short": "[F E F', U2]",
    "long": "F E F' U2 F E' F' U2"
  },
  "AL": {
    "short": "[L D : [U2, M']]",
    "long": "L D U2 M' U2 M D' L'"
  },
  "AM": {
    "short": "[S D' : [U2, M']]",
    "long": "S D' U2 M' U2 M D S'"
  },
  "AN": {
    "short": "[F' E2 F, U2]",
    "long": "F' E2 F U2 F' E2 F U2"
  },
  "AO": {
    "short": "[U' : [R E R', U2]]",
    "long": "U' R E R' U2 R E' R' U'"
  },
  "AP": {
    "short": "[U : [L E' L', U2]]",
    "long": "U L E' L' U2 L E L' U"
  },
  "AR": {
    "short": "[L' D : [U2, M']]",
    "long": "L' D U2 M' U2 M D' L"
  },
  "AS": {
    "short": "[u M' : [U M' U', U2]]",
    "long": "u M' U M' U2 M U M u'"
  },
  "AT": {
    "short": "[R D : [U2, M']]",
    "long": "R D U2 M' U2 M D' R'"
  },
  "AU": {
    "short": "[U2, M']",
    "long": "U2 M' U2 M"
  },
  "AV": {
    "short": "[D' : [U2, M']]",
    "long": "D' U2 M' U2 M D"
  },
  "AW": {
    "short": "[M, U2]",
    "long": "M U2 M' U2"
  },
  "AX": {
    "short": "[D : [U2, M']]",
    "long": "D U2 M' U2 M D'"
  },
  "BA": {
    "short": "[R2 D' : [M', U2]]",
    "long": "R2 D' M' U2 M U2 D R2"
  },
  "BD": {
    "short": "[M2 U : [M, U2]]",
    "long": "M2 U M U2 M' U M2"
  },
  "BE": {
    "short": "[S', L F' L']",
    "long": "S' L F' L' S L F L'"
  },
  "BF": {
    "short": "[U', R' E R]",
    "long": "U' R' E R U R' E' R"
  },
  "BG": {
    "short": "[U : [L' E' L, U]]",
    "long": "U L' E' L U L' E L U2"
  },
  "BH": {
    "short": "[U', R E' R']",
    "long": "U' R E' R' U R E R'"
  },
  "BJ": {
    "short": "[R : [F E F', R]]",
    "long": "R F E F' R F E' F' R2"
  },
  "BK": {
    "short": "[F E F', U]",
    "long": "F E F' U F E' F' U'"
  },
  "BL": {
    "short": "[U', R E2 R']",
    "long": "U' R E2 R' U R E2 R'"
  },
  "BN": {
    "short": "[U : [L' E L, U]]",
    "long": "U L' E L U L' E' L U2"
  },
  "BO": {
    "short": "[U', R E R']",
    "long": "U' R E R' U R E' R'"
  },
  "BP": {
    "short": "[U : [L E' L', U]]",
    "long": "U L E' L' U L E L' U2"
  },
  "BQ": {
    "short": "[M, R' U' R U]", //OLLCP
    "long": "r' U' R U M' U' R' U R"
  },
  "BR": {
    "short": "[F' E F, U]",
    "long": "F' E F U F' E' F U'"
  },
  "BS": {
    "short": "(U M U M')2",
    "long": "U M U M' U M U M'"
  },
  "BT": {
    "short": "[F E' F', U]",
    "long": "F E' F' U F E F' U'"
  },
  "BU": {
    "short": "[M U2 M, U]",
    "long": "M U2 M U M' U2 M' U'"
  },
  "BV": {
    "short": "[R2, D M2 D']",
    "long": "R2 D M2 D' R2 D M2 D'"
  },
  "BW": {
    "short": "[D' R2 D, M2]",
    "long": "D' R2 D M2 D' R2 D M2"
  },
  "BX": {
    "short": "[R2 : [D M D', D2]]",
    "long": "R2 D M D2 M' D R2"
  },
  "DA": {
    "short": "[L2 D : [M', U2]]",
    "long": "L2 D M' U2 M U2 D' L2"
  },
  "DB": {
    "short": "[M2 U : [U2, M]]",
    "long": "M2 U' M U2 M' U' M2"
  },
  "DF": {
    "short": "[U' : [R' E R, U']]",
    "long": "U' R' E R U' R' E' R U2"
  },
  "DG": {
    "short": "[R U R', S]",
    "long": "R U R' S R U' R' S'"
  },
  "DH": {
    "short": "[U' : [R E' R', U']]",
    "long": "U' R E' R' U' R E R' U2"
  },
  "DJ": {
    "short": "[U, R' S2 R]",
    "long": "U R' S2 R U' R' S2 R"
  },
  "DK": {
    "short": "[F L F', M]",
    "long": "F L F' M F L' F' M'"
  },
  "DL": {
    "short": "[L' : [F' E' F, L']]",
    "long": "L' F' E' F L' F' E F L2"
  },
  "DM": {
    "short": "[R U R', S']",
    "long": "R U R' S' R U' R' S"
  },
  "DN": {
    "short": "[U, L' E L]",
    "long": "U L' E L U' L' E' L"
  },
  "DO": {
    "short": "[U' : [R E R', U']]",
    "long": "U' R E R' U' R E' R' U2"
  },
  "DP": {
    "short": "[U, L E' L']",
    "long": "U L E' L' U' L E L'"
  },
  "DQ": {
    "short": "[M, L U L' U']", //OLLCP
    "long": "l U L' U' M' U L U' L'"
  },
  "DR": {
    "short": "[F' E F, U']",
    "long": "F' E F U' F' E' F U"
  },
  "DS": {
    "short": "(U' M U' M')2",
    "long": "U' M U' M' U' M U' M'"
  },
  "DT": {
    "short": "[F E' F', U']",
    "long": "F E' F' U' F E F' U"
  },
  "DU": {
    "short": "[M U2 M, U']",
    "long": "M U2 M U' M' U2 M' U"
  },
  "DV": {
    "short": "[L2 : [D' M D, D2]]",
    "long": "L2 D' M D2 M' D' L2"
  },
  "DW": {
    "short": "[D L2 D', M2]",
    "long": "D L2 D' M2 D L2 D' M2"
  },
  "DX": {
    "short": "[L2, D' M2 D]",
    "long": "L2 D' M2 D L2 D' M2 D"
  },
  "EA": {
    "short": "[S' D : [M', U2]]",
    "long": "S' D M' U2 M U2 D' S"
  },
  "EB": {
    "short": "[L F' L', S']",
    "long": "L F' L' S' L F L' S"
  },
  "EF": {
    "short": "[L2 : [U S' U', L']]",
    "long": "L2 U S' U' L' U S U' L'"
  },
  "EG": {
    "short": "[F L' : [E', L2]]",
    "long": "F L' E' L2 E L' F'"
  },
  "EH": {
    "short": "[L' : [F E2 F', L]]",
    "long": "L' F E2 F' L F E2 F'"
  },
  "EJ": {
    "short": "[R : [L F' L', S']]",
    "long": "R L F' L' S' L F L' S R'"
  },
  "EK": {
    "short": "[U' F2 U, M]",
    "long": "U' F2 U M U' F2 U M'"
  },
  "EL": {
    "short": "[L : [d' M2 d, F]]",
    "long": "L d' M2 d F d' M2 d F' L'"
  },
  "EM": {
    "short": "[M U : [M', U2]]",
    "long": "M U M' U2 M U M'"
  },
  "EN": {
    "short": "[r' U : [M', U2]]",
    "long": "r' U M' U2 M U r"
  },
  "EO": {
    "short": "[L F' L', S2]",
    "long": "L F' L' S2 L F L' S2"
  },
  "EP": {
    "short": "[R' S2 R, F]",
    "long": "R' S2 R F R' S2 R F'"
  },
  "EQ": {
    "short": "[L' U' L U, M']",
    "long": "L' U' L U M' U' L' U l"
  },
  "ER": {
    "short": "[L' u L' : [E, L2]]",
    "long": "L' u L' E L2 E' L' u' L"
  },
  "ES": {
    "short": "[M' : (U M' U M)2]",
    "long": "M' U M' U M U M' U M2"
  },
  "ET": {
    "short": "[S' R : [D' M D, D2]]",
    "long": "S' R D' M D2 M' D' R' S"
  },
  "EU": {
    "short": "[L' : [F' E F, F2]]",
    "long": "L' F' E F2 E' F' L"
  },
  "EV": {
    "short": "[L2 : [L' F' L, S]]",
    "long": "L F' L S L' F L S' L2"
  },
  "EW": {
    "short": "[D : [L F' L', S]]",
    "long": "D L F' L' S L F L' S' D'"
  },
  "EX": {
    "short": "[L F' L', S]",
    "long": "L F' L' S L F L' S'"
  },
  "FA": {
    "short": "[U' : [U2, R' E R]]",
    "long": "U R' E R U2 R' E' R U"
  },
  "FB": {
    "short": "[R' E R, U']",
    "long": "R' E R U' R' E' R U"
  },
  "FD": {
    "short": "[U' : [U', R' E R]]",
    "long": "U2 R' E R U R' E' R U"
  },
  "FE": {
    "short": "[L2 : [L', U S' U']]",
    "long": "L U S' U' L U S U' L2"
  },
  "FG": {
    "short": "[L, D M D']",
    "long": "L D M D' L' D M' D'"
  },
  "FH": {
    "short": "[L2, F E2 F']",
    "long": "L2 F E2 F' L2 F E2 F'"
  },
  "FJ": {
    "short": "[E, R U' R']",
    "long": "E R U' R' E' R U R'"
  },
  "FK": {
    "short": "[D' L D, M]",
    "long": "D' L D M D' L' D M'"
  },
  "FM": {
    "short": "[F', R E2 R']",
    "long": "F' R E2 R' F R E2 R'"
  },
  "FN": {
    "short": "[x' L2 : [U M' U', U2]]",
    "long": "x' L2 U M' U2 M U L2 x"
  },
  "FO": {
    "short": "[F', R' E2 R]",
    "long": "F' R' E2 R F R' E2 R"
  },
  "FP": {
    "short": "[x M2 U' : [U2, M']]",
    "long": "x M2 U M' U2 M U M2 x'"
  },
  "FQ": {
    "short": "[U' L' U, M']",
    "long": "U' L' U M' U' L U M"
  },
  "FR": {
    "short": "[E', L U L']",
    "long": "E' L U L' E L U' L'"
  },
  "FS": {
    "short": "[U' M : [U, R' E R]]",
    "long": "U' M U R' E R U' R' E' R M' U"
  },
  "FT": {
    "short": "[R' : [R' E R, U']]",
    "long": "R' R' E R U' R' E' R U R"
  },
  "FU": {
    "short": "[U R' F' : [F', R S R']]",
    "long": "U R' F' F' R S R' F R S' R' F R U'"
  },
  "FV": {
    "short": "[R' F : [R S' R', F]]",
    "long": "R' F R S' R' F R S R' F' F' R"
  },
  "FW": {
    "short": "[D' R' F : [R S' R', F]]",
    "long": "D' R' F R S' R' F R S R' F' F' R D"
  },
  "FX": {
    "short": "[UE L : [E', L2]]",
    "long": "UE L E' L2 E L2 L' UE'"
  },
  "GA": {
    "short": "[U : [U2, L' E' L]]",
    "long": "U' L' E' L U2 L' E L U'"
  },
  "GB": {
    "short": "[U : [U, L' E' L]]",
    "long": "U2 L' E' L U' L' E L U'"
  },
  "GD": {
    "short": "[S, R U R']",
    "long": "S R U R' S' R U' R'"
  },
  "GE": {
    "short": "[F L' : [L2, E']]",
    "long": "F L E' L2 E L F'"
  },
  "GF": {
    "short": "[D M D', L]",
    "long": "D M D' L D M' D' L'"
  },
  "GH": {
    "short": "[U S' U', L']",
    "long": "U S' U' L' U S U' L"
  },
  "GJ": {
    "short": "[L' E' : [L U L', E']]",
    "long": "L' E' L U L' E' L U' L' E E L"
  },
  "GK": {
    "short": "[U : [S', R' D' R]]",
    "long": "U S' R' D' R S R' D R U'"
  },
  "GL": {
    "short": "[S' U' R : [E, R2]]",
    "long": "S' U' R E R2 E' R2 R' U S"
  },
  "GM": {
    "short": "[L F' L : [S', L2]]",
    "long": "L F' L S' L2 S L2 L' F L'"
  },
  "GN": {
    "short": "[L F' : [E, L2]]",
    "long": "L F' E L2 E' L2 F L'"
  },
  "GO": {
    "short": "[R' F R' : [S', R2]]",
    "long": "R' F R' S' R2 S R2 R F' R"
  },
  "GP": {
    "short": "[S : [U, L E' L']]",
    "long": "S U L E' L' U' L E L' S'"
  },
  "GQ": {
    "short": "[U'D : [S, R' F' R]]",
    "long": "U'D S R' F' R S' R' F R U'D'"
  },
  "GR": {
    "short": "[S' U' R' : [E', R2]]",
    "long": "S' U' R' E' R2 E R2 R U S"
  },
  "GS": {
    "short": "(M D M' D)2",
    "long": "M D M' D M D M' D"
  },
  "GT": {
    "short": "[D : [U' R' U, M']]",
    "long": "D U' R' U M' U' R U M D'"
  },
  "GU": {
    "short": "[L F' : [L2, E']]",
    "long": "L F' L2 E' L2 E F L'"
  },
  "GV": {
    "short": "[L' F' L, S]",
    "long": "L' F' L S L' F L S'"
  },
  "GW": {
    "short": "[U : [S', L B' L']]",
    "long": "U S' L B' L' S L B L' U'"
  },
  "HA": {
    "short": "[U2, F E2 F']",
    "long": "U2 F E2 F' U2 F E2 F'"
  },
  "HB": {
    "short": "[R E' R', U']",
    "long": "R E' R' U' R E R' U"
  },
  "HD": {
    "short": "[U' : [U', R E' R']]",
    "long": "U2 R E' R' U R E R' U"
  },
  "HE": {
    "short": "[L' : [L, F E2 F']]",
    "long": "F E2 F' L' F E2 F' L"
  },
  "HF": {
    "short": "[F E2 F', L2]",
    "long": "F E2 F' L2 F E2 F' L2"
  },
  "HG": {
    "short": "[L', U S' U']",
    "long": "L' U S' U' L U S U'"
  },
  "HJ": {
    "short": "[R : [R E' R', U']]",
    "long": "R R E' R' U' R E R' U R'"
  },
  "HK": {
    "short": "[D' L' D, M]",
    "long": "D' L' D M D' L D M'"
  },
  "HL": {
    "short": "[E, L' U L]",
    "long": "E L' U L E' L' U' L"
  },
  "HM": {
    "short": "[l U : [M', U2]]",
    "long": "l U M' U2 M U2 U' l'"
  },
  "HN": {
    "short": "[u R : [S, R2]]",
    "long": "u R S R2 S' R2 R' u'"
  },
  "HO": {
    "short": "[R' F : [R2, E']]",
    "long": "R' F R2 E' R2 E F' R"
  },
  "HP": {
    "short": "[E R U' R' : [E, R2]]",
    "long": "E R U' R' E R2 E' R2 R U R' E'"
  },
  "HQ": {
    "short": "[U' L U, M']",
    "long": "U' L U M' U' L' U M"
  },
  "HS": {
    "short": "[L' : (M D M' D)2]",
    "long": "L' M D M' D M D M' D L"
  },
  "HT": {
    "short": "[E', R' U' R]",
    "long": "E' R' U' R E R' U R"
  },
  "HU": {
    "short": "[F' : [L2, E']]",
    "long": "F' L2 E' L2 E F"
  },
  "HV": {
    "short": "[u' R' : [E, R2]]",
    "long": "u' R' E R2 E' R2 R u"
  },
  "HW": {
    "short": "[M : [U' L U, M2]]",
    "long": "M U' L U M2 U' L' U M2 M'"
  },
  "HX": {
    "short": "[u L' : [E, L2]]",
    "long": "u L' E L2 E' L2 L u'"
  },
  "JA": {
    "short": "[R' D' : [M', U2]]",
    "long": "R' D' M' U2 M U2 D R"
  },
  "JB": {
    "short": "[R : [R, F E F']]",
    "long": "R2 F E F' R' F E' F' R'"
  },
  "JD": {
    "short": "[R' S2 R, U]",
    "long": "R' S2 R U R' S2 R U'"
  },
  "JE": {
    "short": "[R : [S', L F' L']]",
    "long": "R S' L F' L' S L F L' R'"
  },
  "JF": {
    "short": "[R U' R', E]",
    "long": "R U' R' E R U R' E'"
  },
  "JG": {
    "short": "[L' E' : [E', L U L']]",
    "long": "L' E' E' L U L' E L U' L' E L"
  },
  "JH": {
    "short": "[R : [U', R E' R']]",
    "long": "R U' R E' R' U R E R' R'"
  },
  "JK": {
    "short": "[M', U' R U]",
    "long": "M' U' R U M U' R' U"
  },
  "JL": {
    "short": "[R' U' R : [E, R2]]",
    "long": "R' U' R E R2 E' R2 R' U R"
  },
  "JM": {
    "short": "[l F : [l' S' l, F]]",
    "long": "l F l' S' l F l' S l F' F' l'"
  },
  "JN": {
    "short": "[R U' R', E']",
    "long": "R U' R' E' R U R' E"
  },
  "JO": {
    "short": "[R' f R' : [S', R2]]",
    "long": "R' f R' S' R2 S R2 R f' R"
  },
  "JQ": {
    "short": "[M, U' R U]",
    "long": "M U' R U M' U' R' U"
  },
  "JR": {
    "short": "[R' U' R' : [E', R2]]",
    "long": "R' U' R' E' R2 E R2 R U R"
  },
  "JS": {
    "short": "[U' : [U' M U, R]]",
    "long": "U' U' M U R U' M' U R' U"
  },
  "JT": {
    "short": "[U R' : [S, R2]]",
    "long": "U R' S R2 S' R2 R U'"
  },
  "JU": {
    "short": "[D'U L : [E', L2]]",
    "long": "D'U L E' L2 E L2 L' D'U'"
  },
  "JV": {
    "short": "U R' U' R' U R U R U R' U2",
    "long": "U R' U' R' U R U R U R' U2"
  },
  "JW": {
    "short": "[UD L : [E', L2]]",
    "long": "UD L E' L2 E L2 L' UD'"
  },
  "JX": {
    "short": "[U L : [E', L2]]",
    "long": "U L E' L2 E L2 L' U'"
  },
  "KA": {
    "short": "[U2, F E F']",
    "long": "U2 F E F' U2 F E' F'"
  },
  "KB": {
    "short": "[U, F E F']",
    "long": "U F E F' U' F E' F'"
  },
  "KD": {
    "short": "[M, F L F']",
    "long": "M F L F' M' F L' F'"
  },
  "KE": {
    "short": "[M, U' F2 U]",
    "long": "M U' F2 U M' U' F2 U"
  },
  "KF": {
    "short": "[M, D' L D]",
    "long": "M D' L D M' D' L' D"
  },
  "KG": {
    "short": "[U : [R' D' R, S']]",
    "long": "U R' D' R S' R' D R S U'"
  },
  "KH": {
    "short": "[M' : [M', U' L U]]",
    "long": "M' M' U' L U M U' L' U M"
  },
  "KJ": {
    "short": "[U' R U, M']",
    "long": "U' R U M' U' R' U M"
  },
  "KL": {
    "short": "[U L' U', M']",
    "long": "U L' U' M' U L U' M"
  },
  "KM": {
    "short": "[r : [U R' U', M']]",
    "long": "r U R' U' M' U R U' M r'"
  },
  "KN": {
    "short": "[M, D R D']",
    "long": "M D R D' M' D R' D'"
  },
  "KO": {
    "short": "[U' : [S', R' F' R]]",
    "long": "U' S' R' F' R S R' F R U"
  },
  "KP": {
    "short": "[M, D R' D']",
    "long": "M D R' D' M' D R D'"
  },
  "KQ": {
    "short": "[U' : [S, R' F' R]]",
    "long": "U' S R' F' R S' R' F R U"
  },
  "KR": {
    "short": "[U L U', M']",
    "long": "U L U' M' U L' U' M"
  },
  "KS": {
    "short": "U M' U' M U2 M U M' U",
    "long": "U M' U' M U2 M U M' U"
  },
  "KT": {
    "short": "[U' R' U, M']",
    "long": "U' R' U M' U' R U M"
  },
  "KV": {
    "short": "[U R' F' R' : [S, R2]]",
    "long": "U R' F' R' S R2 S' R2 R F R U'"
  },
  "KW": {
    "short": "[D : [R F R', S']]",
    "long": "D R F R' S' R F' R' S D'"
  },
  "KX": {
    "short": "[U' L F L : [S', L2]]",
    "long": "U' L F L S' L2 S L2 L' F' L' U"
  },
  "LA": {
    "short": "[L D : [M', U2]]",
    "long": "L D M' U2 M U2 D' L'"
  },
  "LB": {
    "short": "[R E2 R', U']",
    "long": "R E2 R' U' R E2 R' U"
  },
  "LD": {
    "short": "[L' : [L', F' E' F]]",
    "long": "L2 F' E' F L F' E F L"
  },
  "LE": {
    "short": "[L : [F, d' M2 d]]",
    "long": "L F d' M2 d F' d' M2 d L'"
  },
  "LG": {
    "short": "[S' U' R' : [E, R2]]",
    "long": "S' U' R' E R2 E' R2 R U S"
  },
  "LH": {
    "short": "[L' U L, E]",
    "long": "L' U L E L' U' L E'"
  },
  "LJ": {
    "short": "[R' U' R' : [E, R2]]",
    "long": "R' U' R' E R2 E' R2 R U R"
  },
  "LK": {
    "short": "[M', U L' U']",
    "long": "M' U L' U' M U L U'"
  },
  "LM": {
    "short": "[S U' R' : [E, R2]]",
    "long": "S U' R' E R2 E' R2 R U S'"
  },
  "LN": {
    "short": "[L' : [U, L' E L]]",
    "long": "L' U L' E L U' L' E' L L"
  },
  "LO": {
    "short": "[R E : [E, R' U' R]]",
    "long": "R E E R' U' R E' R' U R E' R'"
  },
  "LP": {
    "short": "[L' U L, E']",
    "long": "L' U L E' L' U' L E"
  },
  "LQ": {
    "short": "[U' : [S, R' F2 R]]",
    "long": "U' S R' F2 R S' R' F2 R U"
  },
  "LR": {
    "short": "[U' L : [S', L2]]",
    "long": "U' L S' L2 S L2 L' U"
  },
  "LS": {
    "short": "[U : [U M U', L']]",
    "long": "U U M U' L' U M' U' L U'"
  },
  "LT": {
    "short": "[R U' R' : [E, R2]]",
    "long": "R U' R' E R2 E' R2 R U R'"
  },
  "LU": {
    "short": "[U'D R' : [E, R2]]",
    "long": "U'D R' E R2 E' R2 R U'D'"
  },
  "LV": {
    "short": "[U' R' : [E, R2]]",
    "long": "U' R' E R2 E' R2 R U"
  },
  "LW": {
    "short": "[U'D' R' : [E, R2]]",
    "long": "U'D' R' E R2 E' R2 R U'D"
  },
  "LX": {
    "short": "U' L U L U' L' U' L' U' L U2",
    "long": "U' L U L U' L' U' L' U' L U2"
  },
  "MA": {
    "short": "[S D' : [M', U2]]",
    "long": "S D' M' U2 M U2 D S'"
  },
  "MD": {
    "short": "[S', R U R']",
    "long": "S' R U R' S R U' R'"
  },
  "ME": {
    "short": "[M U : [U2, M']]",
    "long": "M U' M' U2 M U' M'"
  },
  "MF": {
    "short": "[R E2 R', F']",
    "long": "R E2 R' F' R E2 R' F"
  },
  "MG": {
    "short": "[L F' L' : [S', L2]]",
    "long": "L F' L' S' L2 S L2 L F L'"
  },
  "MH": {
    "short": "[l U' : [M', U2]]",
    "long": "l U' M' U2 M U2 U l'"
  },
  "MJ": {
    "short": "[l F : [F, l' S' l]]",
    "long": "l F F l' S' l F' l' S l F' l'"
  },
  "MK": {
    "short": "[R' F' : [R U' R', E]]",
    "long": "R' F' R U' R' E R U R' E' F R"
  },
  "ML": {
    "short": "[S U' R : [E, R2]]",
    "long": "S U' R E R2 E' R2 R' U S'"
  },
  "MN": {
    "short": "[S' : [U, L' E L]]",
    "long": "S' U L' E L U' L' E' L S"
  },
  "MO": {
    "short": "[F' R : [E, R2]]",
    "long": "F' R E R2 E' R2 R' F"
  },
  "MP": {
    "short": "[S' : [U, L E' L']]",
    "long": "S' U L E' L' U' L E L' S"
  },
  "MQ": {
    "short": "[R U R' U', M']",
    "long": "R U R' U' M' U R U' R' M"
  },
  "MR": {
    "short": "[S U' R' : [E', R2]]",
    "long": "S U' R' E' R2 E R2 R U S'"
  },
  "MS": {
    "short": "[M' : (U' M' U' M)2]",
    "long": "M' U' M' U' M U' M' U' M M"
  },
  "MT": {
    "short": "[R u' R : [E', R2]]",
    "long": "R u' R E' R2 E R2 R' u R'"
  },
  "MU": {
    "short": "[M : u M u2 M u]",
    "long": "M u M u2 M u M'"
  },
  "MV": {
    "short": "[R' F R, S']",
    "long": "R' F R S' R' F' R S"
  },
  "MW": {
    "short": "[D' : [R' F R, S']]",
    "long": "D' R' F R S' R' F' R S D"
  },
  "MX": {
    "short": "[R' : [F, R' S' R]]",
    "long": "R' F R' S' R F' R' S R R"
  },
  "NA": {
    "short": "[U2, F' E2 F]",
    "long": "U2 F' E2 F U2 F' E2 F"
  },
  "NB": {
    "short": "[U : [U, L' E L]]",
    "long": "U2 L' E L U' L' E' L U'"
  },
  "ND": {
    "short": "[L' E L, U]",
    "long": "L' E L U L' E' L U'"
  },
  "NE": {
    "short": "[r' U : [U2, M']]",
    "long": "r' U' M' U2 M U' r"
  },
  "NF": {
    "short": "[x' L2 : [U2, U M' U']]",
    "long": "x' L2 U' M' U2 M U' L2 x"
  },
  "NG": {
    "short": "[L F' : [L2, E]]",
    "long": "L F' L2 E L2 E' F L'"
  },
  "NH": {
    "short": "[u R' : [S, R2]]",
    "long": "u R' S R2 S' R2 R u'"
  },
  "NJ": {
    "short": "[E', R U' R']",
    "long": "E' R U' R' E R U R'"
  },
  "NK": {
    "short": "[D R D', M]",
    "long": "D R D' M D R' D' M'"
  },
  "NL": {
    "short": "[L' : [L' E L, U]]",
    "long": "L' L' E L U L' E' L U' L"
  },
  "NM": {
    "short": "[S' : [L' E L, U]]",
    "long": "S' L' E L U L' E' L U' S"
  },
  "NO": {
    "short": "[R, U' S U]",
    "long": "R U' S U R' U' S' U"
  },
  "NP": {
    "short": "[M' U' R : [S, R2]]",
    "long": "M' U' R S R2 S' R2 R' U M"
  },
  "NQ": {
    "short": "[U R' U', M']",
    "long": "U R' U' M' U R U' M"
  },
  "NR": {
    "short": "[E, L U L']",
    "long": "E L U L' E' L U' L'"
  },
  "NS": {
    "short": "[R : (M D' M' D')2]",
    "long": "R M D' M' D' M D' M' D' R'"
  },
  "NU": {
    "short": "[F : [R2, E]]",
    "long": "F R2 E R2 E' F'"
  },
  "NV": {
    "short": "[u' R : [E', R2]]",
    "long": "u' R E' R2 E R2 R' u"
  },
  "NW": {
    "short": "[M : [U R' U', M2]]",
    "long": "M U R' U' M2 U R U' M2 M'"
  },
  "NX": {
    "short": "[u L : [E', L2]]",
    "long": "u L E' L2 E L2 L' u'"
  },
  "OA": {
    "short": "[U' : [U2, R E R']]",
    "long": "U R E R' U2 R E' R' U"
  },
  "OB": {
    "short": "[R E R', U']",
    "long": "R E R' U' R E' R' U"
  },
  "OD": {
    "short": "[U' : [U', R E R']]",
    "long": "U2 R E R' U R E' R' U"
  },
  "OE": {
    "short": "[S2, L F' L']",
    "long": "S2 L F' L' S2 L F L'"
  },
  "OF": {
    "short": "[R' E2 R, F']",
    "long": "R' E2 R F' R' E2 R F"
  },
  "OG": {
    "short": "[R' F R : [S', R2]]",
    "long": "R' F R S' R2 S R2 R' F' R"
  },
  "OH": {
    "short": "[R' F : [E', R2]]",
    "long": "R' F E' R2 E R2 F' R"
  },
  "OJ": {
    "short": "[D' : [U' R U, M']]",
    "long": "D' U' R U M' U' R' U M D"
  },
  "OK": {
    "short": "[U' : [R' F' R, S']]",
    "long": "U' R' F' R S' R' F R S U"
  },
  "OL": {
    "short": "[R E : [R' U' R, E]]",
    "long": "R E R' U' R E R' U R E' E' R'"
  },
  "OM": {
    "short": "[F' R' : [E, R2]]",
    "long": "F' R' E R2 E' R2 R F"
  },
  "ON": {
    "short": "[U' S U, R]",
    "long": "U' S U R U' S' U R'"
  },
  "OP": {
    "short": "[D' M D, R']",
    "long": "D' M D R' D' M' D R"
  },
  "OQ": {
    "short": "[R : [U R U', M']]",
    "long": "R U R U' M' U R' U' M R'"
  },
  "OR": {
    "short": "[R' E' : [R U' R', E']]",
    "long": "R' E' R U' R' E' R U R' E E R"
  },
  "OS": {
    "short": "(M D' M' D')2",
    "long": "M D' M' D' M D' M' D'"
  },
  "OT": {
    "short": "[D' : [U' R' U, M']]",
    "long": "D' U' R' U M' U' R U M D"
  },
  "OU": {
    "short": "[R' F : [R2, E]]",
    "long": "R' F R2 E R2 E' F' R"
  },
  "OW": {
    "short": "[U' : [S, R' B R]]",
    "long": "U' S R' B R S' R' B' R U"
  },
  "OX": {
    "short": "[R F R', S']",
    "long": "R F R' S' R F' R' S"
  },
  "PA": {
    "short": "[U : [U2, L E' L']]",
    "long": "U' L E' L' U2 L E L' U'"
  },
  "PB": {
    "short": "[U : [U, L E' L']]",
    "long": "U2 L E' L' U' L E L' U'"
  },
  "PD": {
    "short": "[L E' L', U]",
    "long": "L E' L' U L E L' U'"
  },
  "PE": {
    "short": "[F, R' S2 R]",
    "long": "F R' S2 R F' R' S2 R"
  },
  "PF": {
    "short": "[x M2 U' : [M', U2]]",
    "long": "x M2 U' M' U2 M U' M2 x'"
  },
  "PG": {
    "short": "[S : [L E' L', U]]",
    "long": "S L E' L' U L E L' U' S'"
  },
  "PH": {
    "short": "[E R U' R : [E, R2]]",
    "long": "E R U' R E R2 E' R2 R' U R' E'"
  },
  "PK": {
    "short": "[D R' D', M]",
    "long": "D R' D' M D R D' M'"
  },
  "PL": {
    "short": "[E', L' U L]",
    "long": "E' L' U L E L' U' L"
  },
  "PM": {
    "short": "[S' : [L E' L', U]]",
    "long": "S' L E' L' U L E L' U' S"
  },
  "PN": {
    "short": "[M' U' R' : [S, R2]]",
    "long": "M' U' R' S R2 S' R2 R U M"
  },
  "PO": {
    "short": "[R', D' M D]",
    "long": "R' D' M D R D' M' D"
  },
  "PQ": {
    "short": "[U R U', M']",
    "long": "U R U' M' U R' U' M"
  },
  "PR": {
    "short": "[L : [L E' L', U]]",
    "long": "L L E' L' U L E L' U' L'"
  },
  "PS": {
    "short": "[R' : (M D' M' D')2]",
    "long": "R' M D' M' D' M D' M' D' R"
  },
  "PT": {
    "short": "[E, R' U' R]",
    "long": "E R' U' R E' R' U R"
  },
  "PU": {
    "short": "[R2' F : [R2, E]]",
    "long": "R2' F R2 E R2 E' F' R2"
  },
  "PV": {
    "short": "[U'E' R' : [E, R2]]",
    "long": "U'E' R' E R2 E' R2 R U'E"
  },
  "PW": {
    "short": "[M : [U R U', M2]]",
    "long": "M U R U' M2 U R' U' M2 M'"
  },
  "PX": {
    "short": "[UE L' : [E, L2]]",
    "long": "UE L' E L2 E' L2 L UE'"
  },
  "QB": {
    "short": "[R' U' R U, M]",
    "long": "R' U' R U M U' R' U r"
  },
  "QD": {
    "short": "[L U L' U', M]",
    "long": "L U L' U' M U L U' l'"
  },
  "QE": {
    "short": "[M', L' U' L U]",
    "long": "l' U' L U M U' L' U L"
  },
  "QF": {
    "short": "[M', U' L' U]",
    "long": "M' U' L' U M U' L U"
  },
  "QG": {
    "short": "[U'D : [R' F' R, S]]",
    "long": "U'D R' F' R S R' F R S' U'D'"
  },
  "QH": {
    "short": "[M', U' L U]",
    "long": "M' U' L U M U' L' U"
  },
  "QJ": {
    "short": "[U' R U, M]",
    "long": "U' R U M U' R' U M'"
  },
  "QK": {
    "short": "[U' : [R' F' R, S]]",
    "long": "U' R' F' R S R' F R S' U"
  },
  "QL": {
    "short": "[U L' U', M]",
    "long": "U L' U' M U L U' M'"
  },
  "QM": {
    "short": "[M', R U R' U']",
    "long": "M' R U R' U' M U R U' R'"
  },
  "QN": {
    "short": "[M', U R' U']",
    "long": "M' U R' U' M U R U'"
  },
  "QO": {
    "short": "[U'D' : [R' F' R, S]]",
    "long": "U'D' R' F' R S R' F R S' U'D"
  },
  "QP": {
    "short": "[M', U R U']",
    "long": "M' U R U' M U R' U'"
  },
  "QR": {
    "short": "[U L U', M]",
    "long": "U L U' M U L' U' M'"
  },
  "QS": {
    "short": "[U' : [R B R', S]]",
    "long": "U' R B R' S R B' R' S' U"
  },
  "QT": {
    "short": "[U' R' U, M]",
    "long": "U' R' U M U' R U M'"
  },
  "QU": {
    "short": "[U : [S, R' F' R]]",
    "long": "U S R' F' R S' R' F R U'"
  },
  "QV": {
    "short": "[R' : [U' R' U, M]]",
    "long": "R' U' R' U M U' R U M' R"
  },
  "QW": {
    "short": "[U : [S, R B R']]",
    "long": "U S R B R' S' R B' R' U'"
  },
  "QX": {
    "short": "[UD : [R' F' R, S]]",
    "long": "UD R' F' R S R' F R S' UD'"
  },
  "RA": {
    "short": "[L' D : [M', U2]]",
    "long": "L' D M' U2 M U2 D' L"
  },
  "RB": {
    "short": "[U, F' E F]",
    "long": "U F' E F U' F' E' F"
  },
  "RD": {
    "short": "[U', F' E F]",
    "long": "U' F' E F U F' E' F"
  },
  "RE": {
    "short": "[L' u L' : [L2, E]]",
    "long": "L' u L E L2 E' L u' L"
  },
  "RF": {
    "short": "[L U L', E']",
    "long": "L U L' E' L U' L' E"
  },
  "RG": {
    "short": "[S' U' R : [E', R2]]",
    "long": "S' U' R E' R2 E R2 R' U S"
  },
  "RJ": {
    "short": "[R' U' R : [E', R2]]",
    "long": "R' U' R E' R2 E R2 R' U R"
  },
  "RK": {
    "short": "[M', U L U']",
    "long": "M' U L U' M U L' U'"
  },
  "RL": {
    "short": "[U' L' : [S', L2]]",
    "long": "U' L' S' L2 S L2 L U"
  },
  "RM": {
    "short": "[S U' R : [E', R2]]",
    "long": "S U' R E' R2 E R2 R' U S'"
  },
  "RN": {
    "short": "[L U L', E]",
    "long": "L U L' E L U' L' E'"
  },
  "RO": {
    "short": "[R' E' : [E', R U' R']]",
    "long": "R' E' E' R U' R' E R U R' E R"
  },
  "RP": {
    "short": "[L : [U, L E' L']]",
    "long": "L U L E' L' U' L E L' L'"
  },
  "RQ": {
    "short": "[M, U L U']",
    "long": "M U L U' M' U L' U'"
  },
  "RS": {
    "short": "[U : [U M U', L]]",
    "long": "U U M U' L U M' U' L' U'"
  },
  "RT": {
    "short": "[R U' R : [E', R2]]",
    "long": "R U' R E' R2 E R2 R' U R'"
  },
  "RU": {
    "short": "[U'D R : [E', R2]]",
    "long": "U'D R E' R2 E R2 R' U'D'"
  },
  "RV": {
    "short": "[U' R : [E', R2]]",
    "long": "U' R E' R2 E R2 R' U"
  },
  "RW": {
    "short": "[U'D' R : [E', R2]]",
    "long": "U'D' R E' R2 E R2 R' U'D"
  },
  "RX": {
    "short": "U' L' U' L' U L U L U L'",
    "long": "U' L' U' L' U L U L U L'"
  },
  "SA": {
    "short": "[u M' : [U2, U M' U']]",
    "long": "u M' U' M' U2 M U' M u'"
  },
  "SB": {
    "short": "(M U' M' U')2",
    "long": "M U' M' U' M U' M' U'"
  },
  "SD": {
    "short": "(M U M' U)2",
    "long": "M U M' U M U M' U"
  },
  "SE": {
    "short": "[M' : (M' U' M U')2]",
    "long": "M2 U' M U' M' U' M U' M"
  },
  "SF": {
    "short": "[U' M : [R' E R, U]]",
    "long": "U' M R' E R U R' E' R U' M' U"
  },
  "SG": {
    "short": "(D' M D' M')2",
    "long": "D' M D' M' D' M D' M'"
  },
  "SH": {
    "short": "[L' : (D' M D' M')2]",
    "long": "L' D' M D' M' D' M D' M' L"
  },
  "SJ": {
    "short": "[U' : [R, U' M U]]",
    "long": "U' R U' M U R' U' M' U U"
  },
  "SK": {
    "short": "U M U M' U2 M' U' M U",
    "long": "U M U M' U2 M' U' M U"
  },
  "SL": {
    "short": "[U : [L', U M U']]",
    "long": "U L' U M U' L U M' U' U'"
  },
  "SM": {
    "short": "[M' : (M' U M U)2]",
    "long": "M' M' U M U M' U M U M"
  },
  "SN": {
    "short": "[R : (D M D M')2]",
    "long": "R D M D M' D M D M' R'"
  },
  "SO": {
    "short": "(D M D M')2",
    "long": "D M D M' D M D M'"
  },
  "SP": {
    "short": "[r : (M' U M U)2]",
    "long": "r M' U M U M' U M U r'"
  },
  "SQ": {
    "short": "[U' : [S, R B R']]",
    "long": "U' S R B R' S' R B' R' U"
  },
  "SR": {
    "short": "[L : (M U M' U)2]",
    "long": "L M U M' U M U M' U L'"
  },
  "ST": {
    "short": "[U' : [R', U' M U]]",
    "long": "U' R' U' M U R U' M' U U"
  },
  "SU": {
    "short": "[D' : [R F R', S']]",
    "long": "D' R F R' S' R F' R' S D"
  },
  "SV": {
    "short": "[D' R' F : [R2, E]]",
    "long": "D' R' F R2 E R2 E' F' R D"
  },
  "SX": {
    "short": "[D L F' : [L2, E']]",
    "long": "D L F' L2 E' L2 E F L' D'"
  },
  "TA": {
    "short": "[R D : [M', U2]]",
    "long": "R D M' U2 M U2 D' R'"
  },
  "TB": {
    "short": "[U, F E' F']",
    "long": "U F E' F' U' F E F'"
  },
  "TD": {
    "short": "[U', F E' F']",
    "long": "U' F E' F' U F E F'"
  },
  "TE": {
    "short": "[S' R : [D2, D' M D]]",
    "long": "S' R D M D2 M' D R' S"
  },
  "TF": {
    "short": "[R' : [U', R' E R]]",
    "long": "R' U' R' E R U R' E' R R"
  },
  "TG": {
    "short": "[L E : [E, L' U L]]",
    "long": "L E E L' U L E' L' U' L E' L'"
  },
  "TH": {
    "short": "[R' U' R, E']",
    "long": "R' U' R E' R' U R E"
  },
  "TJ": {
    "short": "[U R : [S, R2]]",
    "long": "U R S R2 S' R2 R' U'"
  },
  "TK": {
    "short": "[M', U' R' U]",
    "long": "M' U' R' U M U' R U"
  },
  "TL": {
    "short": "[R U' R : [E, R2]]",
    "long": "R U' R E R2 E' R2 R' U R'"
  },
  "TM": {
    "short": "[R u' R' : [E', R2]]",
    "long": "R u' R' E' R2 E R2 R u R'"
  },
  "TO": {
    "short": "[D' : [M', U' R' U]]",
    "long": "D' M' U' R' U M U' R U D"
  },
  "TP": {
    "short": "[R' U' R, E]",
    "long": "R' U' R E R' U R E'"
  },
  "TQ": {
    "short": "[M, U' R' U]",
    "long": "M U' R' U M' U' R U"
  },
  "TR": {
    "short": "[R U' R' : [E', R2]]",
    "long": "R U' R' E' R2 E R2 R U R'"
  },
  "TS": {
    "short": "[U' : [U' M U, R']]",
    "long": "U' U' M U R' U' M' U R U"
  },
  "TU": {
    "short": "[UD' L' : [E, L2]]",
    "long": "UD' L' E L2 E' L2 L UD"
  },
  "TV": {
    "short": "U R U R U' R' U' R' U' R",
    "long": "U R U R U' R' U' R' U' R"
  },
  "TW": {
    "short": "[UD L' : [E, L2]]",
    "long": "UD L' E L2 E' L2 L UD'"
  },
  "TX": {
    "short": "[U L' : [E, L2]]",
    "long": "U L' E L2 E' L2 L U'"
  },
  "UA": {
    "short": "[M', U2]",
    "long": "M' U2 M U2"
  },
  "UB": {
    "short": "[U, M U2 M]",
    "long": "U M U2 M U' M' U2 M'"
  },
  "UD": {
    "short": "[U', M U2 M]",
    "long": "U' M U2 M U M' U2 M'"
  },
  "UE": {
    "short": "[L' : [F2, F' E F]]",
    "long": "L' F E F2 E' F L"
  },
  "UF": {
    "short": "[L2 F' : [E', L2]]",
    "long": "L2 F' E' L2 E L2 F L2"
  },
  "UG": {
    "short": "[L F' : [E', L2]]",
    "long": "L F' E' L2 E L2 F L'"
  },
  "UH": {
    "short": "[F' : [E', L2]]",
    "long": "F' E' L2 E L2 F"
  },
  "UJ": {
    "short": "[UD' L' : [E', L2]]",
    "long": "UD' L' E' L2 E L2 L UD"
  },
  "UL": {
    "short": "[U'D R : [E, R2]]",
    "long": "U'D R E R2 E' R2 R' U'D'"
  },
  "UM": {
    "short": "[M : u' M' u2 M' u']",
    "long": "M u' M' u2 M' u' M'"
  },
  "UN": {
    "short": "[F : [E, R2]]",
    "long": "F E R2 E' R2 F'"
  },
  "UO": {
    "short": "[R' F : [E, R2]]",
    "long": "R' F E R2 E' R2 F' R"
  },
  "UP": {
    "short": "[R2' F : [E, R2]]",
    "long": "R2' F E R2 E' R2 F' R2"
  },
  "UQ": {
    "short": "[U : [R' F' R, S]]",
    "long": "U R' F' R S R' F R S' U'"
  },
  "UR": {
    "short": "[U'D R' : [E', R2]]",
    "long": "U'D R' E' R2 E R2 R U'D'"
  },
  "US": {
    "short": "[D' : [S', R F R']]",
    "long": "D' S' R F R' S R F' R' D"
  },
  "UT": {
    "short": "[UD' L : [E, L2]]",
    "long": "UD' L E L2 E' L2 L' UD"
  },
  "UV": {
    "short": "[R' F : [R S' R', F2]]",
    "long": "R' F R S' R' F2 R S R' F2 F' R"
  },
  "UW": {
    "short": "u2 M' u2 M'",
    "long": "u2 M' u2 M'"
  },
  "UX": {
    "short": "[R' F : [R' S' R, F2]]",
    "long": "R' F R' S' R F2 R' S R F2 F' R"
  },
  "VA": {
    "short": "[D' : [M', U2]]",
    "long": "D' M' U2 M U2 D"
  },
  "VB": {
    "short": "[D M2 D', R2]",
    "long": "D M2 D' R2 D M2 D' R2"
  },
  "VD": {
    "short": "[L2 : [D2, D' M D]]",
    "long": "L2 D M D2 M' D L2"
  },
  "VE": {
    "short": "[L2 : [S, L' F' L]]",
    "long": "L2 S L' F' L S' L' F L'"
  },
  "VF": {
    "short": "[U'E' R' : [E, R2]]",
    "long": "U'E' R' E R2 E' R2 R U'E"
  },
  "VG": {
    "short": "[S, L' F' L]",
    "long": "S L' F' L S' L' F L"
  },
  "VH": {
    "short": "[u' R : [E, R2]]",
    "long": "u' R E R2 E' R2 R' u"
  },
  "VJ": {
    "short": "U2 R U' R' U' R' U' R U R U'",
    "long": "U2 R U' R' U' R' U' R U R U'"
  },
  "VK": {
    "short": "[U R' F' R : [S, R2]]",
    "long": "U R' F' R S R2 S' R2 R' F R U'"
  },
  "VL": {
    "short": "[U' R : [E, R2]]",
    "long": "U' R E R2 E' R2 R' U"
  },
  "VM": {
    "short": "[S', R' F R]",
    "long": "S' R' F R S R' F' R"
  },
  "VN": {
    "short": "[u' R' : [E', R2]]",
    "long": "u' R' E' R2 E R2 R u"
  },
  "VP": {
    "short": "[U'E' R : [E, R2]]",
    "long": "U'E' R E R2 E' R2 R' U'E"
  },
  "VQ": {
    "short": "[r' : [U' R' U, M']]",
    "long": "r' U' R' U M' U' R U M r"
  },
  "VR": {
    "short": "[U' R' : [E', R2]]",
    "long": "U' R' E' R2 E R2 R U"
  },
  "VS": {
    "short": "[D' R' F : [E, R2]]",
    "long": "D' R' F E R2 E' R2 F' R D"
  },
  "VT": {
    "short": "R' U R U R U R' U' R' U'",
    "long": "R' U R U R U R' U' R' U'"
  },
  "VU": {
    "short": "[R' F' : [R S' R', F2]]",
    "long": "R' F' R S' R' F2 R S R' F2 F R"
  },
  "VW": {
    "short": "[D' R' F : [R S' R', F2]]",
    "long": "D' R' F R S' R' F2 R S R' F2 F' R D"
  },
  "VX": {
    "short": "[U' : [S', R2]]",
    "long": "U' S' R2 S R2 U"
  },
  "WA": {
    "short": "[U2, M]",
    "long": "U2 M U2 M'"
  },
  "WB": {
    "short": "[M2, D' R2 D]",
    "long": "M2 D' R2 D M2 D' R2 D"
  },
  "WD": {
    "short": "[M2, D L2 D']",
    "long": "M2 D L2 D' M2 D L2 D'"
  },
  "WE": {
    "short": "[D : [S, L F' L']]",
    "long": "D S L F' L' S' L F L' D'"
  },
  "WF": {
    "short": "[M' : [U' L' U, M2]]",
    "long": "M' U' L' U M2 U' L U M2 M"
  },
  "WG": {
    "short": "[U : [L B' L', S']]",
    "long": "U L B' L' S' L B L' S U'"
  },
  "WH": {
    "short": "[M' : [U' L U, M2]]",
    "long": "M' U' L U M2 U' L' U M2 M"
  },
  "WJ": {
    "short": "[DU L' : [E', L2]]",
    "long": "DU L' E' L2 E L2 L DU'"
  },
  "WK": {
    "short": "[D : [S', R F R']]",
    "long": "D S' R F R' S R F' R' D'"
  },
  "WL": {
    "short": "[D'U' R : [E, R2]]",
    "long": "D'U' R E R2 E' R2 R' D'U"
  },
  "WM": {
    "short": "[r : [U R' U', M2]]",
    "long": "r U R' U' M2 U R U' M2 r'"
  },
  "WN": {
    "short": "[M' : [U R' U', M2]]",
    "long": "M' U R' U' M2 U R U' M2 M"
  },
  "WO": {
    "short": "[U' : [R' B R, S]]",
    "long": "U' R' B R S R' B' R S' U"
  },
  "WP": {
    "short": "[M' : [U R U', M2]]",
    "long": "M' U R U' M2 U R' U' M2 M"
  },
  "WQ": {
    "short": "[D' r' : [U' R' U, M']]",
    "long": "D' r' U' R' U M' U' R U M r D"
  },
  "WR": {
    "short": "[U'D' R' : [E', R2]]",
    "long": "U'D' R' E' R2 E R2 R U'D"
  },
  "WT": {
    "short": "[UD L : [E, L2]]",
    "long": "UD L E L2 E' L2 L' UD'"
  },
  "WU": {
    "short": "M u2 M u2",
    "long": "M u2 M u2"
  },
  "WV": {
    "short": "[S' r : [U R' U', M2]]",
    "long": "S' r U R' U' M2 U R U' M2 r' S"
  },
  "WX": {
    "short": "[S l' : [U' L U, M2]]",
    "long": "S l' U' L U M2 U' L' U M2 l S'"
  },
  "XA": {
    "short": "[D : [M', U2]]",
    "long": "D M' U2 M U2 D'"
  },
  "XB": {
    "short": "[R2 : [D2, D M D']]",
    "long": "R2 D' M D2 M' D' R2"
  },
  "XD": {
    "short": "[D' M2 D, L2]",
    "long": "D' M2 D L2 D' M2 D L2"
  },
  "XE": {
    "short": "[S, L F' L']",
    "long": "S L F' L' S' L F L'"
  },
  "XF": {
    "short": "[UE L' : [E', L2]]",
    "long": "UE L' E' L2 E L2 L UE'"
  },
  "XH": {
    "short": "[u L : [E, L2]]",
    "long": "u L E L2 E' L2 L' u'"
  },
  "XJ": {
    "short": "[U L' : [E', L2]]",
    "long": "U L' E' L2 E L2 L U'"
  },
  "XK": {
    "short": "[U' L F L' : [S', L2]]",
    "long": "U' L F L' S' L2 S L2 L F' L' U"
  },
  "XL": {
    "short": "U2' L' U L U L U L' U' L' U",
    "long": "U2' L' U L U L U L' U' L' U"
  },
  "XM": {
    "short": "[R' : [R' S' R, F]]",
    "long": "R' R' S' R F R' S R F' R"
  },
  "XN": {
    "short": "[u L' : [E', L2]]",
    "long": "u L' E' L2 E L2 L u'"
  },
  "XO": {
    "short": "[S', R F R']",
    "long": "S' R F R' S R F' R'"
  },
  "XP": {
    "short": "[UE L : [E, L2]]",
    "long": "UE L E L2 E' L2 L' UE'"
  },
  "XQ": {
    "short": "[UD : [R' F' R, S]]",
    "long": "UD R' F' R S R' F R S' UD'"
  },
  "XR": {
    "short": "L U' L' U' L' U' L U L U",
    "long": "L U' L' U' L' U' L U L U"
  },
  "XS": {
    "short": "[D L F' : [E', L2]]",
    "long": "D L F' E' L2 E L2 F L' D'"
  },
  "XT": {
    "short": "[U L : [E, L2]]",
    "long": "U L E L2 E' L2 L' U'"
  },
  "XU": {
    "short": "[R' F' : [R' S' R, F2]]",
    "long": "R' F' R' S' R F2 R' S R F2 F R"
  },
  "XV": {
    "short": "[U' : [R2, S']]",
    "long": "U' R2 S' R2 S U"
  },
  "XW": {
    "short": "U' R' D' R D R D R D' R' UD'",
    "long": "U' R' D' R D R D R D' R' UD'"
  }
};

export const DEFAULT_CORNERS: Record<string, AlgDef> = {
  "AB": {
    "short": "AA",
    "long": "R' F R' B2 R F' R' B2 R2"
  },
  "AD": {
    "short": "[L' : [L' F2 L, B]]",
    "long": "L2 F2 L B L' F2 L B' L"
  },
  "AF": {
    "short": "[F : [U2, R' D' R]]",
    "long": "F U2 R' D' R U2 R' D R F'"
  },
  "AG": {
    "short": "[R' D R, U2]",
    "long": "R' D R U2 R' D' R U2"
  },
  "AH": {
    "short": "[U2, L' D' L]",
    "long": "U2 L' D' L U2 L' D L"
  },
  "AI": {
    "short": "[L2 : [R B2 R', F2]]",
    "long": "L2 R B2 R' F2 R B2 R' F2 L2"
  },
  "AK": {
    "short": "[U2, L' D2 L]",
    "long": "U2 L' D2 L U2 L' D2 L"
  },
  "AL": {
    "short": "[U2, B D' B']",
    "long": "U2 B D' B' U2 B D B'"
  },
  "AN": {
    "short": "[B : [L' D' L, U2]]",
    "long": "B L' D' L U2 L' D L U2 B'"
  },
  "AO": {
    "short": "[U2, L' D L]",
    "long": "U2 L' D L U2 L' D' L"
  },
  "AP": {
    "short": "[R' D' R, U2]",
    "long": "R' D' R U2 R' D R U2"
  },
  "AQ": {
    "short": "[L' : [L' F2 L, B2]]",
    "long": "L2 F2 L B2 L' F2 L B2 L"
  },
  "AS": {
    "short": "[R' D2 R, U2]",
    "long": "R' D2 R U2 R' D2 R U2"
  },
  "AT": {
    "short": "[R' D2 R, U2]",
    "long": "R' D2 R U2 R' D2 R U2"
  },
  "AU": {
    "short": "[L D' L' : [U2, L' D L]]",
    "long": "L D' L' U2 L' D L U2 L' D' L2 D L'"
  },
  "AV": {
    "short": "[L2 D2 : [U L2 U', R2]]",
    "long": "L2 D2 U L2 U' R2 U L2 U' R2 D2 L2"
  },
  "AW": {
    "short": "[D' L2 D2 : [U L2 U', R2]]",
    "long": "D' L2 D2 U L2 U' R2 U L2 U' R2 D2 L2 D"
  },
  "AX": {
    "short": "[D2 L2 D2 : [U L2 U', R2]]",
    "long": "D2 L2 D2 U L2 U' R2 U L2 U' R2 D2 L2 D2"
  },
  "BA": {
    "short": "AB",
    "long": "R2 B2 R F R' B2 R F' R"
  },
  "BD": {
    "short": "[L2 : [R' F' R, B2]]",
    "long": "L2 R' F' R B2 R' F R B2 L2"
  },
  "BE": {
    "short": "[R : [U, R D R']]",
    "long": "R U R D R' U' R D' R2"
  },
  "BF": {
    "short": "[F, R B R']",
    "long": "F R B R' F' R B' R'"
  },
  "BG": {
    "short": "[R' D R, U]",
    "long": "R' D R U R' D' R U'"
  },
  "BH": {
    "short": "[U', R D' R']",
    "long": "U' R D' R' U R D R'"
  },
  "BI": {
    "short": "[R : [U2, R D R']]",
    "long": "R U2 R D R' U2 R D' R2"
  },
  "BK": {
    "short": "[U', B' D B]",
    "long": "U' B' D B U B' D' B"
  },
  "BL": {
    "short": "[D : [R' D' R, U]]",
    "long": "D R' D' R U R' D R U' D'"
  },
  "BO": {
    "short": "[U', R D R']",
    "long": "U' R D R' U R D' R'"
  },
  "BP": {
    "short": "[R' D' R, U]",
    "long": "R' D' R U R' D R U'"
  },
  "BR": {
    "short": "[R' : [R' D' R, U2]]",
    "long": "R2 D' R U2 R' D R U2 R"
  },
  "BS": {
    "short": "[R' D2 R, U]",
    "long": "R' D2 R U R' D2 R U'"
  },
  "BT": {
    "short": "[F D' F', U]",
    "long": "F D' F' U F D F' U'"
  },
  "BU": {
    "short": "[F2, R B R']",
    "long": "F2 R B R' F2 R B' R'"
  },
  "BV": {
    "short": "[D' : [F2, R B R']]",
    "long": "D' F2 R B R' F2 R B' R' D"
  },
  "BW": {
    "short": "[D2 : [F2, R B R']]",
    "long": "D2 F2 R B R' F2 R B' R' D2"
  },
  "BX": {
    "short": "[R' F' R, B2]",
    "long": "R' F' R B2 R' F R B2"
  },
  "DA": {
    "short": "[L' : [B, L' F2 L]]",
    "long": "L' B L' F2 L B' L' F2 L2"
  },
  "DB": {
    "short": "[L2 : [B2, R' F' R]]",
    "long": "L2 B2 R' F' R B2 R' F R L2"
  },
  "DE": {
    "short": "[B : [F R F', L2]]",
    "long": "B F R F' L2 F R' F' L2 B'"
  },
  "DG": {
    "short": "[R' D R, U']",
    "long": "R' D R U' R' D' R U"
  },
  "DH": {
    "short": "[F D2 F', U']",
    "long": "F D2 F' U' F D2 F' U"
  },
  "DK": {
    "short": "[R, F' L' F]",
    "long": "R F' L' F R' F' L F"
  },
  "DL": {
    "short": "[F D F', U']",
    "long": "F D F' U' F D' F' U"
  },
  "DN": {
    "short": "[B' : [R2, F' L' F]]",
    "long": "B' R2 F' L' F R2 F' L F B"
  },
  "DO": {
    "short": "[U' : [R D R', U']]",
    "long": "U' R D R' U' R D' R' U U"
  },
  "DP": {
    "short": "[R' D' R, U']",
    "long": "R' D' R U' R' D R U"
  },
  "DQ": {
    "short": "OLL25",
    "long": "R' F' L' F R F' L F"
  },
  "DR": {
    "short": "[F R F', L]",
    "long": "F R F' L F R' F' L'"
  },
  "DS": {
    "short": "[R' D2 R, U']",
    "long": "R' D2 R U' R' D2 R U"
  },
  "DT": {
    "short": "[U, L D2 L']",
    "long": "U L D2 L' U' L D2 L'"
  },
  "DU": {
    "short": "[D2 : [D L2 D', R2]]",
    "long": "D' L2 D' R2 D L2 D' R2 D2"
  },
  "DV": {
    "short": "[D : [D L2 D', R2]]",
    "long": "D2 L2 D' R2 D L2 D' R2 D'"
  },
  "DW": {
    "short": "[D L2 D', R2]",
    "long": "D L2 D' R2 D L2 D' R2"
  },
  "DX": {
    "short": "[F R F', L2]",
    "long": "F R F' L2 F R' F' L2"
  },
  "EB": {
    "short": "[R : [R D R', U]]",
    "long": "R2 D R' U R D' R' U' R'"
  },
  "ED": {
    "short": "[B : [L2, F R F']]",
    "long": "B L2 F R F' L2 F R' F' B'"
  },
  "EF": {
    "short": "[L, U' R' U]",
    "long": "L U' R' U L' U' R U"
  },
  "EG": {
    "short": "[L2, D R' D']",
    "long": "L2 D R' D' L2 D R D'"
  },
  "EH": {
    "short": "[L', B R2 B']",
    "long": "L' B R2 B' L B R2 B'"
  },
  "EI": {
    "short": "[L' : [L' D' L, U2]]",
    "long": "L2 D' L U2 L' D L U2 L"
  },
  "EK": {
    "short": "[D' L2 D, R']",
    "long": "D' L2 D R' D' L2 D R"
  },
  "EL": {
    "short": "[D : [R' B2 R, F]]",
    "long": "D R' B2 R F R' B2 R F' D'"
  },
  "EN": {
    "short": "[L B' : [B' L2 B, R2]]",
    "long": "L B2 L2 B R2 B' L2 B R2 B L'"
  },
  "EO": {
    "short": "[L F' L', B2]",
    "long": "L F' L' B2 L F L' B2"
  },
  "EP": {
    "short": "[R' B2 R, F]",
    "long": "R' B2 R F R' B2 R F'"
  },
  "EQ": {
    "short": "[R', F' L F]",
    "long": "R' F' L F R F' L' F"
  },
  "ES": {
    "short": "[D2 : [D' L2 D, R']]",
    "long": "D L2 D R' D' L2 D R D2"
  },
  "ET": {
    "short": "[D' : [R' B2 R, F]]",
    "long": "D' R' B2 R F R' B2 R F' D"
  },
  "EU": {
    "short": "[D' B D, F2]",
    "long": "D' B D F2 D' B' D F2"
  },
  "EV": {
    "short": "[u' : [D' L D, R2]]",
    "long": "u' D' L D R2 D' L' D R2 u"
  },
  "EW": {
    "short": "[R2, F' L F]",
    "long": "R2 F' L F R2 F' L' F"
  },
  "EX": {
    "short": "[L F' L', B']",
    "long": "L F' L' B' L F L' B"
  },
  "FA": {
    "short": "[F : [R' D' R, U2]]",
    "long": "F R' D' R U2 R' D R U2 F'"
  },
  "FB": {
    "short": "[R B R', F]",
    "long": "R B R' F R B' R' F'"
  },
  "FE": {
    "short": "[U' R' U, L]",
    "long": "U' R' U L U' R U L'"
  },
  "FG": {
    "short": "[U' R' U, L']",
    "long": "U' R' U L' U' R U L"
  },
  "FH": {
    "short": "[U' R' U, L2]",
    "long": "U' R' U L2 U' R U L2"
  },
  "FK": {
    "short": "[R, U L U']",
    "long": "R U L U' R' U L' U'"
  },
  "FL": {
    "short": "[D' : [U' R' U, L2]]",
    "long": "D' U' R' U L2 U' R U L2 D"
  },
  "FN": {
    "short": "[B' : [B' L2 B, R2]]",
    "long": "B2 L2 B R2 B' L2 B R2 B"
  },
  "FO": {
    "short": "[F', L' B2 L]",
    "long": "F' L' B2 L F L' B2 L"
  },
  "FP": {
    "short": "[u : [L', U R2 U']]",
    "long": "u L' U R2 U' L U R2 U' u'"
  },
  "FQ": {
    "short": "[R', U L U']",
    "long": "R' U L U' R U L' U'"
  },
  "FR": {
    "short": "[R B' R', F]",
    "long": "R B' R' F R B R' F'"
  },
  "FS": {
    "short": "[R B2 R', F]",
    "long": "R B2 R' F R B2 R' F'"
  },
  "FT": {
    "short": "[F', U B2 U']",
    "long": "F' U B2 U' F U B2 U'"
  },
  "FU": {
    "short": "[L2 : [L' D' L, U2]]",
    "long": "L D' L U2 L' D L U2 L2"
  },
  "FV": {
    "short": "[D : [R2, U L U']]",
    "long": "D R2 U L U' R2 U L' U' D'"
  },
  "FW": {
    "short": "[R2, U L U']",
    "long": "R2 U L U' R2 U L' U'"
  },
  "FX": {
    "short": "[U' B2 U, F]",
    "long": "U' B2 U F U' B2 U F'"
  },
  "GA": {
    "short": "[U2, R' D R]",
    "long": "U2 R' D R U2 R' D' R"
  },
  "GB": {
    "short": "[U, R' D R]",
    "long": "U R' D R U' R' D' R"
  },
  "GD": {
    "short": "[U', R' D R]",
    "long": "U' R' D R U R' D' R"
  },
  "GE": {
    "short": "[D R' D', L2]",
    "long": "D R' D' L2 D R D' L2"
  },
  "GF": {
    "short": "[L', U' R' U]",
    "long": "L' U' R' U L U' R U"
  },
  "GH": {
    "short": "[D R' D', L']",
    "long": "D R' D' L' D R D' L"
  },
  "GI": {
    "short": "[D L': [L' D2 L, U2]]",
    "long": "D L2 D2 L U2 L' D2 L U2 L D'"
  },
  "GK": {
    "short": "[F L F', R']",
    "long": "F L F' R' F L' F' R"
  },
  "GN": {
    "short": "[B': [B' L B, R2]]",
    "long": "B2 L B R2 B' L' B R2 B"
  },
  "GO": {
    "short": "[D2, B U' B']",
    "long": "D2 B U' B' D2 B U B'"
  },
  "GP": {
    "short": "[L: [D2, R U R']]",
    "long": "L D2 R U R' D2 R U' R' L'"
  },
  "GQ": {
    "short": "[U' L2 U, R]",
    "long": "U' L2 U R U' L2 U R'"
  },
  "GR": {
    "short": "[D: [R', F L2 F']]",
    "long": "D R' F L2 F' R F L2 F' D'"
  },
  "GS": {
    "short": "[D', L U2 L']",
    "long": "D' L U2 L' D L U2 L'"
  },
  "GT": {
    "short": "[D: [F' L2 F, R]]",
    "long": "D F' L2 F R F' L2 F R' D'"
  },
  "GV": {
    "short": "[u' : [D' L' D, R2]]",
    "long": "u' D' L' D R2 D' L D R2 u"
  },
  "GW": {
    "short": "[B' L B, R2]",
    "long": "B' L B R2 B' L' B R2"
  },
  "GX": {
    "short": "[B2: [B' D2 B, U']]",
    "long": "B D2 B U' B' D2 B U B2"
  },
  "HA": {
    "short": "[L' D' L, U2]",
    "long": "L' D' L U2 L' D L U2"
  },
  "HB": {
    "short": "[R D' R', U']",
    "long": "R D' R' U' R D R' U"
  },
  "HD": {
    "short": "[U', F D2 F']",
    "long": "U' F D2 F' U F D2 F'"
  },
  "HE": {
    "short": "[B R2 B', L']",
    "long": "B R2 B' L' B R2 B' L"
  },
  "HF": {
    "short": "[L2, U' R' U]",
    "long": "L2 U' R' U L2 U' R U"
  },
  "HG": {
    "short": "[L', D R' D']",
    "long": "L' D R' D' L D R D'"
  },
  "HI": {
    "short": "[L' : [U2, R' D R]]",
    "long": "L' U2 R' D R U2 R' D' R L"
  },
  "HK": {
    "short": "[R, F' L2 F]",
    "long": "R F' L2 F R' F' L2 F"
  },
  "HL": {
    "short": "[D, L' U L]",
    "long": "D L' U L D' L' U' L"
  },
  "HN": {
    "short": "[U R : [R D' R', U2]]",
    "long": "U R R D' R' U2 R D R' U2 R' U'"
  },
  "HO": {
    "short": "[L: [L F' L', B2]]",
    "long": "L2 F' L' B2 L F L' B2 L'"
  },
  "HP": {
    "short": "[D2, R U R']",
    "long": "D2 R U R' D2 R U' R'"
  },
  "HQ": {
    "short": "[U' L U, R]",
    "long": "U' L U R U' L' U R'"
  },
  "HR": {
    "short": "[u' : [D' R D, L2]]",
    "long": "u' D' R D L2 D' R' D L2 u"
  },
  "HT": {
    "short": "[B' U2 B, D]",
    "long": "B' U2 B D B' U2 B D'"
  },
  "HU": {
    "short": "[D2 B2: [B D2 B', U2]]",
    "long": "D2 B' D2 B' U2 B D2 B' U2 B2 D2"
  },
  "HV": {
    "short": "[D: [R2, U L' U']]",
    "long": "D R2 U L' U' R2 U L U' D'"
  },
  "HW": {
    "short": "[D L D', R2]",
    "long": "D L D' R2 D L' D' R2"
  },
  "IA": {
    "short": "[L2 : [F2, R B2 R']]",
    "long": "L2 F2 R B2 R' F2 R B2 R' L2"
  },
  "IB": {
    "short": "[R : [R D R', U2]]",
    "long": "R2 D R' U2 R D' R' U2 R'"
  },
  "IE": {
    "short": "[L' : [U2, L' D' L]]",
    "long": "L' U2 L' D' L U2 L' D L2"
  },
  "IG": {
    "short": "[D L': [U2, L' D2 L]]",
    "long": "D L' U2 L' D2 L U2 L' D2 L2 D'"
  },
  "IH": {
    "short": "[L' : [R' D R, U2]]",
    "long": "L' R' D R U2 R' D' R U2 L"
  },
  "IK": {
    "short": "[L2: [L U2 L', D2]]",
    "long": "L' U2 L' D2 L U2 L' D2 L2"
  },
  "IL": {
    "short": "[L2: [L' F2 L, B]]",
    "long": "L F2 L B L' F2 L B' L2"
  },
  "IN": {
    "short": "[L2 B2: [F' L2 F, R']]",
    "long": "L2 B2 F' L2 F R' F' L2 F R B2 L2"
  },
  "IO": {
    "short": "[L2: [L U2 L', D]]",
    "long": "L' U2 L' D L U2 L' D' L2"
  },
  "IP": {
    "short": "[L' : [R' D' R, U2]]",
    "long": "L' R' D' R U2 R' D R U2 L"
  },
  "IQ": {
    "short": "[L2: [L' F2 L, B2]]",
    "long": "L F2 L B2 L' F2 L B2 L2"
  },
  "IR": {
    "short": "[L D': [D' R2 D, L2]]",
    "long": "L D2 R2 D L2 D' R2 D L2 D L'"
  },
  "IS": {
    "short": "[D2 L2: [L U2 L', D2]]",
    "long": "D2 L' U2 L' D2 L U2 L' D2 L2 D2"
  },
  "IT": {
    "short": "[L: [F2, L B' L']]",
    "long": "L F2 L B' L' F2 L B L2"
  },
  "IU": {
    "short": "[L: [R B2 R', F2]]",
    "long": "L R B2 R' F2 R B2 R' F2 L'"
  },
  "IV": {
    "short": "[D2 L2: [U', R' D2 R]]",
    "long": "D2 L2 U' R' D2 R U R' D2 R L2 D2"
  },
  "IW": {
    "short": "[D L2: [U', R' D2 R]]",
    "long": "D L2 U' R' D2 R U R' D2 R L2 D'"
  },
  "IX": {
    "short": "[L2: [U', R' D2 R]]",
    "long": "L2 U' R' D2 R U R' D2 R L2"
  },
  "KA": {
    "short": "[L' D2 L, U2]",
    "long": "L' D2 L U2 L' D2 L U2"
  },
  "KB": {
    "short": "[B' D B, U']",
    "long": "B' D B U' B' D' B U"
  },
  "KD": {
    "short": "[F' L' F, R]",
    "long": "F' L' F R F' L F R'"
  },
  "KE": {
    "short": "[R', D' L2 D]",
    "long": "R' D' L2 D R D' L2 D"
  },
  "KF": {
    "short": "[U L U', R]",
    "long": "U L U' R U L' U' R'"
  },
  "KG": {
    "short": "[R', F L F']",
    "long": "R' F L F' R F L' F'"
  },
  "KH": {
    "short": "[F' L2 F, R]",
    "long": "F' L2 F R F' L2 F R'"
  },
  "KI": {
    "short": "[L2: [D2, L U2 L']]",
    "long": "L2 D2 L U2 L' D2 L U2 L"
  },
  "KL": {
    "short": "[U L' U', R]",
    "long": "U L' U' R U L U' R'"
  },
  "KN": {
    "short": "[B: [L' D2 L, U2]]",
    "long": "B L' D2 L U2 L' D2 L U2 B'"
  },
  "KO": {
    "short": "[U : [R U' R', D']]",
    "long": "U R U' R' D' R U R' D U'"
  },
  "KQ": {
    "short": "[D2: [B2, U F U']]",
    "long": "D2 B2 U F U' B2 U F' U' D2"
  },
  "KR": {
    "short": "[R', F L2 F']",
    "long": "R' F L2 F' R F L2 F'"
  },
  "KS": {
    "short": "[D2, L U2 L']",
    "long": "D2 L U2 L' D2 L U2 L'"
  },
  "KT": {
    "short": "[B2: [R', F L2 F']]",
    "long": "B2 R' F L2 F' R F L2 F' B2"
  },
  "KU": {
    "short": "[L2: [L' D2 L, U2]]",
    "long": "L D2 L U2 L' D2 L U2 L2"
  },
  "KW": {
    "short": "[u : [R', D L2 D']]",
    "long": "u R' D L2 D' R D L2 D' u'"
  },
  "KX": {
    "short": "[U L2 U', R]",
    "long": "U L2 U' R U L2 U' R'"
  },
  "LA": {
    "short": "[B D' B', U2]",
    "long": "B D' B' U2 B D B' U2"
  },
  "LB": {
    "short": "[D : [U, R' D' R]]",
    "long": "D U R' D' R U' R' D R D'"
  },
  "LD": {
    "short": "[U', F D F']",
    "long": "U' F D F' U F D' F'"
  },
  "LE": {
    "short": "[D : [F, R' B2 R]]",
    "long": "D F R' B2 R F' R' B2 R D'"
  },
  "LF": {
    "short": "[D' : [L2, U' R' U]]",
    "long": "D' L2 U' R' U L2 U' R U D"
  },
  "LH": {
    "short": "[D : [R U R', D]]",
    "long": "D R U R' D R U' R' D' D'"
  },
  "LI": {
    "short": "[L2: [B, L' F2 L]]",
    "long": "L2 B L' F2 L B' L' F2 L'"
  },
  "LK": {
    "short": "[R, U L' U']",
    "long": "R U L' U' R' U L U'"
  },
  "LN": {
    "short": "[B2 : [D', B' U2 B]]",
    "long": "B2 D' B' U2 B D B' U2 B'"
  },
  "LO": {
    "short": "[D : [R B2 R', F']]",
    "long": "D R B2 R' F' R B2 R' F D'"
  },
  "LP": {
    "short": "[D, R U R']",
    "long": "D R U R' D' R U' R'"
  },
  "LQ": {
    "short": "[B L2 B', R]",
    "long": "B L2 B' R B L2 B' R'"
  },
  "LR": {
    "short": "[L2, B' R B]",
    "long": "L2 B' R B L2 B' R' B"
  },
  "LS": {
    "short": "[B2 : [B L2 B', R]]",
    "long": "B' L2 B' R B L2 B' R' B2"
  },
  "LT": {
    "short": "[L' U L, D2]",
    "long": "L' U L D2 L' U' L D2"
  },
  "LV": {
    "short": "[u R2 : [R D2 R', U2]]",
    "long": "u R' D2 R' U2 R D2 R' U2 R2 u'"
  },
  "LW": {
    "short": "[R2, U L' U']",
    "long": "R2 U L' U' R2 U L U'"
  },
  "LX": {
    "short": "[L, D' R2 D]",
    "long": "L D' R2 D L' D' R2 D"
  },
  "NA": {
    "short": "[B : [U2, L' D' L]]",
    "long": "B U2 L' D' L U2 L' D L B'"
  },
  "ND": {
    "short": "[B' : [F' L' F, R2]]",
    "long": "B' F' L' F R2 F' L F R2 B"
  },
  "NE": {
    "short": "[L B' : [R2, B' L2 B]]",
    "long": "L B' R2 B' L2 B R2 B' L2 B2 L'"
  },
  "NF": {
    "short": "[B' : [R2, B' L2 B]]",
    "long": "B' R2 B' L2 B R2 B' L2 B2"
  },
  "NG": {
    "short": "[B': [R2, B' L B]]",
    "long": "B' R2 B' L B R2 B' L' B2"
  },
  "NH": {
    "short": "[U R : [U2, R D' R']]",
    "long": "U R U2 R D' R' U2 R D R' R' U'"
  },
  "NI": {
    "short": "[L2 B2: [R', F' L2 F]]",
    "long": "L2 B2 R' F' L2 F R F' L2 F B2 L2"
  },
  "NK": {
    "short": "[B: [U2, L' D2 L]]",
    "long": "B U2 L' D2 L U2 L' D2 L B'"
  },
  "NL": {
    "short": "[B2 : [B' U2 B, D']]",
    "long": "B U2 B D' B' U2 B D B2"
  },
  "NO": {
    "short": "[B2 : [B R2 B', L']]",
    "long": "B' R2 B' L' B R2 B' L B2"
  },
  "NP": {
    "short": "[B : [R' D' R, U2]]",
    "long": "B R' D' R U2 R' D R U2 B'"
  },
  "NR": {
    "short": "[B2 : [B' U2 B, D]]",
    "long": "B U2 B D B' U2 B D' B2"
  },
  "NS": {
    "short": "[B : [F D' F', U2]]",
    "long": "B F D' F' U2 F D F' U2 B'"
  },
  "NT": {
    "short": "[U D R : [U2, R D' R']]",
    "long": "UD R U2 R D' R' U2 R D R' R' UD'"
  },
  "NU": {
    "short": "[U' R' : [R' D R, U2]]",
    "long": "U' R2 D R U2 R' D' R U2 R U"
  },
  "NV": {
    "short": "[u R2 : [U2, L D2 L']]",
    "long": "u R2 U2 L D2 L' U2 L D2 L' R2 u'"
  },
  "NW": {
    "short": "[F2 : [R' U' R, D2]]",
    "long": "F2 R' U' R D2 R' U R D2 F2"
  },
  "NX": {
    "short": "[B : [U2, L' D L]]",
    "long": "B U2 L' D L U2 L' D' L B'"
  },
  "OA": {
    "short": "[L' D L, U2]",
    "long": "L' D L U2 L' D' L U2"
  },
  "OB": {
    "short": "[R D R', U']",
    "long": "R D R' U' R D' R' U"
  },
  "OD": {
    "short": "[U' : [U', R D R']]",
    "long": "U' U' R D R' U R D' R' U"
  },
  "OE": {
    "short": "[B2, L F' L']",
    "long": "B2 L F' L' B2 L F L'"
  },
  "OF": {
    "short": "[L' B2 L, F']",
    "long": "L' B2 L F' L' B2 L F"
  },
  "OG": {
    "short": "[B U' B', D2]",
    "long": "B U' B' D2 B U B' D2"
  },
  "OH": {
    "short": "[L: [B2, L F' L']]",
    "long": "L B2 L F' L' B2 L F L2"
  },
  "OI": {
    "short": "[L2: [D, L U2 L']]",
    "long": "L2 D L U2 L' D' L U2 L"
  },
  "OK": {
    "short": "[U : [D', R U' R']]",
    "long": "U D' R U' R' D R U R' U'"
  },
  "OL": {
    "short": "[D : [F', R B2 R']]",
    "long": "D F' R B2 R' F R B2 R' D'"
  },
  "ON": {
    "short": "[B2 : [L', B R2 B']]",
    "long": "B2 L' B R2 B' L B R2 B"
  },
  "OP": {
    "short": "[D B D', F]",
    "long": "D B D' F D B' D' F'"
  },
  "OQ": {
    "short": "[D : [L' F2 L, B2]]",
    "long": "D L' F2 L B2 L' F2 L B2 D'"
  },
  "OR": {
    "short": "[R' U : [R' D' R, U]]",
    "long": "R' U R' D' R U R' D R U2 R"
  },
  "OS": {
    "short": "[D, L U2 L']",
    "long": "D L U2 L' D' L U2 L'"
  },
  "OU": {
    "short": "[L2 : [L' D L, U2]]",
    "long": "L D L U2 L' D' L U2 L2"
  },
  "OV": {
    "short": "[D2 B2 : [B' D2 B, U']]",
    "long": "D2 B D2 B U' B' D2 B U B2 D2"
  },
  "OX": {
    "short": "[u : [D' R' D, L2]]",
    "long": "u D' R' D L2 D' R D L2 u'"
  },
  "PA": {
    "short": "[U2, R' D' R]",
    "long": "U2 R' D' R U2 R' D R"
  },
  "PB": {
    "short": "[U, R' D' R]",
    "long": "U R' D' R U' R' D R"
  },
  "PD": {
    "short": "[U', R' D' R]",
    "long": "U' R' D' R U R' D R"
  },
  "PE": {
    "short": "[F, R' B2 R]",
    "long": "F R' B2 R F' R' B2 R"
  },
  "PF": {
    "short": "[u : [U R2 U', L']]",
    "long": "u U R2 U' L' U R2 U' L u'"
  },
  "PG": {
    "short": "[L: [R U R', D2]]",
    "long": "L R U R' D2 R U' R' D2 L'"
  },
  "PH": {
    "short": "[R U R', D2]",
    "long": "R U R' D2 R U' R' D2"
  },
  "PI": {
    "short": "[L' : [U2, R' D' R]]",
    "long": "L' U2 R' D' R U2 R' D R L"
  },
  "PL": {
    "short": "[R U R', D]",
    "long": "R U R' D R U' R' D'"
  },
  "PN": {
    "short": "[B : [U2, R' D' R]]",
    "long": "B U2 R' D' R U2 R' D R B'"
  },
  "PO": {
    "short": "[F, D B D']",
    "long": "F D B D' F' D B' D'"
  },
  "PQ": {
    "short": "[U' B' U, F']",
    "long": "U' B' U F' U' B U F"
  },
  "PR": {
    "short": "[R B' R', F']",
    "long": "R B' R' F' R B R' F"
  },
  "PS": {
    "short": "[R B2 R', F']",
    "long": "R B2 R' F' R B2 R' F"
  },
  "PT": {
    "short": "[R U R', D']",
    "long": "R U R' D' R U' R' D"
  },
  "PU": {
    "short": "[L2 : [U2, R' D' R]]",
    "long": "L2 U2 R' D' R U2 R' D R L2"
  },
  "PW": {
    "short": "[B2 : [U2, R' D' R]]",
    "long": "B2 U2 R' D' R U2 R' D R B2"
  },
  "PX": {
    "short": "[R : [R D' R', U']]",
    "long": "R2 D' R' U' R D R' U R'"
  },
  "QA": {
    "short": "[L' : [B2, L' F2 L]]",
    "long": "L' B2 L' F2 L B2 L' F2 L2"
  },
  "QD": {
    "short": "[R' D' : [R' D R, U']]",
    "long": "R' D' R' D R U' R' D' R U D R"
  },
  "QE": {
    "short": "[F' L F, R']",
    "long": "F' L F R' F' L' F R"
  },
  "QF": {
    "short": "[U L U', R']",
    "long": "U L U' R' U L' U' R"
  },
  "QG": {
    "short": "[R, U' L2 U]",
    "long": "R U' L2 U R' U' L2 U"
  },
  "QH": {
    "short": "[R, U' L U]",
    "long": "R U' L U R' U' L' U"
  },
  "QI": {
    "short": "[L2: [B2, L' F2 L]]",
    "long": "L2 B2 L' F2 L B2 L' F2 L'"
  },
  "QK": {
    "short": "[D2: [U F U', B2]]",
    "long": "D2 U F U' B2 U F' U' B2 D2"
  },
  "QL": {
    "short": "[R, B L2 B']",
    "long": "R B L2 B' R' B L2 B'"
  },
  "QO": {
    "short": "[D : [B2, L' F2 L]]",
    "long": "D B2 L' F2 L B2 L' F2 L D'"
  },
  "QP": {
    "short": "[F', U' B' U]",
    "long": "F' U' B' U F U' B U"
  },
  "QR": {
    "short": "[R, U' L' U]",
    "long": "R U' L' U R' U' L U"
  },
  "QS": {
    "short": "[U F U', B2]",
    "long": "U F U' B2 U F' U' B2"
  },
  "QT": {
    "short": "[U F U', B]",
    "long": "U F U' B U F' U' B'"
  },
  "QU": {
    "short": "[L B2 L', F2]",
    "long": "L B2 L' F2 L B2 L' F2"
  },
  "QV": {
    "short": "[u' : [F L2 F', R2]]",
    "long": "u' F L2 F' R2 F L2 F' R2 u"
  },
  "QW": {
    "short": "[D : [U L2 U', R']]",
    "long": "D U L2 U' R' U L2 U' R D'"
  },
  "QX": {
    "short": "[U L2 U', R']",
    "long": "U L2 U' R' U L2 U' R"
  },
  "RB": {
    "short": "[R' : [U2, R' D' R]]",
    "long": "R' U2 R' D' R U2 R' D R2"
  },
  "RD": {
    "short": "[L, F R F']",
    "long": "L F R F' L' F R' F'"
  },
  "RF": {
    "short": "[F, R B' R']",
    "long": "F R B' R' F' R B R'"
  },
  "RG": {
    "short": "[D: [F L2 F', R']]",
    "long": "D F L2 F' R' F L2 F' R D'"
  },
  "RH": {
    "short": "[u' : [L2, D' R D]]",
    "long": "u' L2 D' R D L2 D' R' D u"
  },
  "RI": {
    "short": "[L D': [L2, D' R2 D]]",
    "long": "L D' L2 D' R2 D L2 D' R2 D2 L'"
  },
  "RK": {
    "short": "[F L2 F', R']",
    "long": "F L2 F' R' F L2 F' R"
  },
  "RL": {
    "short": "[B' R B, L2]",
    "long": "B' R B L2 B' R' B L2"
  },
  "RN": {
    "short": "[B2 : [D, B' U2 B]]",
    "long": "B2 D B' U2 B D' B' U2 B'"
  },
  "RO": {
    "short": "[R' U : [U, R' D' R]]",
    "long": "R' U U R' D' R U' R' D R U' R"
  },
  "RP": {
    "short": "[F', R B' R']",
    "long": "F' R B' R' F R B R'"
  },
  "RQ": {
    "short": "[U' L' U, R]",
    "long": "U' L' U R U' L U R'"
  },
  "RS": {
    "short": "[B, L' F2 L]",
    "long": "B L' F2 L B' L' F2 L"
  },
  "RT": {
    "short": "[B2, D' F D]",
    "long": "B2 D' F D B2 D' F' D"
  },
  "RU": {
    "short": "[D2 : [D L' D', R2]]",
    "long": "D' L' D' R2 D L D' R2 D2"
  },
  "RV": {
    "short": "[D : [D L' D', R2]]",
    "long": "D2 L' D' R2 D L D' R2 D'"
  },
  "RW": {
    "short": "[D L' D', R2]",
    "long": "D L' D' R2 D L D' R2"
  },
  "RX": {
    "short": "[B' R B, L]",
    "long": "B' R B L B' R' B L'"
  },
  "SA": {
    "short": "[U2, R' D2 R]",
    "long": "U2 R' D2 R U2 R' D2 R"
  },
  "SB": {
    "short": "[U, R' D2 R]",
    "long": "U R' D2 R U' R' D2 R"
  },
  "SD": {
    "short": "[U', R' D2 R]",
    "long": "U' R' D2 R U R' D2 R"
  },
  "SE": {
    "short": "[D2 : [R', D' L2 D]]",
    "long": "D2 R' D' L2 D R D' L2 D'"
  },
  "SF": {
    "short": "[F, R B2 R']",
    "long": "F R B2 R' F' R B2 R'"
  },
  "SG": {
    "short": "[L U2 L', D']",
    "long": "L U2 L' D' L U2 L' D"
  },
  "SI": {
    "short": "[D2 L2: [D2, L U2 L']]",
    "long": "D2 L2 D2 L U2 L' D2 L U2 L D2"
  },
  "SK": {
    "short": "[L U2 L', D2]",
    "long": "L U2 L' D2 L U2 L' D2"
  },
  "SL": {
    "short": "[B2 : [R, B L2 B']]",
    "long": "B2 R B L2 B' R' B L2 B"
  },
  "SN": {
    "short": "[B : [U2, F D' F']]",
    "long": "B U2 F D' F' U2 F D F' B'"
  },
  "SO": {
    "short": "[L U2 L', D]",
    "long": "L U2 L' D L U2 L' D'"
  },
  "SP": {
    "short": "[F', R B2 R']",
    "long": "F' R B2 R' F R B2 R'"
  },
  "SQ": {
    "short": "[B2, U F U']",
    "long": "B2 U F U' B2 U F' U'"
  },
  "SR": {
    "short": "[L' F2 L, B]",
    "long": "L' F2 L B L' F2 L B'"
  },
  "ST": {
    "short": "[L' F2 L, B']",
    "long": "L' F2 L B' L' F2 L B"
  },
  "SU": {
    "short": "[D' B' D, F2]",
    "long": "D' B' D F2 D' B D F2"
  },
  "SV": {
    "short": "[D : [B' L B, R2]]",
    "long": "D B' L B R2 B' L' B R2 D'"
  },
  "SW": {
    "short": "[U R : [D2, R U' R']]",
    "long": "U R D2 R U' R' D2 R U R2 U'"
  },
  "TA": {
    "short": "[U2, R' D2 R]",
    "long": "U2 R' D2 R U2 R' D2 R"
  },
  "TB": {
    "short": "[U, F D' F']",
    "long": "U F D' F' U' F D F'"
  },
  "TD": {
    "short": "[L D2 L', U]",
    "long": "L D2 L' U L D2 L' U'"
  },
  "TE": {
    "short": "[D' : [F, R' B2 R]]",
    "long": "D' F R' B2 R F' R' B2 R D"
  },
  "TF": {
    "short": "[U B2 U', F']",
    "long": "U B2 U' F' U B2 U' F"
  },
  "TG": {
    "short": "[D: [R, F' L2 F]]",
    "long": "D R F' L2 F R' F' L2 F D'"
  },
  "TH": {
    "short": "[D, B' U2 B]",
    "long": "D B' U2 B D' B' U2 B"
  },
  "TI": {
    "short": "[L: [L B' L', F2]]",
    "long": "L2 B' L' F2 L B L' F2 L'"
  },
  "TK": {
    "short": "[B2: [F L2 F', R']]",
    "long": "B2 F L2 F' R' F L2 F' R B2"
  },
  "TL": {
    "short": "[D2, L' U L]",
    "long": "D2 L' U L D2 L' U' L"
  },
  "TN": {
    "short": "[UD R : [R D' R', U2]]",
    "long": "UD R R D' R' U2 R D R' U2 R' UD'"
  },
  "TP": {
    "short": "[D', R U R']",
    "long": "D' R U R' D R U' R'"
  },
  "TQ": {
    "short": "[B, U F U']",
    "long": "B U F U' B' U F' U'"
  },
  "TR": {
    "short": "[D' F D, B2]",
    "long": "D' F D B2 D' F' D B2"
  },
  "TS": {
    "short": "[B', L' F2 L]",
    "long": "B' L' F2 L B L' F2 L"
  },
  "TU": {
    "short": "[L B' L', F2]",
    "long": "L B' L' F2 L B L' F2"
  },
  "TV": {
    "short": "[D : [D L D', R2]]",
    "long": "D2 L D' R2 D L' D' R2 D'"
  },
  "TX": {
    "short": "[L2 : [L D2 L', U]]",
    "long": "L' D2 L' U L D2 L' U' L2"
  },
  "UA": {
    "short": "[L D' L' : [L' D L, U2]]",
    "long": "L D' L2 D L U2 L' D' L U2 L D L'"
  },
  "UB": {
    "short": "[R B R', F2]",
    "long": "R B R' F2 R B' R' F2"
  },
  "UD": {
    "short": "[D2 : [R2, D L2 D']]",
    "long": "D2 R2 D L2 D' R2 D L2 D"
  },
  "UE": {
    "short": "[F2, D' B D]",
    "long": "F2 D' B D F2 D' B' D"
  },
  "UF": {
    "short": "[L2 : [U2, L' D' L]]",
    "long": "L2 U2 L' D' L U2 L' D L'"
  },
  "UH": {
    "short": "[D2 B2: [U2, B D2 B']]",
    "long": "D2 B2 U2 B D2 B' U2 B D2 B D2"
  },
  "UI": {
    "short": "[L: [F2, R B2 R']]",
    "long": "L F2 R B2 R' F2 R B2 R' L'"
  },
  "UK": {
    "short": "[L2: [U2, L' D2 L]]",
    "long": "L2 U2 L' D2 L U2 L' D2 L'"
  },
  "UN": {
    "short": "[U' R' : [U2, R' D R]]",
    "long": "U' R' U2 R' D R U2 R' D' R2 U"
  },
  "UO": {
    "short": "[L2 : [U2, L' D L]]",
    "long": "L2 U2 L' D L U2 L' D' L'"
  },
  "UP": {
    "short": "[L2 : [R' D' R, U2]]",
    "long": "L2 R' D' R U2 R' D R U2 L2"
  },
  "UQ": {
    "short": "[F2, L B2 L']",
    "long": "F2 L B2 L' F2 L B2 L'"
  },
  "UR": {
    "short": "[D2 : [R2, D L' D']]",
    "long": "D2 R2 D L' D' R2 D L D"
  },
  "US": {
    "short": "[F2, D' B' D]",
    "long": "F2 D' B' D F2 D' B D"
  },
  "UT": {
    "short": "[F2, L B' L']",
    "long": "F2 L B' L' F2 L B L'"
  },
  "UV": {
    "short": "[D2 : [U L2 U', R2]]",
    "long": "D2 U L2 U' R2 U L2 U' R2 D2"
  },
  "UW": {
    "short": "[R2, U' R2 D R2 U]",
    "long": "R2 U' R2 D R2 U R2 U' R2 D' R2 U"
  },
  "UX": {
    "short": "[U' B2 U, F2]",
    "long": "U' B2 U F2 U' B2 U F2"
  },
  "VA": {
    "short": "[L2 D2 : [R2, U L2 U']]",
    "long": "L2 D2 R2 U L2 U' R2 U L2 U' D2 L2"
  },
  "VB": {
    "short": "[D' : [R B R', F2]]",
    "long": "D' R B R' F2 R B' R' F2 D"
  },
  "VD": {
    "short": "[D : [R2, D L2 D']]",
    "long": "D R2 D L2 D' R2 D L2 D2"
  },
  "VE": {
    "short": "[u' : [R2, D' L D]]",
    "long": "u' R2 D' L D R2 D' L' D u"
  },
  "VF": {
    "short": "[D: [U L U', R2]]",
    "long": "D U L U' R2 U L' U' R2 D'"
  },
  "VG": {
    "short": "[u' : [R2, D' L' D]]",
    "long": "u' R2 D' L' D R2 D' L D u"
  },
  "VH": {
    "short": "[D: [U L' U', R2]]",
    "long": "D U L' U' R2 U L U' R2 D'"
  },
  "VI": {
    "short": "[D2 L2: [R' D2 R, U']]",
    "long": "D2 L2 R' D2 R U' R' D2 R U L2 D2"
  },
  "VL": {
    "short": "[u R2 : [U2, R D2 R']]",
    "long": "u R2 U2 R D2 R' U2 R D2 R u'"
  },
  "VN": {
    "short": "[u R2 : [L D2 L', U2]]",
    "long": "u R2 L D2 L' U2 L D2 L' U2 R2 u'"
  },
  "VO": {
    "short": "[D2 B2 : [B' D2 B, U']]",
    "long": "D2 B D2 B U' B' D2 B U B2 D2"
  },
  "VQ": {
    "short": "[u' : [R2, F L2 F']]",
    "long": "u' R2 F L2 F' R2 F L2 F' u"
  },
  "VR": {
    "short": "[D : [R2, D L' D']]",
    "long": "D R2 D L' D' R2 D L D2"
  },
  "VS": {
    "short": "[D : [R2, B' L B]]",
    "long": "D R2 B' L B R2 B' L' B D'"
  },
  "VT": {
    "short": "[D : [R2, D L D']]",
    "long": "D R2 D L D' R2 D L' D2"
  },
  "VU": {
    "short": "[D2 : [R2, U L2 U']]",
    "long": "D2 R2 U L2 U' R2 U L2 U' D2"
  },
  "VW": {
    "short": "[D : [U L2 U', R2]]",
    "long": "D U L2 U' R2 U L2 U' R2 D'"
  },
  "VX": {
    "short": "[D' : [R2, U' R2 D R2 U]]",
    "long": "D' R2 U' R2 D R2 U R2 U' R2 D' R2 U D"
  },
  "WA": {
    "short": "[D' L2 D2 : [R2, U L2 U']]",
    "long": "D' L2 D2 R2 U L2 U' R2 U L2 U' D2 L2 D"
  },
  "WB": {
    "short": "[D2 : [R B R', F2]]",
    "long": "D2 R B R' F2 R B' R' F2 D2"
  },
  "WD": {
    "short": "[R2, D L2 D']",
    "long": "R2 D L2 D' R2 D L2 D'"
  },
  "WE": {
    "short": "[F' L F, R2]",
    "long": "F' L F R2 F' L' F R2"
  },
  "WF": {
    "short": "[U L U', R2]",
    "long": "U L U' R2 U L' U' R2"
  },
  "WG": {
    "short": "[R2, B' L B]",
    "long": "R2 B' L B R2 B' L' B"
  },
  "WH": {
    "short": "[R2, D L D']",
    "long": "R2 D L D' R2 D L' D'"
  },
  "WI": {
    "short": "[D L2: [R' D2 R, U']]",
    "long": "D L2 R' D2 R U' R' D2 R U L2 D'"
  },
  "WK": {
    "short": "[u : [D L2 D', R']]",
    "long": "u D L2 D' R' D L2 D' R u'"
  },
  "WL": {
    "short": "[U L' U', R2]",
    "long": "U L' U' R2 U L U' R2"
  },
  "WN": {
    "short": "[F2 : [D2, R' U' R]]",
    "long": "F2 D2 R' U' R D2 R' U R F2"
  },
  "WP": {
    "short": "[B2 : [R' D' R, U2]]",
    "long": "B2 R' D' R U2 R' D R U2 B2"
  },
  "WQ": {
    "short": "[D : [R', U L2 U']]",
    "long": "D R' U L2 U' R U L2 U' D'"
  },
  "WR": {
    "short": "[R2, D L' D']",
    "long": "R2 D L' D' R2 D L D'"
  },
  "WS": {
    "short": "[U R : [R U' R', D2]]",
    "long": "U R2 U' R' D2 R U R' D2 R' U'"
  },
  "WU": {
    "short": "[U' R2 D R2 U, R2]",
    "long": "U' R2 D R2 U R2 U' R2 D' R2 U R2"
  },
  "WV": {
    "short": "[D : [R2, U L2 U']]",
    "long": "D R2 U L2 U' R2 U L2 U' D'"
  },
  "WX": {
    "short": "[U L2 U', R2]",
    "long": "U L2 U' R2 U L2 U' R2"
  },
  "XA": {
    "short": "[D2 L2 D2 : [R2, U L2 U']]",
    "long": "D2 L2 D2 R2 U L2 U' R2 U L2 U' D2 L2 D2"
  },
  "XB": {
    "short": "[B2, R' F' R]",
    "long": "B2 R' F' R B2 R' F R"
  },
  "XD": {
    "short": "[L2, F R F']",
    "long": "L2 F R F' L2 F R' F'"
  },
  "XE": {
    "short": "[B', L F' L']",
    "long": "B' L F' L' B L F L'"
  },
  "XF": {
    "short": "[F, U' B2 U]",
    "long": "F U' B2 U F' U' B2 U"
  },
  "XG": {
    "short": "[B2: [U', B' D2 B]]",
    "long": "B2 U' B' D2 B U B' D2 B'"
  },
  "XI": {
    "short": "[L2: [R' D2 R, U']]",
    "long": "L2 R' D2 R U' R' D2 R U L2"
  },
  "XK": {
    "short": "[R, U L2 U']",
    "long": "R U L2 U' R' U L2 U'"
  },
  "XL": {
    "short": "[D' R2 D, L]",
    "long": "D' R2 D L D' R2 D L'"
  },
  "XN": {
    "short": "[B : [L' D L, U2]]",
    "long": "B L' D L U2 L' D' L U2 B'"
  },
  "XO": {
    "short": "[u : [L2, D' R' D]]",
    "long": "u L2 D' R' D L2 D' R D u'"
  },
  "XP": {
    "short": "[R : [U', R D' R']]",
    "long": "R U' R D' R' U R D R2"
  },
  "XQ": {
    "short": "[R', U L2 U']",
    "long": "R' U L2 U' R U L2 U'"
  },
  "XR": {
    "short": "[L, B' R B]",
    "long": "L B' R B L' B' R' B"
  },
  "XT": {
    "short": "[L2 : [U, L D2 L']]",
    "long": "L2 U L D2 L' U' L D2 L"
  },
  "XU": {
    "short": "[F2, U' B2 U]",
    "long": "F2 U' B2 U F2 U' B2 U"
  },
  "XV": {
    "short": "[D' : [U' R2 D R2 U, R2]]",
    "long": "D' U' R2 D R2 U R2 U' R2 D' R2 U R2 D"
  },
  "XW": {
    "short": "[R2, U L2 U']",
    "long": "R2 U L2 U' R2 U L2 U'"
  }
};

