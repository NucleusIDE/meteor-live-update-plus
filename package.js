Package.describe({
  name: 'nucleuside:live-update-plus',
  version: '0.0.1',
  summary: 'Extension package for LiveUpdate for adding CSS/SASS/LESS etc. You probably don\'t need it, it\'s for Nucleus',
  git: 'https://github.com/NucleusIDE/meteor-live-update-plus',
  documentation: 'README.md'
});

Npm.depends({
  'recursive-readdir': '1.2.1'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.1");

  api.use([
    'underscore',
    'reactive-var',
    'tracker', 'deps',
    'nucleuside:live-update@0.3.1',
    'nucleuside:transcompiler@0.0.1',
  ]);

  api.add_files([
    'js/utils.js'
  ]);

  api.addFiles([
    'js/css-update.js',
    'js/live-update-plus.js',
  ], 'client');

  api.addFiles([
    'js/server/package_collector.js',
    'js/server/css_collector.js',
  ], ['server']);

  api.export(['LiveUpdate'], ['client']);
});
