import { Injectable } from '@angular/core';
import { CvInterface } from './cv-interface';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  private _cvWork: CvInterface[] = [
    {
      fecha: '2019-2020',
      empresa: 'SECURITAS S.A.',
      puesto: 'Auxiliar de Seguridad en ECI'
    },
    {
      fecha: '2018-2019',
      empresa: 'STAR SERVICIOS AUXILIARES S.L.',
      puesto: 'Auxiliar de Seguridad en eventos'
    },
    {
      fecha: '2017',
      empresa: 'CENTRO DE ENSEÑANZA FORPER',
      puesto: 'Monitora de Inglés extraescolar'
    }
    
  ];

  private _cvStudies: CvInterface[] = [
    {
      fecha: '2020-2022',
      empresa: 'IES JACARANDÁ',
      puesto: 'CFGS Desarrollo de Aplicaciones Web'
    },
    {
      fecha: '2011-2016',
      empresa: 'UNIVERSIDAD DE SEVILLA',
      puesto: 'Grado en Educación Infantil'
    },
    {
      fecha: '2009-2011',
      empresa: 'IES LOS VIVEROS',
      puesto: 'CFGS Prótesis Dental'
    }
    
  ];

  private _cvExtra: CvInterface[] = [
    {
      fecha: '2022',
      empresa: 'OPENWEBINARS',
      puesto: 'Curso de Angular para principiantes'
    },
    {
      fecha: '2022',
      empresa: 'OPENWEBINARS',
      puesto: 'Hibernate y JPA'
    },
    {
      fecha: '2021',
      empresa: 'OPENWEBINARS',
      puesto: 'Bootstrap 4: Maquetación Responsive y Layout'
    },
    {
      fecha: '2021',
      empresa: 'UDEMY',
      puesto: 'Learn to code in Python 3'
    }
    
  ];
  

  constructor() { }

  //devuelve una copia del array de trabajos
  get jobs():CvInterface[]{
    return [...this._cvWork];
  }

  //devuelve una copia del array de estudios
  get studies():CvInterface[]{
    return [...this._cvStudies];
  }

  //devuelve una copia del array de estudios complementarios
  get extraStudies():CvInterface[]{
    return [...this._cvExtra];
  }

}
