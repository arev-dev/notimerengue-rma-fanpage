import { Router } from "express";
import * as Controller from "../Controller/noticia.controller.js";

const router = Router();


router.get("/api/noticias",Controller.getNoticias);
router.get("/api/noticias/:id", Controller.getNoticiaByID);
router.get("/api/noticias/:title", Controller.getNoticiaByTitle);
router.post("/api/noticias", Controller.createNoticia);
router.delete("/api/noticias/:id", Controller.deleteNoticia);
router.put("/api/noticias/:id", Controller.editNoticia);


export default router;
