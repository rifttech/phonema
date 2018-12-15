import WordProcessor from "./WordProcessor";

export default class Soundex implements WordProcessor {
    constructor(private implementation: WordProcessor){}
    public process(value: string): string {
        return this.implementation.process(value);
    }
}