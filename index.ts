import { Injector, Injectable, Constructor } from './src/injector';

@Injectable()
class NoDeps {
  doSth() {
    console.log(`I'm NoDeps!`);
  }
}

@Injectable()
class OneDep {
  constructor(public noDeps: NoDeps) {}
  doSth() {
    console.log(`I'm OneDep!`);
  }
}

@Injectable()
class MoarDeps {
  constructor(public noDeps: NoDeps, public oneDep: OneDep) {}
  doSth() {
    console.log(`I'm MoarDeps!`);
  }
}

const moarDeps = Injector.resolve(MoarDeps);

moarDeps.doSth();
moarDeps.noDeps.doSth();
moarDeps.oneDep.doSth();
moarDeps.oneDep.noDeps.doSth();
