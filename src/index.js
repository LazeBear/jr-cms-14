const app = require('./app');
const connectToDB = require('./utils/db');

connectToDB();
const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log('server listening on port 3000');
});
