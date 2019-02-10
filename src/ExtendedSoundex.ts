import WordProcessor from "./WordProcessor";
                   /*ABCDEFGHIJKLMNOPQRSTUVWXYZ*/
const ENG_MAPPING = "01360240043788015936020505";

export default class ExtendedSoundex implements WordProcessor {
    process(value: string): string {
        let firstLetter = value.substring(0, 1);

        return firstLetter.toLocaleUpperCase() + value.toLocaleUpperCase()
            .split("")
            .map(this.encodeWith(ENG_MAPPING))
            .map(this.removeDuplicateCharacterSequences())
            .join("");
    }

    private encodeWith(mapping: string) {
        return (element: string) => {
            let index = element.charCodeAt(0) - 65;
            let el = mapping[index];
            return el;
        };
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
}