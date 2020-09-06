Canvas.prototype.getSizes = function(size){
  switch (size) {
    case 'small':
      return 20;
      break;
    case 'medium':
      return 40;
      break;
    case 'large':
      return 60;
      break;
    default:
      return 40;
      break;
  }
};