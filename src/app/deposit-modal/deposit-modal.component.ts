import { Component, Input} from '@angular/core';
import { FormBuilder, Validators,  FormControl, CheckboxRequiredValidator, CheckboxControlValueAccessor } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
})
export class DepositModalComponent {

  @Input() method: string;
  inputvalue: null;
  moncashForm = this.formBuilder.group({
    ownername: ['', [Validators.required]],
    moncashnumber: ['', [Validators.required, Validators.pattern('^[0-9]{8}(?:-[0-9]{4})?$')]],
    ownnumber: [false]
  });
  more = false;

  constructor(private formBuilder: FormBuilder, private modalcontroller: ModalController) { }
  getOwnnumber(){
    return this.moncashForm.get('ownnumber');
  }
  modalDismiss(){
    this.modalcontroller.dismiss(null, 'cancelled');
  }
  validation(){
    this.modalcontroller.dismiss(this.moncashForm.value, 'value');
  }
  seeMore(){
    this.more = true;
  }
  seeLess(){
    this.more = false;
  }
  checked(){
    if (this.getOwnnumber().value === true){
      this.inputvalue = null;
      return true;
    }else{
      return false;
    }
  }
}
