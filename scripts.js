let photoNumber = 0
let currentPhoto = 0
let data = [
    {photo: 'img/ny.jpg', title: 'New York', description: '2018-ban egy nagy álmom vált valóra és eljutottam a Nagy Almába.'},
    {photo: 'img/gruzia.jpg', title: 'Grúzia', description: 'Egy hét alatt, autóval jártuk be. Csodálatos hely, mindenkinek ajánlom.'},
    {photo: 'img/koppenhaga.jpg', title: 'Koppenhága', description: 'Nem véletlenül a dánok az egyik legboldogabb emberek a földön.'},
    {photo: 'img/london.jpg', title: 'London', description: 'Egy évet éltem itt, úgyhogy cáfolom, hogy állandóan esik.'},
    {photo: 'img/parizs.jpg', title: 'Párizs', description: 'Egy igazi romantikus hely, nem véletlenül hívják a szerelem városának.'},
    {photo: 'img/roma.jpg', title: 'Róma', description: 'Az első közös út Petrával és az első repülés élménye felejthetetlen.'}
];

$('#photo').attr('src', data[currentPhoto].photo);
$('#title').text(data[currentPhoto].title);
$('#description').text(data[currentPhoto].description);


let Photo = 0;
let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', data[photoNumber].photo);
  $('#title').text(data[photoNumber].title);
  $('#description').text(data[photoNumber].description);
}

console.log(data.length)

$('.right-container').click(() => {
  currentPhoto++;
  if (currentPhoto > data.length-1) {
    currentPhoto = 0;}  
  loadPhoto(currentPhoto);  
});

$('.left-container').click(() => {
  currentPhoto--;
  if (currentPhoto < 0) {
    currentPhoto = data.length-1;} 
  loadPhoto(currentPhoto);
});




data.forEach((item, index) => {
  $('#container').append(`<div class="thumbnail" data-index="${index}"></div>`);
  $('.thumbnail:last-child').css("background-image", "url(" + data[index].photo + ")");
  $('.thumbnail:last-child').append('<div class="hiddenTitle">' + data[index].title + "</div>'");
  
 
  $('.thumbnail').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    console.log(indexClicked)
    let numberIndex = parseInt(indexClicked);
    $('#photo').attr('src', data[numberIndex].photo);
    $('#title').text(data[numberIndex].title);
    $('#description').text(data[numberIndex].description);
  });
});


