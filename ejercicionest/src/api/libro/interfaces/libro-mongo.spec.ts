import { Libro } from './libro-mongo';

describe('Libro', () => {
  it('should be defined', () => {
    expect(new Libro()).toBeDefined();
  });
});
