import { Component, OnInit } from '@angular/core';
import { ContentApprovalService } from 'src/app/services/content-approval.service';
import { Content } from 'src/app/models/Content';

@Component({
  selector: 'app-content-approval',
  templateUrl: './content-approval.component.html',
  styleUrls: ['./content-approval.component.css']
})
export class ContentApprovalComponent implements OnInit {

  statusMessage:string;
  contents:Content[];

  constructor(private _contentApprovalService:ContentApprovalService) { }

  ngOnInit() {
    this.getContents();
  }

  refresh(): void {
    window.location.reload();
}

//get items
getContents():void{
  this._contentApprovalService.getAllContent().
  subscribe((contentData) => this.contents = contentData,
                           (error) =>{console.log(error);
                           this.statusMessage = "Problem with service. Please try again later!";
                          }
  );
}

  //Approve Content
  approve(contentId:number):void{
    this._contentApprovalService.approve(contentId).
    subscribe((response) => {console.log(response);
                            this.getContents();
                            },
                            (error) => {
                              console.log(error);
                              this.statusMessage = "Problem with service. Please try again later.";
                            }
            );
            this.refresh();
  }

  //Deny Content
  deny(contentId:number):void{
    this._contentApprovalService.deny(contentId).
    subscribe((response) => {console.log(response);
                            this.getContents();
                            },
                            (error) => {
                              console.log(error);
                              this.statusMessage = "Problem with service. Please try again later.";
                            }
            );

            this.refresh();
  }

}
