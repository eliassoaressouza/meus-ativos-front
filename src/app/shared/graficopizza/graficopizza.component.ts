import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
declare var google: any;
@Component({
  selector: "graficopizza",
  templateUrl: "./graficopizza.component.html",
  styleUrls: ["./graficopizza.component.css"],
})
export class GraficopizzaComponent implements OnInit {
  @ViewChild("pieChart", { static: false }) pieChart: ElementRef;
  constructor() {}

  @Input() datain = [
    ["classificacao", "valor"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  ngOnInit() {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(this.drawChart);
  }
  drawChart = () => {
    const data = google.visualization.arrayToDataTable(JSON.parse(JSON.stringify(this.datain)));
    const options = {
      title: "Classificacao",
      legend: { position: "top" },
      dataType: "json",
    };
    const chart = new google.visualization.PieChart(
      this.pieChart.nativeElement
    );
    chart.draw(data, options);
  };
}
