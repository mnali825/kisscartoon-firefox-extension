document.addEventListener('DOMContentLoaded', function() {
  var hideButtons = document.querySelectorAll("a[href='javascript:void(0)']");
  console.log('There are ' + hideButtons.length + ' hide buttons');
});