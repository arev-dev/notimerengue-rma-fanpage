import sqlite3 from "sqlite3";
import { createNoticia } from "../models/noticia.model.js";
import { getNoticias as GETNOTICIAS } from "../models/noticia.model.js";

var db = new sqlite3.Database("./database.db");

export const crearTabla = () => {
  db.serialize(function () {
    // Create a table
    db.run(
      "CREATE TABLE IF NOT EXISTS noticia(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT,description TEX,date TEXT,author TEXT,img TEXT)"
    );
  });
};

export const DBInsertarNoticia = (title, description, date, author, img) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO noticia(title, description, date, author, img) VALUES(?, ?, ?, ?, ?)`;
    db.run(query, [title, description, date, author, img], function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("Noticia insertada correctamente");
      }
    });
  });
};

export const DBGetNoticias = () => {
  const query = GETNOTICIAS;

  return new Promise((resolve, reject) => {
    db.all(query, function (err, rows) {
      if (err) {
        reject(err);
      } else {
        const noticias = rows.map((row) => {
          return {
            id: row.id,
            title: row.title,
            description: row.description,
            date: row.date,
            author: row.author,
            img: row.img,
          };
        });
        resolve(noticias);
      }
    });
  });
};

export const DBGetNoticiaById = (id) => {
  const query = "SELECT * FROM noticia WHERE id = ?";

  return new Promise((resolve, reject) => {
    db.get(query, [id], function (err, row) {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

export const DBGetNoticiaByTitle = (title) => {
  const query = "SELECT * FROM noticia WHERE title = ?";

  return new Promise((resolve, reject) => {
    db.get(query, [title], function (err, row) {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

export const Execute = (query) => {
  return new Promise((resolve, reject) => {
    db.all(query, function (err, rows) {
      if (err) {
        reject(err);
      } else {
        const result = rows.map((row) => [row]);
        resolve(result);
      }
    });
  });
};


export const DBDeleteNoticia = (id) => {
    const query = "Delete from noticia where id = ?";
  
    return new Promise((resolve, reject) => {
        db.get(query, [id], function (err, row) {
          if (err) {
            reject(err);
            resolve(err)
          } else {
            resolve("Noticia eliminada correctamente");
          }
        });
      });
  };

  export const DBEditNoticia = (id, title, description, date, author, img) => {
    const query = "update noticia set title = ?, description = ?, date = ?, author = ?, img = ? where id = ?";
  
    return new Promise((resolve, reject) => {
        db.get(query, [title, description, date, author, img,id], function (err) {
            if (err) {
              reject(err);
            } else {
              resolve("Noticia actualizada correctamente");
            }
        });
      });
  };
