import express from 'express'
import noticiasRoutes from "./routes/noticia.routes.js"

const app = express();
const port = 3000;

app.use(express.json());
app.use(noticiasRoutes)

app.listen(port)
console.log("Server listen on port "+port)