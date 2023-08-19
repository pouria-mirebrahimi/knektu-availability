import { IButton } from './interface/button.interface';

export abstract class Dialog {
  protected abstract createButton(): IButton;

  public render(): void {
    const button = this.createButton();
    button.onClick('close');
    button.render();
  }
}
