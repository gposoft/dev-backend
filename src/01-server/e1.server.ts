import express, { Request, Response } from "express";

export default async function server() {
  const app = express();
  const PORT = 3000;

  app.get("/", (req: Request, res: Response) => {
    res.send("Hola mundo!");
  });

  app.get("/product", (req: Request, res: Response) => {
    res.json({
        id:"1",
        code:"100",
        name:"Camisa"
    })
  });

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
  });
}
