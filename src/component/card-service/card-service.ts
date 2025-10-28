import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-service',
  imports: [],
  templateUrl: './card-service.html',
  styleUrl: './card-service.scss'
})
export class CardService {
  @Input() props: Partial<{
    title: string,
    description: string,
    image: string
  }> = {}

  title?: string
  description?: string
  image?: string

  ngOnInit() {
    const { title, description, image } = this.props
    this.title = title
    this.description = description
    this.image = image
  }


}
