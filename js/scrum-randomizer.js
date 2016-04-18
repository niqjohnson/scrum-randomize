var team = [
      'Amy',
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
  $( '#team-order' ).append( '<li>' + name + '</li>' );
  team.splice( i, 1 );
};

$( document ).ready( function() {
  var l = team.length,
      dateText = ( today.getMonth() + 1 ) + '/' + today.getDate() + '/' + today.getFullYear();
  for ( var x = 0; x < l; x++ ) {
    getNextName();
  }
  $( '#date-today').text( dateText );
});
