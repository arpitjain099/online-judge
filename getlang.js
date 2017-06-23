import HackerRank from 'hackerrank-node-wrapper';

const hr = new HackerRank('hackerrank|64232-1517|88cf46a2fde0bc2efc3ee0b0a213c43211227b62');

let data = {
  source: 'print "Hello World"',
  lang: 5,
  testcases: '["1"]'
};

hr.run(data, (error, response) => {
  if(error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(response.body);
  }
});