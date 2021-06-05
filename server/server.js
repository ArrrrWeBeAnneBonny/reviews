const app = require('./index.js');
const port = process.env.PORT || 3001;

app.listen(port, (err) => {
  if (err) {
    console.log('error connecting to serve');
  } else {
    console.log(`listening on ${port}`);
  }
})