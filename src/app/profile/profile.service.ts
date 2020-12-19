import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Java',
      'progress': '95%'
    },
    {
      'id': '2',
      'skill': 'PHP\/CODEIGNITER',
      'progress': '60%'
    },
    {
      'id': '3',
      'skill': 'C++',
      'progress': '85%'
    },
    {
      'id': '4',
      'skill': 'PYTHON',
      'progress': '60%'
    },
    {
      'id': '5',
      'skill': 'ADOBE ILLUSTRATOR',
      'progress': '80%'
    },
    {
      'id': '6',
      'skill': 'DATA STRUCTURE',
      'progress': '70%'
    }
  ];

  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2019 - 2021',
      'education': 'Master\'s Degree',
      'stream': 'Master of Science, Computer Science',
      'institution': 'Western Illinois University'
    },
    {
      'id': '2',
      'from_to_year': '2016 - 2020',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Science, Computer Science',
      'institution': 'Western Illinois University'
    }
  ];

  exprienceData: any = [
    {
      'id': '1',
      'from_to_month_year': ' - ',
      'organization': '',
      'designation': '',
      'details': ''
    },
    {
      'id': '2',
      'from_to_month_year': ' - ',
      'organization': '',
      'designation': '',
      'details': ''
    }
  ];
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
