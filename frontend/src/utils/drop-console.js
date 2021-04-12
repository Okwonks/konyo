/**
 * This file handles unwanted console logs.
 * It is important to call this file at the beginning of the app.
 */

const console = (oldCons => {
  const drop = process.env.REACT_APP_DROP_CONSOLE === 'true';
  const newCons = { ...oldCons };
  window.console = oldCons;
  if (drop) {
    oldCons.log(
      '%c%s',
      'color: red; font-size: 14px; padding: 6px',
      'CAUTION: This space is only for developers. Please do not copy-paste any scripts here. It can be harmful',
    );
    newCons.log = function () {};
    newCons.warn = function () {};
    // Keep error
  }
  return newCons;
})(window.console);
window.console = console;
