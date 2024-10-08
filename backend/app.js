const express = require('express');
const todoRoutes = require('./routes/todoRoutes')
const connectDatabase = require('./database/connection')
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(express.json());


app.use('/todos', todoRoutes);
app.use('/todo', todoRoutes)


// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
  
    res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  });

  
//datase + server connection
connectDatabase()
.then(()=>{
    return app.listen(3000);
})
.then(()=>{
    console.log('server running on port 3000')
})


