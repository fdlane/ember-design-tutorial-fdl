import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service
  intl;

  @service
  theme;

  beforeModel() {
    this.intl.setLocale('en-us');
    this.theme.setTheme('dark');
    this.theme.load();
  }
}
