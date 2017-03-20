//@flow
import { Meteor } from 'meteor/meteor';
import { test } from './import/test-module';

Meteor.startup(function() {
  console.log(test());
});
