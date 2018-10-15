var pkg = require('../package.json');

// 兼容 xidux 和 @ximolang/xidux 
var name = pkg.name.split('/').pop();
var version = pkg.version;

var banner = 
`/*!
 * xidux ${version} (https://github.com/ximolang/xidux)
 * API https://github.com/ximolang/xidux/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} ximolang. All Rights Reserved
 * Licensed under MIT (https://github.com/ximolang/xidux/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
