import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appmaster';

  ngOnInit(){
    const script = document.createElement('script');
    script.src = `${environment.url_projects}/extrato/main-es2015.js`;
    document.body.appendChild(script);

    const script2 = document.createElement('script');
    script2.src = `${environment.url_projects}/pagamento/main-es2015.js`;
    document.body.appendChild(script2);

  }
}
