import { Monitor } from './Monitor';
import { CPU } from './CPU';
import { Keyboard } from './Keyboard';

export class Computer {
  public description = 'This Matrix computer';
  constructor(public monitor: Monitor, public cpu: CPU, public keyboard: Keyboard) {}
  complete() {
    return `${this.description} has ` +
      `${this.monitor.monitorNo} monitors, ${this.cpu.cpuNo} cpus, and ${this.keyboard.keyboardNo} keyboard.`;
  }
}
