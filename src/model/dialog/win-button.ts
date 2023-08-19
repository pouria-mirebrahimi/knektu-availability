import { IButton } from './interface/button.interface';

export class WindowsButton implements IButton {
  render(): void {
    console.log('windows button rendering');
  }

  onClick(action: string): void {
    console.log(`windows button clicking: ${action}`);
  }
}
