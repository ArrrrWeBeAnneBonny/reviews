const app = require('./index.js');
const port = 3001;

app.listen(3001, (err) => {
  if (err) {
    console.log('error connecting to serve');
  } else {
    console.log(`listening on ${port}`);
  }
})