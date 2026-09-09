export interface AlgDef {
  short: string;
  long: string;
}

export const DEFAULT_SPECIAL: Record<string, AlgDef> = {
  "PARITY": { short: "R U R' F' R U R' U' R' F R2 U' R' U'", long: "" },
  "EDGE_FLIPS": { short: "M' U M' U M' U M' U2 M' U M' U M' U M' U2", long: "" },
  "CORNER_TWISTS": { short: "(R' D R D') x2 U (D R' D' R) x2 U'", long: "" }
};

export const DEFAULT_CORNERS: Record<string, AlgDef> = {
  "DA": {
    "short": "R' U' D':[R' D R,U']",
    "long": "R' U' D' R' D R U' R' D' R D U2 R"
  },
  "DE": {
    "short": "U' R:[R D R',U2]",
    "long": "U' R2 D R' U2 R D' R' U2 R' U"
  },
  "DR": {
    "short": "U' R':[U',R' D' R]",
    "long": "U' R' U' R' D' R U R' D R2 U"
  },
  "DB": {
    "short": "R F' R':[U,R' D R]",
    "long": "R F' R' U R' D R U' R' D' R2 F R'"
  },
  "DQ": {
    "short": "R' D':[U',R' D R]",
    "long": "R' U' D' R' D R U R' D' R D R"
  },
  "DN": {
    "short": "U' R':[U2,R' D' R]",
    "long": "U' R' U2 R' D' R U2 R' D R2 U"
  },
  "DU": {
    "short": "R2 F R U:[R' D' R,U2]",
    "long": "R2 F R U R' D' R U2 R' D R U R' F' R2"
  },
  "DG": {
    "short": "[R' D R,U']",
    "long": "R' D R U' R' D' R U"
  },
  "DL": {
    "short": "D:[R' D' R,U']",
    "long": "D R' D' R U' R' D R D' U"
  },
  "DX": {
    "short": "R' B:[D',R U' R']",
    "long": "R' B D' R U' R' D R U R' B' R"
  },
  "DS": {
    "short": "U' D':[R D R',U']",
    "long": "U' D' R D R' U' R D' R' D U2"
  },
  "DH": {
    "short": "U':[R D' R',U']",
    "long": "U' R D' R' U' R D R' U2"
  },
  "DW": {
    "short": "R D' R':[R' D R,U']",
    "long": "R D' R2 D R U' R' D' R U R D R'"
  },
  "DO": {
    "short": "U':[R D R',U']",
    "long": "U' R D R' U' R D' R' U2"
  },
  "DT": {
    "short": "U' D:[R D' R',U']",
    "long": "U' D R D' R' U' R D R' D' U2"
  },
  "DV": {
    "short": "[R' D R U' R D' R',U']",
    "long": "R' D R U' R D' R' U' R D R' U R' D' R U"
  },
  "DK": {
    "short": "D':[R' D R,U']",
    "long": "D' R' D R U' R' D' R D U"
  },
  "DP": {
    "short": "[R' D' R,U']",
    "long": "R' D' R U' R' D R U"
  },
  "IA": {
    "short": "R' F R U D:[R' D' R,U]",
    "long": "R' F R U D R' D' R U R' D R D' U2 R' F' R"
  },
  "IE": {
    "short": "R2 D R' U:[U,R D' R']",
    "long": "R2 D R' U2 R D' R' U' R D R' U' R D' R2"
  },
  "IR": {
    "short": "R2 U' R U:[R' D' R,U2]",
    "long": "R2 U' R U R' D' R U2 R' D R U R' U R2"
  },
  "IB": {
    "short": "R:[R D R',U2]",
    "long": "R2 D R' U2 R D' R' U2 R'"
  },
  "IQ": {
    "short": "R D:[R D' R',U2]",
    "long": "R D R D' R' U2 R D R' D' U2 R'"
  },
  "IN": {
    "short": "R':[U',R' D R U' R D' R']",
    "long": "R' U' R' D R U' R D' R' U R D R' U R' D' R2"
  },
  "IU": {
    "short": "R U D:[R' D' R,U2]",
    "long": "R U D R' D' R U2 R' D R D' U R'"
  },
  "IG": {
    "short": "R' D:[F2,D' R D R']",
    "long": "R' D F2 D' R D R' F2 R D'"
  },
  "IL": {
    "short": "R U:[R' D R,U2]",
    "long": "R U R' D R U2 R' D' R U R'"
  },
  "IX": {
    "short": "R:[R D' R',U2]",
    "long": "R2 D' R' U2 R D R' U2 R'"
  },
  "IS": {
    "short": "U':[D' R D R',U R' F R]",
    "long": "U' D' R D R' U R' F R2 D' R' D R' F' R"
  },
  "IH": {
    "short": "R D':[R D R',U2]",
    "long": "R D' R D R' U2 R D' R' D U2 R'"
  },
  "IW": {
    "short": "D R:[R D' R',U2]",
    "long": "D R2 D' R' U2 R D R' U2 R' D'"
  },
  "IO": {
    "short": "R U D':[R' D R,U2]",
    "long": "R U D' R' D R U2 R' D' R D U R'"
  },
  "IT": {
    "short": "R U:[R' D' R,U2]",
    "long": "R U R' D' R U2 R' D R U R'"
  },
  "IV": {
    "short": "D' R U D:[R' D' R,U2]",
    "long": "D' R U D R' D' R U2 R' D R D' U R' D"
  },
  "IK": {
    "short": "R':[R D' R' D,F2]",
    "long": "D' R' D F2 D' R D R' F2 R"
  },
  "IP": {
    "short": "D R U:[R' D' R,U2]",
    "long": "D R U R' D' R U2 R' D R U R' D'"
  },
  "FA": {
    "short": "U' R D:[R D' R',U2]",
    "long": "U' R D R D' R' U2 R D R' D' U2 R' U"
  },
  "FE": {
    "short": "R U' R' U':[R' D' R,U']",
    "long": "R U' R' U' R' D' R U' R' D R U2 R U R'"
  },
  "FR": {
    "short": "R' U':[R' D' R,U']",
    "long": "R' U' R' D' R U' R' D R U2 R"
  },
  "FB": {
    "short": "R':[U',R' D' R]",
    "long": "R' U' R' D' R U R' D R2"
  },
  "FQ": {
    "short": "R' F:[R U R',D]",
    "long": "R' F R U R' D R U' R' D' F' R"
  },
  "FN": {
    "short": "R' D' R U' D:[R' D' R,U2]",
    "long": "R' D' R U' D R' D' R U2 R' D R D' U' R' D R"
  },
  "FU": {
    "short": "U' R' U:[R U' R',D]",
    "long": "U' R' U R U' R' D R U R' D' U' R U"
  },
  "FG": {
    "short": "R' U':[D,R U R']",
    "long": "R' U' D R U R' D' R U' R' U R"
  },
  "FL": {
    "short": "D R' U':[D',R U R']",
    "long": "D R' U' D' R U R' D R U' R' U R D'"
  },
  "FX": {
    "short": "R2:[D',R2 U' R U R2]",
    "long": "R2 D' R2 U' R U R2 D R2 U' R' U"
  },
  "FS": {
    "short": "U2 R U:[R' U' R,D']",
    "long": "U2 R U R' U' R D' R' U R D U' R' U2"
  },
  "FH": {
    "short": "U' R U':[D',R' U R]",
    "long": "U' R U' D' R' U R D R' U' R U R' U"
  },
  "FW": {
    "short": "U2 R U:[R' U' R,D]",
    "long": "U2 R U R' U' R D R' U R D' U' R' U2"
  },
  "FO": {
    "short": "R' U':[R' D' R,U2]",
    "long": "R' U' R' D' R U2 R' D R U' R"
  },
  "FT": {
    "short": "R2 U' R':[R' D' R,U]",
    "long": "R2 U' R2 D' R U R' D R U' R U R2"
  },
  "FV": {
    "short": "R U' R':[R' D' R,U2]",
    "long": "R U' R2 D' R U2 R' D R U2 R U R'"
  },
  "FK": {
    "short": "D' R' U':[D,R U R']",
    "long": "D' R' U' D R U R' D' R U' R' U R D"
  },
  "FP": {
    "short": "R' U':[D',R U R']",
    "long": "R' U' D' R U R' D R U' R' U R"
  },
  "AD": {
    "short": "R' U2 D':[R' D R,U]",
    "long": "R' U2 D' R' D R U R' D' R D U R"
  },
  "AI": {
    "short": "R' F R U2 D:[R' D' R,U']",
    "long": "R' F R U2 D R' D' R U' R' D R D' U' R' F' R"
  },
  "AF": {
    "short": "U' R D:[U2,R D' R']",
    "long": "U' R U2 D R D' R' U2 R D R' D' R' U"
  },
  "AB": {
    "short": "R' B' R:[R D R',U']",
    "long": "R' B' R2 D R' U' R D' R' U R' B R"
  },
  "AQ": {
    "short": "R' D':[U2,R' D R]",
    "long": "R' U2 D' R' D R U2 R' D' R D R"
  },
  "AN": {
    "short": "R D R' U' D':[R D R',U2]",
    "long": "R D R' U' D' R D R' U2 R D' R' D U' R D' R'"
  },
  "AU": {
    "short": "R F' R' U':[R D R',U2]",
    "long": "R F' R' U' R D R' U2 R D' R' U' R F R'"
  },
  "AG": {
    "short": "[R' D R,U2]",
    "long": "R' D R U2 R' D' R U2"
  },
  "AL": {
    "short": "D:[R' D' R,U2]",
    "long": "D R' D' R U2 R' D R D' U2"
  },
  "AX": {
    "short": "R' U' D' R:[R U' R',D]",
    "long": "R' U' D' R2 U' R' D R U R' D' R' D U R"
  },
  "AS": {
    "short": "U' D':[R D R',U2]",
    "long": "U' D' R D R' U2 R D' R' D U'"
  },
  "AH": {
    "short": "U':[R D' R',U2]",
    "long": "U' R D' R' U2 R D R' U'"
  },
  "AW": {
    "short": "R D' R':[R' D R,U2]",
    "long": "R D' R2 D R U2 R' D' R U2 R D R'"
  },
  "AO": {
    "short": "U':[R D R',U2]",
    "long": "U' R D R' U2 R D' R' U'"
  },
  "AT": {
    "short": "U' D:[R D' R',U2]",
    "long": "U' D R D' R' U2 R D R' D' U'"
  },
  "AV": {
    "short": "U R' D R:[U2,R D' R']",
    "long": "U R' D R U2 R D' R' U2 R D R2 D' R U'"
  },
  "AK": {
    "short": "D':[R' D R,U2]",
    "long": "D' R' D R U2 R' D' R D U2"
  },
  "AP": {
    "short": "[R' D' R,U2]",
    "long": "R' D' R U2 R' D R U2"
  },
  "ED": {
    "short": "U' R:[U2,R D R']",
    "long": "U' R U2 R D R' U2 R D' R2 U"
  },
  "EI": {
    "short": "R2 D R' U:[R D' R',U]",
    "long": "R2 D R' U R D' R' U R D R' U2 R D' R2"
  },
  "EF": {
    "short": "R U' R' U':[U',R' D' R]",
    "long": "R U' R' U2 R' D' R U R' D R U R U R'"
  },
  "EB": {
    "short": "R:[R D R',U]",
    "long": "R2 D R' U R D' R' U' R'"
  },
  "EQ": {
    "short": "R D:[R D' R',U]",
    "long": "R D R D' R' U R D R' D' U' R'"
  },
  "EN": {
    "short": "R:[R D' R' U R' D R,U]",
    "long": "R2 D' R' U R' D R U R' D' R U' R D R' U' R'"
  },
  "EU": {
    "short": "R U D:[R' D' R,U]",
    "long": "R U D R' D' R U R' D R D' U2 R'"
  },
  "EG": {
    "short": "U R':[U',R' D R]",
    "long": "U R' U' R' D R U R' D' R2 U'"
  },
  "EL": {
    "short": "R U:[R' D R,U]",
    "long": "R U R' D R U R' D' R U2 R'"
  },
  "EX": {
    "short": "R:[R D' R',U]",
    "long": "R2 D' R' U R D R' U' R'"
  },
  "ES": {
    "short": "U R' U2 D':[R D R',U]",
    "long": "U R' U2 D' R D R' U R D' R' D U R U'"
  },
  "EH": {
    "short": "R D':[R D R',U]",
    "long": "R D' R D R' U R D' R' D U' R'"
  },
  "EW": {
    "short": "D R:[R D' R',U]",
    "long": "D R2 D' R' U R D R' U' R' D'"
  },
  "EO": {
    "short": "R U D':[R' D R,U]",
    "long": "R U D' R' D R U R' D' R D U2 R'"
  },
  "ET": {
    "short": "R U:[R' D' R,U]",
    "long": "R U R' D' R U R' D R U2 R'"
  },
  "EV": {
    "short": "D' R U D:[R' D' R,U]",
    "long": "D' R U D R' D' R U R' D R D' U2 R' D"
  },
  "EK": {
    "short": "R U R':[R' D' R,U']",
    "long": "R U R2 D' R U' R' D R U R U' R'"
  },
  "EP": {
    "short": "D R U:[R' D' R,U]",
    "long": "D R U R' D' R U R' D R U2 R' D'"
  },
  "RD": {
    "short": "U' R':[R' D' R,U']",
    "long": "U' R2 D' R U' R' D R U R U"
  },
  "RI": {
    "short": "R2 U' R U':[R' D' R,U2]",
    "long": "R2 U' R U' R' D' R U2 R' D R U' R' U R2"
  },
  "RF": {
    "short": "R' U':[U',R' D' R]",
    "long": "R' U2 R' D' R U R' D R U R"
  },
  "RB": {
    "short": "R':[U2,R' D' R]",
    "long": "R' U2 R' D' R U2 R' D R2"
  },
  "RQ": {
    "short": "R B':[D',R' U' R]",
    "long": "R B' D' R' U' R D R' U R B R'"
  },
  "RN": {
    "short": "U R:[R D R',U2]",
    "long": "U R2 D R' U2 R D' R' U2 R' U'"
  },
  "RU": {
    "short": "U' R':[R' D R,U']",
    "long": "U' R2 D R U' R' D' R U R U"
  },
  "RG": {
    "short": "R B' R':[U,R' D R]",
    "long": "R B' R' U R' D R U' R' D' R2 B R'"
  },
  "RL": {
    "short": "R:[R' D R' D' R2,B']",
    "long": "D R' D' R2 B' R2 D R D' R B R'"
  },
  "RX": {
    "short": "R B:[D',R' U R]",
    "long": "R B D' R' U R D R' U' R B' R'"
  },
  "RS": {
    "short": "U' R' U':[R D' R',U']",
    "long": "U' R' U' R D' R' U' R D R' U2 R U"
  },
  "RH": {
    "short": "R D' R U:[D,R' U' R]",
    "long": "R D' R U D R' U' R D' R' U R U' R' D R'"
  },
  "RW": {
    "short": "U R' F R:[R D R',U']",
    "long": "U R' F R2 D R' U' R D' R' U R' F' R U'"
  },
  "RO": {
    "short": "R' U:[U,R' D' R]",
    "long": "R' U2 R' D' R U' R' D R U' R"
  },
  "RT": {
    "short": "U' R' U' R:[R D R',U]",
    "long": "U' R' U' R2 D R' U R D' R' U' R' U R U"
  },
  "RV": {
    "short": "U' D' R':[R' D R,U']",
    "long": "U' D' R2 D R U' R' D' R U R D U"
  },
  "RK": {
    "short": "U' R' U':[R D R',U']",
    "long": "U' R' U' R D R' U' R D' R' U2 R U"
  },
  "RP": {
    "short": "R B' R':[U,R' D' R]",
    "long": "R B' R' U R' D' R U' R' D R2 B R'"
  },
  "BD": {
    "short": "R F' R':[R' D R,U]",
    "long": "R F' R2 D R U R' D' R U' R F R'"
  },
  "BI": {
    "short": "R:[U2,R D R']",
    "long": "R U2 R D R' U2 R D' R2"
  },
  "BF": {
    "short": "R':[R' D' R,U']",
    "long": "R2 D' R U' R' D R U R"
  },
  "BA": {
    "short": "R' B' R:[U',R D R']",
    "long": "R' B' R U' R D R' U R D' R2 B R"
  },
  "BE": {
    "short": "R:[U,R D R']",
    "long": "R U R D R' U' R D' R2"
  },
  "BR": {
    "short": "R':[R' D' R,U2]",
    "long": "R2 D' R U2 R' D R U2 R"
  },
  "BU": {
    "short": "R F':[R' U' R,D]",
    "long": "R F' R' U' R D R' U R D' F R'"
  },
  "BG": {
    "short": "[R' D R,U]",
    "long": "R' D R U R' D' R U'"
  },
  "BL": {
    "short": "D:[R' D' R,U]",
    "long": "D R' D' R U R' D R D' U'"
  },
  "BX": {
    "short": "R' B:[D',R U R']",
    "long": "R' B D' R U R' D R U' R' B' R"
  },
  "BS": {
    "short": "D':[U',R D R']",
    "long": "U' D' R D R' U R D' R' D"
  },
  "BH": {
    "short": "[U',R D' R']",
    "long": "U' R D' R' U R D R'"
  },
  "BW": {
    "short": "[U',R D' R' U R' D R]",
    "long": "U' R D' R' U R' D R U R' D' R U' R D R'"
  },
  "BO": {
    "short": "[U',R D R']",
    "long": "U' R D R' U R D' R'"
  },
  "BT": {
    "short": "D:[U',R D' R']",
    "long": "U' D R D' R' U R D R' D'"
  },
  "BV": {
    "short": "[R' D R U' R D' R',U]",
    "long": "R' D R U' R D' R' U R D R' U R' D' R U'"
  },
  "BK": {
    "short": "D':[R' D R,U]",
    "long": "D' R' D R U R' D' R D U'"
  },
  "BP": {
    "short": "[R' D' R,U]",
    "long": "R' D' R U R' D R U'"
  },
  "QD": {
    "short": "R' D':[R' D R,U']",
    "long": "R' D' R' D R U' R' D' R D U R"
  },
  "QI": {
    "short": "R D:[U2,R D' R']",
    "long": "R U2 D R D' R' U2 R D R' D' R'"
  },
  "QF": {
    "short": "R' F:[D,R U R']",
    "long": "R' F D R U R' D' R U' R' F' R"
  },
  "QA": {
    "short": "R' D':[R' D R,U2]",
    "long": "R' D' R' D R U2 R' D' R D U2 R"
  },
  "QE": {
    "short": "R D:[U,R D' R']",
    "long": "R U D R D' R' U' R D R' D' R'"
  },
  "QR": {
    "short": "R B':[R' U' R,D']",
    "long": "R B' R' U' R D' R' U R D B R'"
  },
  "QU": {
    "short": "[U' R2 D R2 U,R']",
    "long": "U' R2 D R2 U R' U' R2 D' R2 U R"
  },
  "QG": {
    "short": "R' U:[D,R U' R']",
    "long": "R' U D R U' R' D' R U R' U' R"
  },
  "QL": {
    "short": "R' F:[D,R U' R']",
    "long": "R' F D R U' R' D' R U R' F' R"
  },
  "QX": {
    "short": "R U':[R' U R,D']",
    "long": "R U' R' U R D' R' U' R D U R'"
  },
  "QS": {
    "short": "[R,U R2 D' R2 U']",
    "long": "R U R2 D' R2 U' R' U R2 D R2 U'"
  },
  "QH": {
    "short": "R B':[R' U R,D']",
    "long": "R B' R' U R D' R' U' R D B R'"
  },
  "QW": {
    "short": "D R U':[R' U R,D']",
    "long": "D R U' R' U R D' R' U' R D U R' D'"
  },
  "QO": {
    "short": "U' R U:[D,R' U' R]",
    "long": "U' R U D R' U' R D' R' U R U' R' U"
  },
  "QT": {
    "short": "R U':[R' U R,D]",
    "long": "R U' R' U R D R' U' R D' U R'"
  },
  "QV": {
    "short": "U R' U':[R U R',D']",
    "long": "U R' U' R U R' D' R U' R' D U R U'"
  },
  "QK": {
    "short": "D' R' U:[D,R U' R']",
    "long": "D' R' U D R U' R' D' R U R' U' R D"
  },
  "QP": {
    "short": "R' U:[D',R U' R']",
    "long": "R' U D' R U' R' D R U R' U' R"
  },
  "ND": {
    "short": "U' R':[R' D' R,U2]",
    "long": "U' R2 D' R U2 R' D R U2 R U"
  },
  "NI": {
    "short": "R':[R' D R U' R D' R',U']",
    "long": "R2 D R U' R D' R' U' R D R' U R' D' R U R"
  },
  "NF": {
    "short": "R' D' R U D:[R' D' R,U2]",
    "long": "R' D' R U D R' D' R U2 R' D R D' U R' D R"
  },
  "NA": {
    "short": "R D R' U D':[R D R',U2]",
    "long": "R D R' U D' R D R' U2 R D' R' D U R D' R'"
  },
  "NE": {
    "short": "R:[U,R D' R' U R' D R]",
    "long": "R U R D' R' U R' D R U' R' D' R U' R D R2"
  },
  "NR": {
    "short": "U R:[U2,R D R']",
    "long": "U R U2 R D R' U2 R D' R2 U'"
  },
  "NU": {
    "short": "U' R':[R' D R,U2]",
    "long": "U' R2 D R U2 R' D' R U2 R U"
  },
  "NG": {
    "short": "U R U':[R' D R,U2]",
    "long": "U R U' R' D R U2 R' D' R U' R' U'"
  },
  "NL": {
    "short": "[D R' D' R,U' R B' R']",
    "long": "D R' D' R U' R B' R2 D R D' R B R' U"
  },
  "NX": {
    "short": "[U R' F R,D' R D R']",
    "long": "U R' F R D' R D R2 F' R U' R D' R' D"
  },
  "NS": {
    "short": "U' R' U':[R D' R',U2]",
    "long": "U' R' U' R D' R' U2 R D R' U' R U"
  },
  "NH": {
    "short": "U R:[U2,R D' R']",
    "long": "U R U2 R D' R' U2 R D R2 U'"
  },
  "NW": {
    "short": "D:[U R' F R,D' R D R']",
    "long": "D U R' F R D' R D R2 F' R U' R D' R'"
  },
  "NO": {
    "short": "U R U':[R' D' R,U2]",
    "long": "U R U' R' D' R U2 R' D R U' R' U'"
  },
  "NT": {
    "short": "U D R:[U2,R D' R']",
    "long": "U D R U2 R D' R' U2 R D R2 D' U'"
  },
  "NV": {
    "short": "U' D' R':[R' D R,U2]",
    "long": "U' D' R2 D R U2 R' D' R U2 R D U"
  },
  "NK": {
    "short": "U' R' U':[R D R',U2]",
    "long": "U' R' U' R D R' U2 R D' R' U' R U"
  },
  "NP": {
    "short": "D':[D R' D' R,U' R B' R']",
    "long": "R' D' R U' R B' R2 D R D' R B R' U D"
  },
  "UD": {
    "short": "R2 F R U':[R' D' R,U2]",
    "long": "R2 F R U' R' D' R U2 R' D R U' R' F' R2"
  },
  "UI": {
    "short": "R U' D:[R' D' R,U2]",
    "long": "R U' D R' D' R U2 R' D R D' U' R'"
  },
  "UF": {
    "short": "U' R' U:[D,R U' R']",
    "long": "U' R' U D R U' R' D' R U R' U' R U"
  },
  "UA": {
    "short": "R F' R' U:[R D R',U2]",
    "long": "R F' R' U R D R' U2 R D' R' U R F R'"
  },
  "UE": {
    "short": "R U2 D:[R' D' R,U']",
    "long": "R U2 D R' D' R U' R' D R D' U' R'"
  },
  "UR": {
    "short": "U' R':[U',R' D R]",
    "long": "U' R' U' R' D R U R' D' R2 U"
  },
  "UB": {
    "short": "R F':[D,R' U' R]",
    "long": "R F' D R' U' R D' R' U R F R'"
  },
  "UQ": {
    "short": "[R',U' R2 D R2 U]",
    "long": "R' U' R2 D R2 U R U' R2 D' R2 U"
  },
  "UN": {
    "short": "U' R':[U2,R' D R]",
    "long": "U' R' U2 R' D R U2 R' D' R2 U"
  },
  "UX": {
    "short": "R B R' U:[R' D R,U]",
    "long": "R B R' U R' D R U R' D' R U2 R B' R'"
  },
  "US": {
    "short": "U R' F R:[R D' R',U2]",
    "long": "U R' F R2 D' R' U2 R D R' U2 R' F' R U'"
  },
  "UH": {
    "short": "R:[D' R D R',R' F' R U']",
    "long": "R D' R D R2 F' R U' R D' R' D U R' F"
  },
  "UW": {
    "short": "U R' F R:[R D R',U2]",
    "long": "U R' F R2 D R' U2 R D' R' U2 R' F' R U'"
  },
  "UO": {
    "short": "U' R':[U,R' D R]",
    "long": "U' R' U R' D R U' R' D' R2 U"
  },
  "UT": {
    "short": "U' R2 U:[R U' R',D]",
    "long": "U' R2 U R U' R' D R U R' D' U' R2 U"
  },
  "UV": {
    "short": "R U' R' D:[R' D' R,U2]",
    "long": "R U' R' D R' D' R U2 R' D R D' U2 R U R'"
  },
  "UK": {
    "short": "[R,U' R2 D R2 U]",
    "long": "R U' R2 D R2 U R' U' R2 D' R2 U"
  },
  "UP": {
    "short": "R D:[R' D' R,U]",
    "long": "R D R' D' R U R' D R D' U' R'"
  },
  "GD": {
    "short": "[U',R' D R]",
    "long": "U' R' D R U R' D' R"
  },
  "GI": {
    "short": "D R':[F2,R D' R' D]",
    "long": "D R' F2 R D' R' D F2 D' R"
  },
  "GF": {
    "short": "R' U':[R U R',D]",
    "long": "R' U' R U R' D R U' R' D' U R"
  },
  "GA": {
    "short": "[U2,R' D R]",
    "long": "U2 R' D R U2 R' D' R"
  },
  "GE": {
    "short": "U R':[R' D R,U']",
    "long": "U R2 D R U' R' D' R U R U'"
  },
  "GR": {
    "short": "R B' R':[R' D R,U]",
    "long": "R B' R2 D R U R' D' R U' R B R'"
  },
  "GB": {
    "short": "[U,R' D R]",
    "long": "U R' D R U' R' D' R"
  },
  "GQ": {
    "short": "R' U:[R U' R',D]",
    "long": "R' U R U' R' D R U R' D' U' R"
  },
  "GN": {
    "short": "U R U:[R' D R,U2]",
    "long": "U R U R' D R U2 R' D' R U R' U'"
  },
  "GX": {
    "short": "R B R' U D:[R' D' R,U]",
    "long": "R B R' U D R' D' R U R' D R D' U2 R B' R'"
  },
  "GS": {
    "short": "U' R B R':[U,R' D R]",
    "long": "U' R B R' U R' D R U' R' D' R2 B' R' U"
  },
  "GH": {
    "short": "D R':[F',R D' R' D]",
    "long": "D R' F' R D' R' D F D' R"
  },
  "GW": {
    "short": "D R2 U':[D',R' U R]",
    "long": "D R2 U' D' R' U R D R' U' R U R2 D'"
  },
  "GO": {
    "short": "R' U:[R U R',D]",
    "long": "R' U R U R' D R U' R' D' U' R"
  },
  "GT": {
    "short": "R F R':[R' D R,U']",
    "long": "R F R2 D R U' R' D' R U R F' R'"
  },
  "GV": {
    "short": "U' R' D R:[R D' R',U']",
    "long": "U' R' D R2 D' R' U' R D R' U R' D' R U"
  },
  "GK": {
    "short": "U:[D,R U' R']",
    "long": "U D R U' R' D' R U R' U'"
  },
  "GP": {
    "short": "U' R U' R':[R' D R,U]",
    "long": "U' R U' R2 D R U R' D' R U' R U R' U"
  },
  "LD": {
    "short": "D:[U',R' D' R]",
    "long": "U' D R' D' R U R' D R D'"
  },
  "LI": {
    "short": "R U':[R' D R,U2]",
    "long": "R U' R' D R U2 R' D' R U' R'"
  },
  "LF": {
    "short": "D R' U':[R U R',D']",
    "long": "D R' U' R U R' D' R U' R' D U R D'"
  },
  "LA": {
    "short": "D:[U2,R' D' R]",
    "long": "U2 D R' D' R U2 R' D R D'"
  },
  "LE": {
    "short": "R U:[U,R' D R]",
    "long": "R U2 R' D R U' R' D' R U' R'"
  },
  "LR": {
    "short": "R:[B',R' D R' D' R2]",
    "long": "R B' R' D R' D' R2 B R2 D R D'"
  },
  "LB": {
    "short": "D:[U,R' D' R]",
    "long": "U D R' D' R U' R' D R D'"
  },
  "LQ": {
    "short": "R' F:[R U' R',D]",
    "long": "R' F R U' R' D R U R' D' F' R"
  },
  "LN": {
    "short": "[U' R B' R',D R' D' R]",
    "long": "U' R B' R' D R' D' R2 B R' U R' D R D'"
  },
  "LX": {
    "short": "R' D:[R D' R' D,F']",
    "long": "R' D R D' R' D F' D' R D R' F D' R"
  },
  "LS": {
    "short": "R' F' R D':[R D R',U']",
    "long": "R' F' R D' R D R' U' R D' R' U D R' F R"
  },
  "LH": {
    "short": "R' F' R:[R D' R',U']",
    "long": "R' F' R2 D' R' U' R D R' U R' F R"
  },
  "LW": {
    "short": "D R:[R D' R',U']",
    "long": "D R2 D' R' U' R D R' U R' D'"
  },
  "LO": {
    "short": "R' F' R:[R D R',U']",
    "long": "R' F' R2 D R' U' R D' R' U R' F R"
  },
  "LT": {
    "short": "R' F' R D:[R D' R',U']",
    "long": "R' F' R D R D' R' U' R D R' U D' R' F R"
  },
  "LV": {
    "short": "R U' R':[R' D R,U2]",
    "long": "R U' R2 D R U2 R' D' R U2 R U R'"
  },
  "LK": {
    "short": "R':[R D' R' D,F']",
    "long": "D' R' D F' D' R D R' F R"
  },
  "LP": {
    "short": "[D,R U R']",
    "long": "D R U R' D' R U' R'"
  },
  "XD": {
    "short": "R' B:[R U' R',D']",
    "long": "R' B R U' R' D' R U R' D B' R"
  },
  "XI": {
    "short": "R:[U2,R D' R']",
    "long": "R U2 R D' R' U2 R D R2"
  },
  "XF": {
    "short": "U':[R,U R2 D' R2 U']",
    "long": "U' R U R2 D' R2 U' R' U R2 D R2"
  },
  "XA": {
    "short": "R' U' D' R:[D,R U' R']",
    "long": "R' U' D' R D R U' R' D' R U R2 D U R"
  },
  "XE": {
    "short": "R:[U,R D' R']",
    "long": "R U R D' R' U' R D R2"
  },
  "XR": {
    "short": "R B:[R' U R,D']",
    "long": "R B R' U R D' R' U' R D B' R'"
  },
  "XB": {
    "short": "R' B:[R U R',D']",
    "long": "R' B R U R' D' R U' R' D B' R"
  },
  "XQ": {
    "short": "R U':[D',R' U R]",
    "long": "R U' D' R' U R D R' U' R U R'"
  },
  "XN": {
    "short": "[D' R D R',U R' F R]",
    "long": "D' R D R' U R' F R2 D' R' D R' F' R U'"
  },
  "XU": {
    "short": "R B R' U:[U,R' D R]",
    "long": "R B R' U2 R' D R U' R' D' R U' R B' R'"
  },
  "XG": {
    "short": "R B R' U2 D:[R' D' R,U']",
    "long": "R B R' U2 D R' D' R U' R' D R D' U' R B' R'"
  },
  "XL": {
    "short": "R' D:[F',R D' R' D]",
    "long": "R' D F' R D' R' D F D' R D R' D' R"
  },
  "XW": {
    "short": "R B:[R' U R,D]",
    "long": "R B R' U R D R' U' R D' B' R'"
  },
  "XO": {
    "short": "R' B:[R U2 R',D']",
    "long": "R' B R U2 R' D' R U2 R' D B' R"
  },
  "XT": {
    "short": "U':[R',U R2 D' R2 U']",
    "long": "U' R' U R2 D' R2 U' R U R2 D R2"
  },
  "XV": {
    "short": "R U' R' U':[R D' R',U2]",
    "long": "R U' R' U' R D' R' U2 R D R' U' R U R'"
  },
  "XK": {
    "short": "R2 U':[R' U R,D']",
    "long": "R2 U' R' U R D' R' U' R D U R2"
  },
  "XP": {
    "short": "R:[U',R D' R']",
    "long": "R U' R D' R' U R D R2"
  },
  "SD": {
    "short": "U2 D':[R D R',U]",
    "long": "U2 D' R D R' U R D' R' D U"
  },
  "SI": {
    "short": "U':[U R' F R,D' R D R']",
    "long": "R' F R D' R D R2 F' R U' R D' R' D U"
  },
  "SF": {
    "short": "U2 R U:[D',R' U' R]",
    "long": "U2 R U D' R' U' R D R' U R U' R' U2"
  },
  "SA": {
    "short": "U D':[R D R',U2]",
    "long": "U D' R D R' U2 R D' R' D U"
  },
  "SE": {
    "short": "U R' U' D':[R D R',U']",
    "long": "U R' U' D' R D R' U' R D' R' D U2 R U'"
  },
  "SR": {
    "short": "U' R' U':[U',R D' R']",
    "long": "U' R' U2 R D' R' U R D R' U R U"
  },
  "SB": {
    "short": "D':[R D R',U']",
    "long": "D' R D R' U' R D' R' D U"
  },
  "SQ": {
    "short": "[U R2 D' R2 U',R]",
    "long": "U R2 D' R2 U' R U R2 D R2 U' R'"
  },
  "SN": {
    "short": "U' R' U:[R D' R',U2]",
    "long": "U' R' U R D' R' U2 R D R' U R U"
  },
  "SU": {
    "short": "U R' F R:[U2,R D' R']",
    "long": "U R' F R U2 R D' R' U2 R D R2 F' R U'"
  },
  "SG": {
    "short": "U' R B R':[R' D R,U]",
    "long": "U' R B R2 D R U R' D' R U' R B' R' U"
  },
  "SL": {
    "short": "R' F' R D':[U',R D R']",
    "long": "R' F' R D' U' R D R' U R D' R' D R' F R"
  },
  "SW": {
    "short": "U' R' U R:[R D' R',U2]",
    "long": "U' R' U R2 D' R' U2 R D R' U2 R' U' R U"
  },
  "SO": {
    "short": "U':[D',R' U' R]",
    "long": "U' D' R' U' R D R' U R U"
  },
  "ST": {
    "short": "U R' D':[R D R',U2]",
    "long": "U R' D' R D R' U2 R D' R' D U2 R U'"
  },
  "SV": {
    "short": "U' D' R':[R' D R,U]",
    "long": "U' D' R2 D R U R' D' R U' R D U"
  },
  "SK": {
    "short": "D' R' U:[D,R U R']",
    "long": "D' R' U D R U R' D' R U' R' U' R D"
  },
  "SP": {
    "short": "U' R B R':[R' D' R,U]",
    "long": "U' R B R2 D' R U R' D R U' R B' R' U"
  },
  "HD": {
    "short": "U':[U',R D' R']",
    "long": "U2 R D' R' U R D R' U"
  },
  "HI": {
    "short": "R D':[U2,R D R']",
    "long": "R U2 D' R D R' U2 R D' R' D R'"
  },
  "HF": {
    "short": "U' R U':[R' U R,D']",
    "long": "U' R U' R' U R D' R' U' R D U R' U"
  },
  "HA": {
    "short": "U:[R D' R',U2]",
    "long": "U R D' R' U2 R D R' U"
  },
  "HE": {
    "short": "R D':[U,R D R']",
    "long": "R U D' R D R' U' R D' R' D R'"
  },
  "HR": {
    "short": "R D' R U:[R' U' R,D]",
    "long": "R D' R U R' U' R D R' U R D' U' R' D R'"
  },
  "HB": {
    "short": "[R D' R',U']",
    "long": "R D' R' U' R D R' U"
  },
  "HQ": {
    "short": "R B':[D',R' U R]",
    "long": "R B' D' R' U R D R' U' R B R'"
  },
  "HN": {
    "short": "U R:[R D' R',U2]",
    "long": "U R2 D' R' U2 R D R' U2 R' U'"
  },
  "HU": {
    "short": "R:[R' F' R U',D' R D R']",
    "long": "F' R U' D' R D R' U R' F R2 D' R' D R'"
  },
  "HG": {
    "short": "R' D:[F',D' R D R']",
    "long": "R' D F' D' R D R' F R D'"
  },
  "HL": {
    "short": "R' F' R:[U',R D' R']",
    "long": "R' F' R U' R D' R' U R D R2 F R"
  },
  "HW": {
    "short": "R D' R':[R' D R,U]",
    "long": "R D' R2 D R U R' D' R U' R D R'"
  },
  "HO": {
    "short": "R' U R:[R D' R',U']",
    "long": "R' U R2 D' R' U' R D R' U R' U' R"
  },
  "HT": {
    "short": "U:[D',R' U2 R]",
    "long": "U D' R' U2 R D R' U2 R U'"
  },
  "HV": {
    "short": "R U' R' U' D':[R D R',U2]",
    "long": "R U' R' U' D' R D R' U2 R D' R' D U' R U R'"
  },
  "HK": {
    "short": "U R U':[R D' R',U']",
    "long": "U R U' R D' R' U' R D R' U2 R' U'"
  },
  "HP": {
    "short": "R D':[U',R D R']",
    "long": "R U' D' R D R' U R D' R' D R'"
  },
  "WD": {
    "short": "R D' R':[U',R' D R]",
    "long": "R D' R' U' R' D R U R' D' R2 D R'"
  },
  "WI": {
    "short": "D R:[U2,R D' R']",
    "long": "D R U2 R D' R' U2 R D R2 D'"
  },
  "WF": {
    "short": "U2 R U:[D,R' U' R]",
    "long": "U2 R U D R' U' R D' R' U R U' R' U2"
  },
  "WA": {
    "short": "R D' R':[U2,R' D R]",
    "long": "R D' R' U2 R' D R U2 R' D' R2 D R'"
  },
  "WE": {
    "short": "D R:[U,R D' R']",
    "long": "D R U R D' R' U' R D R2 D'"
  },
  "WR": {
    "short": "U R' F R:[U',R D R']",
    "long": "U R' F R U' R D R' U R D' R2 F' R U'"
  },
  "WB": {
    "short": "[R D' R' U R' D R,U']",
    "long": "R D' R' U R' D R U' R' D' R U' R D R' U"
  },
  "WQ": {
    "short": "D R U':[D',R' U R]",
    "long": "D R U' D' R' U R D R' U' R U R' D'"
  },
  "WN": {
    "short": "D:[D' R D R',U R' F R]",
    "long": "R D R' U R' F R2 D' R' D R' F' R U' D'"
  },
  "WU": {
    "short": "U R' F R:[U2,R D R']",
    "long": "U R' F R U2 R D R' U2 R D' R2 F' R U'"
  },
  "WG": {
    "short": "D R2 U':[R' U R,D']",
    "long": "D R2 U' R' U R D' R' U' R D U R2 D'"
  },
  "WL": {
    "short": "D R:[U',R D' R']",
    "long": "D R U' R D' R' U R D R2 D'"
  },
  "WX": {
    "short": "R B:[D,R' U R]",
    "long": "R B D R' U R D' R' U' R B' R'"
  },
  "WS": {
    "short": "U' R' U R:[U2,R D' R']",
    "long": "U' R' U R U2 R D' R' U2 R D R2 U' R U"
  },
  "WH": {
    "short": "R D' R':[U,R' D R]",
    "long": "R D' R' U R' D R U' R' D' R2 D R'"
  },
  "WV": {
    "short": "R U' R' U' D:[R D' R',U2]",
    "long": "R U' R' U' D R D' R' U2 R D R' D' U' R U R'"
  },
  "WK": {
    "short": "U R D':[R' D R,U']",
    "long": "U R D' R' D R U' R' D' R D U R' U'"
  },
  "WP": {
    "short": "R:[R' D R U' R D' R',U]",
    "long": "D R U' R D' R' U R D R' U R' D' R U' R'"
  },
  "OD": {
    "short": "U':[U',R D R']",
    "long": "U2 R D R' U R D' R' U"
  },
  "OI": {
    "short": "R U' D':[R' D R,U2]",
    "long": "R U' D' R' D R U2 R' D' R D U' R'"
  },
  "OF": {
    "short": "R' U:[R' D' R,U2]",
    "long": "R' U R' D' R U2 R' D R U R"
  },
  "OA": {
    "short": "U:[R D R',U2]",
    "long": "U R D R' U2 R D' R' U"
  },
  "OE": {
    "short": "R U2 D':[R' D R,U']",
    "long": "R U2 D' R' D R U' R' D' R D U' R'"
  },
  "OR": {
    "short": "R' U:[R' D' R,U]",
    "long": "R' U R' D' R U R' D R U2 R"
  },
  "OB": {
    "short": "[R D R',U']",
    "long": "R D R' U' R D' R' U"
  },
  "OQ": {
    "short": "U' R U:[R' U' R,D]",
    "long": "U' R U R' U' R D R' U R D' U' R' U"
  },
  "ON": {
    "short": "U R U:[R' D' R,U2]",
    "long": "U R U R' D' R U2 R' D R U R' U'"
  },
  "OU": {
    "short": "U' R':[R' D R,U]",
    "long": "U' R2 D R U R' D' R U' R U"
  },
  "OG": {
    "short": "R' U:[D,R U R']",
    "long": "R' U D R U R' D' R U' R' U' R"
  },
  "OL": {
    "short": "R' F' R:[U',R D R']",
    "long": "R' F' R U' R D R' U R D' R2 F R"
  },
  "OX": {
    "short": "R' B:[D',R U2 R']",
    "long": "R' B D' R U2 R' D R U2 R' B' R"
  },
  "OS": {
    "short": "U':[R' U' R,D']",
    "long": "U' R' U' R D' R' U R D U"
  },
  "OH": {
    "short": "R' U R:[U',R D' R']",
    "long": "R' U R U' R D' R' U R D R2 U' R"
  },
  "OV": {
    "short": "R U' D' R':[R' D R,U2]",
    "long": "R U' D' R2 D R U2 R' D' R U2 R D U R'"
  },
  "OK": {
    "short": "U:[D',R U' R']",
    "long": "U D' R U' R' D R U R' U'"
  },
  "OP": {
    "short": "R D':[R' D R,U]",
    "long": "R D' R' D R U R' D' R D U' R'"
  },
  "TD": {
    "short": "U2 D:[R D' R',U]",
    "long": "U2 D R D' R' U R D R' D' U"
  },
  "TI": {
    "short": "R U':[R' D' R,U2]",
    "long": "R U' R' D' R U2 R' D R U' R'"
  },
  "TF": {
    "short": "R2 U' R':[U,R' D' R]",
    "long": "R2 U' R' U R' D' R U' R' D R2 U R2"
  },
  "TA": {
    "short": "U D:[R D' R',U2]",
    "long": "U D R D' R' U2 R D R' D' U"
  },
  "TE": {
    "short": "R U:[U,R' D' R]",
    "long": "R U2 R' D' R U' R' D R U' R'"
  },
  "TR": {
    "short": "U' R' U' R:[U,R D R']",
    "long": "U' R' U' R U R D R' U' R D' R2 U R U"
  },
  "TB": {
    "short": "D:[R D' R',U']",
    "long": "D R D' R' U' R D R' D' U"
  },
  "TQ": {
    "short": "R U':[D,R' U R]",
    "long": "R U' D R' U R D' R' U' R U R'"
  },
  "TN": {
    "short": "U D R:[R D' R',U2]",
    "long": "U D R2 D' R' U2 R D R' U2 R' D' U'"
  },
  "TU": {
    "short": "U' R2 U:[D,R U' R']",
    "long": "U' R2 U D R U' R' D' R U R' U' R2 U"
  },
  "TG": {
    "short": "R F R':[U',R' D R]",
    "long": "R F R' U' R' D R U R' D' R2 F' R'"
  },
  "TL": {
    "short": "R' F' R D:[U',R D' R']",
    "long": "R' F' R D U' R D' R' U R D R' D' R' F R"
  },
  "TX": {
    "short": "R2:[D',R2 U' R' U R2]",
    "long": "R2 D' R2 U' R' U R2 D R2 U' R U"
  },
  "TS": {
    "short": "U R' D':[U2,R D R']",
    "long": "U R' U2 D' R D R' U2 R D' R' D R U'"
  },
  "TH": {
    "short": "U:[R' U2 R,D']",
    "long": "U R' U2 R D' R' U2 R D U'"
  },
  "TV": {
    "short": "R U' R' U':[R D R',U2]",
    "long": "R U' R' U' R D R' U2 R D' R' U' R U R'"
  },
  "TK": {
    "short": "D R' U R:[R D' R',U']",
    "long": "D R' U R2 D' R' U' R D R' U R' U' R D'"
  },
  "TP": {
    "short": "[D',R U R']",
    "long": "D' R U R' D R U' R'"
  },
  "VD": {
    "short": "[U',R' D R U' R D' R']",
    "long": "U' R' D R U' R D' R' U R D R' U R' D' R"
  },
  "VI": {
    "short": "D' R U' D:[R' D' R,U2]",
    "long": "D' R U' D R' D' R U2 R' D R D' U' R' D"
  },
  "VF": {
    "short": "R U' R':[U2,R' D' R]",
    "long": "R U' R' U2 R' D' R U2 R' D R2 U R'"
  },
  "VA": {
    "short": "U R' D R:[R D' R',U2]",
    "long": "U R' D R2 D' R' U2 R D R' U2 R' D' R U'"
  },
  "VE": {
    "short": "D' R U2 D:[R' D' R,U']",
    "long": "D' R U2 D R' D' R U' R' D R D' U' R' D"
  },
  "VR": {
    "short": "U' D' R':[U',R' D R]",
    "long": "U' D' R' U' R' D R U R' D' R2 D U"
  },
  "VB": {
    "short": "[U,R' D R U' R D' R']",
    "long": "U R' D R U' R D' R' U' R D R' U R' D' R"
  },
  "VQ": {
    "short": "U R' U':[D',R U R']",
    "long": "U R' U' D' R U R' D R U' R' U R U'"
  },
  "VN": {
    "short": "U' D' R':[U2,R' D R]",
    "long": "U' D' R' U2 R' D R U2 R' D' R2 D U"
  },
  "VU": {
    "short": "R U' R' D:[U2,R' D' R]",
    "long": "R U' R' U2 D R' D' R U2 R' D R D' R U R'"
  },
  "VG": {
    "short": "U' R' D R:[U',R D' R']",
    "long": "U' R' D R U' R D' R' U R D R2 D' R U"
  },
  "VL": {
    "short": "R U' R':[U2,R' D R]",
    "long": "R U' R' U2 R' D R U2 R' D' R2 U R'"
  },
  "VX": {
    "short": "R U' R' U:[R D' R',U2]",
    "long": "R U' R' U R D' R' U2 R D R' U R U R'"
  },
  "VS": {
    "short": "U' D' R':[U,R' D R]",
    "long": "U' D' R' U R' D R U' R' D' R2 D U"
  },
  "VH": {
    "short": "R U' R' U D':[R D R',U2]",
    "long": "R U' R' U D' R D R' U2 R D' R' D U R U R'"
  },
  "VW": {
    "short": "R U' R' U D:[R D' R',U2]",
    "long": "R U' R' U D R D' R' U2 R D R' D' U R U R'"
  },
  "VO": {
    "short": "R U' D' R':[U2,R' D R]",
    "long": "R U' D' R' U2 R' D R U2 R' D' R2 D U R'"
  },
  "VT": {
    "short": "R U' R' U:[R D R',U2]",
    "long": "R U' R' U R D R' U2 R D' R' U R U R'"
  },
  "KD": {
    "short": "D':[U',R' D R]",
    "long": "U' D' R' D R U R' D' R D"
  },
  "KI": {
    "short": "R':[F2,R D' R' D]",
    "long": "R' F2 R D' R' D F2 D' R D"
  },
  "KF": {
    "short": "D' R' U':[R U R',D]",
    "long": "D' R' U' R U R' D R U' R' D' U R D"
  },
  "KA": {
    "short": "D':[U2,R' D R]",
    "long": "U2 D' R' D R U2 R' D' R D"
  },
  "KE": {
    "short": "R U R':[U',R' D' R]",
    "long": "R U R' U' R' D' R U R' D R2 U' R'"
  },
  "KR": {
    "short": "U' R' U':[U',R D R']",
    "long": "U' R' U2 R D R' U R D' R' U R U"
  },
  "KB": {
    "short": "D':[U,R' D R]",
    "long": "U D' R' D R U' R' D' R D"
  },
  "KQ": {
    "short": "D' R' U:[R U' R',D]",
    "long": "D' R' U R U' R' D R U R' D' U' R D"
  },
  "KN": {
    "short": "U' R' U:[R D R',U2]",
    "long": "U' R' U R D R' U2 R D' R' U R U"
  },
  "KU": {
    "short": "[U' R2 D R2 U,R]",
    "long": "U' R2 D R2 U R U' R2 D' R2 U R'"
  },
  "KG": {
    "short": "U:[R U' R',D]",
    "long": "U R U' R' D R U R' D' U'"
  },
  "KL": {
    "short": "R':[F',R D' R' D]",
    "long": "R' F' R D' R' D F D' R D"
  },
  "KX": {
    "short": "R2 U':[D',R' U R]",
    "long": "R2 U' D' R' U R D R' U' R U R2"
  },
  "KS": {
    "short": "D' R' U:[R U R',D]",
    "long": "D' R' U R U R' D R U' R' D' U' R D"
  },
  "KH": {
    "short": "U R U':[U',R D' R']",
    "long": "U R U2 R D' R' U R D R' U R' U'"
  },
  "KW": {
    "short": "U R D':[U',R' D R]",
    "long": "U R U' D' R' D R U R' D' R D R' U'"
  },
  "KO": {
    "short": "U:[R U' R',D']",
    "long": "U R U' R' D' R U R' D U'"
  },
  "KT": {
    "short": "D R' U R:[U',R D' R']",
    "long": "D R' U R U' R D' R' U R D R2 U' R D'"
  },
  "PD": {
    "short": "[U',R' D' R]",
    "long": "U' R' D' R U R' D R"
  },
  "PI": {
    "short": "D R U':[R' D' R,U2]",
    "long": "D R U' R' D' R U2 R' D R U' R' D'"
  },
  "PF": {
    "short": "R' U':[R U R',D']",
    "long": "R' U' R U R' D' R U' R' D U R"
  },
  "PA": {
    "short": "[U2,R' D' R]",
    "long": "U2 R' D' R U2 R' D R"
  },
  "PE": {
    "short": "D R U:[U,R' D' R]",
    "long": "D R U2 R' D' R U' R' D R U' R' D'"
  },
  "PR": {
    "short": "R B' R':[R' D' R,U]",
    "long": "R B' R2 D' R U R' D R U' R B R'"
  },
  "PB": {
    "short": "[U,R' D' R]",
    "long": "U R' D' R U' R' D R"
  },
  "PQ": {
    "short": "R' U:[R U' R',D']",
    "long": "R' U R U' R' D' R U R' D U' R"
  },
  "PN": {
    "short": "D':[U' R B' R',D R' D' R]",
    "long": "D' U' R B' R' D R' D' R2 B R' U R' D R"
  },
  "PU": {
    "short": "R D:[U,R' D' R]",
    "long": "R U D R' D' R U' R' D R D' R'"
  },
  "PG": {
    "short": "U' R U' R':[U,R' D R]",
    "long": "U' R U' R' U R' D R U' R' D' R2 U R' U"
  },
  "PL": {
    "short": "[R U R',D]",
    "long": "R U R' D R U' R' D'"
  },
  "PX": {
    "short": "R:[R D' R',U']",
    "long": "R2 D' R' U' R D R' U R'"
  },
  "PS": {
    "short": "U' R B R':[U,R' D' R]",
    "long": "U' R B R' U R' D' R U' R' D R2 B' R' U"
  },
  "PH": {
    "short": "R D':[R D R',U']",
    "long": "R D' R D R' U' R D' R' D U R'"
  },
  "PW": {
    "short": "R:[U,R' D R U' R D' R']",
    "long": "R U R' D R U' R D' R' U' R D R' U R' D'"
  },
  "PO": {
    "short": "R D':[U,R' D R]",
    "long": "R U D' R' D R U' R' D' R D R'"
  },
  "PT": {
    "short": "[R U R',D']",
    "long": "R U R' D' R U' R' D"
  }
};

export const DEFAULT_EDGES: Record<string, AlgDef> = {
  "DA": {
    "short": "R' F R:[S',R U' R']",
    "long": "R' F R S' R U' R' S R U R2 F' R"
  },
  "DQ": {
    "short": "U:[S',R U' R']",
    "long": "U S' R U' R' S R U R' U'"
  },
  "DB": {
    "short": "R' E R U':[R' E' R,U']",
    "long": "R' E R U' R' E' R U' R' E R U2 R' E' R"
  },
  "DM": {
    "short": "[S,R' F R]",
    "long": "S R' F R S' R' F' R"
  },
  "DU": {
    "short": "R' F':[R S R',F2]",
    "long": "R' F' R S R' F2 R S' R' F' R"
  },
  "DK": {
    "short": "U' R:[U' R' U,M']",
    "long": "U' R U' R' U M' U' R U r' U"
  },
  "DX": {
    "short": "[U,R' S' R2 S' R']",
    "long": "U R' S' R2 S' R' U' R S R2 S R"
  },
  "DG": {
    "short": "[U,R S R']",
    "long": "U R S R' U' R S' R'"
  },
  "DW": {
    "short": "R B R':[S,R' F R]",
    "long": "R B R' S R' F R S' R' F' R2 B' R'"
  },
  "DS": {
    "short": "[U',M]+M U:[U,M']",
    "long": "U' M U' M' U' M U' M'"
  },
  "DV": {
    "short": "S R F R:[S',R2]",
    "long": "S R F R S' R2 S R F' R' S'"
  },
  "DO": {
    "short": "U':[R' E' R,U']",
    "long": "U' R' E' R U' R' E R U2"
  },
  "DJ": {
    "short": "[U,R' S2 R]",
    "long": "U R' S2 R U' R' S2 R"
  },
  "DP": {
    "short": "[U,R S' R']",
    "long": "U R S' R' U' R S R'"
  },
  "DL": {
    "short": "E:[U,R S' R']",
    "long": "U E R S' R' U' R S R' E'"
  },
  "DF": {
    "short": "U':[R' E R,U']",
    "long": "U' R' E R U' R' E' R U2"
  },
  "DR": {
    "short": "E':[U,R' S' R]",
    "long": "u R' S' R U' R' S R E"
  },
  "DH": {
    "short": "U':[R E' R',U']",
    "long": "U' R E' R' U' R E R' U2"
  },
  "DT": {
    "short": "[U,R S2 R']",
    "long": "U R S2 R' U' R S2 R'"
  },
  "DN": {
    "short": "[U,R' S' R]",
    "long": "U R' S' R U' R' S R"
  },
  "EA": {
    "short": "S' U':[S',U2 R2]",
    "long": "S' U' S' U2 R2 S R2 U' S"
  },
  "EQ": {
    "short": "U':[S,R' F R]",
    "long": "U' S R' F R S' R' F' R U"
  },
  "EB": {
    "short": "S:[U',R' E' R]",
    "long": "S U' R' E' R U R' E R S'"
  },
  "EM": {
    "short": "R F R:[S,R2]",
    "long": "R F R S R2 S' R F' R'"
  },
  "EU": {
    "short": "U D R B' R:[S,R2]",
    "long": "U D R B' R S R2 S' R B R' D' U'"
  },
  "EK": {
    "short": "U' R F:[E,R2]",
    "long": "U' R F E R2 E' R2 F' R' U"
  },
  "EX": {
    "short": "U' R F R':[S',R2]",
    "long": "U' R F R' S' R2 S R' F' R' U"
  },
  "EG": {
    "short": "U' R':[R' S' R,F]",
    "long": "U' R2 S' R F R' S R F' R U"
  },
  "EW": {
    "short": "U D' R B' R:[S,R2]",
    "long": "U D' R B' R S R2 S' R B R' D U'"
  },
  "ES": {
    "short": "D' R' F R:[S,R2]",
    "long": "D' R' F R S R2 S' R F' R D"
  },
  "EV": {
    "short": "U R B' R:[S,R2]",
    "long": "U R B' R S R2 S' R B R' U'"
  },
  "EO": {
    "short": "R' F R:[S,R2]",
    "long": "R' F R S R2 S' R F' R"
  },
  "EJ": {
    "short": "R S:[U',R' E' R]",
    "long": "R S U' R' E' R U R' E R S' R'"
  },
  "EP": {
    "short": "R2 F R:[S,R2]",
    "long": "R2 F R S R2 S' R F' R2"
  },
  "EL": {
    "short": "S:[U',R E R2 E' R]",
    "long": "S U' R E R2 E' R U R' E R2 E' R' S'"
  },
  "EF": {
    "short": "S:[U',R' E R]",
    "long": "S U' R' E R U R' E' R S'"
  },
  "ER": {
    "short": "U' R F:[R2,E']",
    "long": "U' R F R2 E' R2 E F' R' U"
  },
  "EH": {
    "short": "S:[U',R E' R']",
    "long": "S U' R E' R' U R E R' S'"
  },
  "ET": {
    "short": "R' S:[U',R' E' R]",
    "long": "R' S U' R' E' R U R' E R S' R"
  },
  "EN": {
    "short": "F R:[S,R2]",
    "long": "F R S R2 S' R F'"
  },
  "AD": {
    "short": "R' F R:[R U' R',S']",
    "long": "R' F R2 U' R' S' R U R' S R' F' R"
  },
  "AE": {
    "short": "S' U:[S',U2 R2]",
    "long": "S' U S' U2 R2 S R2 U S"
  },
  "AB": {
    "short": "R' E R U':[R' E' R,U2]",
    "long": "R' E R U' R' E' R U2 R' E R U' R' E' R"
  },
  "AM": {
    "short": "S U':[S,R2]",
    "long": "S U' S R2 S' R2 U S'"
  },
  "AU": {
    "short": "[U2,M']",
    "long": "U2 M' U2 M"
  },
  "AK": {
    "short": "U' R F' R':[S,R2]",
    "long": "U' R F' R' S R2 S' R' F R' U"
  },
  "AX": {
    "short": "U:[S',U2 R2]",
    "long": "U S' U2 R2 S R2 U"
  },
  "AG": {
    "short": "U:[R S R',U2]",
    "long": "U R S R' U2 R S' R' U"
  },
  "AW": {
    "short": "[M,U2]",
    "long": "M U2 M' U2"
  },
  "AS": {
    "short": "U' R' B R:[S,R2]",
    "long": "U' R' B R S R2 S' R B' R U"
  },
  "AV": {
    "short": "U':[S,R2]",
    "long": "U' S R2 S' R2 U"
  },
  "AO": {
    "short": "U':[R' E' R,U2]",
    "long": "U' R' E' R U2 R' E R U'"
  },
  "AJ": {
    "short": "R' U':[S,R2]",
    "long": "R' U' S R2 S' R2 U R"
  },
  "AP": {
    "short": "U:[R S' R',U2]",
    "long": "U R S' R' U2 R S R' U"
  },
  "AL": {
    "short": "U' S:[R2,S' R' E]",
    "long": "U' S R2 S' R' E R2 E' R U"
  },
  "AF": {
    "short": "U':[R' E R,U2]",
    "long": "U' R' E R U2 R' E' R U'"
  },
  "AR": {
    "short": "U' S:[R2,S' R E']",
    "long": "U' S R2 S' R E' R2 E R' U"
  },
  "AH": {
    "short": "U':[R E' R',U2]",
    "long": "U' R E' R' U2 R E R' U'"
  },
  "AT": {
    "short": "R U':[S,R2]",
    "long": "R U' S R2 S' R2 U R'"
  },
  "AN": {
    "short": "U:[R' S' R,U2]",
    "long": "U R' S' R U2 R' S R U"
  },
  "QD": {
    "short": "U:[R U' R',S']",
    "long": "U R U' R' S' R U R' S U'"
  },
  "QE": {
    "short": "U':[R' F R,S]",
    "long": "U' R' F R S R' F' R S' U"
  },
  "QB": {
    "short": "R':[U' R U,M]",
    "long": "R' U' R U M U' R' U r"
  },
  "QM": {
    "short": "R:[M',U R' U']",
    "long": "r U R' U' M U R U' R'"
  },
  "QU": {
    "short": "U:[S,R' F' R]",
    "long": "U S R' F' R S' R' F R U'"
  },
  "QK": {
    "short": "U':[R' F' R,S]",
    "long": "U' R' F' R S R' F R S' U"
  },
  "QX": {
    "short": "U D:[S,R' F' R]",
    "long": "U D S R' F' R S' R' F R D' U'"
  },
  "QG": {
    "short": "U' D:[R' F' R,S]",
    "long": "U' D R' F' R S R' F R S' D' U"
  },
  "QW": {
    "short": "U:[S,R B R']",
    "long": "U S R B R' S' R B' R' U'"
  },
  "QS": {
    "short": "U':[R B R',S]",
    "long": "U' R B R' S R B' R' S' U"
  },
  "QV": {
    "short": "U D':[S,R' F' R]",
    "long": "U D' S R' F' R S' R' F R D U'"
  },
  "QO": {
    "short": "U' D':[R' F' R,S]",
    "long": "U' D' R' F' R S R' F R S' D U"
  },
  "QJ": {
    "short": "[U' R U,M]",
    "long": "U' R U M U' R' U M'"
  },
  "QP": {
    "short": "U:[R',E' R S]",
    "long": "U R' E' R S R S' R' u'"
  },
  "QL": {
    "short": "U':[R' F2 R,S]",
    "long": "U' R' F2 R S R' F2 R S' U"
  },
  "QF": {
    "short": "u':[E' R S,R']",
    "long": "U' R S R' S' R' E R u"
  },
  "QR": {
    "short": "u:[R,E R' S]",
    "long": "u R E R' S R' S' R U'"
  },
  "QH": {
    "short": "U:[S,R B2 R']",
    "long": "U S R B2 R' S' R B2 R' U'"
  },
  "QT": {
    "short": "U':[E R' S,R]",
    "long": "u' R' S R S' R E' R' U"
  },
  "QN": {
    "short": "[M',U R' U']",
    "long": "M' U R' U' M U R U'"
  },
  "BD": {
    "short": "R' E R U':[U',R' E' R]",
    "long": "R' E R U2 R' E' R U R' E R U R' E' R"
  },
  "BE": {
    "short": "S:[R' E' R,U']",
    "long": "S R' E' R U' R' E R U S'"
  },
  "BA": {
    "short": "R' E R U:[R' E' R,U2]",
    "long": "R' E R U R' E' R U2 R' E R U R' E' R"
  },
  "BQ": {
    "short": "R':[M,U' R U]",
    "long": "r' U' R U M' U' R' U R"
  },
  "BU": {
    "short": "S R' F:[R2,E]",
    "long": "S R' F R2 E R2 E' F' R S'"
  },
  "BK": {
    "short": "R:[M',U' R' U]",
    "long": "r U' R' U M U' R U R'"
  },
  "BX": {
    "short": "S' R' F R:[S,R2]",
    "long": "S' R' F R S R2 S' R F' R S"
  },
  "BG": {
    "short": "U:[R S R',U]",
    "long": "U R S R' U R S' R' U2"
  },
  "BW": {
    "short": "R' B:[R U' R',E']",
    "long": "R' B R U' R' E' R U R' E B' R"
  },
  "BS": {
    "short": "[U,M]+M U':[U',M']",
    "long": "U M U M' U M U M'"
  },
  "BV": {
    "short": "[U',R' E R2 E' R']",
    "long": "U' R' E R2 E' R' U R E R2 E' R"
  },
  "BO": {
    "short": "[U',R' E' R]",
    "long": "U' R' E' R U R' E R"
  },
  "BJ": {
    "short": "E':[U',R' E R]",
    "long": "U' E' R' E R U R' E' R E"
  },
  "BP": {
    "short": "U:[R S' R',U]",
    "long": "U R S' R' U R S R' U2"
  },
  "BL": {
    "short": "[U',R E R2 E' R]",
    "long": "U' R E R2 E' R U R' E R2 E' R'"
  },
  "BF": {
    "short": "[U',R' E R]",
    "long": "U' R' E R U R' E' R"
  },
  "BR": {
    "short": "[U',R' E' R2 E R']",
    "long": "U' R' E' R2 E R' U R E' R2 E R"
  },
  "BH": {
    "short": "[U',R E' R']",
    "long": "U' R E' R' U R E R'"
  },
  "BT": {
    "short": "E:[U',R E' R']",
    "long": "u' R E' R' U R E R' E'"
  },
  "BN": {
    "short": "U:[R' S' R,U]",
    "long": "U R' S' R U R' S R U2"
  },
  "MD": {
    "short": "[R' F R,S]",
    "long": "R' F R S R' F' R S'"
  },
  "ME": {
    "short": "R F R':[S,R2]",
    "long": "R F R' S R2 S' R' F' R'"
  },
  "MA": {
    "short": "S U':[R2,S]",
    "long": "S U' R2 S R2 S' U S'"
  },
  "MQ": {
    "short": "R:[U R' U',M']",
    "long": "R U R' U' M' U R U' r'"
  },
  "MU": {
    "short": "R F:[R2,E]",
    "long": "R F R2 E R2 E' F' R'"
  },
  "MK": {
    "short": "R' F':[R U' R',E]",
    "long": "R' F' R U' R' E R U R' E' F R"
  },
  "MX": {
    "short": "R':[F,R' S' R]",
    "long": "R' F R' S' R F' R' S R2"
  },
  "MG": {
    "short": "R F R:[S',R2]",
    "long": "R F R S' R2 S R F' R'"
  },
  "MW": {
    "short": "R U:[R' S R,B]",
    "long": "R U R' S R B R' S' R B' U' R'"
  },
  "MS": {
    "short": "U' R' B':[E',R2]",
    "long": "U' R' B' E' R2 E R2 B R U"
  },
  "MV": {
    "short": "[R' F R,S']",
    "long": "R' F R S' R' F' R S"
  },
  "MO": {
    "short": "U':[S',R B' R']",
    "long": "U' S' R B' R' S R B R' U"
  },
  "MJ": {
    "short": "R' U' E' R':[E,R2]",
    "long": "R' U' E' R' E R2 E' R' E U R"
  },
  "MP": {
    "short": "S':[U,R S' R']",
    "long": "S' U R S' R' U' R S R' S"
  },
  "ML": {
    "short": "S U' R:[E,R2]",
    "long": "S U' R E R2 E' R U S'"
  },
  "MF": {
    "short": "S R' F:[F,R S' R']",
    "long": "S R' F2 R S' R' F' R S R' F' R S'"
  },
  "MR": {
    "short": "S U' R':[E',R2]",
    "long": "S U' R' E' R2 E R' U S'"
  },
  "MH": {
    "short": "R F:[E',R2]",
    "long": "R F E' R2 E R2 F' R'"
  },
  "MT": {
    "short": "R u' R:[E',R2]",
    "long": "R u' R E' R2 E R u R'"
  },
  "MN": {
    "short": "S':[U,R' S' R]",
    "long": "S' U R' S' R U' R' S R S"
  },
  "UD": {
    "short": "R' F:[R S R',F2]",
    "long": "R' F R S R' F2 R S' R' F R"
  },
  "UE": {
    "short": "U D R B' R':[S,R2]",
    "long": "U D R B' R' S R2 S' R' B R' D' U'"
  },
  "UA": {
    "short": "[M',U2]",
    "long": "M' U2 M U2"
  },
  "UQ": {
    "short": "U:[R' F' R,S]",
    "long": "U R' F' R S R' F R S' U'"
  },
  "UB": {
    "short": "S R' F:[E,R2]",
    "long": "S R' F E R2 E' R2 F' R S'"
  },
  "UM": {
    "short": "R F:[E,R2]",
    "long": "R F E R2 E' R2 F' R'"
  },
  "UX": {
    "short": "S' R' F:[E,R2]",
    "long": "S' R' F E R2 E' R2 F' R S"
  },
  "UG": {
    "short": "U D R' F' R:[S,R2]",
    "long": "U D R' F' R S R2 S' R F R D' U'"
  },
  "UW": {
    "short": "[u2 y2,M]",
    "long": "u2 M' u2 M'"
  },
  "US": {
    "short": "D':[S',R F R']",
    "long": "D' S' R F R' S R F' R' D"
  },
  "UV": {
    "short": "R' F:[R S' R',F2]",
    "long": "R' F R S' R' F2 R S R' F R"
  },
  "UO": {
    "short": "R' F:[E,R2]",
    "long": "R' F E R2 E' R2 F' R"
  },
  "UJ": {
    "short": "U' D:[D' R' D R,U R U' R']",
    "long": "U' R' D R U R U' R2 D' R D R U R' D'"
  },
  "UP": {
    "short": "R2 F:[E,R2]",
    "long": "R2 F E R2 E' R2 F' R2"
  },
  "UL": {
    "short": "U' D R:[E,R2]",
    "long": "U' D R E R2 E' R D' U"
  },
  "UF": {
    "short": "U R' F':[R S R',F']",
    "long": "U R' F' R S R' F' R S' R' F2 R U'"
  },
  "UR": {
    "short": "U' D R':[E',R2]",
    "long": "U' D R' E' R2 E R' D' U"
  },
  "UH": {
    "short": "U' S R' F':[R2,E']",
    "long": "U' S R' F' R2 E' R2 E F R S' U"
  },
  "UT": {
    "short": "[R D R' D',R' U' R U]",
    "long": "R D R' D' R' U' R U D R D' R' U' R' U R"
  },
  "UN": {
    "short": "F:[E,R2]",
    "long": "F E R2 E' R2 F'"
  },
  "KD": {
    "short": "U' R:[M',U' R' U]",
    "long": "U' r U' R' U M U' R U R' U"
  },
  "KE": {
    "short": "U' R F:[R2,E]",
    "long": "U' R F R2 E R2 E' F' R' U"
  },
  "KA": {
    "short": "U' R F' R:[S,R2]",
    "long": "U' R F' R S R2 S' R F R' U"
  },
  "KQ": {
    "short": "U':[S,R' F' R]",
    "long": "U' S R' F' R S' R' F R U"
  },
  "KB": {
    "short": "R:[U' R' U,M']",
    "long": "R U' R' U M' U' R U r'"
  },
  "KM": {
    "short": "R' F':[E,R U' R']",
    "long": "R' F' E R U' R' E' R U R' F R"
  },
  "KX": {
    "short": "U' R F' R':[S',R2]",
    "long": "U' R F' R' S' R2 S R' F R' U"
  },
  "KG": {
    "short": "U:[R' D' R,S']",
    "long": "U R' D' R S' R' D R S U'"
  },
  "KW": {
    "short": "D:[R F R',S']",
    "long": "D R F R' S' R F' R' S D'"
  },
  "KS": {
    "short": "D' R' F R':[S',R2]",
    "long": "D' R' F R' S' R2 S R' F' R D"
  },
  "KV": {
    "short": "U R' F' R':[S,R2]",
    "long": "U R' F' R' S R2 S' R' F R U'"
  },
  "KO": {
    "short": "U':[S',R' F' R]",
    "long": "U' S' R' F' R S R' F R U"
  },
  "KJ": {
    "short": "[U' R U,M']",
    "long": "U' R U M' U' R' U M"
  },
  "KP": {
    "short": "R' U':[S',R' F' R]",
    "long": "R' U' S' R' F' R S R' F R U R"
  },
  "KL": {
    "short": "R' F:[R U' R',E]",
    "long": "R' F R U' R' E R U R' E' F' R"
  },
  "KF": {
    "short": "U' R' E:[F',R S' R']",
    "long": "U' R' E F' R S' R' F R S R' E' R U"
  },
  "KR": {
    "short": "U' R F':[R2,E']",
    "long": "U' R F' R2 E' R2 E F R' U"
  },
  "KH": {
    "short": "U' R E' R':[R' F' R,S']",
    "long": "U' R E' R2 F' R S' R' F R S R E R' U"
  },
  "KT": {
    "short": "[U' R' U,M']",
    "long": "U' R' U M' U' R U M"
  },
  "KN": {
    "short": "R U':[S',R' F' R]",
    "long": "R U' S' R' F' R S R' F R U R'"
  },
  "XD": {
    "short": "[R' S' R2 S' R',U]",
    "long": "R' S' R2 S' R' U R S R2 S R U'"
  },
  "XE": {
    "short": "U' R F R:[S',R2]",
    "long": "U' R F R S' R2 S R F' R' U"
  },
  "XA": {
    "short": "U':[S',U2 R2]",
    "long": "U' S' U2 R2 S R2 U'"
  },
  "XQ": {
    "short": "U D:[R' F' R,S]",
    "long": "U D R' F' R S R' F R S' D' U'"
  },
  "XB": {
    "short": "S' R' F R':[S,R2]",
    "long": "S' R' F R' S R2 S' R' F' R S"
  },
  "XM": {
    "short": "R':[R' S' R,F]",
    "long": "R2 S' R F R' S R F' R"
  },
  "XU": {
    "short": "S' R' F:[R2,E]",
    "long": "S' R' F R2 E R2 E' F' R S"
  },
  "XK": {
    "short": "U' R F' R:[S',R2]",
    "long": "U' R F' R S' R2 S R F R' U"
  },
  "XW": {
    "short": "R F:[R' S R,D]",
    "long": "R F R' S R D R' S' R D' F' R'"
  },
  "XS": {
    "short": "U' R' B R':[S',R2]",
    "long": "U' R' B R' S' R2 S R' B' R U"
  },
  "XV": {
    "short": "U':[R2,S']",
    "long": "U' R2 S' R2 S U"
  },
  "XO": {
    "short": "[S',R F R']",
    "long": "S' R F R' S R F' R'"
  },
  "XJ": {
    "short": "U R S:[S,R2]",
    "long": "U R S2 R2 S' R2 S' R' U'"
  },
  "XP": {
    "short": "[R' S' R,F]",
    "long": "R' S' R F R' S R F'"
  },
  "XL": {
    "short": "U' R2 S':[R2,S R E]",
    "long": "U' R2 S' R2 S R E R2 E' R U"
  },
  "XF": {
    "short": "R' F:[F,R' S' R]",
    "long": "R' F2 R' S' R F' R' S R F' R"
  },
  "XR": {
    "short": "U' R2 S':[R2,S R' E']",
    "long": "U' R2 S' R2 S R' E' R2 E R' U"
  },
  "XH": {
    "short": "S' R' F:[E',R2]",
    "long": "S' R' F E' R2 E R2 F' R S"
  },
  "XT": {
    "short": "U R S':[R2,S']",
    "long": "U R S' R2 S' R2 S2 R' U'"
  },
  "XN": {
    "short": "R:[S',R F R']",
    "long": "R S' R F R' S R F' R2"
  },
  "GD": {
    "short": "[R S R',U]",
    "long": "R S R' U R S' R' U'"
  },
  "GE": {
    "short": "U' R':[F,R' S' R]",
    "long": "U' R' F R' S' R F' R' S R2 U"
  },
  "GA": {
    "short": "U':[R S R',U2]",
    "long": "U' R S R' U2 R S' R' U'"
  },
  "GQ": {
    "short": "U' D:[S,R' F' R]",
    "long": "U' D S R' F' R S' R' F R D' U"
  },
  "GB": {
    "short": "U:[U,R S R']",
    "long": "U2 R S R' U' R S' R' U'"
  },
  "GM": {
    "short": "R F R':[S',R2]",
    "long": "R F R' S' R2 S R' F' R'"
  },
  "GU": {
    "short": "U D R' F' R':[S,R2]",
    "long": "U D R' F' R' S R2 S' R' F R D' U'"
  },
  "GK": {
    "short": "U:[S',R' D' R]",
    "long": "U S' R' D' R S R' D R U'"
  },
  "GW": {
    "short": "U D' R B R:[S,R2]",
    "long": "U D' R B R S R2 S' R B' R' D U'"
  },
  "GS": {
    "short": "U:[S',R' D R]",
    "long": "U S' R' D R S R' D' R U'"
  },
  "GV": {
    "short": "S:[U,R S R']",
    "long": "S U R S R' U' R S' R' S'"
  },
  "GO": {
    "short": "R' F R':[S',R2]",
    "long": "R' F R' S' R2 S R' F' R"
  },
  "GJ": {
    "short": "R' S:[R U R',S]",
    "long": "R' S R U R' S R U' R' S2 R"
  },
  "GP": {
    "short": "S:[U,R S' R']",
    "long": "S U R S' R' U' R S R' S'"
  },
  "GL": {
    "short": "S' U' R:[E,R2]",
    "long": "S' U' R E R2 E' R U S"
  },
  "GF": {
    "short": "u':[E' R' S',R']",
    "long": "U' R' S' R' S R E R u"
  },
  "GR": {
    "short": "S' U' R':[E',R2]",
    "long": "S' U' R' E' R2 E R' U S"
  },
  "GH": {
    "short": "S' u' R:[E,R2]",
    "long": "S' u' R E R2 E' R u S"
  },
  "GT": {
    "short": "R S:[R' U R,S]",
    "long": "R S R' U R S R' U' R S2 R'"
  },
  "GN": {
    "short": "S:[U,R' S' R]",
    "long": "S U R' S' R U' R' S R S'"
  },
  "WD": {
    "short": "R B R':[R' F R,S]",
    "long": "R B R2 F R S R' F' R S' R B' R'"
  },
  "WE": {
    "short": "U D' R B' R':[S,R2]",
    "long": "U D' R B' R' S R2 S' R' B R' D U'"
  },
  "WA": {
    "short": "[U2,M]",
    "long": "U2 M U2 M'"
  },
  "WQ": {
    "short": "U:[R B R',S]",
    "long": "U R B R' S R B' R' S' U'"
  },
  "WB": {
    "short": "R' B:[E',R U' R']",
    "long": "R' B E' R U' R' E R U R' B' R"
  },
  "WM": {
    "short": "R U:[B,R' S R]",
    "long": "R U B R' S R B' R' S' R U' R'"
  },
  "WU": {
    "short": "[M,u2 y2]",
    "long": "M u2 M u2"
  },
  "WK": {
    "short": "D:[S',R F R']",
    "long": "D S' R F R' S R F' R' D'"
  },
  "WX": {
    "short": "R F:[D,R' S R]",
    "long": "R F D R' S R D' R' S' R F' R'"
  },
  "WG": {
    "short": "U D' R B R':[S,R2]",
    "long": "U D' R B R' S R2 S' R' B' R' D U'"
  },
  "WV": {
    "short": "R B R':[R' F R,S']",
    "long": "R B R2 F R S' R' F' R S R B' R'"
  },
  "WO": {
    "short": "U':[R' B R,S]",
    "long": "U' R' B R S R' B' R S' U"
  },
  "WJ": {
    "short": "U':[R' D' R D,U R U' R']",
    "long": "U' R' D' R D U R U' R' D' R' D R2 U R'"
  },
  "WP": {
    "short": "R' U':[R' B R,S]",
    "long": "R' U' R' B R S R' B' R S' U R"
  },
  "WL": {
    "short": "U' D' R:[E,R2]",
    "long": "U' D' R E R2 E' R D U"
  },
  "WF": {
    "short": "U' S R B:[R2,E]",
    "long": "U' S R B R2 E R2 E' B' R' S' U"
  },
  "WR": {
    "short": "U' D' R':[E',R2]",
    "long": "U' D' R' E' R2 E R' D U"
  },
  "WH": {
    "short": "U R B:[R' S R,B]",
    "long": "U R B R' S R B R' S' R B2 R' U'"
  },
  "WT": {
    "short": "R D' R':[R' U' R U,R D R' D']",
    "long": "R D' R2 U' R U R D R' D' U' R' U R D"
  },
  "WN": {
    "short": "R U':[R' B R,S]",
    "long": "R U' R' B R S R' B' R S' U R'"
  },
  "SD": {
    "short": "[M,U]+U':[U',M]",
    "long": "M U M' U M U M' U"
  },
  "SE": {
    "short": "D' R' F R':[S,R2]",
    "long": "D' R' F R' S R2 S' R' F' R D"
  },
  "SA": {
    "short": "U' R' B R':[S,R2]",
    "long": "U' R' B R' S R2 S' R' B' R U"
  },
  "SQ": {
    "short": "U':[S,R B R']",
    "long": "U' S R B R' S' R B' R' U"
  },
  "SB": {
    "short": "[M,U']+U:[U,M]",
    "long": "M U' M' U' M U' M' U'"
  },
  "SM": {
    "short": "U' R' B':[R2,E']",
    "long": "U' R' B' R2 E' R2 E B R U"
  },
  "SU": {
    "short": "D':[R F R',S']",
    "long": "D' R F R' S' R F' R' S D"
  },
  "SK": {
    "short": "D' R' F R:[S',R2]",
    "long": "D' R' F R S' R2 S R F' R D"
  },
  "SX": {
    "short": "U' R' B R:[S',R2]",
    "long": "U' R' B R S' R2 S R B' R U"
  },
  "SG": {
    "short": "U:[R' D R,S']",
    "long": "U R' D R S' R' D' R S U'"
  },
  "SV": {
    "short": "U R B R:[S,R2]",
    "long": "U R B R S R2 S' R B' R' U'"
  },
  "SO": {
    "short": "U':[S',R B R']",
    "long": "U' S' R B R' S R B' R' U"
  },
  "SJ": {
    "short": "U':[R,U' M U]",
    "long": "U' R U' M U R' U' M' U2"
  },
  "SP": {
    "short": "R' U':[S',R B R']",
    "long": "R' U' S' R B R' S R B' R' U R"
  },
  "SL": {
    "short": "U' R' B:[R2,E]",
    "long": "U' R' B R2 E R2 E' B' R U"
  },
  "SF": {
    "short": "U' R' E R:[R B R',S']",
    "long": "U' R' E R2 B R' S' R B' R' S R' E' R U"
  },
  "SR": {
    "short": "U' D':[R B2 R',S']",
    "long": "U' D' R B2 R' S' R B2 R' S D U"
  },
  "SH": {
    "short": "U' R E':[B,R' S' R]",
    "long": "U' R E' B R' S' R B' R' S R E R' U"
  },
  "ST": {
    "short": "U':[R',U' M U]",
    "long": "U' R' U' M U R U' M' U2"
  },
  "SN": {
    "short": "R U':[S',R B R']",
    "long": "R U' S' R B R' S R B' R' U R'"
  },
  "VD": {
    "short": "S R F R':[S',R2]",
    "long": "S R F R' S' R2 S R' F' R' S'"
  },
  "VE": {
    "short": "U R B' R':[S,R2]",
    "long": "U R B' R' S R2 S' R' B R' U'"
  },
  "VA": {
    "short": "U:[S,R2]",
    "long": "U S R2 S' R2 U'"
  },
  "VQ": {
    "short": "U D':[R' F' R,S]",
    "long": "U D' R' F' R S R' F R S' D U'"
  },
  "VB": {
    "short": "[R' E R2 E' R',U']",
    "long": "R' E R2 E' R' U' R E R2 E' R U"
  },
  "VM": {
    "short": "[S',R' F R]",
    "long": "S' R' F R S R' F' R"
  },
  "VU": {
    "short": "R' F':[R S' R',F2]",
    "long": "R' F' R S' R' F2 R S R' F' R"
  },
  "VK": {
    "short": "U R' F' R:[S,R2]",
    "long": "U R' F' R S R2 S' R F R U'"
  },
  "VX": {
    "short": "U':[S',R2]",
    "long": "U' S' R2 S R2 U"
  },
  "VG": {
    "short": "S:[R S R',U]",
    "long": "S R S R' U R S' R' U' S'"
  },
  "VW": {
    "short": "R B R':[S',R' F R]",
    "long": "R B R' S' R' F R S R' F' R2 B' R'"
  },
  "VS": {
    "short": "U R B R':[S,R2]",
    "long": "U R B R' S R2 S' R' B' R' U'"
  },
  "VJ": {
    "short": "U':[D' R' D R,U R U' R']",
    "long": "U' D' R' D R U R U' R2 D' R D R U R'"
  },
  "VP": {
    "short": "U' E' R:[E,R2]",
    "long": "U' E' R E R2 E' R E U"
  },
  "VL": {
    "short": "U' R:[E,R2]",
    "long": "U' R E R2 E' R U"
  },
  "VF": {
    "short": "R' F:[F,R S' R']",
    "long": "R' F2 R S' R' F' R S R' F' R"
  },
  "VR": {
    "short": "U' R':[E',R2]",
    "long": "U' R' E' R2 E R' U"
  },
  "VH": {
    "short": "u' R:[E,R2]",
    "long": "u' R E R2 E' R u"
  },
  "VT": {
    "short": "[D R D' R',R' U' R U]",
    "long": "D R D' R2 U' R U R D R' D' U' R' U R"
  },
  "VN": {
    "short": "u' R':[E',R2]",
    "long": "u' R' E' R2 E R' u"
  },
  "OD": {
    "short": "U':[U',R' E' R]",
    "long": "U2 R' E' R U R' E R U"
  },
  "OE": {
    "short": "R' F R':[S,R2]",
    "long": "R' F R' S R2 S' R' F' R"
  },
  "OA": {
    "short": "U:[R' E' R,U2]",
    "long": "U R' E' R U2 R' E R U"
  },
  "OQ": {
    "short": "U' D':[S,R' F' R]",
    "long": "U' D' S R' F' R S' R' F R D U"
  },
  "OB": {
    "short": "[R' E' R,U']",
    "long": "R' E' R U' R' E R U"
  },
  "OM": {
    "short": "U':[R B' R',S']",
    "long": "U' R B' R' S' R B R' S U"
  },
  "OU": {
    "short": "R' F:[R2,E]",
    "long": "R' F R2 E R2 E' F' R"
  },
  "OK": {
    "short": "U':[R' F' R,S']",
    "long": "U' R' F' R S' R' F R S U"
  },
  "OX": {
    "short": "[R F R',S']",
    "long": "R F R' S' R F' R' S"
  },
  "OG": {
    "short": "R' F R:[S',R2]",
    "long": "R' F R S' R2 S R F' R"
  },
  "OW": {
    "short": "U':[S,R' B R]",
    "long": "U' S R' B R S' R' B' R U"
  },
  "OS": {
    "short": "U':[R B R',S']",
    "long": "U' R B R' S' R B' R' S U"
  },
  "OJ": {
    "short": "R' u' R:[E',R2]",
    "long": "R' u' R E' R2 E R u R"
  },
  "OP": {
    "short": "R S':[R S' R',U]",
    "long": "R S' R S' R' U R S R' U' S R'"
  },
  "OL": {
    "short": "R E:[R' U' R,E]",
    "long": "R E R' U' R E R' U R E2 R'"
  },
  "OF": {
    "short": "S':[U',R' E R]",
    "long": "S' U' R' E R U R' E' R S"
  },
  "OR": {
    "short": "R' E':[R U' R',E']",
    "long": "R' E' R U' R' E' R U R' E2 R"
  },
  "OH": {
    "short": "R' F:[E',R2]",
    "long": "R' F E' R2 E R2 F' R"
  },
  "OT": {
    "short": "R U' E' R':[E,R2]",
    "long": "R U' E' R' E R2 E' R' E U R'"
  },
  "ON": {
    "short": "R' S':[R' S' R,U]",
    "long": "R' S' R' S' R U R' S R U' S R"
  },
  "JD": {
    "short": "[R' S2 R,U]",
    "long": "R' S2 R U R' S2 R U'"
  },
  "JE": {
    "short": "R S:[R' E' R,U']",
    "long": "R S R' E' R U' R' E R U S' R'"
  },
  "JA": {
    "short": "R' U:[S,R2]",
    "long": "R' U S R2 S' R2 U' R"
  },
  "JQ": {
    "short": "[M,U' R U]",
    "long": "M U' R U M' U' R' U"
  },
  "JB": {
    "short": "E':[R' E R,U']",
    "long": "E' R' E R U' R' E' R E U"
  },
  "JM": {
    "short": "R' U' E' R:[E,R2]",
    "long": "R' U' E' R E R2 E' R E U R"
  },
  "JU": {
    "short": "U' D:[U R U' R',D' R' D R]",
    "long": "D R U' R' D' R' D R2 U R' U' R' D' R U"
  },
  "JK": {
    "short": "[M',U' R U]",
    "long": "M' U' R U M U' R' U"
  },
  "JX": {
    "short": "U R S:[R2,S]",
    "long": "U R S R2 S R2 S2 R' U'"
  },
  "JG": {
    "short": "R' S:[S,R U R']",
    "long": "R' S2 R U R' S' R U' R' S' R"
  },
  "JW": {
    "short": "R U' R':[R' D' R D,R U R' U']",
    "long": "R U' R2 D' R D R U R' U' D' R' D R U"
  },
  "JS": {
    "short": "U':[U' M U,R]",
    "long": "U2 M U R U' M' U R' U"
  },
  "JV": {
    "short": "U':[U R U' R',D' R' D R]",
    "long": "R U' R' D' R' D R2 U R' U' R' D' R D U"
  },
  "JO": {
    "short": "R' u' R':[E',R2]",
    "long": "R' u' R' E' R2 E R' u R"
  },
  "JL": {
    "short": "R' U' R:[E,R2]",
    "long": "R' U' R E R2 E' R U R"
  },
  "JF": {
    "short": "[R U' R',E]",
    "long": "R U' R' E R U R' E'"
  },
  "JR": {
    "short": "R' U' R':[E',R2]",
    "long": "R' U' R' E' R2 E R' U R"
  },
  "JH": {
    "short": "R:[U',R E' R']",
    "long": "R U' R E' R' U R E R2"
  },
  "JT": {
    "short": "U R':[S,R2]",
    "long": "U R' S R2 S' R' U'"
  },
  "JN": {
    "short": "[R U' R',E']",
    "long": "R U' R' E' R U R' E"
  },
  "PD": {
    "short": "[R S' R',U]",
    "long": "R S' R' U R S R' U'"
  },
  "PE": {
    "short": "R2 F R':[S,R2]",
    "long": "R2 F R' S R2 S' R' F' R2"
  },
  "PA": {
    "short": "U':[R S' R',U2]",
    "long": "U' R S' R' U2 R S R' U'"
  },
  "PQ": {
    "short": "U:[E' R S,R']",
    "long": "u R S R' S' R' E R U'"
  },
  "PB": {
    "short": "U:[U,R S' R']",
    "long": "U2 R S' R' U' R S R' U'"
  },
  "PM": {
    "short": "S':[R S' R',U]",
    "long": "S' R S' R' U R S R' U' S"
  },
  "PU": {
    "short": "R2 F:[R2,E]",
    "long": "R2 F R2 E R2 E' F' R2"
  },
  "PK": {
    "short": "R' U':[R' F' R,S']",
    "long": "R' U' R' F' R S' R' F R S U R"
  },
  "PX": {
    "short": "[F,R' S' R]",
    "long": "F R' S' R F' R' S R"
  },
  "PG": {
    "short": "S:[R S' R',U]",
    "long": "S R S' R' U R S R' U' S'"
  },
  "PW": {
    "short": "R' U':[S,R' B R]",
    "long": "R' U' S R' B R S' R' B' R U R"
  },
  "PS": {
    "short": "R' U':[R B R',S']",
    "long": "R' U' R B R' S' R B' R' S U R"
  },
  "PV": {
    "short": "U' E' R':[E,R2]",
    "long": "U' E' R' E R2 E' R' E U"
  },
  "PO": {
    "short": "R S':[U,R S' R']",
    "long": "R S' U R S' R' U' R S R' S R'"
  },
  "PL": {
    "short": "R S U' R:[E,R2]",
    "long": "R S U' R E R2 E' R U S' R'"
  },
  "PF": {
    "short": "F R2 F:[R2,E]",
    "long": "F R2 F R2 E R2 E' F' R2 F'"
  },
  "PR": {
    "short": "R S U' R':[E',R2]",
    "long": "R S U' R' E' R2 E R' U S' R'"
  },
  "PH": {
    "short": "E' R U' R':[E,R2]",
    "long": "E' R U' R' E R2 E' R' U R' E"
  },
  "PT": {
    "short": "[E,R' U' R]",
    "long": "E R' U' R E' R' U R"
  },
  "PN": {
    "short": "R S' R':[U,R S R2 S' R]",
    "long": "R S' R' U R S R2 S' R U' R' S R"
  },
  "LD": {
    "short": "E:[R S' R',U]",
    "long": "E R S' R' U R S R' E' U'"
  },
  "LE": {
    "short": "S:[R E R2 E' R,U']",
    "long": "S R E R2 E' R U' R' E R2 E' R' U S'"
  },
  "LA": {
    "short": "U S:[R2,S' R' E]",
    "long": "U S R2 S' R' E R2 E' R U'"
  },
  "LQ": {
    "short": "U':[S,R' F2 R]",
    "long": "U' S R' F2 R S' R' F2 R U"
  },
  "LB": {
    "short": "[R E R2 E' R,U']",
    "long": "R E R2 E' R U' R' E R2 E' R' U"
  },
  "LM": {
    "short": "S U' R':[E,R2]",
    "long": "S U' R' E R2 E' R' U S'"
  },
  "LU": {
    "short": "U' D R':[E,R2]",
    "long": "U' D R' E R2 E' R' D' U"
  },
  "LK": {
    "short": "R' F:[E,R U' R']",
    "long": "R' F E R U' R' E' R U R' F' R"
  },
  "LX": {
    "short": "U' R' E:[R2,E' R' S']",
    "long": "U' R' E R2 E' R' S' R2 S R2 U"
  },
  "LG": {
    "short": "S' U' R':[E,R2]",
    "long": "S' U' R' E R2 E' R' U S"
  },
  "LW": {
    "short": "U' D' R':[E,R2]",
    "long": "U' D' R' E R2 E' R' D U"
  },
  "LS": {
    "short": "U' R' B:[E,R2]",
    "long": "U' R' B E R2 E' R2 B' R U"
  },
  "LV": {
    "short": "U' R':[E,R2]",
    "long": "U' R' E R2 E' R' U"
  },
  "LO": {
    "short": "R E:[E,R' U' R]",
    "long": "R E2 R' U' R E' R' U R E' R'"
  },
  "LJ": {
    "short": "R' U' R':[E,R2]",
    "long": "R' U' R' E R2 E' R' U R"
  },
  "LP": {
    "short": "R S U' R':[E,R2]",
    "long": "R S U' R' E R2 E' R' U S' R'"
  },
  "LR": {
    "short": "U' R':[E,R2 E' R2]",
    "long": "U' R' E R2 E' R2 E' R2 E R' U"
  },
  "LH": {
    "short": "R E':[E',R' U' R]",
    "long": "R E2 R' U' R E R' U R E R'"
  },
  "LT": {
    "short": "R U' R':[E,R2]",
    "long": "R U' R' E R2 E' R' U R'"
  },
  "LN": {
    "short": "R' S U' R':[E,R2]",
    "long": "R' S U' R' E R2 E' R' U S' R"
  },
  "FD": {
    "short": "U':[U',R' E R]",
    "long": "U2 R' E R U R' E' R U"
  },
  "FE": {
    "short": "S:[R' E R,U']",
    "long": "S R' E R U' R' E' R U S'"
  },
  "FA": {
    "short": "U:[R' E R,U2]",
    "long": "U R' E R U2 R' E' R U"
  },
  "FQ": {
    "short": "u':[R',E' R S]",
    "long": "u' R' E' R S R S' R' U"
  },
  "FB": {
    "short": "[R' E R,U']",
    "long": "R' E R U' R' E' R U"
  },
  "FM": {
    "short": "S R' F:[R S' R',F]",
    "long": "S R' F R S' R' F R S R' F2 R S'"
  },
  "FU": {
    "short": "U R' F':[F',R S R']",
    "long": "U R' F2 R S R' F R S' R' F R U'"
  },
  "FK": {
    "short": "U' R' E:[R S' R',F']",
    "long": "U' R' E R S' R' F' R S R' F E' R U"
  },
  "FX": {
    "short": "R' F:[R' S' R,F]",
    "long": "R' F R' S' R F R' S R F2 R"
  },
  "FG": {
    "short": "u':[R',E' R' S']",
    "long": "u' R' E' R' S' R S R U"
  },
  "FW": {
    "short": "U' S R B:[E,R2]",
    "long": "U' S R B E R2 E' R2 B' R' S' U"
  },
  "FS": {
    "short": "U' R' E R:[S',R B R']",
    "long": "U' R' E R S' R B R' S R B' R2 E' R U"
  },
  "FV": {
    "short": "R' F:[R S' R',F]",
    "long": "R' F R S' R' F R S R' F2 R"
  },
  "FO": {
    "short": "S':[R' E R,U']",
    "long": "S' R' E R U' R' E' R U S"
  },
  "FJ": {
    "short": "[E,R U' R']",
    "long": "E R U' R' E' R U R'"
  },
  "FP": {
    "short": "F R2 F:[E,R2]",
    "long": "F R2 F E R2 E' R2 F' R2 F'"
  },
  "FR": {
    "short": "R' E:[R U' R',E]",
    "long": "R' E R U' R' E R U R' E2 R"
  },
  "FH": {
    "short": "R' E R:[U',R' E' R2 E' R']",
    "long": "R' E R U' R' E' R2 E' R' U R E R'"
  },
  "FT": {
    "short": "R':[R' E R,U']",
    "long": "R2 E R U' R' E' R U R"
  },
  "FN": {
    "short": "E R' U' R':[E',R2]",
    "long": "E R' U' R' E' R2 E R' U R E'"
  },
  "RD": {
    "short": "E':[R' S' R,U]",
    "long": "E' R' S' R U R' S R u'"
  },
  "RE": {
    "short": "U' R F:[E',R2]",
    "long": "U' R F E' R2 E R2 F' R' U"
  },
  "RA": {
    "short": "U S:[R2,S' R E']",
    "long": "U S R2 S' R E' R2 E R' U'"
  },
  "RQ": {
    "short": "u:[E R' S,R]",
    "long": "U R' S R S' R E' R' u'"
  },
  "RB": {
    "short": "[R' E' R2 E R',U']",
    "long": "R' E' R2 E R' U' R E' R2 E R U"
  },
  "RM": {
    "short": "S U' R:[E',R2]",
    "long": "S U' R E' R2 E R U S'"
  },
  "RU": {
    "short": "U' D R:[E',R2]",
    "long": "U' D R E' R2 E R D' U"
  },
  "RK": {
    "short": "U' R F':[E',R2]",
    "long": "U' R F' E' R2 E R2 F R' U"
  },
  "RX": {
    "short": "U' R E':[R2,E R S']",
    "long": "U' R E' R2 E R S' R2 S R2 U"
  },
  "RG": {
    "short": "S' U' R:[E',R2]",
    "long": "S' U' R E' R2 E R U S"
  },
  "RW": {
    "short": "U' D' R:[E',R2]",
    "long": "U' D' R E' R2 E R D U"
  },
  "RS": {
    "short": "U' D':[S',R B2 R']",
    "long": "U' D' S' R B2 R' S R B2 R' D U"
  },
  "RV": {
    "short": "U' R:[E',R2]",
    "long": "U' R E' R2 E R U"
  },
  "RO": {
    "short": "R' E':[E',R U' R']",
    "long": "R' E2 R U' R' E R U R' E R"
  },
  "RJ": {
    "short": "R' U' R:[E',R2]",
    "long": "R' U' R E' R2 E R U R"
  },
  "RP": {
    "short": "R S U' R:[E',R2]",
    "long": "R S U' R E' R2 E R U S' R'"
  },
  "RL": {
    "short": "U' R:[E',R2 E R2]",
    "long": "U' R E' R2 E R2 E R2 E' R U"
  },
  "RF": {
    "short": "R' E:[E,R U' R']",
    "long": "R' E2 R U' R' E' R U R' E' R"
  },
  "RT": {
    "short": "R U' R:[E',R2]",
    "long": "R U' R E' R2 E R U R'"
  },
  "RN": {
    "short": "R' S U' R:[E',R2]",
    "long": "R' S U' R E' R2 E R U S' R"
  },
  "HD": {
    "short": "U':[U',R E' R']",
    "long": "U2 R E' R' U R E R' U"
  },
  "HE": {
    "short": "S:[R E' R',U']",
    "long": "S R E' R' U' R E R' U S'"
  },
  "HA": {
    "short": "U:[R E' R',U2]",
    "long": "U R E' R' U2 R E R' U"
  },
  "HQ": {
    "short": "U:[R B2 R',S]",
    "long": "U R B2 R' S R B2 R' S' U'"
  },
  "HB": {
    "short": "[R E' R',U']",
    "long": "R E' R' U' R E R' U"
  },
  "HM": {
    "short": "R F:[R2,E']",
    "long": "R F R2 E' R2 E F' R'"
  },
  "HU": {
    "short": "U' S R' F':[E',R2]",
    "long": "U' S R' F' E' R2 E R2 F R S' U"
  },
  "HK": {
    "short": "U' R E' R':[S',R' F' R]",
    "long": "U' R E' R' S' R' F' R S R' F R2 E R' U"
  },
  "HX": {
    "short": "S' R' F:[R2,E']",
    "long": "S' R' F R2 E' R2 E F' R S"
  },
  "HG": {
    "short": "S' u' R':[E,R2]",
    "long": "S' u' R' E R2 E' R' u S"
  },
  "HW": {
    "short": "U R B:[B,R' S R]",
    "long": "U R B2 R' S R B' R' S' R B' R' U'"
  },
  "HS": {
    "short": "U' R E':[R' S' R,B]",
    "long": "U' R E' R' S' R B R' S R B' E R' U"
  },
  "HV": {
    "short": "u' R':[E,R2]",
    "long": "u' R' E R2 E' R' u"
  },
  "HO": {
    "short": "R' F:[R2,E']",
    "long": "R' F R2 E' R2 E F' R"
  },
  "HJ": {
    "short": "R:[R E' R',U']",
    "long": "R2 E' R' U' R E R' U R'"
  },
  "HP": {
    "short": "E' R U' R:[E,R2]",
    "long": "E' R U' R E R2 E' R U R' E"
  },
  "HL": {
    "short": "R E':[R' U' R,E']",
    "long": "R E' R' U' R E' R' U R E2 R'"
  },
  "HF": {
    "short": "R E' R':[U',R E R2 E R]",
    "long": "R E' R' U' R E R2 E R U R' E' R"
  },
  "HT": {
    "short": "[E',R' U' R]",
    "long": "E' R' U' R E R' U R"
  },
  "HN": {
    "short": "F:[R2,E']",
    "long": "F R2 E' R2 E F'"
  },
  "TD": {
    "short": "[R S2 R',U]",
    "long": "R S2 R' U R S2 R' U'"
  },
  "TE": {
    "short": "R' S:[R' E' R,U']",
    "long": "R' S R' E' R U' R' E R U S' R"
  },
  "TA": {
    "short": "R U:[S,R2]",
    "long": "R U S R2 S' R2 U' R'"
  },
  "TQ": {
    "short": "U':[R,E R' S]",
    "long": "U' R E R' S R' S' R u"
  },
  "TB": {
    "short": "E:[R E' R',U']",
    "long": "E R E' R' U' R E R' u"
  },
  "TM": {
    "short": "R u' R':[E',R2]",
    "long": "R u' R' E' R2 E R' u R'"
  },
  "TU": {
    "short": "[R' U' R U,R D R' D']",
    "long": "R' U' R U R D R' D' U' R' U R D R D' R'"
  },
  "TK": {
    "short": "[M',U' R' U]",
    "long": "M' U' R' U M U' R U"
  },
  "TX": {
    "short": "U R S':[S',R2]",
    "long": "U R S2 R2 S R2 S R' U'"
  },
  "TG": {
    "short": "R S:[S,R' U R]",
    "long": "R S2 R' U R S' R' U' R S' R'"
  },
  "TW": {
    "short": "D':[R' U' R U,D R D' R']",
    "long": "D' R' U' R U D R D' R' U' R' U R2 D R'"
  },
  "TS": {
    "short": "U':[U' M U,R']",
    "long": "U2 M U R' U' M' U R U"
  },
  "TV": {
    "short": "[R' U' R U,D R D' R']",
    "long": "R' U' R U D R D' R' U' R' U R2 D R' D'"
  },
  "TO": {
    "short": "R U' E' R:[E,R2]",
    "long": "R U' E' R E R2 E' R E U R'"
  },
  "TJ": {
    "short": "U R:[S,R2]",
    "long": "U R S R2 S' R U'"
  },
  "TP": {
    "short": "[R' U' R,E]",
    "long": "R' U' R E R' U R E'"
  },
  "TL": {
    "short": "R U' R:[E,R2]",
    "long": "R U' R E R2 E' R U R'"
  },
  "TF": {
    "short": "R':[U',R' E R]",
    "long": "R' U' R' E R U R' E' R2"
  },
  "TR": {
    "short": "R U' R':[E',R2]",
    "long": "R U' R' E' R2 E R' U R'"
  },
  "TH": {
    "short": "[R' U' R,E']",
    "long": "R' U' R E' R' U R E"
  },
  "ND": {
    "short": "[R' S' R,U]",
    "long": "R' S' R U R' S R U'"
  },
  "NE": {
    "short": "F R':[S,R2]",
    "long": "F R' S R2 S' R' F'"
  },
  "NA": {
    "short": "U':[R' S' R,U2]",
    "long": "U' R' S' R U2 R' S R U'"
  },
  "NQ": {
    "short": "[U R' U',M']",
    "long": "U R' U' M' U R U' M"
  },
  "NB": {
    "short": "U:[U,R' S' R]",
    "long": "U2 R' S' R U' R' S R U'"
  },
  "NM": {
    "short": "S':[R' S' R,U]",
    "long": "S' R' S' R U R' S R U' S"
  },
  "NU": {
    "short": "F:[R2,E]",
    "long": "F R2 E R2 E' F'"
  },
  "NK": {
    "short": "R U':[R' F' R,S']",
    "long": "R U' R' F' R S' R' F R S U R'"
  },
  "NX": {
    "short": "R:[R F R',S']",
    "long": "R2 F R' S' R F' R' S R'"
  },
  "NG": {
    "short": "S:[R' S' R,U]",
    "long": "S R' S' R U R' S R U' S'"
  },
  "NW": {
    "short": "R U':[S,R' B R]",
    "long": "R U' S R' B R S' R' B' R U R'"
  },
  "NS": {
    "short": "R U':[R B R',S']",
    "long": "R U' R B R' S' R B' R' S U R'"
  },
  "NV": {
    "short": "u' R:[E',R2]",
    "long": "u' R E' R2 E R u"
  },
  "NO": {
    "short": "R' S':[U,R' S' R]",
    "long": "R' S' U R' S' R U' R' S R S R"
  },
  "NJ": {
    "short": "[E',R U' R']",
    "long": "E' R U' R' E R U R'"
  },
  "NP": {
    "short": "R' S' R:[U,R' S R2 S' R']",
    "long": "R' S' R U R' S R2 S' R' U' R S R'"
  },
  "NL": {
    "short": "R' S U' R:[E,R2]",
    "long": "R' S U' R E R2 E' R U S' R"
  },
  "NF": {
    "short": "E R' U' R:[E',R2]",
    "long": "E R' U' R E' R2 E R U R E'"
  },
  "NR": {
    "short": "R' S U' R':[E',R2]",
    "long": "R' S U' R' E' R2 E R' U S' R"
  },
  "NH": {
    "short": "F:[E',R2]",
    "long": "F E' R2 E R2 F'"
  }
};
