import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-galaxias',
  standalone: true,
  templateUrl: './galaxias.component.html',
  styleUrls: ['./galaxias.component.css'],
  imports: [CommonModule]
})
export class GalaxiasComponent implements OnInit {
  galaxias: any[] = [];
  imagenSeleccionada: string | null = null;

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getGalaxies().subscribe((response) => {
      this.galaxias = response.collection.items;
    });
  }

  mostrarImagen(galaxia: any): void {
    this.imagenSeleccionada = galaxia.links?.[0]?.href || null;
  }
}
