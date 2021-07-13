const express = require('express');
const bodyParser = require('body-parser');
PORT = 8081;


const app = express()

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
const tasksTab = [
    {
        id: 1,
        label: 'Apprendre NodeJS',
        desc: 'Learn nodejs',
        isValidate: true,
    },
    {
        id: 2,
        label: 'Apprendre Electron',
        desc: 'Learn electron js ',
        isValidate: false,
    },
    {
        id: 3,
        label: 'Apprendre Electron',
        desc: 'Learn electron js ',
        isValidate: false,
    },
];
app.get('/',(req, res) => {
    res.render('home', {
        tasksListView: tasksTab
    })
})
app.get('/task/new',(req, res) => {
    res.render('new-task-form', {
        tasksListView: tasksTab
    })
})
app.post('/task/new',(req, res) => {
    const task = req.body
    task.status = task.status ? true : false;
    tasksTab.push(task)
    res.redirect('/');
})
/*app.get('/task/delete/:taskIndex',(req, res) => {
    tasksTab.splice(req.params.taskIndex, 1);

    res.redirect('/')
})*/
app.delete('/task/remove/:index',(req, res) => {
    tasksTab.splice(req.params.index, 1);
    res.send({'message': 'success'});
})
app.listen(PORT, () => {

})
