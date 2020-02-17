import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';


const { SplashScreen } = Plugins
const { Storage} = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
   
    private navCtrl : NavController
  ) {
    this.initializeApp();
    this.getBarber();
  }
  async getBarber() {
    const ret = await Storage.get({ key: 'barber' });
    const user = JSON.parse(ret.value);
    if(user){
      this.navCtrl.navigateRoot('/orders',{animated:true});
    }
  }
  initializeApp() {
    SplashScreen.show({
      showDuration: 500,
      autoHide: true
    });

  }	  
}
