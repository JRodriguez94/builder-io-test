import { Component, Input } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular'; // <-- import BuilderBlock
import { Character } from 'src/app/models/character.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cb-component',
  templateUrl: './cb-component.component.html',
  styleUrls: ['./cb-component.component.scss']
})
export class CbComponentComponent {
  @Input() name = ''; // <-- name Angular and Builder inputs the same 
  characters: Character[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log('Hola onInit?');
    this.dataService.getCharacters().subscribe(characters => {
      this.characters = characters;
      console.log('Characters(? ', this.characters);
    });
  }

}


// Register your custom component with BuilderBlock
BuilderBlock({
  tag: 'app-cb-component', // <-- use the component selector here
  name: 'Custom BuilderIo Component',
  inputs: [
    {
      name: 'name', // <-- this name matches the Angular @Input() above
      type: 'string',
    },
  ],
})(CbComponentComponent);