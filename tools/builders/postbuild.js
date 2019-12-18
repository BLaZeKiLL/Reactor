// CHANGES MIME TYPE OF REACT SCRIPT TAGS TO
const fs = require('fs');
const index = 'dist/apps/react/index.html';

fs.readFile(index, 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }

  const result = data.replace(/type="module"/g, `type="text/javascript"`);
  fs.writeFile(index, result, 'utf8', function(err) {
    if (err) return console.log(err);
    console.log('POST BUILD SUCCESSFUL');
  });
});
