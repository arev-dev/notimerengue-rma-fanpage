import * as DB from "../db/Connection.js";

export const getNoticias = async (req, res) => {
  const noticias = await DB.DBGetNoticias();
  res.json(noticias);
};

export const getNoticiaByID = async (req, res) => {
  const id = req.params.id;
  const noticias = await DB.DBGetNoticiaById(id);
  res.json(noticias);
};

export const getNoticiaByTitle = async (req, res) => {
  const title = req.params.title;
  const noticia = await DB.DBGetNoticiaByTitle(title);
  res.json(noticia);
};

export const createNoticia = async (req, res) => {
  const { title, description, date, author, img } = req.body;
  const result = await DB.DBInsertarNoticia(
    title,
    description,
    date,
    author,
    img
  );
  res.json(result);
};

export const deleteNoticia = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await DB.DBDeleteNoticia(id);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la noticia" });
  }
};

export const editNoticia = async (req, res) => {
  try {
    const { id } = req.params
    const { title, description, date, author, img } = req.body;
    const result = await DB.DBEditNoticia(
      id,
      title,
      description,
      date,
      author,
      img
    );
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la noticia" });
  }
};
