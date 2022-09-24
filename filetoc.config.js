// filetoc.config.js
module.exports = {
  remoteUrl: 'https://github.com/chenfan0/type-challenges', // your repo address
  mainBranch: 'main', // your default branch. default 'main'
  dirPath: './src', //  the dir where you want to gengerate the toc. default '.'
  mdPath: ['./README.md'], // the markdown files path, when there is only one path, it also can be a string.  default ['README.md']
  excludes: ['.git'] // the excludes file name or dir name
}