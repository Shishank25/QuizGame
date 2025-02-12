import express from 'express';
import cors from 'cors';

const app = express();

const corsOPtions = {
    origin: ["https://quiz-game-app-shishank-shekhers-projects.vercel.app/", ],
}

app.use(cors(corsOPtions));
app.use(express.json());

app.get("/", ( req, res ) => {
    res.json("Hello!");
})

app.get("/api", (req, res) => {
    res.json({ fruits: ["apple", "banana", "cherry"] });
});


app.get("/proxy", async (req, res) => {
    try {
        const response = await fetch('https://api.jsonserve.com/Uw5CrX');
        const data = await response.json();
        res.json(data);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
      }
});

// app.listen(8080, () => {
//     console.log("Server Started on port 8080")
// })

export default app;