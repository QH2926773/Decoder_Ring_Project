// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");


describe("caesar", () => {
  it("should encode a message by shifting the letters",()=>{
    const expected = 'wklqnixo';
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);
  } )
  
  it("should leave space and other symbol as is",()=>{
    const actual = caesar("n : ", 2);
        const expected = "p : ";
        expect(actual).to.equal(expected);
  })
  it("should ignore capital letters",()=>{
    const actual = caesar("AbCd", 2)
    const expected = "cdef";
    expect(actual).to.equal(expected);
  })
  it("should allow negative shift that will shife to the left",()=>{
    const expected = "qefkhcri"
          const actual = caesar("thinkful",-3);
    expect(actual).to.equal(expected);
    
  })
  it("should switch direction and decodeing the message when encode is false",()=>{
    const expected = "thinkful";
    const actual = caesar("wklqnixo",3,false);
    expect(actual).to.equal(expected);
  })
  it("should return false when there's no shifting value",()=>{
    const actual = caesar("thinkful");
    expect(actual).to.be.false
  })
    it("should return false when there's shifting value less than -25",()=>{
    const actual = caesar("thinkful", -26);
    expect(actual).to.be.false
  })
    it("should return false when shifting value greater than 25",()=>{
    const actual = caesar("thinkful",99);
    expect(actual).to.be.false
  })
})