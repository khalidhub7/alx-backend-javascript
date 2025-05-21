import fs from 'fs';

// read file asynchronously
const readDatabase = async (path) => {
  try {
    const file = await fs.promises
      .readFile(path, 'utf-8');

    // valid lines
    const lines = file
      .split('\n').slice(1)
      .map((line) => (line.split(',')))
      .filter(((line) => (
        line.length === 4 && line.every((i) => i !== '')
      )));

    const obj = {};

    // handle exists fields
    const fields = [
      ...new Set(lines.map((line) => line[3])),
    ];

    // students by field
    fields.forEach((f) => {
      obj[f] = lines
        .filter((l) => l[3] === f)
        .map((fl) => fl[0]);
    });

    // console.log(obj)
    return obj;
  } catch (err) {
    throw new Error(err);
  }
};
export default readDatabase;
