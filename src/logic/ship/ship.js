const ship = (length) => {
  const shipLength = length;
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

  return { hit, getTimesHit, isSunk };
};

export default ship;
