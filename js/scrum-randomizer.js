var teams = {
  'Dev Services': {
    'first': [],
    'randomized': [
      'Adam',
      'Alex H.',
      'Alex M.',
      'Bill',
      'Craig',
      'Nicholas',
      'Scott',
      'Will'
    ],
    'last': []
  }
};
today = new Date();

function getNextName( team ) {
  var n = today.getDate() + today.getMonth() + today.getFullYear(),
      i = n % ( Object.keys(team).length ),
      name = team[i];
  $( '#team-order' ).append( '<li>' + name + '</li>' );
  team.splice( i, 1 );
};

function orderTeam( team ) {
  var n = today.getDate() + today.getMonth() + today.getFullYear(),
      firstLength = team.first.length,
      randomizedLength = team.randomized.length,
      lastLength = team.last.length,
      content = '';

  for ( var x = 0; x < firstLength; x++ ) {
    var name = team.first[x];
    content += '<li>' + name + '</li>';
  }

  for ( var y = 0; y < randomizedLength; y++ ) {
    var i = n % ( team.randomized.length ),
        name = team.randomized[i];

    content += '<li>' + name + '</li>';
    team.randomized.splice( i, 1 );
  }

  for ( var z = 0; z < lastLength; z++ ) {
    var name = team.last[z];
    content += '<li>' + name + '</li>';
  }

  return content;
}

$( document ).ready( function() {
  var dateText = ( today.getMonth() + 1 ) + '/' + today.getDate() + '/' + today.getFullYear();
  $( '#date-today').text( dateText );

  for ( var key in teams ) {
    var name = key,
        team = teams[key],
        content = orderTeam( team );
    $( 'body' ).append( '<h2>' + name + '</h2>');
    $( 'body' ).append( '<ol>' + content + '</ol>');
  }

});
