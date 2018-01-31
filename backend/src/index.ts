import app from './App';
import CPUTemp from './devices/cpu/CPUTemp';

const port = 3000

app.listen(port, error => {
  const cpuTemp = new CPUTemp();
  if (error) {
    return console.log(error)
  }
  setInterval(() => {
    cpuTemp.getCpuTemp().then((temp: number) => {
      console.log(temp);
    });
  }, 1000);
  return console.log(`server is listening on ${port}`);
});