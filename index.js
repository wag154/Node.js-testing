const app = require("./application")

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))