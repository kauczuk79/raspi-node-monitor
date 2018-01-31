import app from './App';

const port = 3000

app.listen(port, error => {
  if (error) {
    return console.log(error)
  }
  return console.log(`server is listening on ${port}`)
});