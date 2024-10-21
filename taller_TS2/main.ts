import { Serie } from './serie.js';
import { dataSeries } from './dataSeries.js';

let coursesTbody: HTMLElement = document.getElementById('series')!;
const promedioTemporadasElm: HTMLElement = document.getElementById("promedio-temporadas")!;
const seriesCard: HTMLElement = document.getElementById('series-card')!;
const seriesPoster: HTMLImageElement = document.getElementById('series-poster') as HTMLImageElement;
const seriesName: HTMLElement = document.getElementById('series-name')!;
const seriesDescription: HTMLElement = document.getElementById('series-description')!;
const seriesLink: HTMLAnchorElement = document.getElementById('series-link') as HTMLAnchorElement;

renderCoursesInTable(dataSeries);
promedioTemporadasElm.innerHTML = `${getPromedioTemporadas(dataSeries)}`

function renderCoursesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.nombre}</td>
                           <td>${serie.canal}</td>
                           <td>${serie.temporadas}</td>`; 
    trElement.addEventListener('click', () => showSeriesDetails(serie));                       
    coursesTbody.appendChild(trElement);

  });
}
function showSeriesDetails(serie: Serie): void {
  seriesPoster.src = serie.poster;
  seriesName.textContent = serie.nombre;
  seriesDescription.textContent = serie.descripcion;
  seriesLink.href = serie.link;
  seriesLink.textContent = serie.link;
}
function getPromedioTemporadas(series: Serie[]): number {
  let totalTemporadas: number = 0;
  series.forEach((serie) => totalTemporadas = totalTemporadas + serie.temporadas);
  return totalTemporadas / series.length;
}