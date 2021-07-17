const express = require('express');
const app = express();
const routers = require('./routers');
app.use(routers);

app.listen(3000, () => {
	console.log('Hi.')
});
