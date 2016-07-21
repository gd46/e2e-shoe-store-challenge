pages = {

  navigationPage: require('../page_objects/navigation_page.js').navigationPage,
  shoeDisplay: require('../page_objects/shoe_display_page.js').shoeDisplay,
  homePage: require('../page_objects/home_page.js').homePage,

	pageFactory: function(page) {
    if(_.isUndefined(pageObjs[page.name])) {
      console.log(page.name + ' is Undefined');
      pageObjs[page.name] = new page();
    } else {
      console.log(page.name + ' is Defined');
    }
    return pageObjs[page.name];
  }
}

var pageObjs = {};

