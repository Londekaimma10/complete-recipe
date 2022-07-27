import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AuthService, AuthResponseData } from "./auth.service";
import { AlertComponent } from "../shared/alert.component";
import { PlaceHolderDirective } from "../placeholder/placeholder.directive";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent implements OnDestroy{
    isLoginMode = true;
    isLoading = false;
    error: any = null;
    @ViewChild(PlaceHolderDirective) alertHost!: PlaceHolderDirective;

    private closeSub!: Subscription;
    constructor(private authService: AuthService,
        private router: Router, private componentFactoryResolver: ComponentFactoryResolver){}

        ngOnDestroy(): void {
        if(this.closeSub){
            this.closeSub.unsubscribe();
        }
    }

        onHandleError(){
            this.error = null;
        }

        private showErrorAlert(message: String){
          //const alertCmp = new AlertComponent();
         const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
            AlertComponent);
            const hostViewContainerRef = this.alertHost.viewContainerRef;
            hostViewContainerRef.clear();

          const componentRef =  hostViewContainerRef.createComponent(alertCmpFactory);
          componentRef.instance.message = message;
         this.closeSub = componentRef.instance.close.subscribe(() => {
           this.closeSub.unsubscribe();
           hostViewContainerRef.clear();
          });
         }
        
        onSwitchMode(){
            this.isLoginMode = !this.isLoginMode;
        }
        
    
        onSubmit(form: NgForm){
            if(!form.valid){
                return;
            }
         
      const email = form.value.email;
      const password = form.value.password;
      
      this.isLoading= true;

      let authObs: Observable<AuthResponseData>;


      if(this.isLoginMode){
      authObs =  this.authService.login(email, password);
      }

      else{
       authObs= this.authService.signUp(email, password);
      }
 
      authObs.subscribe(
            resData => {
             console.log(resData);       
             this.router.navigate(['/recipes']);
            },
            errorMessage => {
            console.log(errorMessage); 
            this.error = errorMessage;
            this.showErrorAlert(errorMessage);
            this.isLoading = false;
            }
            );
                
            form.reset();
        } 
   
         } 


