const express = require('express');
const app = express();
const PORT = 4000;
const projects = require('./models/project_model.js')

app.set('view engine', 'ejs');

app.use(express.static('public'));

// routes/controllers

// show route
app.get('/projects/:projectId', (req, res) => {
    projects.findById(req.params.projectId, (error, foundProject) => {
        if (error) return console.log(error);
    
        const context = { project: foundProject };
        return res.render('show.ejs', context);
    });
});

// index route
app.get('/projects/', (req, res) => {
    const allProjects = projects.find();
    const context = { projects: allProjects };
    res.render('index.ejs', context);
});

// 404 route
app.get("/*", (req, res) => {
    if (error) {
        console.log(error);
        req.error = error;
        return next();
    }
    const context = { error: req.error };
    return res.status(404).render("404.ejs", context);
});

app.listen(PORT, () => console.log(`Listening, watching, and learning to take over the human race on port ${PORT}`));