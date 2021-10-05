//Roessell Dilan Piyasenage Don 
//101278656

let fs = require('fs');

let addLogs = () => {
  let target = './logs';

  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  process.chdir(target);
  for (let i = 0; i < 10; i++) {
    fs.writeFile(`log${i}.txt`, `Log file number: ${i}`, (err) =>
      err ? console.error(`Error creating file: 'log${i}.txt'`) : console.log(`Creating file: 'log${i}.txt'`)
    );
  }
};

let deleteLogs = () => {
  let target = './logs';

  if (fs.existsSync(target)) {
    process.chdir(target);
    fs.readdir(process.cwd(), (err, files) => {
      files.forEach((file) => {
        fs.unlink(file, (err) =>
          err ? console.error(`Error deleting file '${file}'`) : console.log(`Deleting file: '${file}'`)
        );
      });
    });
  }
};

addLogs();
deleteLogs();
