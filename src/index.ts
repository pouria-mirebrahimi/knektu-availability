import moment from 'moment-timezone';
import { WindowsDialog } from './model/dialog/win-dialog';
import { WebDialog } from './model/dialog/web-dialog';
import { Dialog } from './model/dialog/abstract/dialog';

const dateTime = moment.tz(
  'May 30th 2023 8:30PM',
  'MMM Do YYYY h:mA',
  'Asia/Tehran',
);
console.log(moment().startOf('minutes').from(dateTime));

const webDialog: Dialog = new WebDialog();
webDialog.render();

const windowsDialog: Dialog = new WindowsDialog();
windowsDialog.render();
