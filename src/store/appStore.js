export function createAppStore() {
  return {
    score: 0,
    addScore() {
      this.score++;
    },
    clearScore() {
      this.score = 0;
    },

    number: 0,
    addNumber() {
      this.number++;
    },
    clearNumber() {
      this.number = 0;
    },
  };
}
