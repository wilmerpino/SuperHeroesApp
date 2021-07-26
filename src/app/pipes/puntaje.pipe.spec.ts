import { PuntajePipe } from './puntaje.pipe';

describe('PuntajePipe', () => {

  let pipe: PuntajePipe;

  beforeEach(async () => {
      pipe = new PuntajePipe(); 
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('tiene puntaje', async () => {
      const puntaje = pipe.transform(40);
      expect(puntaje.toString()).toEqual('40');
  });

    it('no tiene puntaje', async () => {
      const puntaje = pipe.transform('null');
      expect(puntaje).toEqual(' - ');
    });
});
