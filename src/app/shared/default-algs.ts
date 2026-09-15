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
    "short": "[R2 U' : [S, R2]]",
    "long": "R2 U' S R2 S' R2 U R2"
  },
  "AD": {
    "short": "[L2' U : [S', L2]]",
    "long": "L2' U S' L2 S L2 U' L2"
  },
  "AE": {
    "short": "[S' U : [S', L2]]",
    "long": "S' U S' L2 S L2 U' S"
  },
  "AF": {
    "short": "[U' : [R' E R, U2]]",
    "long": "U' R' E R U2 R' E' R U2 U"
  },
  "AG": {
    "short": "[U : [L' E' L, U2]]",
    "long": "U L' E' L U2 L' E L U2 U'"
  },
  "AH": {
    "short": "[U' : [R E' R', U2]]",
    "long": "U' R E' R' U2 R E R' U2 U"
  },
  "AJ": {
    "short": "[R' U' : [S, R2]]",
    "long": "R' U' S R2 S' R2 U R"
  },
  "AK": {
    "short": "[U' M U : [M, U2]]",
    "long": "U' M U M U2 M' U2 U' M' U"
  },
  "AL": {
    "short": "[L U : [S', L2]]",
    "long": "L U S' L2 S L2 U' L'"
  },
  "AM": {
    "short": "[S U' : [S, R2]]",
    "long": "S U' S R2 S' R2 U S'"
  },
  "AN": {
    "short": "[U : [L' E L, U2]]",
    "long": "U L' E L U2 L' E' L U2 U'"
  },
  "AO": {
    "short": "[U' : [R E R', U2]]",
    "long": "U' R E R' U2 R E' R' U2 U"
  },
  "AP": {
    "short": "[U : [L E' L', U2]]",
    "long": "U L E' L' U2 L E L' U2 U'"
  },
  "AR": {
    "short": "[L' U : [S', L2]]",
    "long": "L' U S' L2 S L2 U' L"
  },
  "AS": {
    "short": "[U M' U : [M', U2]]",
    "long": "U M' U M' U2 M U2 U' M U'"
  },
  "AT": {
    "short": "[R U' : [S, R2]]",
    "long": "R U' S R2 S' R2 U R'"
  },
  "AU": {
    "short": "[U2, M']",
    "long": "U2 M' U2 M"
  },
  "AV": {
    "short": "[U' : [S, R2]]",
    "long": "U' S R2 S' R2 U"
  },
  "AW": {
    "short": "[M, U2]",
    "long": "M U2 M' U2"
  },
  "AX": {
    "short": "[U : [S', L2]]",
    "long": "U S' L2 S L2 U'"
  },
  "BA": {
    "short": "[R2 U' : [R2, S]]",
    "long": "R2 U' R2 S R2 S' U R2"
  },
  "BD": {
    "short": "[M2 U : [M, U2]]",
    "long": "M2 U M U2 M' U2 U' M2"
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
    "long": "U L' E' L U L' E L U' U'"
  },
  "BH": {
    "short": "[U', R E' R']",
    "long": "U' R E' R' U R E R'"
  },
  "BJ": {
    "short": "[E' : [U', R' E R]]",
    "long": "E' U' R' E R U R' E' R E"
  },
  "BK": {
    "short": "[M', R U' R' U]",
    "long": "M' R U' R' U M U' R U R'"
  },
  "BL": {
    "short": "[U', R E2 R']",
    "long": "U' R E2 R' U R E2 R'"
  },
  "BN": {
    "short": "[U : [L' E L, U]]",
    "long": "U L' E L U L' E' L U' U'"
  },
  "BO": {
    "short": "[U', R E R']",
    "long": "U' R E R' U R E' R'"
  },
  "BP": {
    "short": "[U : [L E' L', U]]",
    "long": "U L E' L' U L E L' U' U'"
  },
  "BQ": {
    "short": "[M, R' U' R U]",
    "long": "M R' U' R U M' U' R' U R"
  },
  "BR": {
    "short": "[U', R' E2 R]",
    "long": "U' R' E2 R U R' E2 R"
  },
  "BS": {
    "short": "(U M U M')2",
    "long": "U M U M' U M U M'"
  },
  "BT": {
    "short": "[E : [U', R E' R']]",
    "long": "E U' R E' R' U R E R' E'"
  },
  "BU": {
    "short": "[M U2 M, U]",
    "long": "M U2 M U M' U2 M' U'"
  },
  "BV": {
    "short": "[R' U R' : [S, R2]]",
    "long": "R' U R' S R2 S' R2 R U' R"
  },
  "BW": {
    "short": "[M2, R U' R' U]",
    "long": "M2 R U' R' U M2 U' R U R'"
  },
  "BX": {
    "short": "U' L' U' L U L U L U' L'",
    "long": "U' L' U' L U L U L U' L'"
  },
  "DA": {
    "short": "[U' M2 U' : [M, U2]]",
    "long": "U' M2 U' M U2 M' U2 U M2 U"
  },
  "DB": {
    "short": "[M2 U' : [M, U2]]",
    "long": "M2 U' M U2 M' U2 U M2"
  },
  "DF": {
    "short": "[U' : [R' E R, U']]",
    "long": "U' R' E R U' R' E' R U U"
  },
  "DG": {
    "short": "[U, L' E' L]",
    "long": "U L' E' L U' L' E L"
  },
  "DH": {
    "short": "[U' : [R E' R', U']]",
    "long": "U' R E' R' U' R E R' U U"
  },
  "DJ": {
    "short": "[U, R' S2 R]",
    "long": "U R' S2 R U' R' S2 R"
  },
  "DK": {
    "short": "[M', L' U L U']",
    "long": "M' L' U L U' M U L' U' L"
  },
  "DL": {
    "short": "[E : [U, L E' L']]",
    "long": "E U L E' L' U' L E L' E'"
  },
  "DM": {
    "short": "[S, R' F R]",
    "long": "S R' F R S' R' F' R"
  },
  "DN": {
    "short": "[U, L' E L]",
    "long": "U L' E L U' L' E' L"
  },
  "DO": {
    "short": "[U' : [R E R', U']]",
    "long": "U' R E R' U' R E' R' U U"
  },
  "DP": {
    "short": "[U, L E' L']",
    "long": "U L E' L' U' L E L'"
  },
  "DQ": {
    "short": "[M, L U L' U']",
    "long": "M L U L' U' M' U L U' L'"
  },
  "DR": {
    "short": "[E' : [U, L' E L]]",
    "long": "E' U L' E L U' L' E' L E"
  },
  "DS": {
    "short": "(U' M U' M')2",
    "long": "U' M U' M' U' M U' M'"
  },
  "DT": {
    "short": "[U, R S2 R']",
    "long": "U R S2 R' U' R S2 R'"
  },
  "DU": {
    "short": "[R' F' : [R S R', F2]]",
    "long": "R' F' R S R' F2 R S' R' F2 F R"
  },
  "DV": {
    "short": "U R U R' U' R' U' R' U R",
    "long": "U R U R' U' R' U' R' U R"
  },
  "DW": {
    "short": "D' U R U R' U' R' U' R' U R D",
    "long": "D' U R U R' U' R' U' R' U R D"
  },
  "DX": {
    "short": "[L U' L : [S', L2]]",
    "long": "L U' L S' L2 S L2 L' U L'"
  },
  "EA": {
    "short": "[U' M U : [M', U2]]",
    "long": "U' M U M' U2 M U2 U' M' U"
  },
  "EB": {
    "short": "[L F' L', S']",
    "long": "L F' L' S' L F L' S"
  },
  "EF": {
    "short": "[S : [U', R' E R]]",
    "long": "S U' R' E R U R' E' R S'"
  },
  "EG": {
    "short": "[F L' : [E', L2]]",
    "long": "F L' E' L2 E L2 L F'"
  },
  "EH": {
    "short": "[S : [U', R E' R']]",
    "long": "S U' R E' R' U R E R' S'"
  },
  "EJ": {
    "short": "[S' U L' : [E', L2]]",
    "long": "S' U L' E' L2 E L2 L U' S"
  },
  "EK": {
    "short": "[L F : [L' U L, E']]",
    "long": "L F L' U L E' L' U' L E F' L'"
  },
  "EL": {
    "short": "[r' F' : [F', r S r']]",
    "long": "r' F' F' r S r' F r S' r' F r"
  },
  "EM": {
    "short": "[M U : [M', U2]]",
    "long": "M U M' U2 M U2 U' M'"
  },
  "EN": {
    "short": "[r' U : [M', U2]]",
    "long": "r' U M' U2 M U2 U' r"
  },
  "EO": {
    "short": "[R' F R : [S, R2]]",
    "long": "R' F R S R2 S' R2 R' F' R"
  },
  "EP": {
    "short": "[M R U : [M', U2]]",
    "long": "M R U M' U2 M U2 U' R' M'"
  },
  "EQ": {
    "short": "[L' U' L U, M']",
    "long": "L' U' L U M' U' L' U L M"
  },
  "ER": {
    "short": "[L' u L' : [E, L2]]",
    "long": "L' u L' E L2 E' L2 L u' L"
  },
  "ES": {
    "short": "[M' : (U M' U M)2]",
    "long": "M' U M' U M U M' U M M"
  },
  "ET": {
    "short": "[S' U L : [E, L2]]",
    "long": "S' U L E L2 E' L2 L' U' S"
  },
  "EU": {
    "short": "[L' F : [E', L2]]",
    "long": "L' F E' L2 E L2 F' L"
  },
  "EV": {
    "short": "[r : [U', L E' L']]",
    "long": "r U' L E' L' U L E L' r'"
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
    "short": "[U : [R' E R, U2]]",
    "long": "U R' E R U2 R' E' R U2 U'"
  },
  "FB": {
    "short": "[R' E R, U']",
    "long": "R' E R U' R' E' R U"
  },
  "FD": {
    "short": "[U' : [U', R' E R]]",
    "long": "U' U' R' E R U R' E' R U"
  },
  "FE": {
    "short": "[S' : [R' E R, U']]",
    "long": "S' R' E R U' R' E' R U S"
  },
  "FG": {
    "short": "[L, D M D']",
    "long": "L D M D' L' D M' D'"
  },
  "FH": {
    "short": "[r U L : [S', L2]]",
    "long": "r U L S' L2 S L2 L' U' r'"
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
    "short": "[M L' U : [M', U2]]",
    "long": "M L' U M' U2 M U2 U' L M'"
  },
  "FN": {
    "short": "[r U R' : [E, R2]]",
    "long": "r U R' E R2 E' R2 R U' r'"
  },
  "FO": {
    "short": "[S' : [R' E R, U']]",
    "long": "S' R' E R U' R' E' R U S"
  },
  "FP": {
    "short": "[UE R' : [S, R2]]",
    "long": "UE R' S R2 S' R2 R UE'"
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
    "short": "[U' : [L' E' L, U2]]",
    "long": "U' L' E' L U2 L' E L U2 U"
  },
  "GB": {
    "short": "[U : [U, L' E' L]]",
    "long": "U U L' E' L U' L' E L U'"
  },
  "GD": {
    "short": "[L' E' L, U]",
    "long": "L' E' L U L' E L U'"
  },
  "GE": {
    "short": "[F L : [E', L2]]",
    "long": "F L E' L2 E L2 L' F'"
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
    "short": "[U : [R E' R', U2]]",
    "long": "U R E' R' U2 R E R' U2 U'"
  },
  "HB": {
    "short": "[R E' R', U']",
    "long": "R E' R' U' R E R' U"
  },
  "HD": {
    "short": "[U' : [U', R E' R']]",
    "long": "U' U' R E' R' U R E R' U"
  },
  "HE": {
    "short": "[S : [R E' R', U']]",
    "long": "S R E' R' U' R E R' U S'"
  },
  "HF": {
    "short": "[r U L' : [S', L2]]",
    "long": "r U L' S' L2 S L2 L U' r'"
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
    "short": "[R' U' : [R2, S]]",
    "long": "R' U' R2 S R2 S' U R"
  },
  "JB": {
    "short": "[E' : [R' E R, U']]",
    "long": "E' R' E R U' R' E' R U E"
  },
  "JD": {
    "short": "[R' S2 R, U]",
    "long": "R' S2 R U R' S2 R U'"
  },
  "JE": {
    "short": "[S' U L : [E', L2]]",
    "long": "S' U L E' L2 E L2 L' U' S"
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
    "short": "[U M U : [M, U2]]",
    "long": "U M U M U2 M' U2 U' M' U'"
  },
  "KB": {
    "short": "[R U' R' U, M']",
    "long": "R U' R' U M' U' R U R' M"
  },
  "KD": {
    "short": "[L' U L U', M']",
    "long": "L' U L U' M' U L' U' L M"
  },
  "KE": {
    "short": "[l' : [U' L U, M']]",
    "long": "l' U' L U M' U' L' U M l"
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
    "short": "[U : [R E2 R', U2]]",
    "long": "U R E2 R' U2 R E2 R' U2 U'"
  },
  "LB": {
    "short": "[R E2 R', U']",
    "long": "R E2 R' U' R E2 R' U"
  },
  "LD": {
    "short": "[E : [L E' L', U]]",
    "long": "E L E' L' U L E L' U' E'"
  },
  "LE": {
    "short": "[r' F' : [r S r', F']]",
    "long": "r' F' r S r' F' r S' r' F F r"
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
    "short": "[S U' : [R2, S]]",
    "long": "S U' R2 S R2 S' U S'"
  },
  "MD": {
    "short": "[R' F R, S]",
    "long": "R' F R S R' F' R S'"
  },
  "ME": {
    "short": "[M U' : [M', U2]]",
    "long": "M U' M' U2 M U2 U M'"
  },
  "MF": {
    "short": "[U' M : [R' E R, U']]",
    "long": "U' M R' E R U' R' E' R U M' U"
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
    "short": "[U' : [L' E L, U2]]",
    "long": "U' L' E L U2 L' E' L U2 U"
  },
  "NB": {
    "short": "[U : [U, L' E L]]",
    "long": "U U L' E L U' L' E' L U'"
  },
  "ND": {
    "short": "[L' E L, U]",
    "long": "L' E L U L' E' L U'"
  },
  "NE": {
    "short": "[r' U' : [M', U2]]",
    "long": "r' U' M' U2 M U2 U r"
  },
  "NF": {
    "short": "[r U R : [E, R2]]",
    "long": "r U R E R2 E' R2 R' U' r'"
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
    "short": "[U : [R E R', U2]]",
    "long": "U R E R' U2 R E' R' U2 U'"
  },
  "OB": {
    "short": "[R E R', U']",
    "long": "R E R' U' R E' R' U"
  },
  "OD": {
    "short": "[U' : [U', R E R']]",
    "long": "U' U' R E R' U R E' R' U"
  },
  "OE": {
    "short": "[R' F R' : [S, R2]]",
    "long": "R' F R' S R2 S' R2 R F' R"
  },
  "OF": {
    "short": "[S' : [U', R' E R]]",
    "long": "S' U' R' E R U R' E' R S"
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
    "short": "[U' : [L E' L', U2]]",
    "long": "U' L E' L' U2 L E L' U2 U"
  },
  "PB": {
    "short": "[U : [U, L E' L']]",
    "long": "U U L E' L' U' L E L' U'"
  },
  "PD": {
    "short": "[L E' L', U]",
    "long": "L E' L' U L E L' U'"
  },
  "PE": {
    "short": "[M R U' : [M', U2]]",
    "long": "M R U' M' U2 M U2 U R' M'"
  },
  "PF": {
    "short": "[U'E' L : [S', L2]]",
    "long": "U'E' L S' L2 S L2 L' U'E"
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
    "long": "R' U' R U M U' R' U R M'"
  },
  "QD": {
    "short": "[L U L' U', M]",
    "long": "L U L' U' M U L U' L' M'"
  },
  "QE": {
    "short": "[M', L' U' L U]",
    "long": "M' L' U' L U M U' L' U L"
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
    "short": "[U : [R' E2 R, U2]]",
    "long": "U R' E2 R U2 R' E2 R U2 U'"
  },
  "RB": {
    "short": "[R' E2 R, U']",
    "long": "R' E2 R U' R' E2 R U"
  },
  "RD": {
    "short": "[E' : [L' E L, U]]",
    "long": "E' L' E L U L' E' L U' E"
  },
  "RE": {
    "short": "[L' u L : [E, L2]]",
    "long": "L' u L E L2 E' L2 L' u' L"
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
    "short": "[U' M' U : [M', U2]]",
    "long": "U' M' U M' U2 M U2 U' M U"
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
    "short": "[U'D' : [R' D R, S']]",
    "long": "U'D' R' D R S' R' D' R S U'D"
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
    "short": "[R U' : [R2, S]]",
    "long": "R U' R2 S R2 S' U R'"
  },
  "TB": {
    "short": "[E : [R E' R', U']]",
    "long": "E R E' R' U' R E R' U E'"
  },
  "TD": {
    "short": "[L E2 L', U]",
    "long": "L E2 L' U L E2 L' U'"
  },
  "TE": {
    "short": "[S' U L' : [E, L2]]",
    "long": "S' U L' E L2 E' L2 L U' S"
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
    "short": "[R' F : [R S R', F2]]",
    "long": "R' F R S R' F2 R S' R' F2 F' R"
  },
  "UE": {
    "short": "[M : u M' u2 M' u]",
    "long": "M u M' u2 M' u M'"
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
    "short": "[U' : [R2, S]]",
    "long": "U' R2 S R2 S' U"
  },
  "VB": {
    "short": "[R U R' : [S, R2]]",
    "long": "R U R' S R2 S' R2 R U' R'"
  },
  "VD": {
    "short": "R' U' R U R U R U' R' U'",
    "long": "R' U' R U R U R U' R' U'"
  },
  "VE": {
    "short": "[r : [L E L', U]]",
    "long": "r L E L' U L E' L' U' r'"
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
    "short": "[R U' R' U, M2]",
    "long": "R U' R' U M2 U' R U R' M2"
  },
  "WD": {
    "short": "D' R' U' R U R U R U' R' U' D",
    "long": "D' R' U' R U R U R U' R' U' D"
  },
  "WE": {
    "short": "[l' : [U' L U, M2]]",
    "long": "l' U' L U M2 U' L' U M2 l"
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
    "short": "[U : [L2, S']]",
    "long": "U L2 S' L2 S U'"
  },
  "XB": {
    "short": "L U L' U' L' U' L' U L U",
    "long": "L U L' U' L' U' L' U L U"
  },
  "XD": {
    "short": "[L' U' L : [S', L2]]",
    "long": "L' U' L S' L2 S L2 L' U L"
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
    "short": "[U2: [AB]]",
    "long": "U2 R2 B2 R F R' B2 R F' R U2"
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
    "short": "[U' : [R D' R', U2]]",
    "long": "U' R D' R' U2 R D R' U2 U"
  },
  "AI": {
    "short": "[l' UD' : [R D R', U2]]",
    "long": "l' UD' R D R' U2 R D' R' U2 UD l"
  },
  "AK": {
    "short": "[U'D : [R D R', U2]]",
    "long": "U'D R D R' U2 R D' R' U2 U'D'"
  },
  "AL": {
    "short": "[U'D' : [R D' R', U2]]",
    "long": "U'D' R D' R' U2 R D R' U2 U'D"
  },
  "AN": {
    "short": "[R' U'D' R' : [U', R' D R]]",
    "long": "R' U'D' R' U' R' D R U R' D' R R U'D R"
  },
  "AO": {
    "short": "[U' : [R D R', U2]]",
    "long": "U' R D R' U2 R D' R' U2 U"
  },
  "AP": {
    "short": "[R' D' R, U2]",
    "long": "R' D' R U2 R' D R U2"
  },
  "AQ": {
    "short": "[R' UD : [R D R', U2]]",
    "long": "R' UD R D R' U2 R D' R' U2 UD' R"
  },
  "AS": {
    "short": "[U'D' : [R D R', U2]]",
    "long": "U'D' R D R' U2 R D' R' U2 U'D"
  },
  "AT": {
    "short": "[U'D : [R D' R', U2]]",
    "long": "U'D R D' R' U2 R D R' U2 U'D'"
  },
  "AU": {
    "short": "[R F' R' U' : [R D R', U2]]",
    "long": "R F' R' U' R D R' U2 R D' R' U2 U R F R'"
  },
  "AV": {
    "short": "[R2 : [U, R2' D R2 D' R2']]",
    "long": "R2 U R2' D R2 D' R2' U' R2 D R2 D' R2 R2"
  },
  "AW": {
    "short": "[R D' R' : [R' D R, U2]]",
    "long": "R D' R' R' D R U2 R' D' R U2 R D R'"
  },
  "AX": {
    "short": "[R' U'D' R : [R U' R', D]]",
    "long": "R' U'D' R R U' R' D R U R' D' R' U'D R"
  },
  "BA": {
    "short": "AB",
    "long": "R2 B2 R F R' B2 R F' R"
  },
  "BD": {
    "short": "[U': [AB]]",
    "long": "U' R2 B2 R F R' B2 R F' R U"
  },
  "BE": {
    "short": "[R : [U, R D R']]",
    "long": "R U R D R' U' R D' R' R'"
  },
  "BF": {
    "short": "[R' : [R' D' R, U']]",
    "long": "R' R' D' R U' R' D R U R"
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
    "long": "R U2 R D R' U2 R D' R' R'"
  },
  "BK": {
    "short": "[D' : [R' D R, U]]",
    "long": "D' R' D R U R' D' R U' D"
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
    "long": "R' R' D' R U2 R' D R U2 R"
  },
  "BS": {
    "short": "[D' : [U', R D R']]",
    "long": "D' U' R D R' U R D' R' D"
  },
  "BT": {
    "short": "[D : [U', R D' R']]",
    "long": "D U' R D' R' U R D R' D'"
  },
  "BU": {
    "short": "[R F' : [R' U' R, D]]",
    "long": "R F' R' U' R D R' U R D' F R'"
  },
  "BV": {
    "short": "[U' R' D R : [R D' R', U]]",
    "long": "U' R' D R R D' R' U R D R' U' R' D' R U"
  },
  "BW": {
    "short": "[U R D' R' : [U', R' D R]]",
    "long": "U R D' R' U' R' D R U R' D' R R D R' U'"
  },
  "BX": {
    "short": "[R' B : [D', R U R']]",
    "long": "R' B D' R U R' D R U' R' B' R"
  },
  "DA": {
    "short": "[U2: [AA]]",
    "long": "U2 R' F R' B2 R F' R' B2 R2 U2"
  },
  "DB": {
    "short": "[U': [AA]]",
    "long": "U' R' F R' B2 R F' R' B2 R2 U"
  },
  "DE": {
    "short": "[U' R : [R D R', U2]]",
    "long": "U' R R D R' U2 R D' R' U2 R' U"
  },
  "DG": {
    "short": "[R' D R, U']",
    "long": "R' D R U' R' D' R U"
  },
  "DH": {
    "short": "[U' : [R D' R', U']]",
    "long": "U' R D' R' U' R D R' U U"
  },
  "DK": {
    "short": "[D' : [R' D R, U']]",
    "long": "D' R' D R U' R' D' R U D"
  },
  "DL": {
    "short": "[D : [R' D' R, U']]",
    "long": "D R' D' R U' R' D R U D'"
  },
  "DN": {
    "short": "[U' R' : [U2, R' D' R]]",
    "long": "U' R' U2 R' D' R U2 R' D R R U"
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
    "short": "[R' D' : [U', R' D R]]",
    "long": "R' D' U' R' D R U R' D' R D R"
  },
  "DR": {
    "short": "[U' R' : [U', R' D' R]]",
    "long": "U' R' U' R' D' R U R' D R R U"
  },
  "DS": {
    "short": "[D : [R' D R, U']]",
    "long": "D R' D R U' R' D' R U D'"
  },
  "DT": {
    "short": "[D' : [R' D' R, U']]",
    "long": "D' R' D' R U' R' D R U D"
  },
  "DU": {
    "short": "[U' R F' : [D, R' U' R]]",
    "long": "U' R F' D R' U' R D' R' U R F R' U"
  },
  "DV": {
    "short": "[D R D' R' : [R' D R, U']]",
    "long": "D R D' R' R' D R U' R' D' R U R D R' D'"
  },
  "DW": {
    "short": "[R D' R' : [R' D R, U']]",
    "long": "R D' R' R' D R U' R' D' R U R D R'"
  },
  "DX": {
    "short": "[R' D' R : [R U' R', D]]",
    "long": "R' D' R R U' R' D R U R' D' R' D R"
  },
  "EB": {
    "short": "[R : [R D R', U]]",
    "long": "R R D R' U R D' R' U' R'"
  },
  "ED": {
    "short": "[U' R : [U2, R D R']]",
    "long": "U' R U2 R D R' U2 R D' R' R' U"
  },
  "EF": {
    "short": "[L, U' R' U]",
    "long": "L U' R' U L' U' R U"
  },
  "EG": {
    "short": "[U R' : [U', R' D R]]",
    "long": "U R' U' R' D R U R' D' R R U'"
  },
  "EH": {
    "short": "[R D' : [R D R', U]]",
    "long": "R D' R D R' U R D' R' U' D R'"
  },
  "EI": {
    "short": "[l' U : [R D' R', U2]]",
    "long": "l' U R D' R' U2 R D R' U2 U' l"
  },
  "EK": {
    "short": "[R U R' : [R' D' R, U']]",
    "long": "R U R' R' D' R U' R' D R U R U' R'"
  },
  "EL": {
    "short": "[R U : [R' D R, U]]",
    "long": "R U R' D R U R' D' R U' U' R'"
  },
  "EN": {
    "short": "[R : [R2' D R2 D' R2, U]]",
    "long": "R R2' D R2 D' R2 U R2 D R2 D' R2 U' R'"
  },
  "EO": {
    "short": "[R D : [R D R', U]]",
    "long": "R D R D R' U R D' R' U' D' R'"
  },
  "EP": {
    "short": "[D' R U : [R' D R, U]]",
    "long": "D' R U R' D R U R' D' R U' U' R' D"
  },
  "EQ": {
    "short": "R' F' r U R U' r' F",
    "long": "R' F' r U R U' r' F"
  },
  "ES": {
    "short": "[UD R' : [U', R' D R]]",
    "long": "UD R' U' R' D R U R' D' R R UD'"
  },
  "ET": {
    "short": "[R U : [R' D' R, U]]",
    "long": "R U R' D' R U R' D R U' U' R'"
  },
  "EU": {
    "short": "[R : [R D2 R', U]]",
    "long": "R R D2 R' U R D2 R' U' R'"
  },
  "EV": {
    "short": "[D' R : [R D2 R', U]]",
    "long": "D' R R D2 R' U R D2 R' U' R' D"
  },
  "EW": {
    "short": "[D R : [R D' R', U]]",
    "long": "D R R D' R' U R D R' U' R' D'"
  },
  "EX": {
    "short": "[R : [R D' R', U]]",
    "long": "R R D' R' U R D R' U' R'"
  },
  "FA": {
    "short": "[F : [R' D' R, U2]]",
    "long": "F R' D' R U2 R' D R U2 F'"
  },
  "FB": {
    "short": "[R' : [U', R' D' R]]",
    "long": "R' U' R' D' R U R' D R R"
  },
  "FE": {
    "short": "[U' R' U, L]",
    "long": "U' R' U L U' R U L'"
  },
  "FG": {
    "short": "[R' U' : [D, R U R']]",
    "long": "R' U' D R U R' D' R U' R' U R"
  },
  "FH": {
    "short": "U' R' U r2 D' R D r2'",
    "long": "U' R' U r2 D' R D r2'"
  },
  "FK": {
    "short": "[F : [D, R U R']]",
    "long": "F D R U R' D' R U' R' F'"
  },
  "FL": {
    "short": "[D R' U' : [D', R U R']]",
    "long": "D R' U' D' R U R' D R U' R' U R D'"
  },
  "FN": {
    "short": "[R U'D' R' : [D, R' U R]]",
    "long": "R U'D' R' D R' U R D' R' U' R R U'D R'"
  },
  "FO": {
    "short": "[R' U' : [R' D' R, U2]]",
    "long": "R' U' R' D' R U2 R' D R U2 U R"
  },
  "FP": {
    "short": "[R' U' : [D', R U R']]",
    "long": "R' U' D' R U R' D R U' R' U R"
  },
  "FQ": {
    "short": "[R' F : [R U R', D]]",
    "long": "R' F R U R' D R U' R' D' F' R"
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
    "short": "[F : [D', R U R']]",
    "long": "F D' R U R' D R U' R' F'"
  },
  "FU": {
    "short": "[U' R' U : [R U' R', D]]",
    "long": "U' R' U R U' R' D R U R' D' U' R U"
  },
  "FV": {
    "short": "[R' F2 : [R U' R', D']]",
    "long": "R' F2 R U' R' D' R U R' D F2 R"
  },
  "FW": {
    "short": "[R U' R' : [D, R' U R]]",
    "long": "R U' R' D R' U R D' R' U' R R U R'"
  },
  "FX": {
    "short": "[F R : [U', R D' R']]",
    "long": "F R U' R D' R' U R D R' R' F'"
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
    "short": "[U R' : [R' D R, U']]",
    "long": "U R' R' D R U' R' D' R U R U'"
  },
  "GF": {
    "short": "[R' U' : [R U R', D]]",
    "long": "R' U' R U R' D R U' R' D' U R"
  },
  "GH": {
    "short": "[D R' : [F', R D' R' D]]",
    "long": "D R' F' R D' R' D F D' R D R' R D'"
  },
  "GI": {
    "short": "[D R' : [F2, R D' R' D]]",
    "long": "D R' F2 R D' R' D F2 D' R D R' R D'"
  },
  "GK": {
    "short": "[U : [D, R U' R']]",
    "long": "U D R U' R' D' R U R' U'"
  },
  "GN": {
    "short": "[U R U : [R' D R, U2]]",
    "long": "U R U R' D R U2 R' D' R U2 U' R' U'"
  },
  "GO": {
    "short": "[UD : [R U' R', D2]]",
    "long": "UD R U' R' D2 R U R' D2 UD'"
  },
  "GP": {
    "short": "[U' R' D : [R U R', D2]]",
    "long": "U' R' D R U R' D2 R U' R' D2 D' R U"
  },
  "GQ": {
    "short": "[R' U : [R U' R', D]]",
    "long": "R' U R U' R' D R U R' D' U' R"
  },
  "GR": {
    "short": "[R B' R' : [R' D R, U]]",
    "long": "R B' R' R' D R U R' D' R U' R B R'"
  },
  "GS": {
    "short": "[UD : [R U' R', D]]",
    "long": "UD R U' R' D R U R' D' UD'"
  },
  "GT": {
    "short": "[R' U' : [R U2 R', D]]",
    "long": "R' U' R U2 R' D R U2 R' D' U R"
  },
  "GV": {
    "short": "[UD R D' : [U', R' D R]]",
    "long": "UD R D' U' R' D R U R' D' R D R' UD'"
  },
  "GW": {
    "short": "[U R : [D, R U' R']]",
    "long": "U R D R U' R' D' R U R' R' U'"
  },
  "GX": {
    "short": "[D R : [R' U R U', F2]]",
    "long": "D R R' U R U' F2 U R' U' R F2 R' D'"
  },
  "HA": {
    "short": "[U : [R D' R', U2]]",
    "long": "U R D' R' U2 R D R' U2 U'"
  },
  "HB": {
    "short": "[R D' R', U']",
    "long": "R D' R' U' R D R' U"
  },
  "HD": {
    "short": "[U' : [U', R D' R']]",
    "long": "U' U' R D' R' U R D R' U"
  },
  "HE": {
    "short": "[R D' : [U, R D R']]",
    "long": "R D' U R D R' U' R D' R' D R'"
  },
  "HF": {
    "short": "[U' R U' : [R' U R, D']]",
    "long": "U' R U' R' U R D' R' U' R D U R' U"
  },
  "HG": {
    "short": "[D R' : [R D' R' D, F']]",
    "long": "D R' R D' R' D F' D' R D R' F R D'"
  },
  "HI": {
    "short": "[R DU' : [R' D R, U2]]",
    "long": "R DU' R' D R U2 R' D' R U2 DU R'"
  },
  "HK": {
    "short": "[U R U' : [R D' R', U']]",
    "long": "U R U' R D' R' U' R D R' U U R' U'"
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
    "short": "[R D' : [R' U' R, D2]]",
    "long": "R D' R' U' R D2 R' U R D2 D R'"
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
    "short": "[U2 R : [R D' R', U]]",
    "long": "U2 R R D' R' U R D R' U' R' U2"
  },
  "HT": {
    "short": "[D' : [D', R U R']]",
    "long": "D' D' R U R' D R U' R' D"
  },
  "HU": {
    "short": "[D' R DU' : [R' U R, D2]]",
    "long": "D' R DU' R' U R D2 R' U' R D2 DU R' D"
  },
  "HV": {
    "short": "[D2 R : [R D' R', U']]",
    "long": "D2 R R D' R' U' R D R' U R' D2"
  },
  "HW": {
    "short": "[R D' R' : [R' D R, U]]",
    "long": "R D' R' R' D R U R' D' R U' R D R'"
  },
  "IA": {
    "short": "[l' U'D' : [R D R', U2]]",
    "long": "l' U'D' R D R' U2 R D' R' U2 U'D l"
  },
  "IB": {
    "short": "[R : [R D R', U2]]",
    "long": "R R D R' U2 R D' R' U2 R'"
  },
  "IE": {
    "short": "[l' U' : [R D' R', U2]]",
    "long": "l' U' R D' R' U2 R D R' U2 U l"
  },
  "IG": {
    "short": "[D R' : [R D' R' D, F2]]",
    "long": "D R' R D' R' D F2 D' R D R' F2 R D'"
  },
  "IH": {
    "short": "[R DU : [R' D R, U2]]",
    "long": "R DU R' D R U2 R' D' R U2 DU' R'"
  },
  "IK": {
    "short": "[R' : [R D' R' D, F2]]",
    "long": "R' R D' R' D F2 D' R D R' F2 R"
  },
  "IL": {
    "short": "[R U : [R' D R, U2]]",
    "long": "R U R' D R U2 R' D' R U2 U' R'"
  },
  "IN": {
    "short": "[R' : [U', R2 D' R2 D R2]]",
    "long": "R' U' R2 D' R2 D R2 U R2 D' R2 D R2 R"
  },
  "IO": {
    "short": "[R D'U : [R' D R, U2]]",
    "long": "R D'U R' D R U2 R' D' R U2 D'U' R'"
  },
  "IP": {
    "short": "[l' : [R' D' R, U2]]",
    "long": "l' R' D' R U2 R' D R U2 l"
  },
  "IQ": {
    "short": "[R UD' : [R' D' R, U2]]",
    "long": "R UD' R' D' R U2 R' D R U2 UD R'"
  },
  "IR": {
    "short": "[R U R' UD : [R D R', U2]]",
    "long": "R U R' UD R D R' U2 R D' R' U2 UD' R U' R'"
  },
  "IS": {
    "short": "[D2 R' : [R D' R' D, F2]]",
    "long": "D2 R' R D' R' D F2 D' R D R' F2 R D2"
  },
  "IT": {
    "short": "[R U : [R' D' R, U2]]",
    "long": "R U R' D' R U2 R' D R U2 U' R'"
  },
  "IU": {
    "short": "[R UD : [R' D' R, U2]]",
    "long": "R UD R' D' R U2 R' D R U2 UD' R'"
  },
  "IV": {
    "short": "[D' R UD : [R' D' R, U2]]",
    "long": "D' R UD R' D' R U2 R' D R U2 UD' R' D"
  },
  "IW": {
    "short": "[D R : [R D' R', U2]]",
    "long": "D R R D' R' U2 R D R' U2 R' D'"
  },
  "IX": {
    "short": "[R : [R D' R', U2]]",
    "long": "R R D' R' U2 R D R' U2 R'"
  },
  "KA": {
    "short": "[UD : [R D R', U2]]",
    "long": "UD R D R' U2 R D' R' U2 UD'"
  },
  "KB": {
    "short": "[D' : [U, R' D R]]",
    "long": "D' U R' D R U' R' D' R D"
  },
  "KD": {
    "short": "[D' : [U', R' D R]]",
    "long": "D' U' R' D R U R' D' R D"
  },
  "KE": {
    "short": "[R U R' : [U', R' D' R]]",
    "long": "R U R' U' R' D' R U R' D R R U' R'"
  },
  "KF": {
    "short": "[F : [R U R', D]]",
    "long": "F R U R' D R U' R' D' F'"
  },
  "KG": {
    "short": "[U : [R U' R', D]]",
    "long": "U R U' R' D R U R' D' U'"
  },
  "KH": {
    "short": "[U R U' : [U', R D' R']]",
    "long": "U R U' U' R D' R' U R D R' U R' U'"
  },
  "KI": {
    "short": "[R' : [F2, R D' R' D]]",
    "long": "R' F2 R D' R' D F2 D' R D R' R"
  },
  "KL": {
    "short": "[R' : [F', R D' R' D]]",
    "long": "R' F' R D' R' D F D' R D R' R"
  },
  "KN": {
    "short": "[U' R' U : [R D R', U2]]",
    "long": "U' R' U R D R' U2 R D' R' U2 U' R U"
  },
  "KO": {
    "short": "[U : [R U' R', D']]",
    "long": "U R U' R' D' R U R' D U'"
  },
  "KQ": {
    "short": "[D' R' U : [R U' R', D]]",
    "long": "D' R' U R U' R' D R U R' D' U' R D"
  },
  "KR": {
    "short": "[l D' : [U', R' D R]]",
    "long": "l D' U' R' D R U R' D' R D l'"
  },
  "KS": {
    "short": "[U'D : [R' U' R, D2]]",
    "long": "U'D R' U' R D2 R' U R D2 U'D'"
  },
  "KT": {
    "short": "[D R D : [R' U' R, D2]]",
    "long": "D R D R' U' R D2 R' U R D2 D' R' D'"
  },
  "KU": {
    "short": "[R : [R' U R U', F2]]",
    "long": "R R' U R U' F2 U R' U' R F2 R'"
  },
  "KW": {
    "short": "[U R D' : [U', R' D R]]",
    "long": "U R D' U' R' D R U R' D' R D R' U'"
  },
  "KX": {
    "short": "U r2' D' R D r2 U' R'",
    "long": "U r2' D' R D r2 U' R'"
  },
  "LA": {
    "short": "[D: [R' D' R, U2]]",
    "long": "D R' D' R U2 R' D R U2 D'"
  },
  "LB": {
    "short": "[D : [U, R' D' R]]",
    "long": "D U R' D' R U' R' D R D'"
  },
  "LD": {
    "short": "[D : [U', R' D' R]]",
    "long": "D U' R' D' R U R' D R D'"
  },
  "LE": {
    "short": "[R U : [U, R' D R]]",
    "long": "R U U R' D R U' R' D' R U' R'"
  },
  "LF": {
    "short": "[D R' U' : [R U R', D']]",
    "long": "D R' U' R U R' D' R U' R' D U R D'"
  },
  "LH": {
    "short": "[D : [R U R', D]]",
    "long": "D R U R' D R U' R' D' D'"
  },
  "LI": {
    "short": "[R U' : [R' D R, U2]]",
    "long": "R U' R' D R U2 R' D' R U2 U R'"
  },
  "LK": {
    "short": "[R' : [R D' R' D, F']]",
    "long": "R' R D' R' D F' D' R D R' F R"
  },
  "LN": {
    "short": "[F' U : [R' D' R, U2]]",
    "long": "F' U R' D' R U2 R' D R U2 U' F"
  },
  "LO": {
    "short": "[R D : [D, R' U' R]]",
    "long": "R D D R' U' R D' R' U R D' R'"
  },
  "LP": {
    "short": "[D, R U R']",
    "long": "D R U R' D' R U' R'"
  },
  "LQ": {
    "short": "[R' F : [R U' R', D]]",
    "long": "R' F R U' R' D R U R' D' F' R"
  },
  "LR": {
    "short": "[D R' : [D, R' U R]]",
    "long": "D R' D R' U R D' R' U' R R D'"
  },
  "LS": {
    "short": "[D' R D' : [R' U' R, D2]]",
    "long": "D' R D' R' U' R D2 R' U R D2 D R' D"
  },
  "LT": {
    "short": "[D : [R U R', D2]]",
    "long": "D R U R' D2 R U' R' D2 D'"
  },
  "LV": {
    "short": "[R U' R' : [R' D R, U2]]",
    "long": "R U' R' R' D R U2 R' D' R U2 R U R'"
  },
  "LW": {
    "short": "[D R : [R D' R', U']]",
    "long": "D R R D' R' U' R D R' U R' D'"
  },
  "LX": {
    "short": "[D R D : [U, R' D' R]]",
    "long": "D R D U R' D' R U' R' D R D' R' D'"
  },
  "NA": {
    "short": "[R' U'D' R' : [R' D R, U']]",
    "long": "R' U'D' R' R' D R U' R' D' R U R U'D R"
  },
  "ND": {
    "short": "[U' R' : [R' D' R, U2]]",
    "long": "U' R' R' D' R U2 R' D R U2 R U"
  },
  "NE": {
    "short": "[R : [U, R2' D R2 D' R2]]",
    "long": "R U R2' D R2 D' R2 U' R2 D R2 D' R2 R'"
  },
  "NF": {
    "short": "[R U'D' R' : [R' U R, D]]",
    "long": "R U'D' R' R' U R D R' U' R D' R U'D R'"
  },
  "NG": {
    "short": "[U R U' : [R' D R, U2]]",
    "long": "U R U' R' D R U2 R' D' R U2 U R' U'"
  },
  "NH": {
    "short": "[U R : [U2, R D' R']]",
    "long": "U R U2 R D' R' U2 R D R' R' U'"
  },
  "NI": {
    "short": "[R' : [R2 D' R2 D R2, U']]",
    "long": "R' R2 D' R2 D R2 U' R2 D' R2 D R2 U R"
  },
  "NK": {
    "short": "[U' R' U' : [R D R', U2]]",
    "long": "U' R' U' R D R' U2 R D' R' U2 U R U"
  },
  "NL": {
    "short": "[F' U' : [R' D' R, U2]]",
    "long": "F' U' R' D' R U2 R' D R U2 U F"
  },
  "NO": {
    "short": "[U R U' : [R' D' R, U2]]",
    "long": "U R U' R' D' R U2 R' D R U2 U R' U'"
  },
  "NP": {
    "short": "[R' : [D', R2 U R2' U' R2]]",
    "long": "R' D' R2 U R2' U' R2 D R2 U R2 U' R2 R"
  },
  "NR": {
    "short": "[U R : [U2, R D R']]",
    "long": "U R U2 R D R' U2 R D' R' R' U'"
  },
  "NS": {
    "short": "[U' R' U' : [R D' R', U2]]",
    "long": "U' R' U' R D' R' U2 R D R' U2 U R U"
  },
  "NT": {
    "short": "[UD R : [U2, R D' R']]",
    "long": "UD R U2 R D' R' U2 R D R' R' UD'"
  },
  "NU": {
    "short": "[U' R' : [R' D R, U2]]",
    "long": "U' R' R' D R U2 R' D' R U2 R U"
  },
  "NV": {
    "short": "[U R' : [F2, R D' R' D]]",
    "long": "U R' F2 R D' R' D F2 D' R D R' R U'"
  },
  "NW": {
    "short": "[R' : [R2 D' R2' D R2, U]]",
    "long": "R' R2 D' R2' D R2 U R2 D' R2 D R2 U' R"
  },
  "NX": {
    "short": "[U'D R' : [R' D R, U2]]",
    "long": "U'D R' R' D R U2 R' D' R U2 R U'D'"
  },
  "OA": {
    "short": "[U : [R D R', U2]]",
    "long": "U R D R' U2 R D' R' U2 U'"
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
    "short": "[R D : [U, R D R']]",
    "long": "R D U R D R' U' R D' R' D' R'"
  },
  "OF": {
    "short": "[R' U : [R' D' R, U2]]",
    "long": "R' U R' D' R U2 R' D R U2 U' R"
  },
  "OG": {
    "short": "[UD' : [R U' R', D2]]",
    "long": "UD' R U' R' D2 R U R' D2 UD"
  },
  "OH": {
    "short": "[R D : [R' U' R, D2]]",
    "long": "R D R' U' R D2 R' U R D2 D' R'"
  },
  "OI": {
    "short": "[R D'U' : [R' D R, U2]]",
    "long": "R D'U' R' D R U2 R' D' R U2 D'U R'"
  },
  "OK": {
    "short": "[U : [D', R U' R']]",
    "long": "U D' R U' R' D R U R' U'"
  },
  "OL": {
    "short": "[R D : [R' U' R, D]]",
    "long": "R D R' U' R D R' U R D' D' R'"
  },
  "ON": {
    "short": "[U R U : [R' D' R, U2]]",
    "long": "U R U R' D' R U2 R' D R U2 U' R' U'"
  },
  "OP": {
    "short": "[R D' : [R' D R, U]]",
    "long": "R D' R' D R U R' D' R U' D R'"
  },
  "OQ": {
    "short": "[U' R U : [R' U' R, D]]",
    "long": "U' R U R' U' R D R' U R D' U' R' U"
  },
  "OR": {
    "short": "[R' U : [R' D' R, U]]",
    "long": "R' U R' D' R U R' D R U' U' R"
  },
  "OS": {
    "short": "[U' : [R' U' R, D']]",
    "long": "U' R' U' R D' R' U R D U"
  },
  "OU": {
    "short": "[U' R' : [R' D R, U]]",
    "long": "U' R' R' D R U R' D' R U' R U"
  },
  "OV": {
    "short": "[R U'D' R' : [R' D R, U2]]",
    "long": "R U'D' R' R' D R U2 R' D' R U2 R U'D R'"
  },
  "OX": {
    "short": "UD' R' D r2 U' R U r2' U'",
    "long": "UD' R' D r2 U' R U r2' U'"
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
    "short": "[D' R U : [U, R' D R]]",
    "long": "D' R U U R' D R U' R' D' R U' R' D"
  },
  "PF": {
    "short": "[R' U' : [R U R', D']]",
    "long": "R' U' R U R' D' R U' R' D U R"
  },
  "PG": {
    "short": "[U' R' D' : [R U R', D2]]",
    "long": "U' R' D' R U R' D2 R U' R' D2 D R U"
  },
  "PH": {
    "short": "[R U R', D2]",
    "long": "R U R' D2 R U' R' D2"
  },
  "PI": {
    "short": "[l' : [U2, R' D' R]]",
    "long": "l' U2 R' D' R U2 R' D R l"
  },
  "PL": {
    "short": "[R U R', D]",
    "long": "R U R' D R U' R' D'"
  },
  "PN": {
    "short": "[R' : [R2 U R2' U' R2, D']]",
    "long": "R' R2 U R2' U' R2 D' R2 U R2 U' R2 D R"
  },
  "PO": {
    "short": "[R D' : [U, R' D R]]",
    "long": "R D' U R' D R U' R' D' R D R'"
  },
  "PQ": {
    "short": "[R' U : [R U' R', D']]",
    "long": "R' U R U' R' D' R U R' D U' R"
  },
  "PR": {
    "short": "[R' : [D, R' U R]]",
    "long": "R' D R' U R D' R' U' R R"
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
    "short": "[R D : [U, R' D' R]]",
    "long": "R D U R' D' R U' R' D R D' R'"
  },
  "PW": {
    "short": "[D R U'D : [R' U R, D2]]",
    "long": "D R U'D R' U R D2 R' U' R D2 U'D' R' D'"
  },
  "PX": {
    "short": "[R : [R D' R', U']]",
    "long": "R R D' R' U' R D R' U R'"
  },
  "QA": {
    "short": "[R' U'D : [R D R', U2]]",
    "long": "R' U'D R D R' U2 R D' R' U2 U'D' R"
  },
  "QD": {
    "short": "[R' D' : [R' D R, U']]",
    "long": "R' D' R' D R U' R' D' R U D R"
  },
  "QE": {
    "short": "F' r U R' U' r' F R",
    "long": "F' r U R' U' r' F R"
  },
  "QF": {
    "short": "[R' F : [D, R U R']]",
    "long": "R' F D R U R' D' R U' R' F' R"
  },
  "QG": {
    "short": "[R' U : [D, R U' R']]",
    "long": "R' U D R U' R' D' R U R' U' R"
  },
  "QH": {
    "short": "[R, U' L U]",
    "long": "R U' L U R' U' L' U"
  },
  "QI": {
    "short": "[R U'D' : [R' D' R, U2]]",
    "long": "R U'D' R' D' R U2 R' D R U2 U'D R'"
  },
  "QK": {
    "short": "[D' R' U : [D, R U' R']]",
    "long": "D' R' U D R U' R' D' R U R' U' R D"
  },
  "QL": {
    "short": "[R' F : [D, R U' R']]",
    "long": "R' F D R U' R' D' R U R' F' R"
  },
  "QO": {
    "short": "[U' R U : [D, R' U' R]]",
    "long": "U' R U D R' U' R D' R' U R U' R' U"
  },
  "QP": {
    "short": "[R' U : [D', R U' R']]",
    "long": "R' U D' R U' R' D R U R' U' R"
  },
  "QR": {
    "short": "[R, U' L' U]",
    "long": "R U' L' U R' U' L U"
  },
  "QS": {
    "short": "[D R' U : [D, R U' R']]",
    "long": "D R' U D R U' R' D' R U R' U' R D'"
  },
  "QT": {
    "short": "[R U' : [R' U R, D]]",
    "long": "R U' R' U R D R' U' R D' U R'"
  },
  "QU": {
    "short": "[D' R U' : [R' U R, D']]",
    "long": "D' R U' R' U R D' R' U' R D U R' D"
  },
  "QV": {
    "short": "[U R' U' : [R U R', D']]",
    "long": "U R' U' R U R' D' R U' R' D U R U'"
  },
  "QW": {
    "short": "[D R U' : [R' U R, D']]",
    "long": "D R U' R' U R D' R' U' R D U R' D'"
  },
  "QX": {
    "short": "[R U' : [R' U R, D']]",
    "long": "R U' R' U R D' R' U' R D U R'"
  },
  "RB": {
    "short": "[R' : [U2, R' D' R]]",
    "long": "R' U2 R' D' R U2 R' D R R"
  },
  "RD": {
    "short": "[U' R' : [R' D' R, U']]",
    "long": "U' R' R' D' R U' R' D R U R U"
  },
  "RF": {
    "short": "[F, R B' R']",
    "long": "F R B' R' F' R B R'"
  },
  "RG": {
    "short": "[R B' R' : [U, R' D R]]",
    "long": "R B' R' U R' D R U' R' D' R R B R'"
  },
  "RH": {
    "short": "[U2 R : [U, R D' R']]",
    "long": "U2 R U R D' R' U' R D R' R' U2"
  },
  "RI": {
    "short": "[R U R' U'D : [R D R', U2]]",
    "long": "R U R' U'D R D R' U2 R D' R' U2 U'D' R U' R'"
  },
  "RK": {
    "short": "[l D' : [R' D R, U']]",
    "long": "l D' R' D R U' R' D' R U D l'"
  },
  "RL": {
    "short": "[D R' : [R' U R, D]]",
    "long": "D R' R' U R D R' U' R D' R D'"
  },
  "RN": {
    "short": "[U R : [R D R', U2]]",
    "long": "U R R D R' U2 R D' R' U2 R' U'"
  },
  "RO": {
    "short": "[R' U : [U, R' D' R]]",
    "long": "R' U U R' D' R U' R' D R U' R"
  },
  "RP": {
    "short": "[R' : [R' U R, D]]",
    "long": "R' R' U R D R' U' R D' R"
  },
  "RQ": {
    "short": "[U' L' U, R]",
    "long": "U' L' U R U' L U R'"
  },
  "RS": {
    "short": "[R' D' : [R' U R, D2]]",
    "long": "R' D' R' U R D2 R' U' R D2 D R"
  },
  "RT": {
    "short": "[R2 U : [R D R', U2]]",
    "long": "R2 U R D R' U2 R D' R' U2 U' R2"
  },
  "RU": {
    "short": "[U' R' : [R' D R, U']]",
    "long": "U' R' R' D R U' R' D' R U R U"
  },
  "RV": {
    "short": "[U'D' R' : [R' D R, U']]",
    "long": "U'D' R' R' D R U' R' D' R U R U'D"
  },
  "RW": {
    "short": "[R' : [U' L' U, R2]]",
    "long": "R' U' L' U R2 U' L U R2 R"
  },
  "RX": {
    "short": "[U'D R' : [R' D R, U']]",
    "long": "U'D R' R' D R U' R' D' R U R U'D'"
  },
  "SA": {
    "short": "[UD' : [R D R', U2]]",
    "long": "UD' R D R' U2 R D' R' U2 UD"
  },
  "SB": {
    "short": "[D' : [R D R', U']]",
    "long": "D' R D R' U' R D' R' U D"
  },
  "SD": {
    "short": "[D : [U', R' D R]]",
    "long": "D U' R' D R U R' D' R D'"
  },
  "SE": {
    "short": "[UD R' : [R' D R, U']]",
    "long": "UD R' R' D R U' R' D' R U R UD'"
  },
  "SF": {
    "short": "[F, R B2 R']",
    "long": "F R B2 R' F' R B2 R'"
  },
  "SG": {
    "short": "[UD : [D, R U' R']]",
    "long": "UD D R U' R' D' R U R' UD'"
  },
  "SI": {
    "short": "[D2 R' : [F2, R D' R' D]]",
    "long": "D2 R' F2 R D' R' D F2 D' R D R' R D2"
  },
  "SK": {
    "short": "[U'D' : [R' U' R, D2]]",
    "long": "U'D' R' U' R D2 R' U R D2 U'D"
  },
  "SL": {
    "short": "[D' R D : [R' U' R, D2]]",
    "long": "D' R D R' U' R D2 R' U R D2 D' R' D"
  },
  "SN": {
    "short": "[U' R' U : [R D' R', U2]]",
    "long": "U' R' U R D' R' U2 R D R' U2 U' R U"
  },
  "SO": {
    "short": "[U' : [D', R' U' R]]",
    "long": "U' D' R' U' R D R' U R U"
  },
  "SP": {
    "short": "[U' R' D' : [D', R U R']]",
    "long": "U' R' D' D' R U R' D R U' R' D R U"
  },
  "SQ": {
    "short": "[D R' U : [R U' R', D]]",
    "long": "D R' U R U' R' D R U R' D' U' R D'"
  },
  "SR": {
    "short": "[R' D : [R' U R, D2]]",
    "long": "R' D R' U R D2 R' U' R D2 D' R"
  },
  "ST": {
    "short": "[U' : [R', U' L U]]",
    "long": "U' R' U' L U R U' L' U U"
  },
  "SU": {
    "short": "[l U'D' : [R D R', U2]]",
    "long": "l U'D' R D R' U2 R D' R' U2 U'D l'"
  },
  "SV": {
    "short": "[U'D' R' : [R' D R, U]]",
    "long": "U'D' R' R' D R U R' D' R U' R U'D"
  },
  "SW": {
    "short": "[U R : [D2, R U' R']]",
    "long": "U R D2 R U' R' D2 R U R' R' U'"
  },
  "TA": {
    "short": "[UD : [R D' R', U2]]",
    "long": "UD R D' R' U2 R D R' U2 UD'"
  },
  "TB": {
    "short": "[D : [R D' R', U']]",
    "long": "D R D' R' U' R D R' U D'"
  },
  "TD": {
    "short": "[D' : [U', R' D' R]]",
    "long": "D' U' R' D' R U R' D R D"
  },
  "TE": {
    "short": "[R U : [U, R' D' R]]",
    "long": "R U U R' D' R U' R' D R U' R'"
  },
  "TF": {
    "short": "[F : [R U R', D']]",
    "long": "F R U R' D' R U' R' D F'"
  },
  "TG": {
    "short": "[R' U' : [D, R U2 R']]",
    "long": "R' U' D R U2 R' D' R U2 R' U R"
  },
  "TH": {
    "short": "[D' : [R U R', D']]",
    "long": "D' R U R' D' R U' R' D D"
  },
  "TI": {
    "short": "[R U' : [R' D' R, U2]]",
    "long": "R U' R' D' R U2 R' D R U2 U R'"
  },
  "TK": {
    "short": "[D R D' : [R' U' R, D2]]",
    "long": "D R D' R' U' R D2 R' U R D2 D R' D'"
  },
  "TL": {
    "short": "[D' : [R U R', D2]]",
    "long": "D' R U R' D2 R U' R' D2 D"
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
    "short": "[R U' : [D, R' U R]]",
    "long": "R U' D R' U R D' R' U' R U R'"
  },
  "TR": {
    "short": "[R2 U' : [R D R', U2]]",
    "long": "R2 U' R D R' U2 R D' R' U2 U R2"
  },
  "TS": {
    "short": "[U' : [U' L U, R']]",
    "long": "U' U' L U R' U' L' U R U"
  },
  "TU": {
    "short": "[D' R : [R D' R', U']]",
    "long": "D' R R D' R' U' R D R' U R' D"
  },
  "TV": {
    "short": "[D' R D : [U, R' D' R]]",
    "long": "D' R D U R' D' R U' R' D R D' R' D"
  },
  "TX": {
    "short": "[R U'D : [R' U R, D2]]",
    "long": "R U'D R' U R D2 R' U' R D2 U'D' R'"
  },
  "UA": {
    "short": "[R F' R' U : [R D R', U2]]",
    "long": "R F' R' U R D R' U2 R D' R' U2 U' R F R'"
  },
  "UB": {
    "short": "[R F' : [D, R' U' R]]",
    "long": "R F' D R' U' R D' R' U R F R'"
  },
  "UD": {
    "short": "[U' R F' : [R' U' R, D]]",
    "long": "U' R F' R' U' R D R' U R D' F R' U"
  },
  "UE": {
    "short": "[R : [U, R D2 R']]",
    "long": "R U R D2 R' U' R D2 R' R'"
  },
  "UF": {
    "short": "[U' R' U : [D, R U' R']]",
    "long": "U' R' U D R U' R' D' R U R' U' R U"
  },
  "UH": {
    "short": "[D' R D'U' : [R' U R, D2]]",
    "long": "D' R D'U' R' U R D2 R' U' R D2 D'U R' D"
  },
  "UI": {
    "short": "[R U'D : [R' D' R, U2]]",
    "long": "R U'D R' D' R U2 R' D R U2 U'D' R'"
  },
  "UK": {
    "short": "[R : [F2, R' U R U']]",
    "long": "R F2 R' U R U' F2 U R' U' R R'"
  },
  "UN": {
    "short": "[U' R' : [U2, R' D R]]",
    "long": "U' R' U2 R' D R U2 R' D' R R U"
  },
  "UO": {
    "short": "[U' R' : [U, R' D R]]",
    "long": "U' R' U R' D R U' R' D' R R U"
  },
  "UP": {
    "short": "[R D : [R' D' R, U]]",
    "long": "R D R' D' R U R' D R U' D' R'"
  },
  "UQ": {
    "short": "[D' R U' : [D', R' U R]]",
    "long": "D' R U' D' R' U R D R' U' R U R' D"
  },
  "UR": {
    "short": "[U' R' : [U', R' D R]]",
    "long": "U' R' U' R' D R U R' D' R R U"
  },
  "US": {
    "short": "[l UD' : [R D R', U2]]",
    "long": "l UD' R D R' U2 R D' R' U2 UD l'"
  },
  "UT": {
    "short": "[D' R : [U', R D' R']]",
    "long": "D' R U' R D' R' U R D R' R' D"
  },
  "UV": {
    "short": "[U' R' F' : [R U' R', D']]",
    "long": "U' R' F' R U' R' D' R U R' D F R U"
  },
  "UW": {
    "short": "[R2, U' R2 D R2 U]",
    "long": "R2 U' R2 D R2 U R2 U' R2 D' R2 U"
  },
  "UX": {
    "short": "[R U' D' : [D', R' U R]]",
    "long": "R U' D' D' R' U R D R' U' R D U R'"
  },
  "VA": {
    "short": "[R2 : [R2' D R2 D' R2', U]]",
    "long": "R2 R2' D R2 D' R2' U R2 D R2 D' R2 U' R2"
  },
  "VB": {
    "short": "[U' R' D R : [U, R D' R']]",
    "long": "U' R' D R U R D' R' U' R D R' R' D' R U"
  },
  "VD": {
    "short": "[D R D' R' : [U', R' D R]]",
    "long": "D R D' R' U' R' D R U R' D' R R D R' D'"
  },
  "VE": {
    "short": "[D' R : [U, R D2 R']]",
    "long": "D' R U R D2 R' U' R D2 R' R' D"
  },
  "VF": {
    "short": "[R' F2 : [D', R U' R']]",
    "long": "R' F2 D' R U' R' D R U R' F2 R"
  },
  "VG": {
    "short": "[UD R D' : [R' D R, U']]",
    "long": "UD R D' R' D R U' R' D' R U D R' UD'"
  },
  "VH": {
    "short": "[D2 R : [U', R D' R']]",
    "long": "D2 R U' R D' R' U R D R' R' D2"
  },
  "VI": {
    "short": "[D' R U'D : [R' D' R, U2]]",
    "long": "D' R U'D R' D' R U2 R' D R U2 U'D' R' D"
  },
  "VL": {
    "short": "[R U' R' : [U2, R' D R]]",
    "long": "R U' R' U2 R' D R U2 R' D' R R U R'"
  },
  "VN": {
    "short": "[U R' : [R D' R' D, F2]]",
    "long": "U R' R D' R' D F2 D' R D R' F2 R U'"
  },
  "VO": {
    "short": "[R U'D' R' : [U2, R' D R]]",
    "long": "R U'D' R' U2 R' D R U2 R' D' R R U'D R'"
  },
  "VQ": {
    "short": "[U R' U' : [D', R U R']]",
    "long": "U R' U' D' R U R' D R U' R' U R U'"
  },
  "VR": {
    "short": "[U'D' R' : [U', R' D R]]",
    "long": "U'D' R' U' R' D R U R' D' R R U'D"
  },
  "VS": {
    "short": "[U'D' R' : [U, R' D R]]",
    "long": "U'D' R' U R' D R U' R' D' R R U'D"
  },
  "VT": {
    "short": "[D' R D : [R' D' R, U]]",
    "long": "D' R D R' D' R U R' D R U' D' R' D"
  },
  "VU": {
    "short": "[U' R' F' : [D', R U' R']]",
    "long": "U' R' F' D' R U' R' D R U R' F R U"
  },
  "VW": {
    "short": "[F' R U' : [R' D' R, U2]]",
    "long": "F' R U' R' D' R U2 R' D R U2 U R' F"
  },
  "VX": {
    "short": "[R U' R' U : [R D' R', U2]]",
    "long": "R U' R' U R D' R' U2 R D R' U2 U' R U R'"
  },
  "WA": {
    "short": "[R D' R' : [U2, R' D R]]",
    "long": "R D' R' U2 R' D R U2 R' D' R R D R'"
  },
  "WB": {
    "short": "[U R D' R' : [R' D R, U']]",
    "long": "U R D' R' R' D R U' R' D' R U R D R' U'"
  },
  "WD": {
    "short": "[R D' R' : [U', R' D R]]",
    "long": "R D' R' U' R' D R U R' D' R R D R'"
  },
  "WE": {
    "short": "[D R : [U, R D' R']]",
    "long": "D R U R D' R' U' R D R' R' D'"
  },
  "WF": {
    "short": "[R U' R' : [R' U R, D]]",
    "long": "R U' R' R' U R D R' U' R D' R U R'"
  },
  "WG": {
    "short": "[U R : [R U' R', D]]",
    "long": "U R R U' R' D R U R' D' R' U'"
  },
  "WH": {
    "short": "[R D' R' : [U, R' D R]]",
    "long": "R D' R' U R' D R U' R' D' R R D R'"
  },
  "WI": {
    "short": "[D R : [U2, R D' R']]",
    "long": "D R U2 R D' R' U2 R D R' R' D'"
  },
  "WK": {
    "short": "[U R D' : [R' D R, U']]",
    "long": "U R D' R' D R U' R' D' R U D R' U'"
  },
  "WL": {
    "short": "[D R : [U', R D' R']]",
    "long": "D R U' R D' R' U R D R' R' D'"
  },
  "WN": {
    "short": "[R' : [U, R2 D' R2' D R2]]",
    "long": "R' U R2 D' R2' D R2 U' R2 D' R2 D R2 R"
  },
  "WP": {
    "short": "[D' L' U : [U' L U L', F2]]",
    "long": "D' L' U U' L U L' F2 L U' L' U F2 U' L D"
  },
  "WQ": {
    "short": "[D R U' : [D', R' U R]]",
    "long": "D R U' D' R' U R D R' U' R U R' D'"
  },
  "WR": {
    "short": "[R : [U' L' U, R2]]",
    "long": "R U' L' U R2 U' L U R2 R'"
  },
  "WS": {
    "short": "[U R : [R U' R', D2]]",
    "long": "U R R U' R' D2 R U R' D2 R' U'"
  },
  "WU": {
    "short": "[U' R2 D R2 U, R2]",
    "long": "U' R2 D R2 U R2 U' R2 D' R2 U R2"
  },
  "WV": {
    "short": "[F' R U : [R' D' R, U2]]",
    "long": "F' R U R' D' R U2 R' D R U2 U' R' F"
  },
  "WX": {
    "short": "[R U' R' : [R' U R, D']]",
    "long": "R U' R' R' U R D' R' U' R D R U R'"
  },
  "XA": {
    "short": "[R' U'D' R : [D, R U' R']]",
    "long": "R' U'D' R D R U' R' D' R U R' R' U'D R"
  },
  "XB": {
    "short": "[R' B : [R U R', D']]",
    "long": "R' B R U R' D' R U' R' D B' R"
  },
  "XD": {
    "short": "[R' D' R : [D, R U' R']]",
    "long": "R' D' R D R U' R' D' R U R' R' D R"
  },
  "XE": {
    "short": "[R : [U, R D' R']]",
    "long": "R U R D' R' U' R D R' R'"
  },
  "XF": {
    "short": "[F R : [R D' R', U']]",
    "long": "F R R D' R' U' R D R' U R' F'"
  },
  "XG": {
    "short": "[D R : [F2, R' U R U']]",
    "long": "D R F2 R' U R U' F2 U R' U' R R' D'"
  },
  "XI": {
    "short": "[R : [U2, R D' R']]",
    "long": "R U2 R D' R' U2 R D R' R'"
  },
  "XK": {
    "short": "R U r2' D' R' D r2 U'",
    "long": "R U r2' D' R' D r2 U'"
  },
  "XL": {
    "short": "[D R D : [R' D' R, U]]",
    "long": "D R D R' D' R U R' D R U' D' R' D'"
  },
  "XN": {
    "short": "[U'D R' : [U2, R' D R]]",
    "long": "U'D R' U2 R' D R U2 R' D' R R U'D'"
  },
  "XO": {
    "short": "U r2 U' R' U r2' D' R DU'",
    "long": "U r2 U' R' U r2' D' R DU'"
  },
  "XP": {
    "short": "[R : [U', R D' R']]",
    "long": "R U' R D' R' U R D R' R'"
  },
  "XQ": {
    "short": "[R U' : [D', R' U R]]",
    "long": "R U' D' R' U R D R' U' R U R'"
  },
  "XR": {
    "short": "[U'D R' : [U', R' D R]]",
    "long": "U'D R' U' R' D R U R' D' R R U'D'"
  },
  "XT": {
    "short": "[R U'D' : [R' U R, D2]]",
    "long": "R U'D' R' U R D2 R' U' R D2 U'D R'"
  },
  "XU": {
    "short": "[R U' D' : [R' U R, D']]",
    "long": "R U' D' R' U R D' R' U' R D D U R'"
  },
  "XV": {
    "short": "[R U' R' U' : [R D' R', U2]]",
    "long": "R U' R' U' R D' R' U2 R D R' U2 U R U R'"
  },
  "XW": {
    "short": "[R U' R' : [D', R' U R]]",
    "long": "R U' R' D' R' U R D R' U' R R U R'"
  }
};

