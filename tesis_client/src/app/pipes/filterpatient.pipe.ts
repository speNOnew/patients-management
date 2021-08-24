import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpatient'
})
export class FilterpatientPipe implements PipeTransform {

  transform(value: any[], args: string): any[] 
  {
    if (!args) 
    {
    	return value;
    }
    else
    {
		return value.filter((x:any) => String(x.ci).toLowerCase().startsWith(args.toLowerCase()) );
    }
  }

}
