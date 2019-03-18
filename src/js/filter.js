// init Isotope
var $grid = $('.our-classes').isotope({
    // options
  });

  const filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      const number = $(this).find('.number').text();
      return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      const name = $(this).find('.name').text();
      return name.match(/ium$/);
    }
  };

  // filter items on button click
$('.filter-button-group').on('click', 'a', function() {
  let filterValue = $(this).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({
    filter: filterValue
  });
});

// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
    const $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'a', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });