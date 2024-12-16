// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const fetch = require('node-fetch'); // Ensure this package is installed

// const app = express();
// app.use(cors({ origin: '*' }));
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/:id', (req, res) => {
//   const user = req.params.id;
//   const backendURL = `https://leetics-backend.vercel.app/${user}`; // Update URL if deployed

//   fetch(backendURL)
//     .then((response) => response.json())
//     .then((data) => res.send(data))
//     .catch((err) => {
//       console.error('Error fetching from backend:', err);
//       res.status(500).send(err);
//     });
// });

// app.listen(3000, () => {
//   console.log('Leetics frontend is running on port 3000');
// });
const express = require('express')
const app = express();
const cors = require('cors')
let leet = require('./leetcodee');
const path = require('path');
app.use(express.static('public'));

app.use(cors({
    origin: '*'
}))
console.log("hello");


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/:id', leet.leetcode);

app.listen(3000, () => {
    console.log(`App is running on port 3000`);
});