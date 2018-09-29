import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sm-my-lab',
  templateUrl: './my-lab.component.html',
  styles: []
})
export class MyLabComponent implements OnInit {
  get myName(): string {
    return this._myName + ' irgendwas';
  }

  private _myName = 'hans';

  changeName() {
    console.log('### changeName ...');
    if (this._myName === 'hans') {
      this._myName = 'JOCHEN';
    } else {
      this._myName = 'hans';
    }
  }

  ngOnInit(): void {
  }

}
