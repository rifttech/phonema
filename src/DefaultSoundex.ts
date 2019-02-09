import WordProcessor from "./WordProcessor";
interface SoundexTable {
    [key: string]: number
}

const TABLE: SoundexTable = {
    "B": 1,
    "P": 1,
    "F": 1,
    "V": 1,
    "C": 2,
    "S": 2,
    "K": 2,
    "G": 2,
    "J": 2,
    "Q": 2,
    "X": 2,
    "Z": 2,
    "D": 3,
    "T": 3,
    "L": 4,
    "M": 5,
    "N": 5,
    "R": 6,
};
const KEYS = Object.keys(TABLE).join("");
const CODE_LENGTH = 4;
export default class DefaultSoundex implements WordProcessor {

    public process(value: string): string {
        let firstLetter = value.substring(0, 1);
        let tmp = value
            .replace(/(?!(^h|^w))[hw]/gmi, "")
            .split("")
            .map(this.encodeWith(TABLE))
            .map(this.removeDuplicateCharacterSequences())
            .join("")
            .replace(/(?!^[aieouy])[aieouy]/gi, "");
            let pre = firstLetter.toLocaleUpperCase() + tmp.substring(1, tmp.length);
            if(pre.length > CODE_LENGTH){
                pre = pre.substr(0, CODE_LENGTH);
            }
        return this.rpadWithZeros(pre, CODE_LENGTH);
    }

    private contains(value: string): boolean {
        return KEYS.indexOf(value) != -1;
    }
    
    private removeDuplicateCharacterSequences() {
        return (value: string, index: number, source: string[]) => {
            if(index === 0){
                return value;
            }
            if(value === source[index - 1]){
                return "";
            }else {
                return value;
            }
        }
    }

    private rpadWithZeros(value:string, length: number) {
        while (value.length < length) value = value + "0";
        return value;
    }

    private encodeWith(table: SoundexTable) {
        return (value:string):string => {
            if(this.contains(value.toLocaleUpperCase())) {
                return table[value.toLocaleUpperCase()].toString();
            } else {
                return value;
            }
         };
    }

}