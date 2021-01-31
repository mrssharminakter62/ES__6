// const ages = [12, 12, 34, 24, 53];
// const ages2 = [13, 34, 64];
// const ages3 = [34, 53, 43, 54];
// const allages = ages. concat(ages2).concat([5]).concat(ages3);
// console.log(allages);

// wrong ________________

// const ages = [12, 12, 34, 24, 53];
// const ages2 = [13, 34, 64];
// const ages3 = [34, 53, 43, 54];
// const allages2 = [ages, ages2, 5, ages3];
// console.log(allages2);


// new sys ____________Spread operator(...)___multiple arrays________________

// const ages = [12, 12, 34, 24, 53];
// const ages2 = [13, 34, 64];
// const ages3 = [34, 53, 43, 54];
// const allages3 = [...ages, ...ages2, 5, ...ages3];
// console.log(allages3);


// old_______________________

// const business = 640;
// const minister = 440;
// const shochib = 320;
// const maximum =Math.max(business, minister, shochib);
// console.log(maximum);

// Spread operator(...)______array max-----------

 const business = 640;
const minister = 440;
const shochib = 320;
const takapoisa = [640, 440, 320]
const maximum =Math.max(...takapoisa);
console.log(maximum);

