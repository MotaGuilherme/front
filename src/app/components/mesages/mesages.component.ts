import { Component, OnInit } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { MesagesService } from 'src/app/services/mesages.service';

@Component({
  selector: 'app-mesages',
  templateUrl: './mesages.component.html',
  styleUrls: ['./mesages.component.css']
})
export class MesagesComponent implements OnInit {
  faTimes = faTimes;
  constructor(
    public messagesService: MesagesService
    ) { 


    }

  ngOnInit(): void {
  }

}
