import { IState } from 'AppStateProps';
import { APIResponse } from 'beamApiProps';
import { Tags } from '../../constants/tags';
import BaseComponent from '../base/base.component';
import Button from '../shared/button/button.component';
import './menu.scss';
import Greeting from '../greeting/greeting.component';
import { MenuBtn } from '../../constants/app';
import { Store } from '../../logic/store/state_handler';
import { menuProps } from '../../constants/buttons';

export default class Menu extends BaseComponent {
  greeting: Greeting;

  buttons: Map<MenuBtn, Button>;

  constructor() {
    super(Tags.DIV, ['menu']);
    Store.addObservers(this);
    this.greeting = new Greeting();
    this.buttons = new Map();
    menuProps.forEach((btn) => {
      this.buttons.set(btn.key, this.buttonBuilder(btn));
    });
    const values = this.buttons.values();
    this.append(this.greeting, ...values);
  }

  buttonBuilder = (btn: typeof menuProps[number]):Button => {
    const btnKey = new Button(btn);
    return btnKey;
  };

  getBtn = (btn:MenuBtn):Button => this.buttons.get(btn) as Button;

  removeActive = (): void => {
    this.classList.remove('active');
    this.buttons.forEach((value) => {
      value.setDisplay = false;
    });
    this.greeting.element.style.display = 'flex';
  };

  addActive = (): void => {
    this.classList.add('active');
    this.buttons.forEach((value, key) => {
      value.setDisplay = key === MenuBtn.RETURN;
    });
    this.greeting.element.style.display = 'none';
  };

  inform = (res:APIResponse):void => {
    switch (res.id) {
      default:
        break;
    }
  };

  appInform = (state: IState): void => {
    const { isTx } = state.info;
    const activeGame = state.info.has_active_game;
    const bet = Store.getState().cid.max_bet;
    if (!this.classList.contains('active')) {
      if (isTx) {
        this.getBtn(MenuBtn.NEW).setDisplay = false;
        this.getBtn(MenuBtn.CONTINUE).setDisplay = false;
      } else {
        if (bet) {
          this.getBtn(MenuBtn.NEW).setDisplay = true;
        }
        if (!bet) {
          this.getBtn(MenuBtn.CONTINUE).setDisplay = true;
        } else this.getBtn(MenuBtn.CONTINUE).setDisplay = activeGame;
      }
      this.getBtn(MenuBtn.OPTIONS).setDisplay = true;
      this.getBtn(MenuBtn.BEST).setDisplay = true;
      this.getBtn(MenuBtn.DONATE).setDisplay = true;
    }
  };
}
