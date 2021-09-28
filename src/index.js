const app = require('./app');
const connectToDB = require('./utils/db');

const { PORT = 3000 } = process.env;

connectToDB();

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
