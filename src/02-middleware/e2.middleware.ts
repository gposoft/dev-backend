import express, { Request, Response, NextFunction } from "express";

export default async function middleware() {
  const app = express();
  const PORT = 3000;

  app.use(express.json())

  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
  });

  app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Bienvenido middleware</h1>");
  });

  app.use((req: Request, res: Response, next: NextFunction) => {
    const data = req.headers.authorization;
    if(data === "user") {
      next() 
    }

    res.send("No tienes autorización")
  });

  app.get("/product", (req: Request, res: Response) => {
    res.send({
      id: "1",
      code: "100",
      name: "Camisa",
    });
  });

  app.listen(PORT, () => {
    console.log(`E2: Servidor middleware corriendo en el puerto http://localhost:${PORT}`);
  });
}
