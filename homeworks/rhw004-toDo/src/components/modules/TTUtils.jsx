export const searchedList = (search, lists, ...args) => {

  let isDonePresent = false;
  if ((Array.isArray(args) && (args.length))) { isDonePresent = true;}

// console.log('isDonePresent', isDonePresent)
// console.log('args', args[0])

  if (search.length === 0 && !isDonePresent) { return lists }
  const keysArr = Object.keys(lists);
  const result = {};
  keysArr.map(
    (el) => {
      if (lists[el]['title'].toLowerCase().includes(search.toLowerCase())) {
        if(isDonePresent && args[0]) {
          if(lists[el]['done']){ result[el] = Object.assign({}, lists[el]); }
        }else{ result[el] = Object.assign({}, lists[el]); }       
      }
    }
  );

  return result;
}