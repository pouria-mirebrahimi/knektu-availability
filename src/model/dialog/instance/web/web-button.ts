import { IButton } from './interface/button.interface';

export class WebButton implements IButton {
  render(): void {
    console.log('Web button rendering');
  }

  onClick(action: string): void {
    console.log(`Web button clicking ${action}`);
  }
}
