import { NgModule} from "@angular/core";
import { HttpClient,HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { tokenservice } from "../services/token.service";
import { authFilter } from "../auth/auth.filter";

@NgModule({
    imports:[CommonModule,HttpClientModule,HttpClient],
    providers:[tokenservice,{
        provide:HTTP_INTERCEPTORS,
        useClass:authFilter,
        multi:true
    }],

})
export class TokenModule{}