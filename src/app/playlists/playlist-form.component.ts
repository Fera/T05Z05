import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'playlist-form',
  template: `
        <div>
          <div class="form-group">
            <label>Nazwa:</label>
            <input type="text" [(ngModel)]="playlist.name" class="form-control">
          </div>
          <div class="form-group">
            <label>Utwory:</label>
            <input type="text" [value]="playlist.tracks + ' utwory'" disabled class="form-control">
          </div>
          <div class="form-group">
            <label>Kolor:</label>
            <input type="color" [(ngModel)]="playlist.color">
          </div>
          <div class="form-group">
            <label><input type="checkbox" [(ngModel)]="playlist.favourite"> 
            Ulubiona</label>
          </div>
          <div class="form-group">
            <button class="btn btn-success float-right" (click)="save(playlist)">Zapisz</button>
          </div>
        </div>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  play;

  @Input()
  set playlist(val){
    this.play = Object.assign({},val);    
  };

  get playlist(){
    return this.play;
  }


  @Output("save")
  saved = new EventEmitter();

  save(e){
    this.saved.emit(Object.assign({},e));
  }

  constructor() { }

  ngOnInit() {
  }

}
