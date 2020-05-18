import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook";

declare const cordova;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private fb: Facebook,
    private platform: Platform
  ) {

    // if (cordova.plugins)  {
    // } else {
    //   console.log('codeplayfacebookads not exist');
    // }

    this.platform.ready().then( () => {
      console.log('codeplayfacebookads exist', JSON.stringify(cordova.plugins.codeplayfacebookads));
    })

  }

  async facebookLogin() {

    console.log('Login Facebook');
    try {
      const resp = await this.fb.login(['email', 'public_profile']);
      console.log('Logged into Facebook!', JSON.stringify(resp));
      const profile =  await this.fb.api(`me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)`, [])
      const userData = {email: profile[`email`], first_name: profile[`first_name`], picture: profile[`picture_large`][`data`][`url`], username: profile[`name`] }

      console.log('Facebook Api Resp', JSON.stringify(userData));
    } catch (e) {
      console.log('Error logging into Facebook', e);
    }
  }

  async facebookLogout() {
    await this.fb.logout()
  }
}
