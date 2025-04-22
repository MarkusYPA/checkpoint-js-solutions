import { tester } from "../../tester.js";
import { divisors } from "./js-divisor-finder.js";

Math.divisors = undefined;
export const tests = [];

// t on funktio, joka lisää funktion f taulukkoon tests
const t = f => tests.push(f);

// Test cases for divisors
t(
    // Anonyymi funktio, joka ottaa argumentiksi objektion, jolla on eq ominaisuus ja palauttaa onko eq
    // funktion tulos opiskelijan funktiolla ja annetulla taulukolla tosi
    ({ eq }) => eq(divisors(15), [1, 3, 5])
);
t(
    // Nimetty versio
    function testing({ eq }) {
        return eq(divisors(28), [1, 2, 4, 7, 14])
    }
);
t(({ eq }) => eq(divisors(1), []));
t(({ eq }) => eq(divisors(10), [1, 2, 5]));
t(({ eq }) => eq(divisors(-15), [1, 3, 5]));
t(({ eq }) => eq(divisors(0), []));
t(({ eq }) => eq(divisors(-28), [1, 2, 4, 7, 14]));

Object.freeze(tests);

// Run tests
tester(tests);
