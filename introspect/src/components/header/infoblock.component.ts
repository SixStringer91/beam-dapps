import { IFormState } from 'formProps';
import { Tags } from '../../constants/html_elements';
import { STORE } from '../../controllers/store.controller';
import { headerData } from '../../locales/header.data';
import BaseComponent from '../shared/base/base.component';
import './header.scss';

export default class InfoBlock extends BaseComponent {
  constructor() {
    super(Tags.TABLE, ['header__info']);
    const headerElemens = headerData.map((data) => {
      const component = new BaseComponent(Tags.TR, ['info__titles']);
      const title = new BaseComponent(Tags.TD, ['info__title']);
      const message = new BaseComponent(Tags.TD, ['info__data']);
      title.textContent = data.title;
      message.textContent = data.data;
      message.informForm = (state: IFormState) => data.callback(state, message);
      STORE.subscribe(message);
      component.append(title, message);
      return component;
    });
    this.append(...headerElemens);
  }
}
