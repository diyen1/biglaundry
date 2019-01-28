import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CrudField} from '../../crud-field';

@Component({
  selector: 'dm-crud-create-multistep',
  templateUrl: './crud-create-multistep.component.html',
  styleUrls: ['./crud-create-multistep.component.scss']
})
export class CrudCreateMultistepComponent implements OnInit, OnChanges, AfterViewInit {

  form: any;
  fieldsLoaded = false;
  currentStep = 0;

  // @Input() fields: CrudField[] = [];
  @Input() fields = {
    type: 'multistep',
    tabs: []
  };

  @Input() submitButtonText = 'Submit';

  @Input() loading = false;

  @Output() outputData: any = new EventEmitter<any>();

  // @ViewChild(AdDirective) adHost: AdDirective;

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef;

  controlsConfig = {};

  constructor(private fb: FormBuilder, public componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  ngAfterViewInit() {
    // const factory = this.componentFactoryResolver.resolveComponentFactory(CheckoutConfirmationComponent);
    // console.log(this.myRef);
    // const ref = this.myRef.createComponent(factory);
    // ref.changeDetectorRef.detectChanges();

    this.loadComponent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initializeForm();
  }

  initializeForm(): void {

    for (let i = 0; i < this.fields.tabs.length; i++) {
      for (let j = 0; j < this.fields.tabs[i].fields.length; j++) {
        const field = this.fields.tabs[i].fields[j];

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
          this.controlsConfig[field.key] = [value]; //  , Validators.required
        }
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

    this.fieldsLoaded = true;
  }

  onSubmit(formData) {

    for (let i = 0; i < this.fields.tabs.length; i++) {
      for (let j = 0; j < this.fields.tabs[i].fields.length; j++) {
        const field = this.fields.tabs[i].fields[j];

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
    }
    this.outputData.emit(formData);
  }

  loadComponent() {
    // this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    // let adItem = this.ads[this.currentAdIndex];

    // let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    // let viewContainerRef = this.adHost.viewContainerRef;
    // viewContainerRef.clear();

    // let componentRef = this.myRef.createComponent(componentFactory);
    // (<AdComponent>componentRef.instance).data = adItem.data;

    for (let i = 0; i < this.fields.tabs.length; i++) {
      for (let j = 0; j < this.fields.tabs[i].fields.length; j++) {
        const field = this.fields.tabs[i].fields[j];
        if (field.type === 'component') {
          const factory = this.componentFactoryResolver.resolveComponentFactory(field.component);
          const ref = this.myRef.createComponent(factory);
          ref.changeDetectorRef.detectChanges();
        }
      }
    }
  }

  getActiveClass(i) {
    return (i === this.currentStep) ? 'active' : '';
  }

  jumpTo(step) {
    this.currentStep = step;
  }

  prev() {
    this.currentStep --;
  }

  next() {
    this.currentStep ++;
  }

  displayPrev() {
    return !!(this.currentStep !== 0);
  }

  displayNext() {
    return !!(this.currentStep !== this.fields.tabs.length - 1 && this.fields.tabs.length > 1);
  }

  displaySubmit() {
    return !!(this.fields.tabs.length === 1 || this.currentStep === this.fields.tabs.length - 1);
  }

  fileAddedCallback() {
    console.log('file added callback');
  }

}
