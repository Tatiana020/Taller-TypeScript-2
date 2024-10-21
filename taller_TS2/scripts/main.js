import { dataSeries } from './dataSeries.js';
var coursesTbody = document.getElementById('series');
var promedioTemporadasElm = document.getElementById("promedio-temporadas");
var seriesCard = document.getElementById('series-card');
var seriesPoster = document.getElementById('series-poster');
var seriesName = document.getElementById('series-name');
var seriesDescription = document.getElementById('series-description');
var seriesLink = document.getElementById('series-link');
renderCoursesInTable(dataSeries);
promedioTemporadasElm.innerHTML = "".concat(getPromedioTemporadas(dataSeries));
function renderCoursesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.nombre, "</td>\n                           <td>").concat(serie.canal, "</td>\n                           <td>").concat(serie.temporadas, "</td>");
        trElement.addEventListener('click', function () { return showSeriesDetails(serie); });
        coursesTbody.appendChild(trElement);
    });
}
function showSeriesDetails(serie) {
    seriesPoster.src = serie.poster;
    seriesName.textContent = serie.nombre;
    seriesDescription.textContent = serie.descripcion;
    seriesLink.href = serie.link;
    seriesLink.textContent = serie.link;
}
function getPromedioTemporadas(series) {
    var totalTemporadas = 0;
    series.forEach(function (serie) { return totalTemporadas = totalTemporadas + serie.temporadas; });
    return totalTemporadas / series.length;
}
