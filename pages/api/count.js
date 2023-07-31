// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {

//   const { type } = req.query;

//   let count = 1;

//   res.status(200).json({ count: count })
// }

// const addCount = (count) => {
//   return count++;
// }
// const delCount = (count) => {
//   return count--;
// }

let counter = 484;

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { action } = req.query;
    if (action === 'increase') {
      counter++;
    } else if (action === 'decrease') {
      counter--;
    }
    res.status(200).json({ count: counter });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}