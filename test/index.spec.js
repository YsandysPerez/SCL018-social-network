// importamos la funcion que vamos a testear
import { myFunction } from '../src/lib/index';
const firebaseMock = require('firebase-mock');

cons mockAuth = new firebaseMock.MockFirebase();
mockAuth.autoFlush()
global.firebase = firebaseMock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockAuth,
);


describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
