import express from 'express';
import path from 'path';

const app = express();

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.use(express.static('assets'));
app.use('/assets', express.static(path.join(__dirname, './assets')));

app.get('/', (req, res) => {
  res.render('index.pug');
});
app.listen(3000, () => {
  // tslint:disable-next-line: no-console
  console.log('App listening on port 3000!');
});
