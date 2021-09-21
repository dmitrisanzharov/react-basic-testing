import {multiply, makeLowerCase} from './helperFunctions'; 

test('multiply', ()=> {
    expect(multiply(2,2)).toBe(4);
    expect(multiply(1,2)).toBe(2);
}); 

test('lowercase', ()=>{
    expect(makeLowerCase('HELLO')).toEqual('hello');
}); 