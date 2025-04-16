import { bubbleSortAnalyzer } from "./js-bubble-sort-analyzer.js";

const comparator = (a, b) => a - b;

const result = bubbleSortAnalyzer([4, 2, 7, 1, 3], comparator);

console.log(result);