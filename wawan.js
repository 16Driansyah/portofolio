const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Typ', 'text/plain');
  res.end('wawan!\n');
});

// create data / data
app.post('/api/portofolio', (req, res) => {
    // buat variabel penampung data dan query sql
    const data = { ...req.body };
    const querySql = 'INSERT INTO portofolio SET ?';

    // jalankan query
    koneksi.query(querySql, data, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal insert data!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil insert data!' });
    });
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});