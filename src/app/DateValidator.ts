import { AbstractControl, FormControl } from '@angular/forms';

export function DateValidator(control: AbstractControl):{[s:string]:boolean}{
    const currentDate = new Date();
    currentDate.setHours(0,0,0,0);
    const [year, month, day] = control.value.split('-');
    const controlDate = new Date(year, month-1, day); //Javascript date starts at 0

    // console.log(currentDate);
    // console.log(controlDate + year + month + day);
    if(controlDate.getTime() < currentDate.getTime()) {
        return {'dateinpast':true};
    }
    return null;
}