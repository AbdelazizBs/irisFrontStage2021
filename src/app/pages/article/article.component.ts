import { Component, OnInit } from '@angular/core';
import {PersonnelServiceService} from '../../services/personnel-service.service';
import {Router} from '@angular/router';
import {ArticleServiceService} from '../../services/article-service.service';
import {ClientServiceService} from '../../services/client-service.service';
import {Article} from '../update-article/update-article.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  listArticle: any ;
  listClient: any ;
  id: any;
  idArticle: any;
  displayStyle = 'none';
  response: any;
  constructor(private  articleService: ArticleServiceService, private clientService: ClientServiceService , private router: Router) { }

  ngOnInit(): void {
    this.getListArticle();
this.getListClient();
  }
  updateArticle(myObj: any) {
    this.router.navigate(['/update-article' + '/' + myObj['id']]);
  }
  // open2ndPopup() {
  //   this.displayStyle = 'block';
  // }
  // close2ndPopup() {
  //   this.displayStyle = 'none';
  // }
  openPopup(idArticle: any) {
    this.displayStyle = 'block';
this.idArticle = idArticle;
  }
  addToClient(nomClient: any) {
    this.articleService.addToClient(this.idArticle, nomClient).subscribe((response: any) => {
       console.log(nomClient);
        console.log(this.idArticle);
        // this.open2ndPopup();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  closePopup() {
    this.displayStyle = 'none';
  }
  getListArticle() {
    this.articleService.getListArticles().subscribe((data: any) => {
      this.listArticle = data;
      console.warn('listArticle', this.listArticle);
    });
  }
  getListClient() {
    this.clientService.getNomClients().subscribe((data: any) => {
      this.listClient = data;
      console.warn('listClient', this.listClient);
    } );
  }

  delete(id: any) {
    this.articleService.delete(id).subscribe(
      (res) => {
        console.log(res);
        this.refreshListachines();
        this.router.navigate(['/article']);
      },
      err => {
        console.log(err);

      }
    );
  }
  refreshListachines() {
    this.articleService.getListArticles().subscribe(
      response => {
        this.listArticle = response;      }
    );
  }

}
