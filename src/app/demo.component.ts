import { Component } from "@angular/core";
import { ChartErrorEvent } from "./modules/countries-map/chart-events.interface";

@Component({
  selector: "demo-content",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"],
})
export class DemoComponent {
  public mapData = {};

  errorLoading = null;
  mapError(error: ChartErrorEvent) {
    this.errorLoading = error;
  }
  mapReady() {
    console.log("Map ready");
  }
}
