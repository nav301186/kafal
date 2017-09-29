import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { SearchResultPage} from '../pages/search-result/search-result';
import {RegistrationDetailsPage} from '../pages/registration-details/registration-details';
import {EducationalDetailsPage} from '../pages/educational-details/educational-details';
import {MePage} from '../pages/me/me';
import {EducationalDetailsComponent} from '../components/educational-details/educational-details';
import {BasicDetailsComponent} from '../components/basic-details/basic-details';
import { LoginPage } from '../pages/login/login';
import { LoginFormPage } from '../pages/login-form/login-form';
import { ProfilePage } from '../pages/profile/profile';
import { ChatWindowPage } from '../pages/chat-window/chat-window';
import { AgePage } from '../pages/age/age';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginPage,
        LoginFormPage,
        ProfilePage,
        SearchPage,
        SearchResultPage,
        EducationalDetailsComponent,
        BasicDetailsComponent,
        ChatWindowPage,
        RegistrationDetailsPage,
        AgePage,
        EducationalDetailsPage,
        MePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginPage,
        LoginFormPage,
        ProfilePage,
        SearchPage,
        SearchResultPage,
        ChatWindowPage,
        RegistrationDetailsPage,
        AgePage,
        EducationalDetailsPage,
        MePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
