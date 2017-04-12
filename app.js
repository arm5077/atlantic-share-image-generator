// Get the state set upon page load
reflow();

// When user types something new into the title box, update the hidden div and output height to console.
$('.title').on('keyup', reflow)
$('.subhed').on('keyup', reflow)

// Apply quote styles when user clicks "is quote"
$('#quote').on('change', function(){
  console.log('derp');
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


function reflow(){
  
  if( $('.title').val() == '' )
    $('.hidden-title').html('The quick brown fox jumps over the lazy dog');
  else
    $('.hidden-title').html( $('.title').val() );

  $('.title').height( $('.hidden-title').height() );
  $('.quoteBar').height( $('.hidden-title').height() );
  
  
  
  if( $('.subhed').val() == '')
    $('.hidden-subhed').html('The dog had wearied of chasing foxes and had resigned itself to inevitable sighs of disapproval from humans.')
  else
    $('.hidden-subhed').html( $('.subhed').val() );
  
  $('.subhed').height( $('.hidden-subhed').height() );
  
  $('.content').css('top', ($('.card').height() - $('.content').height()) / 2 + 'px')
  
}