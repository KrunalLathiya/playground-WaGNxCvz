// Computer.ts

import { Monitor } from './Monitor';
import { CPU } from './CPU';
import { Keyboard } from './Keyboard';

export class Computer {

  public monitor: Monitor;
  public cpu: CPU;
  public keyboard: Keyboard;
  public description = 'This Matrix computer';

  constructor() {
    this.monitor = new Monitor();
    this.cpu = new CPU();
    this.keyboard = new Keyboard();
  }
  complete() {
    return `${this.description} has ` +
      `${this.monitor.monitorNo} monitors, ${this.cpu.cpuNo} cpus and, ${this.keyboard.keyboardNo} keyboard.`;
  }
}
