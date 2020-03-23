import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// @IonicPage()
@Component({
  selector: "app-feed",
  templateUrl: "./feed.page.html",
  styleUrls: ["./feed.page.scss"]
})
export class FeedPage {
  public films: Observable<any>;
  // private url_base: string = 'https://swapi.co/api/films';

  constructor(
    public navCtrl: NavController,
    public httpClient: HttpClient
  ) {
    const url_base: string =
      this.getBaseApiPath() + "/movie/popular" + this.getApiKey();
    this.films = this.httpClient.get(url_base);
  }

  getBaseApiPath(): string {
    return "https://api.themoviedb.org/3";
  }

  getApiKey(): string {
    return "?api_key=YOUR API HERE";
  }
}
