import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup, NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dmfb-file-upload',
  templateUrl: './dmfb-file-upload.component.html',
  styleUrls: ['./dmfb-file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DmfbFileUploadComponent),
      multi: true,
    },
  ],
})
export class DmfbFileUploadComponent implements OnInit, ControlValueAccessor {

  percentage = 0;
  @Input() pathFolder = 'service';
  @Input() isRequired = false;
  @Input() fieldCount = 5;

  form: FormGroup;
  onChange;
  onTouched;
  value = '';
  fileField;
  downloadURL;
  fileToUploadId = 'file-to-upload-' + uuid();
  loading = false;
  validateFn: any = () => {};

  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.fileField = new FormControl(
      this.value, [
        //
      ],
    );

    if (this.isRequired) {
      this.fileField.setValidators([Validators.required]);
    } else {
      this.fileField.setValidators([]);
    }

    this.form = new FormGroup({
      fileField: this.fileField,
    });
  }

  uploadFile(file) {

    this.loading = true;

    this.percentage = 0;

    // get file
    const file1 = file.files[0];

    console.log(file1.name);

    // // create storage ref
    // const storageRef = firebase.storage().ref(this.pathFolder + '/' + file1.name);
    //
    // // Upload file
    // const task = storageRef.put(file1);
    //
    // // Upload progress bar
    // task.on('state_changed',
    //   (snapshot: any) => {
    //     this.percentage = (task.snapshot.bytesTransferred / task.snapshot.totalBytes) * 100;
    //   },
    //   (error) => {
    //     console.log(error);
    //     this.loading = false;
    //   },
    //   () => {
    //     console.log('complete');
    //     storageRef.getDownloadURL().then((downloadURL) => {
    //       // this.value = downloadURL;
    //       this.downloadURL = downloadURL;
    //       this.onChange(downloadURL);
    //     });
    //     this.loading = false;
    //   }
    // );
  }

  writeValue(value) {
    if (value === '') {
      value = '';
    }
    this.value = value;
    console.log('write vlue:', value);
    this.downloadURL = value;
    this.form.get('fileField').setValue(this.value);
  }

  validate(c: FormControl) {
    return this.isRequired ? Validators.required : null;
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  /*onInputChange(value) {
    this.onChange(value);
  }*/

}
