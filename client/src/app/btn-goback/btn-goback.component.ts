import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-goback',
  templateUrl: './btn-goback.component.html',
  styleUrls: ['./btn-goback.component.css']
})
export class BtnGobackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack()
  {
    window.history.back();
  }

}
