- order item by custom order key and last char

```js
const sortRoomData = (roomData) => {
  const order_keys = ["K", "U", "B", "E", "C", "W", "F"];

  const getOrderIndex = (name) => {
    const index = order_keys.indexOf(name[0].toUpperCase());
    return index === -1 ? 100 : index;
  };

  const isNumber = (char) => !isNaN(char);

  return roomData.sort((a, b) => {
    const aOrderIndex = getOrderIndex(a.name);
    const bOrderIndex = getOrderIndex(b.name);

    if (aOrderIndex !== bOrderIndex) return aOrderIndex - bOrderIndex;

    const aLastChar = a.name[a.name.length - 1];
    const bLastChar = b.name[b.name.length - 1];

    const aLastIsNum = isNumber(aLastChar);
    const bLastIsNum = isNumber(bLastChar);

    if (aLastIsNum && bLastIsNum)
      return parseInt(aLastChar) - parseInt(bLastChar);
    if (!aLastIsNum && bLastIsNum) return -1;
    if (aLastIsNum && !bLastIsNum) return 1;

    return 0;
  });
};
```
