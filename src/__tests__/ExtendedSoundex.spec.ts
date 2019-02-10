import Soundex from "../Soundex";
import ExtendedSoundex from "../ExtendedSoundex";
test("Soundex(Extended)::process", () => {
    let ext = new ExtendedSoundex();
    let soundex = new Soundex(ext);    
    expect("A080808").toEqual(soundex.process("ammonium"));
    expect("I0817080860608").toEqual(soundex.process("implementation"));
    expect("R901096").toEqual(soundex.process("Robert"));
    expect("R901096").toEqual(soundex.process("Rupert"));
    expect("R90108").toEqual(soundex.process("Rubin"));
    expect("A03039026").toEqual(soundex.process("Ashcraft"));
    expect("A03039026").toEqual(soundex.process("Ashcroft"));
    expect("T6083503").toEqual(soundex.process("Tymczak"));

});