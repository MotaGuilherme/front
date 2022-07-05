import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MesagesService } from 'src/app/services/mesages.service';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent implements OnInit {

  btnText = 'Compartilhar!';

  constructor(
    private momentService: MomentService,
    private mesageService: MesagesService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  async createHandle(moment: Moment){
    const formData = new FormData()
     formData.append('title', moment.title);
     formData.append('description', moment.description);

     if(moment.image) {
      formData.append('image', moment.image);
     }
      
    // todo

    //enviar para o service
     await this.momentService.createMoment(formData).subscribe();


    //exibir msg
     this.mesageService.add('Momento adicionado com sucesso!');


    //redirect
    this.router.navigate(['/'])
  }

}
