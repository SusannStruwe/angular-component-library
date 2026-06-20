const fs = require('fs');
const path = require('path');

// paths to both package.json files
const rootPkgPath = path.join(__dirname, 'package.json');
const libPkgPath = path.join(
    __dirname,
    'projects/angular-component-library/package.json'
);

const rootPkg = require(rootPkgPath);
const libPkg = require(libPkgPath);

// function to sync dependencies
if (libPkg.peerDependencies) {
    Object.keys(libPkg.peerDependencies).forEach((dep) => {
        if (rootPkg.dependencies && rootPkg.dependencies[dep]) {
            libPkg.peerDependencies[dep] = rootPkg.dependencies[dep];
        } else if (rootPkg.devDependencies && rootPkg.devDependencies[dep]) {
            libPkg.peerDependencies[dep] = rootPkg.devDependencies[dep];
        }
    });
}

fs.writeFileSync(libPkgPath, JSON.stringify(libPkg, null, 4) + '\n');
console.log(
    '✅ Library peerDependencies erfolgreich mit Root-package.json synchronisiert!'
);
