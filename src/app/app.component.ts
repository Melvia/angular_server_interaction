import { Component} from '@angular/core';
import { HttpService} from './http.service';
    
@Component({
    selector: 'app-root',
    template: `<div *ngIf="done">Сумма = {{sum}}</div>
    <div class="form-group">
        <label>Введите первое число</label>
        <input class="form-control" type="number" name="num1" [(ngModel)]="num1" />
    </div>
    <div class="form-group">
        <label>Введите второе число</label>
        <input class="form-control" type="number" name="num2" [(ngModel)]="num2" />
    </div>
    <div class="form-group">
        <button class="btn btn-default" (click)="submit()">Отправить</button>
    </div>`,
    providers: [HttpService]
})
export class AppComponent { 
  name = "Natali";
  num1: number = 0;
  num2: number = 0;
  sum: number | undefined;
  done: boolean = false;
  constructor(public httpService: HttpService){}
  submit(){
      this.httpService.getSum(this.num1, this.num2).subscribe((data:any) => {
          this.sum=data.result; 
          this.done=true;
      });
  }
}