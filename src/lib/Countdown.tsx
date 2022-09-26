export class Countdown {
  private intervalId: number;
  private remaining: number;
  private readonly onTick: (remaining: number) => void;
  private readonly onDone: () => void;

  constructor(
    private readonly duration: number,
    onTick: (remaining: number) => void,
    onDone: () => void
  ) {
    this.intervalId = 0;
    this.remaining = duration;
    this.onTick = onTick;
    this.onDone = onDone;
  }

  start() {
    this.reset();
    const counter = this.makeCounter(this.remaining, this.onTick, 0);
    this.intervalId = window.setInterval(() => counter.next(), 1000);
  }

  stop() {
    window.clearInterval(this.intervalId);
  }

  reset() {
    this.stop();
    this.remaining = this.duration;
  }

  private *makeCounter(
    from: number,
    tick: (remaining: number) => void,
    to?: number
  ) {
    let c = from;
    while (c > (to ?? 0)) {
      tick(c);
      yield c--;
    }
    this.onDone();
  }
}
