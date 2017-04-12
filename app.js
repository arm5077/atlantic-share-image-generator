// Color set
var colors = [
  {
    name: 'purple',
    'background-color': '#424261',
    'background-gradient-color': '#303045',
    'background-image': 'purple.png',
    color: 'rgba(255,255,255,1)',
    'a-opacity': .4
  },
  {
    name: 'red',
    'background-color': '#EC1B23',
    'background-gradient-color': '#D6181F',
    'background-image': 'red.png',
    color: 'rgba(255,255,255,1)',
    'a-opacity': .2
  }
]

// Set up color blocksc
colors.forEach(function(color){
  var block = $('<div>').appendTo('.colorTray')
    .addClass('colorBlock')
    .css({
      'background': color['background-color'],
    })
    .on('click', function(){
      $('.card').css({
        background: color['background-color'],
        background: 'linear-gradient(-180deg, ' + color['background-color'] + ' 0%, ' + color['background-gradient-color'] + ' 100%);',
        background: 'url("png/' + color['background-image'] + '")',
        color: color.color 
      })
      
      $('.atlantic-a').css({
        opacity: color['a-opacity']
      })
    })
})



      

// Get the state set upon page load
reflow();

// When user types something new into the title box, update the hidden div and output height to console.
$('.title').on('keyup', reflow)
$('.subhed').on('keyup', reflow)

// Apply quote styles when user clicks "is quote"
$('#quote').on('change', function(){
  if( $('#quote').is(':checked') )
    $('.content').addClass('quote')
  else
    $('.content').removeClass('quote')

})

$('.download').click(function(){
  
  domtoimage.toBlob( $('.card').get(0) )
    .then(function(blob){
      saveAs(blob, 'atlantic-share-image.png')
    })
    
})

domtoimage.toSvg( $('.card').get(0) )
  .then(function(data){
    var img = new Image();
    img.src = data;
    $('body').append(img)
  })



function reflow(){
  
  if( $('.title').val() == '' )
    $('.hidden-title').html('The quick brown fox jumps over the lazy dog');
  else
    $('.hidden-title').html( $('.title').val() );

  $('.title').height( $('.hidden-title').height() );
  $('.quoteBar').height( $('.hidden-title').height() );
  
  
  
  if( $('.subhed').val() == '')
    $('.hidden-subhed').html('The dog had wearied of chasing foxes and resigned itself to inevitable sighs of disapproval from humans.')
  else
    $('.hidden-subhed').html( $('.subhed').val() );
  
  $('.subhed').height( $('.hidden-subhed').height() );
  
  $('.content').css('top', ($('.card').height() - $('.content').height()) / 2 + 'px')
  
}