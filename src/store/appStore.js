export function createAppStore() {
  return {
    score: 0,
    addScore() {
      this.score++;
    },
    clearScore() {
      this.score = 0;
    },
  };
}
