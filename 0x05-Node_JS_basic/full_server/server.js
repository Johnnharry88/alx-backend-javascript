const exp = require('express');
const routes = require('./routes')

const app = exp();
const port = 1245;

routes(app)
app.listen(port, () => {
  conslole.log(`Server listening on PORT ${port}`);
});

export default app;
module.exports = app;
