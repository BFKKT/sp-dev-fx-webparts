'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'ms-DetailsHeader' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'ms-DetailsHeader-cell' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'ms-List-cell' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'ms-DetailsRow' is not camelCase and will not be type-safe.`);

var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);

  result.set('serve', result.get('serve-deprecated'));

  return result;
};

build.initialize(gulp);
