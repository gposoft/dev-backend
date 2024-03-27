import express, { Request, Response, NextFunction } from "express";

export default async function middleware() {
  const app = express();
  const PORT = 3000;

  app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Bienvenido middleware</h1>");
  });
  
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
  });

  app.get("/product", (req: Request, res: Response) => {
    res.send({
      id: "1",
      code: "100",
      name: "Camisa",
    });
  });

  app.listen(PORT, () => {
    console.log(`Servidor middleware corriendo en el puerto http://localhost:${PORT}`);
  });
}
