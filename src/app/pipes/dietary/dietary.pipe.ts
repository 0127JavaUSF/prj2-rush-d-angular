import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dietary'
})
export class DietaryPipe implements PipeTransform {

  transform(value: any): any {
    
    let dietary;

    switch(value){
      case "VG": status = "Vegan"; break;
      case "NF": status = "Nut-Free"; break;
      case "DF": status = "Dairy-Free"; break;
      case "GF": status = "Gluten-Free"; break;
    }
    
    return dietary;
  }

}