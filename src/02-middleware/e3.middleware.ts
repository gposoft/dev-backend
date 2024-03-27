import express, { Request, Response, NextFunction } from "express";

function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`tiempo:${new Date().toISOString()}, método:${req.method}, ruta:${req.url}`);
  next();
}

function handlerError(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.message);
  res.status(500).send("Algo salió mal!");
}

export default async function middleware() {
  const app = express();
  const PORT = 3000;

  app.use(logger);

  app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Bienvenido middleware</h1>");
  });

  app.get("/error", (req: Request, res: Response) => {
    throw new Error("Mi error");
  });

  app.get("/product", (req: Request, res: Response) => {
    res.send({
      id: "1",
      code: "100",
      name: "Camisa",
    });
  });

  app.use(handlerError);

  app.listen(PORT, () => {
    console.log(`Servidor middleware corriendo en el puerto http://localhost:${PORT}`);
  });
}
