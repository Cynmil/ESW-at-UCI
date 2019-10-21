$.get('../json/member.json', (data) => {
  data.forEach((member) => {
    if (member.role == undefined || member.name == undefined)
      return;

    const img_src = `../img/board_member/${member.img ? member.img : 'default.webp'}`;
    
    $('#board').append(`
      <div class="col s12 m4 l4">
        <div class="card member">
          <div class="card-image">
            <img src="${img_src}">
          </div>
          <div class="card-content" style="align-content: center">
            <h6>${member.role}</h6>
            <h5>${member.name}</h5>
          </div>
        </div>
      </div>
    `);
  });

  memberLoadAnimate()
});

let memberLoadAnimate = function() {
  $(document).ready(() => {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return (elemTop <= docViewBottom);
    }
    // If element is scrolled into view, fade it in
    $(window).on('scroll load', function() {
      $('.member').each(function() {
        if (isScrolledIntoView(this)) {
          $(this).addClass('animated fadeInRight');
        }
      });
    });
  });
}