import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CrudField} from '../../crud-field';

@Component({
  selector: 'dm-crud-create-normal',
  templateUrl: './crud-create-normal.component.html',
  styleUrls: ['./crud-create-normal.component.scss']
})
export class CrudCreateNormalComponent implements OnInit, OnChanges {

  form: any;

  @Input() fields: CrudField[] = [];

  @Input() submitButtonText = 'Submit';

  @Input() loading = false;

  @Output() outputData: any = new EventEmitter<any>();

  controlsConfig = {};

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initializeForm();
  }

  initializeForm(): void {

    for (let i = 0; i < this.fields.length; i++) {
      const field = this.fields[i];

      if (field.type === 'image_array') {

        const imageCount = field.image_count;

        for (i = 0; i < imageCount; i++) {
          let value = '';
          if (field.value && field.value[i]) {
            value = field.value[i];
          }
          this.controlsConfig[field.key + '_' + i] = [value];
        }
      } else {
        const value = field.value || '';
        this.controlsConfig[field.key] = [value, Validators.required];
      }
    }

    /*this.form = this.fb.group({
      fullNames: ['', Validators.required],
      mobilePhone: ['', Validators.required],
      homePhone: ['', Validators.required],
      town: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
    });*/

    this.form = this.fb.group(this.controlsConfig);
  }

  onSubmit(formData) {

    for (let i = 0; i < this.fields.length; i++) {
      const field = this.fields[i];

      if (field.type === 'image_array') {
        const imageCount = field.image_count;
        formData[field.key] = [];
        for (i = 0; i < imageCount; i++) {
          if (formData[field.key + '_' + i] !== '') {
            formData[field.key].push(formData[field.key + '_' + i]);
          }
          delete formData[field.key + '_' + i];
        }
      }
    }
    this.outputData.emit(formData);
  }

  fileAddedCallback() {
    console.log('file added callback');
  }

}
