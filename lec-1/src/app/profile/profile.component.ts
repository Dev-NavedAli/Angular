import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "profile",
    imports: [],
    templateUrl: "./profile.component.html",
    styleUrl: "./profile.style.css"
})

export class ProfileComponent {

    constructor(private route: ActivatedRoute) { }

    userName: string | null = ""
    ngOnInit() {
        // this.userName = this.route.snapshot.paramMap.get('name')
        // console.log(this.userName);
        // this.route.queryParams.subscribe(params=>{
        //     this.userName = params['name'];
        // })

        this.route.data.subscribe(data=>{
            this.userName = data['name']
        })
    }

}