const ship = (name, length) => {
  let timesHit = 0;
  const hit = () => {
    timesHit++;
  };
  const getTimesHit = () => {
    return timesHit;
  };
  const isSunk = () => {
    return shipLength === timesHit ? true : false;
  };
  const getLength = () => {
    return length;
  };
  const getName = () => {
    return name;
  };

  return { getName, getLength, hit, getTimesHit, isSunk };
};

export default ship;
