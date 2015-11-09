var team = [
      'Adam',
      'Bill',
      'Candice',
      'Chuck',
      'Marteki',
      'Natalie',
      'Nicholas'
    ],
    today = new Date();

function getNextName() {
  var n = today.getDate() + today.getMonth() + today.getFullYear(),
      i = n % ( team.length ),
      name = team[i];
  console.log( team, n, i, team.length, name );
  $( 'body' ).append( '<p>' + name + '</p>' );
  team.splice( i, 1 );
};

$( document ).ready( function() {
  var l = team.length;
  for ( var x = 0; x < l; x++ ) {
    getNextName();
  }
});