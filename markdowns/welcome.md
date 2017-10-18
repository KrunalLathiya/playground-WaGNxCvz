# Angular Dependency Injection Tutorial!

Dependency injection is an important application design pattern. Angular has its own dependency injection framework, and you really can’t build an Angular application without it. It’s used so widely that almost everyone just calls it <b>DI</b>.

The source code for this article is on [GitHub](https://github.com/KrunalLathiya/playground-WaGNxCvz), please feel free to come up with proposals to improve it.

# Angular APP Without Dependency Injection
First, we will take an example of what is the scenario, where we do not use any DI pattern.

### Example
Let us take an example of a Computer. The computer consists of following things.

1. Monitor
2. CPU
3. Keyboard

So to complete the computer, we need those three things.

In this example, we need to require total four classes to build a fully functional computer.

1. Computer class
2. Monitor class
3. CPU class
4. Keyboard class

First, create four classes. All Four classes are in the <b>src  >>  app</b> directory.

Make <b>Monitor.ts</b> class.

```javascript
// Monitor.ts

export class Monitor {
     public monitorNo = 2;
}
```
Next <b>Keyboard.ts</b> class.
```javascript
// Keyboard.ts

export class Keyboard {
    public keyboardNo = 1;
}
```
Make <b>CPU.ts</b> class.
```javascript
// CPU.ts

export class CPU {
    public cpuNo = 3;
}
```
Finally, make <b>Computer.ts</b> class.
```javascript
// Computer.ts

import { Monitor } from './Monitor';
import { CPU } from './CPU';
import { Keyboard } from './Keyboard';

export class Computer {
 
  public monitor: Monitor;
  public cpu: CPU;
  public keyboard: Keyboard;
 
  constructor() {
    this.monitor = new Monitor();
    this.cpu = new CPU();
    this.keyboard = new Keyboard();
  }
 public description = 'This Matrix computer';
  complete() {
    return `${this.description} has ` +
      `${this.monitor.monitorNo} monitors, ${this.cpu.cpuNo} cpus and, ${this.keyboard.keyboardNo} keyboard.`;
  }
}
```
To complete the <b>Computer</b>, we need to import all three classes here and make one fully functional Matrix computer.

Now, here we have created three classes instances in the constructor of Computer class.

Note that, Computer class is totally dependent on these three classes. Otherwise, it will not complete the computer.

We are creating the instances in the constructor. So monitors, cpus, and keyboard are not decoupled from the Computer class.

Finally, to work this example, we need to change the <b>app.component.ts</b> file.
```javascript
// app.component.ts

import { Component } from '@angular/core';
import { Computer } from './Computer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public computer: Computer;

    constructor(){
        this.computer = new Computer();
    }
  makeComputer(){
  	return this.computer.complete();
  }
}
```
And to change the view, edit the <b>app.component.html</b>
```
<!--The whole content below can be removed with the new code.-->
<div style="text-align:center">
  <h1>
      {{makeComputer()}}!!
  </h1>
</div>
```
At [Server](http://localhost:4200/)
You can see the String like This Matrix computer has 2 monitors, 3 cpus, and 1 keyboard.!!

# Example With Dependency Injection(DI)

If we are using Dependency Injection then, we do not need to create the instances in the constructor.

First, we need to provide all the dependencies to the <b>app.module.ts</b> class.
```javascript
// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Monitor } from './Monitor';
import { CPU } from './CPU';
import { Keyboard } from './Keyboard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Monitor, CPU, Keyboard],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
In providers array, we need to provide all three dependencies.

Then, In the <b>Computer.ts</b> class, inject those dependencies into Computer’s constructor.
```javascript
// Computer.ts

import { Monitor } from './Monitor';
import { CPU } from './CPU';
import { Keyboard } from './Keyboard';

export class Computer { 
 constructor(public monitor: Monitor, public cpu: CPU, public keyboard: Keyboard) {}
 public description = 'This Matrix computer';
  complete() {
    return `${this.description} has ` +
      `${this.monitor.monitorNo} monitors, ${this.cpu.cpuNo} cpus, and ${this.keyboard.keyboardNo} keyboard.`;
  }
}
```
Finally, modify the <b>app.component.ts</b> file.
```javascript
// app.component.ts

import { Component } from '@angular/core';
import { Computer } from './Computer';
import { Monitor } from './Monitor';
import { CPU } from './CPU';
import { Keyboard } from './Keyboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public computer: Computer;	
constructor(){
    this.computer = new Computer(new Monitor(), new CPU(), new Keyboard());
}
 makeComputer(){
  	return this.computer.complete();
  }
}
```
So, we have passed the argument at the time of creation of Computer instance.

When computer instance is created at that time, also all the other instances of other classes are also created.

After, save this file, the output will be the same as previous one.

Basic <b>Angular Dependency Injection Tutorial Example</b> is over.

@[Angular Dependency Injection]({"stubs": ["src/app/app.module.ts", "src/app/app.component.ts", "src/app/app.component.html", "src/app/Monitor.ts", "src/app/Keyboard.ts", "src/app/CPU.ts", "src/app/Computer.ts"], "command": "./run.sh"})