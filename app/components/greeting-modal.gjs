import { action } from '@ember/object';
import Component from "@glimmer/component";
import { tracked } from '@glimmer/tracking';
import { Button, Modal } from '@nrg-ui/core';

export default class GreetingModal extends Component {
  @tracked
  isGreetingOpen = false;

  @action
  closeGreeting() {
    this.isGreetingOpen = false;
  }

  @action
  sayHi() {
    this.isGreetingOpen = true;
  }

  <template>
    <Button
      class="bg-primary text-white"
      @text="Say Hi"
      @onClick={{this.sayHi}}
    />
    <Modal
      @isOpen={{this.isGreetingOpen}}
      @dismissible={{true}}
      @onDismiss={{this.closeGreeting}}
    >
      <:header>
        <p>Hey there!</p>
      </:header>
      <:default>
          <p>I hope you're enjoying this tutorial on using our wonderful open source libraries!</p>
      </:default>
      <:footer>
      <p>Have a great day!</p>
      </:footer>
    </Modal>
  </template>
}
