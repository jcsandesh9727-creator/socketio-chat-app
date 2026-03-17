const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ create HTTP server
const httpServer = http.createServer(app);

// ✅ attach socket.io
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// ✅ socket events
io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

// ✅ REST API (IMPORTANT — keep this)
app.get("/", (req, res) => {
  res.send("REST API is working");
});

// ✅ use httpServer.listen (NOT app.listen)
httpServer.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});