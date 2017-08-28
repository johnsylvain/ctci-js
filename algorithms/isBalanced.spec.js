import { isBalanced } from './isBalanced';

describe('If braces/brackets are balanced', () => {

  [
    '[{()}]',
    '((({[{()}]}{()})))[()][]',
    '(( sdf ({[{( test )}]}{()}sdf )) sdf)[()][sdf]((({})))',
  ].forEach(arg => {
    it(`should return true for being balanced: ${arg}`, () => {
      expect(isBalanced(arg)).toBeTruthy();
    })
  });

  [
    '[{({)}]',
    '((({[{()}]}{()})))[()][',
    '(( sdf ({[{( ( )}]}{()}sdf )) sdf)[()][sdf]((({})))',
  ].forEach(arg => {
    it(`should return false for being unbalanced: ${arg}`, () => {
      expect(isBalanced(arg)).toBeFalsy();
    })
  });
})
