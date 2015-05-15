Package.describe({
  name: 'nucleuside:live-update-plus',
  version: '0.0.1',
  summary: 'Extension package for LiveUpdate for adding CSS/SASS/LESS etc. You probably don\'t need it, it\'s for Nucleus',
  git: 'https://github.com/NucleusIDE/meteor-live-update-plus',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.1");

  api.use([
    'underscore',
    'nucleuside:live-update@0.3.0',
    'nucleuside:transcompiler@0.0.1',
  ]);

  api.addFiles('js/live-update-plus.js');

  api.export(['LiveUpdate'], ['client']);
});
