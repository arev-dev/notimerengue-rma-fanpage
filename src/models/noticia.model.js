export const createTable =
  "CREATE TABLE IF NOT EXISTS noticia(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT,description TEX,date TEXT,author TEXT,img TEXT)";

export const createNoticia =
  "INSERT INTO noticia(title,description,date,author,img)";

export const getNoticias =
  "select * from noticia";
