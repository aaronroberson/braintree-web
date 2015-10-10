// Package metadata file for Meteor.js
var packageName = 'aaronroberson:braintree-web';
var where = 'client';
var version = '2.14.2';
var summary = 'A suite of tools for integrating Braintree in the browser.';
var gitLink = 'https://github.com/aaronroberson/braintree-web';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

  api.addFiles(['dist/braintree.js'], where);
}); 