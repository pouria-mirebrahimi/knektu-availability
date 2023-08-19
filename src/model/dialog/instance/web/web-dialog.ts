import { Dialog } from '../../dialog';
import { IButton } from '../../interface/button.interface';
import { WebButton } from './web-button';

export class WebDialog extends Dialog {
  protected createButton(): IButton {
    return new WebButton();
  }
}
