type majorCrs = number & { __brand: "majorCrs" };
type minorCrs = number & { __brand: "minorCrs" };

interface MajorCredits {
  credits: majorCrs;
}
interface MinorCredits {
  credits: minorCrs;
}

const sumMajorCredits = (
  subject1: MajorCredits,
  subject2: MajorCredits,
): MajorCredits => ({
  credits: (subject1.credits + subject2.credits) as majorCrs,
});

const sumMinorCredits = (
  subject1: MinorCredits,
  subject2: MinorCredits,
): MinorCredits => ({
  credits: (subject1.credits + subject2.credits) as minorCrs,
});

/* // test
const major1: MajorCredits = { credits: 10 as majorCrs };
const major2: MajorCredits = { credits: 20 as majorCrs };
console.log(sumMajorCredits(major1, major2));
const minor1: MinorCredits = { credits: 5 as minorCrs };
const minor2: MinorCredits = { credits: 15 as minorCrs };
console.log(sumMinorCredits(minor1, minor2)); */
