import { NgModule, ModuleWithProviders } from '@angular/core';

import {
  DxPopupModule,
  DxValidationGroupModule,
  DxValidatorModule,
  DxButtonModule,
  DxTextBoxModule,
  DxNumberBoxModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxDateBoxModule,
  DxTemplateModule,
  DxChartModule,
  DxPieChartModule,
  DxListModule,
  DxTextAreaModule,
  DxProgressBarModule,
  DxFileUploaderModule,
  DxDropDownBoxModule,
  DxDataGridModule,
  DxSchedulerModule,
  DxRadioGroupModule,
  DxPopoverModule,
  DxTagBoxModule,
  DxAccordionModule,
  DxScrollViewModule,
  DxTooltipModule,
  DxTreeViewModule,
  DxColorBoxModule,
  DxHtmlEditorModule,
} from 'devextreme-angular';
import {HttpClientModule} from '@angular/common/http';
import {AnnotationPipe} from "./pipes/annotation.pipe";
import {CustomCurrencyPipe} from "./pipes/custom-currency.pipe";
import {CurrencyPipe} from "@angular/common";

const SHARED_MODULES = [
  HttpClientModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxTextBoxModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxValidatorModule,
  DxValidationGroupModule,
  DxPopupModule,
  DxDateBoxModule,
  DxTemplateModule,
  DxChartModule,
  DxPieChartModule,
  DxListModule,
  DxTextAreaModule,
  DxProgressBarModule,
  DxFileUploaderModule,
  DxDropDownBoxModule,
  DxDataGridModule,
  DxSchedulerModule,
  DxRadioGroupModule,
  DxPopoverModule,
  DxTemplateModule,
  DxTagBoxModule,
  DxAccordionModule,
  DxScrollViewModule,
  DxTooltipModule,
  DxTreeViewModule,
  DxColorBoxModule,
  DxHtmlEditorModule,
];

const SHARED_PROVIDERS = [
];

@NgModule({
  imports: [
    ...SHARED_MODULES,
  ],
  declarations: [
    AnnotationPipe,
    CustomCurrencyPipe
  ],
  exports: [
    ...SHARED_MODULES,
    AnnotationPipe,
    CustomCurrencyPipe
  ],
  providers: [
    AnnotationPipe,
    CurrencyPipe
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...SHARED_PROVIDERS],
    };
  }
}
