import WordProcessor from "./WordProcessor";

export default class ExtendedSoundex implements WordProcessor {
    process(value: string): string {
        throw new Error("Method not implemented.");
    }

}