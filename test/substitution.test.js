// Write your tests here!
let {substitution} = require("../src/substitution.js");
const expect = require("chai").expect;

describe("subsitution",()=>{
  
  it("should encode a message by using the given substitution alphabet",()=>{
    const expected = "jrufscpw";
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected)
  })
  
  it("should work with any kind of key with unique characters",()=>{
    const expected = "y&ii$r&";
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
     expect(actual).to.equal(expected)
  })
  
  it("should decode a message by using the given substitution alphabet",()=>{
    const expected = "message";
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
    expect(actual).to.equal(expected)
  })
  
  it("should preserve spaces",()=>{
    const expected = "you are an excellent spy";
    const actual = substitution("elp xhm xf mbymwwmfj dne","xoyqmcgrukswaflnthdjpzibev",false);
    expect(actual).to.equal(expected);
  })
  
  it("should return false if the substitution alphabet is missing",()=>{
    const actual = substitution("thinkful");
    expect(actual).to.be.false;
  })
  it("should return false if the substitution alphabet is not exact 26 letters",()=>{
    const actual = substitution("thinkful","abcdefghijklmnopq");
    expect(actual).to.be.false;
  })
  it("should return false if the substitution alphabet does not contain unique characters",()=>{
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
  })
})