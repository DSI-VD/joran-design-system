/**
 * @param event
 */
function closeAlert(event) {
  let element = event.target;
  while (element.nodeName !== 'BUTTON') {
    element = element.parentNode;
  }

  element.parentNode.parentNode.remove(element.parentNode);
}
