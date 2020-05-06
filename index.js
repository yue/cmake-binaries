const path = require('path');
let binPath = path.join(__dirname, 'bin2');

if (process.platform === 'win32') {
  binPath = path.join(binPath, 'bin')
} else if (process.platform === 'linux') {
  binPath = path.join(binPath, 'bin')
} else if (process.platform === 'darwin') {
  binPath = path.join(binPath, 'CMake.app', 'Contents', 'bin');
} else {
  throw new Error('unsupported platform');
}

const formatProc = p => process.platform === 'win32' ? (p + '.exe') : p;

const procs = [
  { p: 'cmake' },
  { p: 'cpack' },
  { p: 'ctest' },

  { p: 'ccmake', os: ['linux', 'darwin'] },
  { p: 'cmake-gui', os: ['linux', 'win32'], n: 'cmakeGui' },
  { p: 'cmcldeps', os: ['win32'] }
];

module.exports = {};
for (const proc of procs) {
  const name = proc.n || proc.p;
  const fproc = formatProc(proc.p);
  if (!proc.os || proc.os.indexOf(process.platform) !== -1) {
    module.exports[name] = () => path.join(binPath, fproc);
  } else {
    module.exports[name] = () => { throw new Error(`${name} is only supported on ${proc.os}`) };
  }
}
