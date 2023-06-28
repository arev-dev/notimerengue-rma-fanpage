import express from 'express'
import noticiasRoutes from "./routes/noticia.routes.js"
import cors from "cors"


const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:5174'
  }));
app.use(express.json());
app.use(noticiasRoutes)

app.listen(port)
console.log("Server listen on port "+port)