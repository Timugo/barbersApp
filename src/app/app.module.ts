import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { environment } from 'src/environments/environment';
//This is used to deploy and PWA
import { ServiceWorkerModule } from '@angular/service-worker';

//socket io implementation
//import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
 



//this url change depends which enviroment (development or production)
const URL_API = environment.url;
//import the socket io configuration 
//const config: SocketIoConfig = { url: URL_API+':8000', options: {} };
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    //SocketIoModule.forRoot(config)
  ],
  providers: [
    //StatusBar,
    //SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
