function sayHello(name) {
  console.log('Hi ' + name);
}

sayHello();

const d = (name = 'maaan') => console.log('Sup  ' + name);
d('Deni');

const d1 = () => console.log('Hard code one');

const d2 = (rer,name ) => console.log(rer,name);

d1();

d2('YYY', ' BBBB')
d();

function d4(f,... core) {
  let emtone = false;
  for (const nn of core) {
    if (!nn)  {
      emtone = true;
      break;
    } 
  }
if (!emtone) {
    f();
}
};

d4(() => { console.log('JA JA JA JA')}, 'EER','EEER','EFF','dd');
// рассматривать данную функцию с точки зрения булевых значений.