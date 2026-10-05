const { spawnSync } = require('node:child_process');

const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const updates = [
    {
        name: 'Font Awesome',
        command: npx,
        args: [
            'ng',
            'update',
            '@fortawesome/angular-fontawesome',
            '@fortawesome/fontawesome-svg-core',
            '--allow-dirty',
            '--force'
        ]
    },
    {
        name: 'Storybook',
        command: npx,
        args: [
            'ng',
            'update',
            '@storybook/angular',
            'storybook',
            '--allow-dirty',
            '--force'
        ]
    },
    {
        name: 'Remaining dependencies',
        command: npm,
        args: ['update']
    },
    {
        name: 'Angular and angular-eslint',
        command: npx,
        args: [
            'ng',
            'update',
            '@angular/cli',
            '@angular/core',
            '@angular-devkit/build-angular',
            '@angular/cdk',
            '@angular-eslint/builder',
            'angular-eslint',
            '--allow-dirty',
            '--force'
        ]
    }
];

let failed = false;

for (const update of updates) {
    console.log(`\n=== Updating ${update.name} ===`);
    const result = spawnSync(update.command, update.args, {
        stdio: 'inherit',
        shell: process.platform === 'win32'
    });

    if (result.error || result.status !== 0) {
        failed = true;
        console.error(`Update failed: ${update.name}`);
    }
}

if (failed) {
    console.error(
        '\nOne or more update groups failed; keeping all completed changes.'
    );
    process.exitCode = 1;
} else {
    console.log('\nAll update groups completed successfully.');
}
