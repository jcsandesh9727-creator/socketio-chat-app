import { useEffect } from "react";
import { socket } from "./services/socket";

function App() {
  useEffect(() => {
    // ✅ connect manually
    socket.connect();

    // Socket.IO setup completed
    // ✅ connection logs
    socket.on("connect", () => {
      console.log("✅ Connected to server:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("❌ Disconnected from server");
    });

    socket.on("connect_error", (err) => {
      console.log("⚠️ Connection error:", err.message);
    });

    // ✅ cleanup (VERY IMPORTANT)
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("connect_error");

      socket.disconnect();
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Socket.IO Setup Successful ✅</h1>
      <p>Open console to see connection logs</p>
    </div>
  );
}

export default App;