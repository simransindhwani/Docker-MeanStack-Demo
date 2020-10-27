import { Component, OnInit } from '@angular/core';
import {CheckboxControlValueAccessor, FormsModule} from '@angular/forms';
import {OperationsService} from '../../services/operations.service';
import {Comments} from '../../classes/comments';
import { CompileSummaryKind } from '@angular/compiler';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  buttonClick: boolean=false;
  email: any;
  message: any;
  log(x){console.log(x);}
  lstcomments=[];

  constructor(private _operations:OperationsService) { }

  ngOnInit(): void {
  }
  onClickSend(email,comments)
  {
  this.buttonClick=false;
  let data={
    "email":email,
    "message":comments
    }
    if(data.email==""||data.message=="")
    {
      alert("Enter Valid Input");
    }
    else
    {
      alert("Success!");


    }
    console.log("Data from Angular TS to Service",data);
    this._operations.insertValues(data)
    .subscribe(
      data=>{




      }
    );


  }
  onClickView()
  {
    this.buttonClick=true;
    //this.myform.reset();
    this._operations.getComments()
    .subscribe(
      data=>{
        if(data.status==true){
          this.lstcomments=data.message;
          console.log("Data:",data);
          //this.email=data.Email;
          //this.message=data.Message;
          //console.log("Email:",this.email,this.message);
        }
        else{alert('Error Occured');}
      }
    );
  }


}
