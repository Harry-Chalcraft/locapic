export default function(result={}, action) {
  if(action.type == 'signin') {
    var resultCopy= action.data
    return resultCopy ;
  } else {
    return result;
  }
}
