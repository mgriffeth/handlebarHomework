(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['comics'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <li>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + " is published by "
    + escapeExpression(((helper = (helper = helpers.company || (depth0 != null ? depth0.company : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"company","hash":{},"data":data}) : helper)))
    + ".</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.comics : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    \n";
},"useData":true});
templates['herbs'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <li>The herb "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " is commonly used to make "
    + escapeExpression(((helper = (helper = helpers.usedFor || (depth0 != null ? depth0.usedFor : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"usedFor","hash":{},"data":data}) : helper)))
    + ".</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.herbs : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();
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
