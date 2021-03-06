import { FormGroup } from '@angular/forms';

export interface Appform {
  setFormGroup(): FormGroup;
  onSubmit(): void;
  isFiledHasError?(field: string | Array<string>): string;
  isFiledHasErrorWithRule?(
    field: string | Array<string>,
    ruleName: string
  ): boolean;
}
