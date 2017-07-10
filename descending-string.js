var count = 10;

var counter = setInterval(countDown, 1000);

function countDown()
{
  displayAst(count)
  count--;
  if (count == 0)
  {
     clearInterval(counter);
     console.log('done')
     return;
  }
}

function displayAst(num) {
  var stars = '';
  stars = '  *'.repeat(num);
  console.log(stars)
}
