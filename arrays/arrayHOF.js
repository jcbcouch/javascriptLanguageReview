const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach forEach forEach forEach forEach forEach forEach forEach forEach
// first parameter - value at iteration, second parameter - index at iteration, third parameter - entire array
companies.forEach((c, i, companies) => {
    console.log(`company name: ${c.name} at index: ${i}`)
});


// filter filter filter filter filter filter filter filter
// keep if true, filter out if false
const retail = companies.filter((c) => {
    if (c.category === 'Retail') {
        return true;
    }
});
// shorthand, return on one line
const retail2 = companies.filter((c) => c.category === 'Retail');



// map map map map map map map map map map map
// build a new array however you want
const companyNames = companies.map((c) => `company name: ${c.name}`);


// sort sort sort sort sort sort sort sort sort sort sort sort
const startDateSorted = companies.sort((c1, c2) => {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});
const startDateSorted2 = companies.sort((c1, c2) => c1.start > c2.start ? 1 : -1);
const startDateSorted3 = companies.sort((a, b) => a - b);


// reduce reduce reduce reduce reduce reduce reduce reduce reduce
const totalYears = companies.reduce((acc, company) => {
    acc += (company.end - company.start);
    return acc
}, 0);

const totalYears2 = companies.reduce((acc, c) => acc + (c.end - c.start), 0);
const averageYears = companies.reduce((acc, c) => acc + (c.end - c.start), 0) / companies.length;


// find find find find find find find find find find find find find 
// returns the first one that matches true
const companyOne = companies.find((c) => {
    return c.name === 'Company One'
});

const companyOne2 = companies.find((c) => c.name === 'Company One');


// some some some some some some some some some some some some some 
// returns true if anything in array meets condition
const lastedLong = companies.some((c) => {
    return c.end - c.start > 10;
});

const lastedLong2 = companies.some((c) => c.end - c.start > 25);


// every every every every every every every every every every every 
// returns true if everything in the array meets condition
const lastedFiveYears = companies.every((c) => c.end - c.start >= 5);