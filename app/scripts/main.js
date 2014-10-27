console.log("{mustachioed mofos and apple sauce}");

var collection = {
  comics: [
  {title:"The Killing Joke",company:"DC"},
  {title:"The Death of Superman",company:"DC"},
  {title:"Deadpool Kills",company:"Marvel"},
  {title:"Hellboy ",company:"Dark Horse"},
  {title:"Battle Chasers",company:"Image"},
  {title:"Ninjak",company:"Valiant"}
  ]};

var template = Handlebars.templates['comics'];
$('.comic-list').html(template(collection));



/*var garden = {
  herbs:[
  {name:'Rosemary',usedFor:'Roasted Chicken'}
  {name:'Basil',usedFor:'Tomato Capresse'}
  {name:'Oregano',usedFor:'Pizza'}
  ]};


var template = Handlebars.templates['herbs'];
$('.herb-list').html(template(garden));
*/
