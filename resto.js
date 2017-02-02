// base data JS //

// Body //
var contenu = {
  name: 'La bonne bouffe',
  description: 'Venez goûter nos plats préparés avec amours et bienveillance. Notre chef Gertrude viendra probablement vous serrer la main. Vous pourrez échanger avec cette passionnée de cuisine et repartir avec des conseils pour reproduire sa cuisine inimitable',

// Header //
  images: [
    'https://media-cdn.tripadvisor.com/media/photo-s/02/1b/9a/bf/le-grande-bouffe.jpg',

    'http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg',

    'https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg',

    'http://scrat.hellocoton.fr/img/guide/recette-ma-salade-tiede-de-chou-kale-et-lentilles-patates-douces-et-saumon-fume-18911644.jpg'
  ],

// Footer //
  baseline: 'La promo7 vous régale',
  addresse: '51, rue de Vincennes',
  codePostale: '93100',
  ville: 'Montreuil',
  carte: [
    {
      name: 'Poulet aux morilles',
      image: 'http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg',
      description: 'Un grand classique le poulet de Bresse aux morilles et à la crème. Si vous ne trouvez pas de volaille de Bresse, choisissez un bon poulet fermier, élevé aux grains et qui a vécu en liberté dans les champs.',
      price: '23 €'
    },

    {
      name: 'Tagine aux pruneaux',
      image:'https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg',
      description: 'Un des plus célèbres Tajines Marocains, servi avec une délicieuse viande de veau et des pruneaux issus de l\'agriculture biologique',
      price: '18 €'
    },

    {
      name: 'Salade de saison',
      image: 'http://scrat.hellocoton.fr/img/guide/recette-ma-salade-tiede-de-chou-kale-et-lentilles-patates-douces-et-saumon-fume-18911644.jpg',
      description: 'Toujours à l\'heure, la salade de saison vous régalera avec ses légumes',
      price: '14 €'
    },
  ]

}

// Var for slideShow //
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
}

// Var for img slideShow //
var Img = document.querySelectorAll('img');
for (var i = 0; i < Img.length; i++) {
  Img[i].src = contenu.images[i]
}

// Var for contenu footer//
var info = [contenu.baseline, contenu.addresse, contenu.codePostale, contenu.ville];
var queryAll = document.querySelectorAll('footer li');
for (var i = 0; i < queryAll.length; i++) {
  queryAll[i].innerHTML = info[i];
  };
