export const SPEFFZ_LETTERS: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X"];

export const HINDI_LETTERS: string[] = ["आ","ई","ऊ","ऐ","क","ख","ग","घ","च","छ","ज","झ","त","द","ध","न","प","फ","ब","म","य","र","ल","व"];

export const SPEFFZ_TO_HINDI: Record<string, string> = {
  "A": "आ",
  "B": "ई",
  "C": "ऊ",
  "D": "ऐ",
  "E": "क",
  "F": "ख",
  "G": "ग",
  "H": "घ",
  "I": "च",
  "J": "छ",
  "K": "ज",
  "L": "झ",
  "M": "त",
  "N": "द",
  "O": "ध",
  "P": "न",
  "Q": "प",
  "R": "फ",
  "S": "ब",
  "T": "म",
  "U": "य",
  "V": "र",
  "W": "ल",
  "X": "व"
};

export const HINDI_TO_SPEFFZ: Record<string, string> = {
  "आ": "A",
  "ई": "B",
  "ऊ": "C",
  "ऐ": "D",
  "क": "E",
  "ख": "F",
  "ग": "G",
  "घ": "H",
  "च": "I",
  "छ": "J",
  "ज": "K",
  "झ": "L",
  "त": "M",
  "द": "N",
  "ध": "O",
  "न": "P",
  "प": "Q",
  "फ": "R",
  "ब": "S",
  "म": "T",
  "य": "U",
  "र": "V",
  "ल": "W",
  "व": "X"
};

export const HINDI_PAIRS_DATA: Record<string, [string, string]> = {
  "आआ": [
    "आया",
    "nanny"
  ],
  "आई": [
    "आईना",
    "mirror"
  ],
  "आऐ": [
    "आइसक्रीम",
    "ice cream"
  ],
  "आऊ": [
    "आऊट",
    "out (umpire's finger)"
  ],
  "आक": [
    "आकाश",
    "sky"
  ],
  "आख": [
    "आँख",
    "eye"
  ],
  "आघ": [
    "आघात",
    "a hard blow"
  ],
  "आग": [
    "आग",
    "fire"
  ],
  "आच": [
    "आचार",
    "pickle"
  ],
  "आछ": [
    "आछी",
    "achoo sneeze"
  ],
  "आझ": [
    "आ झूला",
    "come, swing!"
  ],
  "आज": [
    "आज",
    "today (calendar)"
  ],
  "आत": [
    "आतिशबाज़ी",
    "fireworks"
  ],
  "आद": [
    "आदमी",
    "man"
  ],
  "आन": [
    "आनंद",
    "bliss"
  ],
  "आध": [
    "आधा",
    "half"
  ],
  "आप": [
    "आपा",
    "elder sister"
  ],
  "आफ": [
    "आफ़ताब",
    "sun"
  ],
  "आम": [
    "आम",
    "mango"
  ],
  "आब": [
    "आबू",
    "Mount Abu"
  ],
  "आय": [
    "आयात",
    "import ship"
  ],
  "आर": [
    "आरती",
    "aarti lamp"
  ],
  "आव": [
    "आवाज़",
    "voice"
  ],
  "आल": [
    "आलू",
    "potato"
  ],
  "ईआ": [
    "ईयररिंग",
    "earring"
  ],
  "ईई": [
    "ईईई!",
    "screaming at a cockroach"
  ],
  "ईऐ": [
    "ईएमआई",
    "EMI bill"
  ],
  "ईऊ": [
    "ईयू झंडा",
    "EU flag"
  ],
  "ईक": [
    "ईकोबैग",
    "eco bag"
  ],
  "ईख": [
    "ईख",
    "sugarcane"
  ],
  "ईघ": [
    "ई-घड़ी",
    "smartwatch"
  ],
  "ईग": [
    "ईगल",
    "eagle"
  ],
  "ईच": [
    "ईचिंग",
    "itchy scratch"
  ],
  "ईछ": [
    "ई-छाता",
    "smart umbrella"
  ],
  "ईझ": [
    "ई-झाड़ू",
    "robot vacuum"
  ],
  "ईज": [
    "ईजल",
    "painting easel"
  ],
  "ईत": [
    "ई-तराजू",
    "digital scale"
  ],
  "ईद": [
    "ईद",
    "Eid moon"
  ],
  "ईन": [
    "ईनाम",
    "prize trophy"
  ],
  "ईध": [
    "ईंधन",
    "fuel"
  ],
  "ईप": [
    "ई-पेन",
    "digital pen"
  ],
  "ईफ": [
    "ईफ़ल टावर",
    "Eiffel Tower"
  ],
  "ईम": [
    "ईमेल",
    "email envelope"
  ],
  "ईब": [
    "ईबे",
    "eBay parcel"
  ],
  "ईय": [
    "ईयोर",
    "Eeyore donkey"
  ],
  "ईर": [
    "ईरान",
    "Persian carpet"
  ],
  "ईव": [
    "ईवनिंग",
    "evening sunset"
  ],
  "ईल": [
    "ईलाज",
    "doctor treating"
  ],
  "ऐआ": [
    "ऐ आम",
    "hey, mango!"
  ],
  "ऐई": [
    "ऐ ईंट",
    "hey, brick!"
  ],
  "ऐऐ": [
    "ऐऐ!",
    "shocked face"
  ],
  "ऐऊ": [
    "ऐ ऊँट",
    "hey, camel!"
  ],
  "ऐक": [
    "ऐक्टर",
    "actor"
  ],
  "ऐख": [
    "ऐ खरगोश",
    "hey, rabbit!"
  ],
  "ऐघ": [
    "ऐ घोड़ा",
    "hey, horse!"
  ],
  "ऐग": [
    "ऐ गाय",
    "hey, cow!"
  ],
  "ऐच": [
    "ऐ चाँद",
    "hey, moon!"
  ],
  "ऐछ": [
    "ऐ छाता",
    "hey, umbrella!"
  ],
  "ऐझ": [
    "ऐ झंडा",
    "hey, flag!"
  ],
  "ऐज": [
    "ऐजेंट",
    "secret agent"
  ],
  "ऐत": [
    "ऐतिहासिक किला",
    "historic fort"
  ],
  "ऐद": [
    "ऐ दीया",
    "hey, lamp!"
  ],
  "ऐन": [
    "ऐनक",
    "spectacles"
  ],
  "ऐध": [
    "ऐ धनुष",
    "hey, bow!"
  ],
  "ऐप": [
    "ऐप",
    "mobile app"
  ],
  "ऐफ": [
    "ऐ फूल",
    "hey, flower!"
  ],
  "ऐम": [
    "ऐम्बुलेंस",
    "ambulance"
  ],
  "ऐब": [
    "ऐब",
    "crack/flaw"
  ],
  "ऐय": [
    "ऐयार",
    "cunning spy"
  ],
  "ऐर": [
    "ऐरावत",
    "Airavata elephant"
  ],
  "ऐव": [
    "ऐवरेस्ट",
    "Mount Everest"
  ],
  "ऐल": [
    "ऐलान",
    "megaphone announcement"
  ],
  "ऊआ": [
    "ऊआ ऊआ",
    "baby crying"
  ],
  "ऊई": [
    "ऊई माँ!",
    "ouch!"
  ],
  "ऊऐ": [
    "ऊँट-ऐनक",
    "camel with spectacles"
  ],
  "ऊऊ": [
    "ऊऊऊ",
    "ghost \"ooo\""
  ],
  "ऊक": [
    "ऊकड़ू",
    "squatting"
  ],
  "ऊख": [
    "ऊखल",
    "mortar"
  ],
  "ऊघ": [
    "ऊँघना",
    "dozing off"
  ],
  "ऊग": [
    "ऊगना",
    "sprouting"
  ],
  "ऊच": [
    "ऊँचा",
    "tall tower"
  ],
  "ऊछ": [
    "ऊछल-कूद",
    "jumping about"
  ],
  "ऊझ": [
    "ऊ-झील",
    "oo, a lake!"
  ],
  "ऊज": [
    "ऊजड़",
    "desolate land"
  ],
  "ऊत": [
    "ऊतक",
    "cells under microscope"
  ],
  "ऊद": [
    "ऊदबिलाव",
    "otter"
  ],
  "ऊन": [
    "ऊन",
    "wool"
  ],
  "ऊध": [
    "ऊधम",
    "mischief"
  ],
  "ऊप": [
    "ऊपर",
    "up arrow"
  ],
  "ऊफ": [
    "ऊफ़!",
    "sweating in heat"
  ],
  "ऊम": [
    "ऊमस",
    "humid sticky air"
  ],
  "ऊब": [
    "ऊबड़-खाबड़",
    "bumpy road"
  ],
  "ऊय": [
    "ऊ-याक",
    "oo, a yak!"
  ],
  "ऊर": [
    "ऊर्जा",
    "energy bulb"
  ],
  "ऊव": [
    "ऊ वाह!",
    "oo, wow!"
  ],
  "ऊल": [
    "ऊलजलूल",
    "silly nonsense"
  ],
  "कआ": [
    "कौआ",
    "crow"
  ],
  "कई": [
    "कई चींटियाँ",
    "many ants"
  ],
  "कऐ": [
    "कैमरा",
    "camera"
  ],
  "कऊ": [
    "काऊबॉय",
    "cowboy"
  ],
  "कक": [
    "ककड़ी",
    "cucumber"
  ],
  "कख": [
    "काख",
    "armpit"
  ],
  "कघ": [
    "कंघी",
    "comb"
  ],
  "कग": [
    "कागज़",
    "paper"
  ],
  "कच": [
    "कचौड़ी",
    "kachori"
  ],
  "कछ": [
    "कछुआ",
    "tortoise"
  ],
  "कझ": [
    "क-झूला",
    "k-swing"
  ],
  "कज": [
    "कजरा",
    "kohl eyeliner"
  ],
  "कत": [
    "कतार",
    "queue"
  ],
  "कद": [
    "कद्दू",
    "pumpkin"
  ],
  "कन": [
    "कनस्तर",
    "tin can"
  ],
  "कध": [
    "कंधा",
    "shoulder"
  ],
  "कप": [
    "कप",
    "cup"
  ],
  "कफ": [
    "कफ़",
    "shirt cuff"
  ],
  "कम": [
    "कमल",
    "lotus"
  ],
  "कब": [
    "कबूतर",
    "pigeon"
  ],
  "कय": [
    "कयाक",
    "kayak boat"
  ],
  "कर": [
    "करेला",
    "bitter gourd"
  ],
  "कव": [
    "कवि",
    "poet"
  ],
  "कल": [
    "कलम",
    "pen"
  ],
  "खआ": [
    "खाना",
    "food"
  ],
  "खई": [
    "खीर",
    "kheer"
  ],
  "खऐ": [
    "खैबर दर्रा",
    "Khyber Pass"
  ],
  "खऊ": [
    "खाऊ",
    "glutton"
  ],
  "खक": [
    "खाकी",
    "khaki uniform"
  ],
  "खख": [
    "खखरा",
    "khakhra snack"
  ],
  "खघ": [
    "खाली घंटा",
    "empty bell"
  ],
  "खग": [
    "खग",
    "bird"
  ],
  "खच": [
    "खच्चर",
    "mule"
  ],
  "खछ": [
    "खुली छत",
    "open roof"
  ],
  "खझ": [
    "खुला झरोखा",
    "open window"
  ],
  "खज": [
    "खजूर",
    "dates"
  ],
  "खत": [
    "खत",
    "letter"
  ],
  "खद": [
    "खदान",
    "mine"
  ],
  "खन": [
    "खन-खन",
    "bangles jingling"
  ],
  "खध": [
    "खिंचा धनुष",
    "drawn bow"
  ],
  "खप": [
    "खपरैल",
    "clay roof tiles"
  ],
  "खफ": [
    "खफ़ा",
    "angry face"
  ],
  "खम": [
    "खम्भा",
    "pillar"
  ],
  "खब": [
    "खबर",
    "newspaper"
  ],
  "खय": [
    "खयाल",
    "thought bubble"
  ],
  "खर": [
    "खरगोश",
    "rabbit"
  ],
  "खव": [
    "खुला वन",
    "open forest"
  ],
  "खल": [
    "खलिहान",
    "barn yard"
  ],
  "घआ": [
    "घायल",
    "wounded"
  ],
  "घई": [
    "घी",
    "ghee"
  ],
  "घऐ": [
    "घैला",
    "earthen pot"
  ],
  "घऊ": [
    "घूँघट",
    "veil"
  ],
  "घक": [
    "घुमक्कड़",
    "wanderer"
  ],
  "घख": [
    "घर की खाट",
    "cot"
  ],
  "घघ": [
    "घाघरा",
    "ghagra skirt"
  ],
  "घग": [
    "घग्घर नदी",
    "Ghaggar river"
  ],
  "घच": [
    "घचर-पचर",
    "squelchy mud"
  ],
  "घछ": [
    "घर की छत",
    "house roof"
  ],
  "घझ": [
    "घंटा-झंकार",
    "bell jingle"
  ],
  "घज": [
    "घाट-जहाज़",
    "ship at ghat"
  ],
  "घत": [
    "घात",
    "lurking tiger"
  ],
  "घद": [
    "घंटा-दीया",
    "temple bell & lamp"
  ],
  "घन": [
    "घन",
    "heavy hammer"
  ],
  "घध": [
    "घंटा-धूप",
    "bell & incense"
  ],
  "घप": [
    "घपला",
    "scam"
  ],
  "घफ": [
    "ग़ाफ़िल",
    "sleepy careless"
  ],
  "घम": [
    "घमंड",
    "arrogance"
  ],
  "घब": [
    "घबराहट",
    "panic"
  ],
  "घय": [
    "घाट-यात्री",
    "ghat pilgrim"
  ],
  "घर": [
    "घर",
    "house"
  ],
  "घव": [
    "घाव",
    "wound"
  ],
  "घल": [
    "घालमेल",
    "mix-up"
  ],
  "गआ": [
    "गया",
    "Gaya temple"
  ],
  "गई": [
    "गीता",
    "Gita"
  ],
  "गऐ": [
    "गैस",
    "gas stove"
  ],
  "गऊ": [
    "गऊ",
    "holy cow"
  ],
  "गक": [
    "गाकर",
    "singing"
  ],
  "गख": [
    "गरम खीर",
    "hot kheer"
  ],
  "गघ": [
    "गंगा-घाट",
    "Ganga ghat"
  ],
  "गग": [
    "गगन",
    "sky"
  ],
  "गच": [
    "गच्चा",
    "fooled (banana peel)"
  ],
  "गछ": [
    "गोल छाता",
    "round umbrella"
  ],
  "गझ": [
    "गरम झरना",
    "hot spring"
  ],
  "गज": [
    "गजरा",
    "flower garland"
  ],
  "गत": [
    "गति",
    "speedometer"
  ],
  "गद": [
    "गदा",
    "mace"
  ],
  "गन": [
    "गुनगुन",
    "humming bee"
  ],
  "गध": [
    "गधा",
    "donkey"
  ],
  "गप": [
    "गपशप",
    "chit-chat"
  ],
  "गफ": [
    "गफ़लत",
    "blunder"
  ],
  "गम": [
    "गमला",
    "flower pot"
  ],
  "गब": [
    "गबरू",
    "handsome youth"
  ],
  "गय": [
    "गयंद",
    "elephant"
  ],
  "गर": [
    "गरुड़",
    "Garuda"
  ],
  "गव": [
    "गवैया",
    "singer"
  ],
  "गल": [
    "गलीचा",
    "carpet"
  ],
  "चआ": [
    "चाय",
    "tea"
  ],
  "चई": [
    "चींटी",
    "ant"
  ],
  "चऐ": [
    "चैन",
    "necklace chain"
  ],
  "चऊ": [
    "चाऊमीन",
    "chow mein"
  ],
  "चक": [
    "चकला",
    "rolling board"
  ],
  "चख": [
    "चखना",
    "tasting snacks"
  ],
  "चघ": [
    "चाबी-घर",
    "key house"
  ],
  "चग": [
    "चुग्गा",
    "bird feed"
  ],
  "चच": [
    "चचेरा",
    "cousin"
  ],
  "चछ": [
    "चक्षु",
    "eye"
  ],
  "चझ": [
    "चट-झट",
    "instantly"
  ],
  "चज": [
    "चाँद-जोड़ा",
    "moon couple"
  ],
  "चत": [
    "चतुर",
    "clever fox"
  ],
  "चद": [
    "चदरिया",
    "bedsheet"
  ],
  "चन": [
    "चना",
    "chickpea"
  ],
  "चध": [
    "चारधाम",
    "Char Dham"
  ],
  "चप": [
    "चप्पल",
    "slipper"
  ],
  "चफ": [
    "चाफ",
    "husk chaff"
  ],
  "चम": [
    "चम्मच",
    "spoon"
  ],
  "चब": [
    "चबूतरा",
    "platform"
  ],
  "चय": [
    "चयन",
    "picking a card"
  ],
  "चर": [
    "चरखा",
    "spinning wheel"
  ],
  "चव": [
    "चवन्नी",
    "old coin"
  ],
  "चल": [
    "चलनी",
    "sieve"
  ],
  "छआ": [
    "छुआ",
    "touch"
  ],
  "छई": [
    "छींक",
    "sneeze"
  ],
  "छऐ": [
    "छैला",
    "dandy"
  ],
  "छऊ": [
    "छऊ नृत्य",
    "Chhau dance"
  ],
  "छक": [
    "छकड़ा",
    "bullock cart"
  ],
  "छख": [
    "छत की खिड़की",
    "roof window"
  ],
  "छघ": [
    "छाँव-घर",
    "shade house"
  ],
  "छग": [
    "छगन",
    "a boy named Chhagan"
  ],
  "छच": [
    "छाछ-चम्मच",
    "buttermilk spoon"
  ],
  "छछ": [
    "छछूंदर",
    "shrew"
  ],
  "छझ": [
    "छन-झन",
    "tinkling"
  ],
  "छज": [
    "छज्जा",
    "balcony"
  ],
  "छत": [
    "छतरी",
    "umbrella"
  ],
  "छद": [
    "छद्म वेश",
    "disguise"
  ],
  "छन": [
    "छन्नी",
    "strainer"
  ],
  "छध": [
    "छाछ-धार",
    "buttermilk stream"
  ],
  "छप": [
    "छप्पर",
    "thatched roof"
  ],
  "छफ": [
    "छाप-फूल",
    "flower print"
  ],
  "छम": [
    "छम-छम",
    "anklets"
  ],
  "छब": [
    "छबीला",
    "stylish"
  ],
  "छय": [
    "छाया",
    "shadow"
  ],
  "छर": [
    "छरहरा",
    "slim"
  ],
  "छव": [
    "छवि",
    "picture frame"
  ],
  "छल": [
    "छलांग",
    "leap"
  ],
  "झआ": [
    "झउआ",
    "basket"
  ],
  "झई": [
    "झीनी चुनरी",
    "sheer scarf"
  ],
  "झऐ": [
    "झट-ऐलान",
    "sudden announcement"
  ],
  "झऊ": [
    "झाऊ",
    "pine tree"
  ],
  "झक": [
    "झकास",
    "cool dude"
  ],
  "झख": [
    "झख",
    "fish"
  ],
  "झघ": [
    "झूला-घर",
    "swing house"
  ],
  "झग": [
    "झगड़ा",
    "fight"
  ],
  "झच": [
    "झूला-चक्र",
    "Ferris wheel"
  ],
  "झछ": [
    "झाड़-छाँव",
    "tree shade"
  ],
  "झझ": [
    "झाँझ",
    "cymbals"
  ],
  "झज": [
    "झज्जर",
    "Jhajjar"
  ],
  "झत": [
    "झील-तारा",
    "star on lake"
  ],
  "झद": [
    "झील-दीया",
    "floating lamp"
  ],
  "झन": [
    "झनकार",
    "jingle"
  ],
  "झध": [
    "झील-धुंध",
    "lake mist"
  ],
  "झप": [
    "झपकी",
    "nap"
  ],
  "झफ": [
    "झील-फूल",
    "lake flower"
  ],
  "झम": [
    "झमाझम",
    "pouring rain"
  ],
  "झब": [
    "झबला",
    "baby frock"
  ],
  "झय": [
    "झील-यात्रा",
    "boat ride"
  ],
  "झर": [
    "झरना",
    "waterfall"
  ],
  "झव": [
    "झूला-वाला",
    "swing seller"
  ],
  "झल": [
    "झलक",
    "glimpse"
  ],
  "जआ": [
    "जुआ",
    "gambling dice"
  ],
  "जई": [
    "जई",
    "oats"
  ],
  "जऐ": [
    "जैकेट",
    "jacket"
  ],
  "जऊ": [
    "जौ",
    "barley"
  ],
  "जक": [
    "जकड़ी रस्सी",
    "knotted rope"
  ],
  "जख": [
    "जखीरा",
    "stockpile"
  ],
  "जघ": [
    "जंघा",
    "thigh"
  ],
  "जग": [
    "जग",
    "water jug"
  ],
  "जच": [
    "जच्चा",
    "new mother"
  ],
  "जछ": [
    "जल-छींटा",
    "water splash"
  ],
  "जझ": [
    "जल-झारी",
    "water pitcher"
  ],
  "जज": [
    "जज",
    "judge"
  ],
  "जत": [
    "जतन",
    "guarding treasure"
  ],
  "जद": [
    "जद्दोजहद",
    "struggle"
  ],
  "जन": [
    "जनेऊ",
    "sacred thread"
  ],
  "जध": [
    "जल-धारा",
    "water stream"
  ],
  "जप": [
    "जप",
    "chanting beads"
  ],
  "जफ": [
    "जफ़ा",
    "broken heart"
  ],
  "जम": [
    "जामुन",
    "jamun"
  ],
  "जब": [
    "जबड़ा",
    "jaw"
  ],
  "जय": [
    "जयमाला",
    "garland"
  ],
  "जर": [
    "जरी",
    "zari embroidery"
  ],
  "जव": [
    "जवान",
    "young soldier"
  ],
  "जल": [
    "जलेबी",
    "jalebi"
  ],
  "तआ": [
    "ताज",
    "Taj Mahal"
  ],
  "तई": [
    "तीर",
    "arrow"
  ],
  "तऐ": [
    "तैरना",
    "swimming"
  ],
  "तऊ": [
    "ताऊ",
    "uncle"
  ],
  "तक": [
    "तकिया",
    "pillow"
  ],
  "तख": [
    "तख़्त",
    "throne"
  ],
  "तघ": [
    "तेज़ घड़ी",
    "fast watch"
  ],
  "तग": [
    "तगड़ा",
    "strong man"
  ],
  "तच": [
    "तेज़ चाकू",
    "sharp knife"
  ],
  "तछ": [
    "तीन छाते",
    "three umbrellas"
  ],
  "तझ": [
    "तीन झंडे",
    "three flags"
  ],
  "तज": [
    "तज",
    "cinnamon bark"
  ],
  "तत": [
    "ततैया",
    "wasp"
  ],
  "तद": [
    "तंदूर",
    "tandoor"
  ],
  "तन": [
    "तन",
    "body"
  ],
  "तध": [
    "तेज़ धार",
    "sharp edge"
  ],
  "तप": [
    "तपस्वी",
    "ascetic"
  ],
  "तफ": [
    "तफ़री",
    "outing"
  ],
  "तम": [
    "तमाशा",
    "street show"
  ],
  "तब": [
    "तबला",
    "tabla"
  ],
  "तय": [
    "तैयार",
    "packed bag ready"
  ],
  "तर": [
    "तरबूज़",
    "watermelon"
  ],
  "तव": [
    "तवा",
    "griddle"
  ],
  "तल": [
    "तलवार",
    "sword"
  ],
  "दआ": [
    "दादी",
    "grandma"
  ],
  "दई": [
    "दीपक",
    "lamp"
  ],
  "दऐ": [
    "दैत्य",
    "demon"
  ],
  "दऊ": [
    "दाऊ",
    "big brother"
  ],
  "दक": [
    "दुकान",
    "shop"
  ],
  "दख": [
    "दक्खिन",
    "south compass"
  ],
  "दघ": [
    "दरवाज़े की घंटी",
    "doorbell"
  ],
  "दग": [
    "दग़ाबाज़",
    "cheat"
  ],
  "दच": [
    "दरी-चटाई",
    "rug & mat"
  ],
  "दछ": [
    "दक्ष",
    "expert archer"
  ],
  "दझ": [
    "दीया-झालर",
    "lamp with fringe"
  ],
  "दज": [
    "दर्ज़ी",
    "tailor"
  ],
  "दत": [
    "दतुन",
    "neem twig"
  ],
  "दद": [
    "दद्दू",
    "grandpa"
  ],
  "दन": [
    "दनादन",
    "rapid-fire"
  ],
  "दध": [
    "दधि",
    "curd"
  ],
  "दप": [
    "दप-दप",
    "glowing face"
  ],
  "दफ": [
    "दफ़्तर",
    "office"
  ],
  "दम": [
    "दमड़ी",
    "coin"
  ],
  "दब": [
    "दबंग",
    "bully"
  ],
  "दय": [
    "दयार",
    "deodar tree"
  ],
  "दर": [
    "दरवाज़ा",
    "door"
  ],
  "दव": [
    "दवा",
    "medicine"
  ],
  "दल": [
    "दलदल",
    "swamp"
  ],
  "नआ": [
    "नाई",
    "barber"
  ],
  "नई": [
    "नीम",
    "neem tree"
  ],
  "नऐ": [
    "नैया",
    "boat"
  ],
  "नऊ": [
    "नूर",
    "radiance"
  ],
  "नक": [
    "नकल",
    "copying"
  ],
  "नख": [
    "नखरा",
    "attitude"
  ],
  "नघ": [
    "नग-घर",
    "jewel house"
  ],
  "नग": [
    "नगीना",
    "gem"
  ],
  "नच": [
    "नचिकेता",
    "Nachiketa"
  ],
  "नछ": [
    "नक्षत्र",
    "constellation"
  ],
  "नझ": [
    "नीला झंडा",
    "blue flag"
  ],
  "नज": [
    "नज़र",
    "evil eye"
  ],
  "नत": [
    "नतीजा",
    "result card"
  ],
  "नद": [
    "नदी",
    "river"
  ],
  "नन": [
    "ननद",
    "sister-in-law"
  ],
  "नध": [
    "नाधना",
    "yoked ox"
  ],
  "नप": [
    "नाप",
    "measuring tape"
  ],
  "नफ": [
    "नफ़ीरी",
    "horn"
  ],
  "नम": [
    "नमक",
    "salt"
  ],
  "नब": [
    "नबाब",
    "nawab"
  ],
  "नय": [
    "नया",
    "brand new"
  ],
  "नर": [
    "नर्तक",
    "dancer"
  ],
  "नव": [
    "नवरात्रि",
    "dandiya"
  ],
  "नल": [
    "नल",
    "tap"
  ],
  "धआ": [
    "धान",
    "paddy"
  ],
  "धई": [
    "धीमा",
    "slow snail"
  ],
  "धऐ": [
    "धैर्य",
    "patient monk"
  ],
  "धऊ": [
    "धूप",
    "sunshine"
  ],
  "धक": [
    "धक्का",
    "push"
  ],
  "धख": [
    "धुंध-खिड़की",
    "foggy window"
  ],
  "धघ": [
    "धन-घड़ा",
    "pot of money"
  ],
  "धग": [
    "धागा",
    "thread"
  ],
  "धच": [
    "धचका",
    "jolt"
  ],
  "धछ": [
    "धूप-छाँव",
    "sun & shade"
  ],
  "धझ": [
    "धुंध-झील",
    "misty lake"
  ],
  "धज": [
    "धज",
    "stylish attire"
  ],
  "धत": [
    "धतूरा",
    "datura"
  ],
  "धद": [
    "धूपदान",
    "incense holder"
  ],
  "धन": [
    "धन",
    "money"
  ],
  "धध": [
    "धधकना",
    "blazing"
  ],
  "धप": [
    "धप्पा",
    "tag game"
  ],
  "धफ": [
    "धरती-फूल",
    "earth flower"
  ],
  "धम": [
    "धमाका",
    "loud bang"
  ],
  "धब": [
    "धब्बा",
    "stain"
  ],
  "धय": [
    "ध्यान",
    "meditation"
  ],
  "धर": [
    "धरती",
    "earth"
  ],
  "धव": [
    "धवल",
    "white swan"
  ],
  "धल": [
    "धूल",
    "dust"
  ],
  "पआ": [
    "पानी",
    "water"
  ],
  "पई": [
    "पीपल",
    "peepal tree"
  ],
  "पऐ": [
    "पैर",
    "foot"
  ],
  "पऊ": [
    "पूजा",
    "puja"
  ],
  "पक": [
    "पकौड़ा",
    "pakora"
  ],
  "पख": [
    "पखेरू",
    "birds"
  ],
  "पघ": [
    "पिघला",
    "melting candle"
  ],
  "पग": [
    "पगड़ी",
    "turban"
  ],
  "पच": [
    "पचरंगी",
    "five-coloured"
  ],
  "पछ": [
    "पछुआ",
    "west wind"
  ],
  "पझ": [
    "पीला झंडा",
    "yellow flag"
  ],
  "पज": [
    "पजामा",
    "pyjamas"
  ],
  "पत": [
    "पतंग",
    "kite"
  ],
  "पद": [
    "पदक",
    "medal"
  ],
  "पन": [
    "पनीर",
    "paneer"
  ],
  "पध": [
    "पधारो",
    "welcome"
  ],
  "पप": [
    "पपीता",
    "papaya"
  ],
  "पफ": [
    "पफ़",
    "puff pastry"
  ],
  "पम": [
    "पम्प",
    "hand pump"
  ],
  "पब": [
    "पाबंदी",
    "ban sign"
  ],
  "पय": [
    "प्याज़",
    "onion"
  ],
  "पर": [
    "परदा",
    "curtain"
  ],
  "पव": [
    "पवन",
    "wind"
  ],
  "पल": [
    "पलंग",
    "bed"
  ],
  "फआ": [
    "फाटक",
    "gate"
  ],
  "फई": [
    "फीता",
    "ribbon"
  ],
  "फऐ": [
    "फैन",
    "fan"
  ],
  "फऊ": [
    "फूल",
    "flower"
  ],
  "फक": [
    "फकीर",
    "wandering sage"
  ],
  "फख": [
    "फख़्र",
    "proud chest"
  ],
  "फघ": [
    "फल-घर",
    "fruit shop"
  ],
  "फग": [
    "फगुआ",
    "Holi"
  ],
  "फच": [
    "फचाक",
    "splash"
  ],
  "फछ": [
    "फूल-छड़ी",
    "sparkler"
  ],
  "फझ": [
    "फूल-झड़ी",
    "flower shower"
  ],
  "फज": [
    "फजीहत",
    "red-faced embarrassment"
  ],
  "फत": [
    "फतेह",
    "victory flag"
  ],
  "फद": [
    "फुदकना",
    "hopping"
  ],
  "फन": [
    "फन",
    "cobra hood"
  ],
  "फध": [
    "फल की धारा",
    "juice stream"
  ],
  "फप": [
    "फूल-पत्ता",
    "leaf"
  ],
  "फफ": [
    "फफूँद",
    "mold"
  ],
  "फम": [
    "फूलमाला",
    "flower garland"
  ],
  "फब": [
    "फबती",
    "well-fitting"
  ],
  "फय": [
    "फ़ायदा",
    "profit"
  ],
  "फर": [
    "फर्श",
    "floor"
  ],
  "फव": [
    "फव्वारा",
    "fountain"
  ],
  "फल": [
    "फल",
    "fruit"
  ],
  "मआ": [
    "माँ",
    "mother"
  ],
  "मई": [
    "मीठा",
    "sweet"
  ],
  "मऐ": [
    "मैना",
    "myna bird"
  ],
  "मऊ": [
    "मूँछ",
    "moustache"
  ],
  "मक": [
    "मक्खी",
    "fly"
  ],
  "मख": [
    "मखमल",
    "velvet"
  ],
  "मघ": [
    "मघई पान",
    "paan"
  ],
  "मग": [
    "मगरमच्छ",
    "crocodile"
  ],
  "मच": [
    "मचान",
    "watch platform"
  ],
  "मछ": [
    "मछली",
    "fish"
  ],
  "मझ": [
    "मझधार",
    "mid-river"
  ],
  "मज": [
    "मजदूर",
    "labourer"
  ],
  "मत": [
    "मतदान",
    "voting"
  ],
  "मद": [
    "मदारी",
    "monkey showman"
  ],
  "मन": [
    "मनका",
    "bead"
  ],
  "मध": [
    "मधु",
    "honey"
  ],
  "मप": [
    "मोरपंख",
    "peacock feather"
  ],
  "मफ": [
    "मफ़लर",
    "muffler"
  ],
  "मम": [
    "ममी",
    "Egyptian mummy"
  ],
  "मब": [
    "मुबारक",
    "congratulations"
  ],
  "मय": [
    "मयूर",
    "peacock"
  ],
  "मर": [
    "मरुस्थल",
    "desert"
  ],
  "मव": [
    "मवेशी",
    "cattle"
  ],
  "मल": [
    "मलमल",
    "muslin"
  ],
  "बआ": [
    "बाजा",
    "band instrument"
  ],
  "बई": [
    "बीन",
    "snake charmer's flute"
  ],
  "बऐ": [
    "बैल",
    "ox"
  ],
  "बऊ": [
    "बुआ",
    "aunt"
  ],
  "बक": [
    "बकरी",
    "goat"
  ],
  "बख": [
    "बख़्शीश",
    "tip"
  ],
  "बघ": [
    "बघार",
    "tempering"
  ],
  "बग": [
    "बगीचा",
    "garden"
  ],
  "बच": [
    "बच्चा",
    "child"
  ],
  "बछ": [
    "बछड़ा",
    "calf"
  ],
  "बझ": [
    "बेझिझक",
    "fearless"
  ],
  "बज": [
    "बजरंग",
    "Bajrang"
  ],
  "बत": [
    "बतख",
    "duck"
  ],
  "बद": [
    "बदली",
    "cloud"
  ],
  "बन": [
    "बन्दर",
    "monkey"
  ],
  "बध": [
    "बधाई",
    "congratulations card"
  ],
  "बप": [
    "बापू",
    "Bapu"
  ],
  "बफ": [
    "बर्फ़",
    "ice"
  ],
  "बम": [
    "बम-भोले",
    "Bam Bam Bhole"
  ],
  "बब": [
    "बबूल",
    "acacia"
  ],
  "बय": [
    "बया",
    "weaver bird"
  ],
  "बर": [
    "बरगद",
    "banyan"
  ],
  "बव": [
    "बवंडर",
    "whirlwind"
  ],
  "बल": [
    "बल्ब",
    "bulb"
  ],
  "यआ": [
    "याद",
    "memory"
  ],
  "यई": [
    "यीस्ट",
    "yeast"
  ],
  "यऐ": [
    "येल",
    "Yale"
  ],
  "यऊ": [
    "यूनिफॉर्म",
    "uniform"
  ],
  "यक": [
    "यकीन",
    "handshake of trust"
  ],
  "यख": [
    "यख़नी",
    "broth"
  ],
  "यघ": [
    "यज्ञ-घंटा",
    "yagna bell"
  ],
  "यग": [
    "युग",
    "era"
  ],
  "यच": [
    "याचक",
    "beggar"
  ],
  "यछ": [
    "यक्ष",
    "Yaksha"
  ],
  "यझ": [
    "यूँ झूमना",
    "swaying"
  ],
  "यज": [
    "यज्ञ",
    "sacred fire"
  ],
  "यत": [
    "यतीम",
    "orphan"
  ],
  "यद": [
    "यदुनंदन",
    "Krishna"
  ],
  "यन": [
    "यंत्र",
    "machine"
  ],
  "यध": [
    "युधिष्ठिर",
    "Yudhishthira"
  ],
  "यप": [
    "यूपी",
    "UP map"
  ],
  "यफ": [
    "यूफ़ोरिया",
    "euphoria"
  ],
  "यम": [
    "यमुना",
    "Yamuna river"
  ],
  "यब": [
    "यू-बोट",
    "U-boat"
  ],
  "यय": [
    "ययाति",
    "King Yayati"
  ],
  "यर": [
    "यरूशलम",
    "Jerusalem"
  ],
  "यव": [
    "यवनिका",
    "stage curtain"
  ],
  "यल": [
    "यलगार",
    "battle cry"
  ],
  "रआ": [
    "राधा",
    "Radha"
  ],
  "रई": [
    "रीछ",
    "bear"
  ],
  "रऐ": [
    "रैली",
    "rally"
  ],
  "रऊ": [
    "रूई",
    "cotton"
  ],
  "रक": [
    "रकाब",
    "stirrup"
  ],
  "रख": [
    "रखवाला",
    "guard"
  ],
  "रघ": [
    "रघुपति",
    "Lord Rama"
  ],
  "रग": [
    "रगड़",
    "rubbing"
  ],
  "रच": [
    "रंगोली",
    "rangoli"
  ],
  "रछ": [
    "रक्षा",
    "raksha thread"
  ],
  "रझ": [
    "रांझा",
    "Ranjha"
  ],
  "रज": [
    "रजाई",
    "quilt"
  ],
  "रत": [
    "रतन",
    "jewel"
  ],
  "रद": [
    "रद्दी",
    "junk paper"
  ],
  "रन": [
    "रन",
    "cricket run"
  ],
  "रध": [
    "रधिया",
    "village girl Radhiya"
  ],
  "रप": [
    "रपट",
    "slide"
  ],
  "रफ": [
    "रफ़्तार",
    "speed"
  ],
  "रम": [
    "रमा",
    "Lakshmi"
  ],
  "रब": [
    "रबड़",
    "eraser"
  ],
  "रय": [
    "रियाज़",
    "music practice"
  ],
  "रर": [
    "रररर",
    "motor sound"
  ],
  "रव": [
    "रवि",
    "sun"
  ],
  "रल": [
    "रलना",
    "mixing"
  ],
  "वआ": [
    "वाह",
    "wow"
  ],
  "वई": [
    "वीणा",
    "veena"
  ],
  "वऐ": [
    "वैद्य",
    "vaidya doctor"
  ],
  "वऊ": [
    "वूल",
    "wool"
  ],
  "वक": [
    "वकील",
    "lawyer"
  ],
  "वख": [
    "वक़्त",
    "clock"
  ],
  "वघ": [
    "वाघ",
    "tiger"
  ],
  "वग": [
    "वाग्देवी",
    "Saraswati"
  ],
  "वच": [
    "वचन",
    "promise"
  ],
  "वछ": [
    "वत्स",
    "calf"
  ],
  "वझ": [
    "वज़न",
    "weighing scale"
  ],
  "वज": [
    "वज्र",
    "thunderbolt"
  ],
  "वत": [
    "वतन",
    "homeland"
  ],
  "वद": [
    "वदन",
    "face"
  ],
  "वन": [
    "वनराज",
    "lion"
  ],
  "वध": [
    "वधू",
    "bride"
  ],
  "वप": [
    "वपन",
    "sowing seeds"
  ],
  "वफ": [
    "वफ़ादार",
    "loyal dog"
  ],
  "वम": [
    "वामन",
    "dwarf Vamana"
  ],
  "वब": [
    "वबाल",
    "chaos"
  ],
  "वय": [
    "वयस्क",
    "adult"
  ],
  "वर": [
    "वर",
    "groom"
  ],
  "वव": [
    "वावड़ी",
    "stepwell"
  ],
  "वल": [
    "वलय",
    "ring"
  ],
  "लआ": [
    "लाल",
    "red"
  ],
  "लई": [
    "लीची",
    "lychee"
  ],
  "लऐ": [
    "लैला",
    "Laila"
  ],
  "लऊ": [
    "लौकी",
    "bottle gourd"
  ],
  "लक": [
    "लकड़ी",
    "wood"
  ],
  "लख": [
    "लखपति",
    "lakhpati"
  ],
  "लघ": [
    "लघु",
    "tiny"
  ],
  "लग": [
    "लगाम",
    "reins"
  ],
  "लच": [
    "लचक",
    "bend"
  ],
  "लछ": [
    "लक्ष्मी",
    "Lakshmi"
  ],
  "लझ": [
    "लज़ीज़",
    "tasty"
  ],
  "लज": [
    "लजाना",
    "blushing"
  ],
  "लत": [
    "लता",
    "creeper"
  ],
  "लद": [
    "लदाख",
    "Ladakh"
  ],
  "लन": [
    "लंदन",
    "London"
  ],
  "लध": [
    "लोधी",
    "Lodhi garden"
  ],
  "लप": [
    "लपट",
    "flame"
  ],
  "लफ": [
    "लफ़्ज़",
    "word"
  ],
  "लम": [
    "लम्बू",
    "tall man"
  ],
  "लब": [
    "लब",
    "lips"
  ],
  "लय": [
    "लय",
    "rhythm"
  ],
  "लर": [
    "लरज़ना",
    "shivering"
  ],
  "लव": [
    "लवंग",
    "clove"
  ],
  "लल": [
    "लल्ला",
    "baby Krishna"
  ]
};
