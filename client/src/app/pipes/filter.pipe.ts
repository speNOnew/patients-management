import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCite'
})
export class FilterPipe implements PipeTransform {

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
