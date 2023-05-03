import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular'; // <-- import BuilderBlock
import { Character } from 'src/app/models/character.model';
import { DataService } from 'src/app/services/data.service';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
@Component({
  selector: 'app-cb-component',
  templateUrl: './cb-component.component.html',
  styleUrls: ['./cb-component.component.scss']
})
export class CbComponentComponent {
  @Input() name = ''; // <-- name Angular and Builder inputs the same 
  @ViewChild("sliderRef")
  sliderRef!: ElementRef<HTMLElement>;
  characters: Character[] = [];
  slider: KeenSliderInstance | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log('Hola onInit?');
    this.dataService.getCharacters().subscribe(characters => {
      this.characters = characters;
      console.log('Characters(? ', this.characters);
    });
  }

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slides: {
        perView: 2,
        spacing: 15,
      },
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
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