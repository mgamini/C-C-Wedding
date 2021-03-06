var galleryImages = [{ image: './img/photos/p1005684048-6.jpg' }, { image: './img/photos/p1008877448-6.jpg' }, { image: './img/photos/p1020565934-6.jpg' }, { image: './img/photos/p1025701152-6.jpg' }, { image: './img/photos/p1027848884-6.jpg' }, { image: './img/photos/p104052193-6.jpg' }, { image: './img/photos/p1049362220-6.jpg' }, { image: './img/photos/p1064553431-6.jpg' }, { image: './img/photos/p1066941938-6.jpg' }, { image: './img/photos/p119148887-6.jpg' }, { image: './img/photos/p15908466-6.jpg' }, { image: './img/photos/p274470014-6.jpg' }, { image: './img/photos/p321722609-6.jpg' }, { image: './img/photos/p336137916-6.jpg' }, { image: './img/photos/p337523605-6.jpg' }, { image: './img/photos/p360670549-6.jpg' }, { image: './img/photos/p361703653-6.jpg' }, { image: './img/photos/p366220472-6.jpg' }, { image: './img/photos/p377747186-6.jpg' }, { image: './img/photos/p382381244-6.jpg' }, { image: './img/photos/p393271196-6.jpg' }, { image: './img/photos/p406590581-6.jpg' }, { image: './img/photos/p407634934-6.jpg' }, { image: './img/photos/p436050626-6.jpg' }, { image: './img/photos/p465635900-6.jpg' }, { image: './img/photos/p485301501-6.jpg' }, { image: './img/photos/p485928803-6.jpg' }, { image: './img/photos/p515797285-6.jpg' }, { image: './img/photos/p532737227-6.jpg' }, { image: './img/photos/p536668219-6.jpg' }, { image: './img/photos/p543035885-6.jpg' }, { image: './img/photos/p543429771-6.jpg' }, { image: './img/photos/p565447422-6.jpg' }, { image: './img/photos/p568016666-6.jpg' }, { image: './img/photos/p56885958-6.jpg' }, { image: './img/photos/p574770899-6.jpg' }, { image: './img/photos/p575111634-6.jpg' }, { image: './img/photos/p577073641-6.jpg' }, { image: './img/photos/p588399859-6.jpg' }, { image: './img/photos/p596578110-6.jpg' }, { image: './img/photos/p603155043-6.jpg' }, { image: './img/photos/p603472559-6.jpg' }, { image: './img/photos/p607269682-6.jpg' }, { image: './img/photos/p6088917-6.jpg' }, { image: './img/photos/p624289647-6.jpg' }, { image: './img/photos/p629814053-6.jpg' }, { image: './img/photos/p634169950-6.jpg' }, { image: './img/photos/p636533237-6.jpg' }, { image: './img/photos/p637061226-6.jpg' }, { image: './img/photos/p658803343-6.jpg' }, { image: './img/photos/p673706213-6.jpg' }, { image: './img/photos/p675896134-6.jpg' }, { image: './img/photos/p680741640-6.jpg' }, { image: './img/photos/p69668664-6.jpg' }, { image: './img/photos/p698352907-6.jpg' }, { image: './img/photos/p706424275-6.jpg' }, { image: './img/photos/p72386849-6.jpg' }, { image: './img/photos/p729267528-6.jpg' }, { image: './img/photos/p735831567-6.jpg' }, { image: './img/photos/p738282136-6.jpg' }, { image: './img/photos/p739809312-6.jpg' }, { image: './img/photos/p748096331-6.jpg' }, { image: './img/photos/p754333476-6.jpg' }, { image: './img/photos/p767351187-6.jpg' }, { image: './img/photos/p77798027-6.jpg' }, { image: './img/photos/p783420953-6.jpg' }, { image: './img/photos/p791075893-6.jpg' }, { image: './img/photos/p801419704-6.jpg' }, { image: './img/photos/p817634692-6.jpg' }, { image: './img/photos/p822419208-6.jpg' }, { image: './img/photos/p83290251-6.jpg' }, { image: './img/photos/p835969143-6.jpg' }, { image: './img/photos/p838656373-6.jpg' }, { image: './img/photos/p850357843-6.jpg' }, { image: './img/photos/p865334476-6.jpg' }, { image: './img/photos/p868241315-6.jpg' }, { image: './img/photos/p901432574-6.jpg' }, { image: './img/photos/p90656742-6.jpg' }, { image: './img/photos/p908645672-6.jpg' }, { image: './img/photos/p920501097-6.jpg' }, { image: './img/photos/p92092708-6.jpg' }, { image: './img/photos/p981053406-6.jpg' }, { image: './img/photos/p992072019-6.jpg' }, { image: './img/photos/p999513801-6.jpg' } ];

$(document).ready(function() {

  var dom = {
    window: $(window),
    body: $('body'),
    titleblock: $('#titleBlock'),
    nav: $('nav'),
    navList: $('#nav'),
    anchors: []  
    };
  var config = {
    window: {
      height: window.innerHeight,
      width: window.innerWidth,
      scrollPos: 0
    },
    navPosition: 0
  };

  config.navPosition = ((config.window.height - 70) < 680 ?  680 : (config.window.height - 70) );

  $(window).on('scroll', function() {
    config.window.scrollPos = dom.body.scrollTop();
    dom.nav.toggleClass('sticky', config.window.scrollPos > config.navPosition);
  });

  Galleria.loadTheme('js/galleria/galleria.classic.min.js');
  Galleria.run('#photoGallery', {dataSource: galleryImages});

  var ct = 0;
  $('.scroll-anchor').each(function() {
    var el = $(this);
    dom.anchors.push(el.attr('name'));
    el.attr('data-idx', ct);
    ct++;

    el.waypoint(function(direction) {
      dom.navList.removeClass();
      if (direction == 'up') {        
        dom.navList.addClass(dom.anchors[el.attr('data-idx') - 1]);        
      } else {
        dom.navList.addClass(el.attr('name'));
      }
      console.log(el.attr('name'));      
    }, { offset: 200 });
  });

  $('a.smooth').click(function(e) {
    e.preventDefault();
    
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 100
      }, 1000);
      return false;
    }
  });

});