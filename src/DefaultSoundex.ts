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
export default class DefaultSoundex implements WordProcessor {

    process(value: string): string {
        let firstLetter = value.substring(0, 1);
        let tmp = value
            .replace(/(?!(^h|^w))[hw]/gmi, "")
            .split("")
            .map((e) =>{ return (this.contains(e.toLocaleUpperCase())) ? TABLE[e.toLocaleUpperCase()] : e;})
            .map((v,i,s)=> this.removeDuplicateCharacterSeries(<string>v,i,<string[]>s))
            .join("")
            .replace(/(?!^[aieouy])[aieouy]/gi, "");
        
            let pre = firstLetter.toLocaleUpperCase() + tmp.substring(1, tmp.length);
            if(pre.length > 4){
                pre = pre.substr(0,4);
            }
        return this.rpadZero(pre, 4);
    }

    private contains(value: string): boolean {
        return KEYS.indexOf(value) != -1;
    }

    private removeDuplicateCharacterSeries(value: string, index: number, source: string[]){
        if(index === 0){
            return value;
        }
        if(value === source[index - 1]){
            return "";
        }else {
            return value;
        }
    }

    private rpadZero(value:string, length: number) {
        while (value.length < length) value = value + "0";
        return value;
    }

}