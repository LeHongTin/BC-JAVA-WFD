import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fonnt-size-editor',
  templateUrl: './fonnt-size-editor.component.html',
  styleUrls: ['./fonnt-size-editor.component.css']
})
export class FonntSizeEditorComponent implements OnInit {

  public fontSize: number;
  onChange(numb) {
    this.fontSize = numb;
  }

  constructor() { }

  ngOnInit() {
  }

}
