import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import bookRoutes from "./routes/bookRoutes.js";

const app = express();
app.use(cors());

/** Env Variables */
const PORT = 3000;
const mongoDBURL =
  "mongodb+srv://prathameshsbpb:DgJtg7QIvvuIysfO@intuit-craft-demo.ogykvta.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Baje re baje re baje re.. Dholitaro dhol baje..");
});

app.use("/book", bookRoutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`Example app listening at http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log("error connecting to MongoDB", err));
