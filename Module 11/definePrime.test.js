import definePrime from './definePrime';
describe (blockName, 'tests for definePrime, function', blockFn,()=>{
    const simple = 17;
    const complex = 18;

    It ("should operate correctly with simple number",()=>{
        expect (definePrime (simple)).toBe(expected,`Число${simple} - простое число`);
    }),
    It("should operate correctly with complex number",()=> {
        expect (definePrime (complex)). toBe (expected, `Число ${complex} - cоставное число`);
    }),
    It ("should operate correctly with invalid number",() => {
            expect(definePrime(1001)).toBe(expected, `Число${1001} - "Данные неверны"`);
        });
});