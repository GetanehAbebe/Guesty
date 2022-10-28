import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "./config";
import namesAnalyzer from "./routes/namesAnalyzer";
const app = express();

app.use(cors());
app.use(morgan("dev"));

//CONNECT TO MONGOdb
// connectDB();
//define routes and API
app.use(express.json());
app.use("/api/name-analyzer", namesAnalyzer);

app.get("/", (req, res) => {
  res.send("My app is up");
});

app.listen(PORT, () => {
  console.log(`server is listenning at port ${PORT}`);
});
