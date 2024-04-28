import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port2 = process.env.PORT2;
const mongoURI2 = process.env.MONGO_URI2;

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI2, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1); // Exit with failure
  }
};

await connectDB();

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.get("/getData", async (req, res) => {
  try {
    const data = await DataModel.find(filter);
    res.json(data);
    console.log(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port2, () => {
  console.log(`Server is running on port ${port2}`);
});
