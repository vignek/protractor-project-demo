import path from 'path';


const FileSystemUtil = {


  absolutePathname(relativePath) {
    return path.resolve(relativePath);
  }
}

module.exports = FileSystemUtil;
