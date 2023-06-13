import { sum } from "../sum";
// we get following error here while testing
// SyntaxError: Cannot use import statement outside a module

test("check sum of 2 positive numbers", ()=>{

    expect(sum(2,5)).toBe(7);
});

