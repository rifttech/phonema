import Soundex from "../Soundex";
import DefaultSoundex from "../DefaultSoundex";
test("Soundex(Default)::process", () => {
    let defaultImpl = new DefaultSoundex();
    let soundex = new Soundex(defaultImpl);    
    expect("A555").toEqual(soundex.process("ammonium"));
    expect("I514").toEqual(soundex.process("implementation"));
    expect("R163").toEqual(soundex.process("Robert"));
    expect("R163").toEqual(soundex.process("Rupert"));
    expect("R150").toEqual(soundex.process("Rubin"));
    expect("A261").toEqual(soundex.process("Ashcraft"));
    expect("A261").toEqual(soundex.process("Ashcroft"));
    expect("T522").toEqual(soundex.process("Tymczak"));
});