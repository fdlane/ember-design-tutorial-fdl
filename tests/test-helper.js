import { setApplication } from '@ember/test-helpers';
import Application from 'ember-design-tutorial-fdl/app';
import config from 'ember-design-tutorial-fdl/config/environment';
import { start } from 'ember-qunit';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
