/**
 * Autobindデコレータ作成
 */
function AutoBind(_target: any, _methodName: string | Symbol | number, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  }
  return adjDescriptor;
}

class Printer {
  message =  'クリックしました'
  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();
const button = document.querySelector('button')!;
// button.addEventListener('click', printer.showMessage.bind(printer));
button.addEventListener('click', printer.showMessage);