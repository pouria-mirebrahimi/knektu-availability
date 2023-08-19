import { Dialog } from './abstract/dialog';
import { IButton } from './interface/button.interface';
import { WindowsButton } from './win-button';

export class WindowsDialog extends Dialog {
  protected createButton(): IButton {
    return new WindowsButton();
  }
}
