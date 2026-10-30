import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('users are coming soon');
})

const users = [
    {id: 1, name: 'John Doe', email: 'john.doe@example.com'},
    {id: 2, name: 'Jane Smith', email: 'jane.smith@example.com'},
    {id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com'},
    {id: 4, name: 'Bob Brown', email: 'bob.brown@example.com'}
];

app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
