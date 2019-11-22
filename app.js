
var content
var current = { value: 1 }


//OPEN PROJECT WRAPPER 
$('.project').on('click', () => {

  content = event.target.classList[0];

  $('#deetzCont').fadeIn();
  $('.projectDetailsInner').hide();

  $(`#${content}`).show();
  if (event.target.classList[1] === 'gallerySection') {
    current.value = 1;
    console.log(content)
    scrollInt = setInterval(function () { scrollClick(1) }, 5500);
    scrollInt;
  }
})


//CLOSE PROJECT WRAPPER 
$('.closeProject').on('click', () => {
  $('#deetzCont').fadeOut();
  current.value = 1;
  console.log('current.value: ' + current.value)
  console.log('hai')
  clearInterval(scrollInt);
})



//SCROLL TO SECTION
$('.menuItem, .scroll').on('click', (e) => {
  e.preventDefault();
  let target = $(e.target).data('name');
  let off;
  if (target === 'about') { off = 110 } else if (target === 'bottom') { off = -160 } else { off = -70 };
  console.log(target)
  $('html, body').animate(
    {
      scrollTop: $(`#${target}`).offset().top + off,
    },
    700,
    'swing'
  )
})
var scrollClick = function (x) {
  let selectedArrow = $(`#${content}`).children().find('.arrow2')[x];
  console.log($(`#${content}`).children().find('.arrow2'))
  selectedArrow.click()
}



//GALLERY SCROLL ON CLICK
var galleryScroll = function () {
  let galleryTarget = $(event.target).data('name');
  let newSrc

  if (current.value < 5 && $(event.target).data('dir') === 'right') {
    current.value++
    newSrc = 'img/' + galleryTarget + current.value + '.jpg'
  } else if (current.value === 5 && $(event.target).data('dir') === 'right') {
    current.value = 1
    newSrc = 'img/' + galleryTarget + current.value + '.jpg'
  } else if (current.value === 1 && $(event.target).data('dir') === 'left') {
    current.value = 5
    newSrc = 'img/' + galleryTarget + current.value + '.jpg'
  } else if (current.value <= 5 && $(event.target).data('dir') === 'left') {
    current.value--
    newSrc = 'img/' + galleryTarget + current.value + '.jpg'
  }
  console.log(galleryTarget)
  $(`#${galleryTarget}`).attr('src', newSrc)
}

//CLICK EVENTS
$('.arrow').on('click', function () {
  galleryScroll();
  console.log('hai');
})
$('.arrow2').on('click', function () {
  galleryScroll();
  console.log('hai 2');
})

//KEYDOWN EVENTS
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 39) {
    scrollClick(1);
    e.preventDefault()
    clearInterval(scrollInt)
    console.log('right arrow')
  } else if (e.keyCode === 37) {
    scrollClick(0);
    clearInterval(scrollInt)
  } else if (e.keyCode === 27) {
    $('#deetzCont').fadeOut();
    clearInterval(scrollInt)
  }
})