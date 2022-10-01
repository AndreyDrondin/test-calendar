const timeData: string[] = [];

(function getTimeIntervals() {
  for (let i = 10; i < 22; i++) {
    for (let j = 0; j < 2; j++) {
      timeData.push(i + ":" + (j === 0 ? "00" : 30 * j));
    }
  }
})();

export default timeData;
