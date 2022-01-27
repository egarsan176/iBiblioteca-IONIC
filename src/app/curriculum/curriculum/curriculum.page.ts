import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../curriculum.service';
import { CvInterface } from '../cv-interface';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit {

  constructor(private cvService: CurriculumService) { }

  ngOnInit() {
    
  }

  //llama al método del servicio que devuelve el array de trabajos
  get jobs():CvInterface[]{
    return this.cvService.jobs;
  }

   //llama al método del servicio que devuelve el array de estudios
  get studies():CvInterface[]{
    return this.cvService.studies;
  }

   //llama al método del servicio que devuelve el array de estudios complementarios
  get extraStudies():CvInterface[]{
    return this.cvService.extraStudies;
  }

}
